---
title: Soft delete with entity framework core p2 - using repository
tags: ["ef core", "repository"]
---

In [part 1]({{ site.baseurl }}{% post_url 2019-11-29-soft-delete-entity-framework-core %}) you've already known how soft delete works, but querying with db context directly make the code duplicate alot. By combining with repository (repo), your code will be shorter and clearer. Let's see how it works in this post.

> This post might a bit advance for you as it requires you to have deep knowledge about EF (Core). But don't worry, I'll make it easy and translate into Vietnamese soon (LOL)

### First of all...

...you might not know how to update just few properties of an entity. Yes, you might not know. Let's check:

<script src="https://gist.github.com/oclockvn/452a0e14a24f2025b5277713f5207c28.js"></script>

Here I have 2 methods, `UpdateAsync` and `UpdateAllAsync`. The 2nd method works well as expected, but I have to pull all data from db. I expect that `UpdateAsync` update `Description` only but it does not. As it's new, I must set it as dirty by [modify the state](https://docs.microsoft.com/en-us/dotnet/api/microsoft.entityframeworkcore.entitystate?view=efcore-3.1), then EF Core mark all properties dirty then update them all:

<script src="https://gist.github.com/oclockvn/8fa702993ac2e1cdfbb0ffe6dfe2fa0b.js"></script>

So how can I update just few properties?

It's easy, instead of set whole entity dirty, I just set few properties dirty. Let's see a simple version of my repository:

<script src="https://gist.github.com/oclockvn/e3e9a3282f7838e2e9c49fcb338332c4.js"></script>

The line 18 `table.Attach(entity);` has an important role here. After attached, all properties are set as `UnChanged`, and then we modify given properties on demand.

And use it easily:

<script src="https://gist.github.com/oclockvn/7e15147ce7307188e6e2e9677c8ec28f.js"></script>

See the line 15? I tell repository to update just Description, and we have the output log as expected:

<script src="https://gist.github.com/oclockvn/23c393bc109f4b6d66906f6b8afbe8c4.js"></script>

### Soft delete is just DeletedAt update

Yes, so far we've known how to update just few properties. Then soft delete is just update DeletedAt. So let's modify our repository a little bit:

<script src="https://gist.github.com/oclockvn/552a0f86ff94e4bae1730e18d312c3f0.js"></script>

Just a case, what if I really want to delete it? No problem:

<script src="https://gist.github.com/oclockvn/eac5108e45d2e988c2c14b4e7d080704.js"></script>

It works the same way update does, let's see:

<script src="https://gist.github.com/oclockvn/5598e015806c9146c302b10d59f7d343.js"></script>

and the log is:

<script src="https://gist.github.com/oclockvn/f9b57db223e020ed2692dbe470d5a063.js"></script>

### What's next?

So far so good. We have a repository to perform update just some properties and soft delete entity without touching the db first.

Our repository is quite good but not perfect yet. Some issues we may encounter:

- We might use tracking behaviour (`QueryTrackingBehavior.TrackAll`) thus attaching entity already in dbset will cause exception.
- How to check if an entity is deleted, still living or none exist.
- How to restore an archived entity.

These things will be discussed in part 3. If you're still confused this part, I highly recommend you to take an action now, do it and test it yourself, or...check [the sample code here](https://github.com/oclockvn/repository-supports-soft-delete-sample).

_P/S: I still open for someone who wants to translate my posts into Vietnamese, you'll have chance to improve your skill under my mentor. Hit F12 for my contacts._