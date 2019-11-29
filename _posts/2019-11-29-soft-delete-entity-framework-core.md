---
title: Soft delete with entity framework core
tags: ["ef core"]
---

Soft delete means mark it as deleted, don't completely remove it from database (db) is a common way to achieve the "delete - restore" pattern. It's very easy to do that in Entity Framework Core, combine with repository pattern. Let's see how in this post.

### Models

Say we have a simple database structure like below:

```cs
public class Category
{
    public int Id { get; set; }
    public int Name { get; set; }

    public ICollection<Product> Products { get; set; }
}

public class Product
{
    public int Id { get; set; }
    public string Name { get; set; }
    public decimal Price { get; set; }

    public int CategoryId { get; set; }
    public Category Category { get; set; }
}
```

here we have 2 tables and One to Many relationship. You can leave them and let EF handle the relationship for you as it uses naming convention.

The db context should simple as well:

```cs
public class ApplicationDbContext : DbContext
{
    public DbSet<Product> Products { get; set; }
    public DbSet<Category> Categories { get; set; }

    // skip constructor for simplicity
}
```

### Enable soft delete entity

Okay now let's add soft delete to our entity. I can add to each entity a property but I won't, let's keep it clean and DRY. So I'll create a base entity:

```cs
public class BaseEntity
{
    public int Id { get; set; }
    public DateTime? DeletedAt { get; set; } // enable soft delete
}

public class Category : BaseEntity
{
    // remove Id from this class 
    // as we've had it in base entity already
}

public class Product : BaseEntity
{
    // remove Id
}
```

That's all. You can now imagine that if `DeletedAt` not null then it's deleted. You can also use bool or whatever fit your business.

### Soft delete query

Without doing anything else, you can query entities not deleted by a simple condition:

```cs
public class ProductService
{
    private readonly ApplicationDbContext db;

    public ProductService(ApplicationDbContext db)
    {
        this.db = db;
    }

    public async Task<List<Product>> GetProductsAsync(decimal fromPrice)
    {
        return await db.Products
            .Where(x => x.DeletedAt == null && x.Price >= fromPrice)
            .ToListAsync();
    }
}
```

but things getting complicated as you have to check `DeletedAt` prop all the time. See a complex long query below to just achieve a simple requirement - get product in a specific category:

```cs
public async Task<List<Product>> GetProductInCategoryAsync(string categoryName)
{
    // a complex query to show you how complicated thing getting
    return await db.Categories
        .Include(c => c.Products)
        .Where(c => c.DeletedAt == null && c.Name == categoryName)
        .SelectMany(x => x.Products)
        .Where(p => p.DeletedAt == null)
        .ToListAsync();

    // or a simpler solution
    // await db.Products
    //     .Include(p => p.Category)
    //     .Where(p => p.DeletedAt == null && 
    //          x.Category.Deleted == null && 
    //          x.Category.Name == categoryName)
    //     .ToListAsync();
}
```

LOL, too much query. But don't worry, EF has a super cool feature to help you query as normal. Let's see how.

I'll create entity configuration for all entity:

```cs
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

public class ProductConfiguration : IEntityTypeConfiguration<Product>
{
    public void Configure(EntityTypeBuilder<Product> builder)
    {
        // default query
        builder.HasQueryFilter(x => x.DeletedAt == null);

        // add more config, for example the relationship
        builder.HasOne(x => x.Category)
            .WithMany(x => x.Products)
            .HasForeignKey(x => x.CategoryId);
    }
}
```

`IEntityTypeConfiguration` is new interface in EF Core to build fluent configuration for entity. With `HasQueryFilter` EF with generates query with a default filter:

```sql
SELECT TOP(1) [x].[Id], [x].[Name]
FROM [Product] AS [x]
WHERE [x].[DeletedAt] IS NULL AND ([x].[Id] = @__id_0) -- deleted at is null
ORDER BY [x].[Id]
```

To apply this config, add it in `OnModelCreating` in db context:

```cs
public class ApplicationDbContext : DbContext
{
    public DbSet<Product> Products { get; set; }
    public DbSet<Category> Categories { get; set; }

    // override model creating and apply configuration here
    protected override void OnModelCreating(ModelBuilder builder)
    {
        builder.ApplyConfiguration(new ProductConfiguration());
    }
}
```

now your query is much more simple:

```cs
public async Task<List<Product>> GetProducts...Async(string categoryName)
{
    return await db.Products
        .Include(p => p.Category)
        .Where(p => /*p.DeletedAt == null && x.Category.Deleted == null &&*/ x.Category.Name == categoryName) // no need to check DeletedAt
        .ToListAsync();
}
```

### How to soft delete?

Just set `DeletedAt` not null, so we no longer use delete query anymore:

```cs
public class ProductService
{
    private readonly ApplicationDbContext db;

    public async Task DeleteProduct(int productId)
    {
        var product = db.Products.Find(productId);

        product.DeletedAt = DateTime.Now; // just update the deleted at
        await db.SaveChangesAsync();
    }
}
```

That's all. In next post I'll show you more things like how to unapply the default filter, combining with repository pattern for less code..etc. Stay tuned.

P/S: I'll translate into Vietnamese soon, or help me by create a PR at my [blog](https://github.com/oclockvn/oclockvn.github.io). Thank you.
