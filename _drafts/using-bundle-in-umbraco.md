---
title: Using ASP.NET bundle in Umbraco
author: Quang Phan
tags: [umbraco]
---

It's easy to setup bundle in Umbraco thru 5 steps

### 1. Install Optimization packages

Open package manager console then enter the script below to install the package:

```
install-package Microsoft.AspNet.Web.Optimization
```

### 2. Add register bundles

We should follow ASP.NET MVC pattern that create a `BundleConfig` class inside `App_Start` folder:

> App_Start is not an "ASP.NET folder", it's just a convention that we should put in all classes which run in startup.

<script src="https://gist.github.com/oclockvn/735178bf67ca70ba0f97b14ae3436d2d.js"></script>

> Don't forget to using namespace `using System.Web.Optimization;`

### 3. Call the bundle registration

Normally all startup codes are called in `Global.asax.cs`, but in Umbraco we don't have one and you'd better not create one. There is a better way offered by Umbraco that is create a class inherit from `IApplicationEventHandler`:

<script src="https://gist.github.com/oclockvn/07fbd7c91208fc7b69d5e3ed53734529.js"></script>

You then have to implement 3 methods, but the one you should pay attention at is `OnApplicationStarting`, here we can call the bundle registration code.

### 4. Render bundle in your layout

Open up your layout, say `Layout.cshtml`

<script src="https://gist.github.com/oclockvn/c1401ebb5fd9934306cc84d4bddaeef2.js"></script>

There might be an error kind of you're missing some namespace. To fix that open up the `Web.config` inside `Views` folder and add tag:

```
<add namespace="System.Web.Optimization" />
```

> For production, don't forget to remove attribute `debug="true"` or set it to false in `Web.config`

```
<system.web>
  <compilation debug="false">...</compilation>
</system.web>
```

### 5. Tell Umbraco about your virtual path

Open up `Web.config` and search for `umbracoReservedPaths` config, then append the value `~/bundles/` to it.

```
<add key="umbracoReservedPaths" value="~/umbraco,~/install/,~/bundles/" />
```

That's all.
