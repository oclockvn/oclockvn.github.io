---
title: Custom routes in asp.net mvc 5
tags: ["aspnet", "mvc5"]
author: Quang Phan
description: Easy steps to custom routing for asp.net mvc5 application
---

Here I'll show you the new way to custom route via attribute in 2 steps (the old way is to register multiple `mapRoute`)

#### 1. Enable attribute routes

```cs
// RouteConfig.cs

public static void RegisterRoutes(RouteCollection routes)
{
    routes.IgnoreRoute("{resource}.axd/{*pathInfo}");
    routes.MapMvcAttributeRoutes(); // 1. after the line above

    routes.MapRoute( /* your route here */ );
}
```

#### 2. using RouteAttribute

```cs
// using dependency
using System.Web.Mvc;

public class HomeController : Controller
{
    [Route("about-us")] // 2. put in the route you want
    public ActionResult About()
    {
        return View();
    }
}
```

after that, you can go to about view by url `/about-us` instead of `/Home/About`.

### Routing with parameters

by using the pattern `{param-name}` in route, you can get the value from url. So in the example above, I want to get the name on url `/about-us/quang`, then my route would be:

```cs
[Route("about-us/{name}")]
public ActionResult About(string name)
{
    return View(model: name); // specify name as a model
    // or return View("About", name);
}
```

then get the value from Controller in View:

```cs
@model string

<h2>Hi @Model.</h2>
```

![routing parameter](\assets\img\custom-route-aspnet-mvc5\routing-parameter.PNG)

Pay attention at route pattern `{name}` and parameter name `string name`, they must be the same, otherwise it won't work.

You can put as many levels of routing you want:

```cs
[Route("about-us"/{company}/{unit}/{name})]
public ActionResult About(string company, string unit, string name)
{
    ...
}
```

![multiple routing level](\assets\img\custom-route-aspnet-mvc5\multiple-routing-level.PNG)

### Routing prefix

Imagine you have a `ProductController` with many actions

```cs
public class ProductController : Controller
{
    [Route("product/all")]
    public ActionResult Index() { ... }

    [Route("product/get/{id}")]
    public ActionResult GetProduct() { ... }

    [Route("product/add")]
    public ActionResult AddProduct() {}

    // and many many more
}
```

with prefix, you can simplify your route like below:


```cs
[RoutePrefix("product")] // add this
public class ProductController : Controller
{
    [Route("all")] // no need product/
    public ActionResult Index() { ... }

    [Route("get/{id}")] // no need product/
    public ActionResult GetProduct() { ... }

    [Route("~/add-product")] // override the prefix with ~/ syntax
    public ActionResult AddProduct() {}
}
```

### Custom route for area

```cs
public static void RegisterRoutes(RouteCollection routes)
{
    routes.IgnoreRoute("{resource}.axd/{*pathInfo}");
    routes.MapMvcAttributeRoutes();

    // RegisterAllAreas must be called after MapMvcAttributeRoutes to achieve area custom route
    AreaRegistration.RegisterAllAreas();

    routes.MapRoute( /* your route here */ );
}
```

Of course you need to remove `RegisterAllAreas()` in your `global.asax` (if have)

### Some common issues on custom route

Q: **I don't know why my routes not working?**  
A: You might mix the web api routing with mvc routing.

Web Api need `System.Web.Http`:

```cs
using System.Web.Http; // web api dependency

public class MyApiController : ApiController
{
    [System.Web.Http.Route("index")]
    public Action Index() {}
}
```

while Mvc need `System.Web.Mvc`:

```cs
using System.Web.Mvc; // mvc dependency

public class MyController : Controller
{
    [System.Web.Mvc.Route("index")]
    public ActionResult Index() {}
}
```

<br/>

Q: **I cannot get the param value on url**  
A: You might not use the same param name with the route

```cs
[Route("about/{name"})]
public ActionResult About(string names) // it should be `name`, not `names`
{ }
```