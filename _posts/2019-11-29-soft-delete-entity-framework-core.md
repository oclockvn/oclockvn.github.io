---
title: Soft delete with entity framework core
tags: ["ef core"]
---

Soft delete means mark it as deleted, don't completely remove it from database (db) is a common way to achieve the "delete - restore" pattern. It's very easy to do that in Entity Framework Core, combine with repository pattern. Let's see how in this post.

### Models

Say we have a simple database structure like below:

<script src="https://gist.github.com/oclockvn/c3054056ab3147bdcc67858f98c5e175.js"></script>

here we have 2 tables and One to Many relationship. You can leave them and let EF handle the relationship for you as it uses naming convention.

The db context should simple as well:

<script src="https://gist.github.com/oclockvn/9bafdb51ef2f3ebd779195c133bd2c12.js"></script>

### Enable soft delete entity

Okay now let's add soft delete to our entity. I can add to each entity a property but I won't, let's keep it clean and DRY. So I'll create a base entity:

<script src="https://gist.github.com/oclockvn/d425eb2099e5d6d555fe6887abb9142d.js"></script>

That's all. You can now imagine that if `DeletedAt` not null then it's deleted. You can also use bool or whatever fit your business.

### Soft delete query

Without doing anything else, you can query entities not deleted by a simple condition:

<script src="https://gist.github.com/oclockvn/e4262c7fffb3bbb68431d7e4e8bb834b.js"></script>

but things getting complicated as you have to check `DeletedAt` prop all the time. See a complex long query below to just achieve a simple requirement - get product in a specific category:

<script src="https://gist.github.com/oclockvn/c9d452374d5d07b815257bc94d6d2870.js"></script>

LOL, too much query. But don't worry, EF has a super cool feature to help you query as normal. Let's see how.

I'll create entity configuration for all entity:

<script src="https://gist.github.com/oclockvn/42e704c8da91c0b40bbacfb0ee15b011.js"></script>

`IEntityTypeConfiguration` is new interface in EF Core to build fluent configuration for entity. With `HasQueryFilter` EF with generates query with a default filter:

<script src="https://gist.github.com/oclockvn/5fb4ea3f34b2dc042faeb80c264a94e6.js"></script>

To apply this config, add it in `OnModelCreating` in db context:

<script src="https://gist.github.com/oclockvn/2618a7ee71db92c71ce2d5da50bc3b85.js"></script>

now your query is much more simple:

<script src="https://gist.github.com/oclockvn/a39f26d3af3f7fcdd9315e11338af118.js"></script>

### How to soft delete?

Just set `DeletedAt` not null, so we no longer use delete query anymore:

<script src="https://gist.github.com/oclockvn/a1ad16b019820a7b3436abc005e04647.js"></script>

That's all. In next post I'll show you more things like how to unapply the default filter, combining with repository pattern for less code..etc. Stay tuned.

P/S: I'll translate into Vietnamese soon, or help me by create a PR at my [blog](https://github.com/oclockvn/oclockvn.github.io). Thank you.
