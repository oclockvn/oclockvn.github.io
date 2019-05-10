---
title: RestSharp common issues
tags: ["C#"]
---

[RestSharp](https://github.com/restsharp/RestSharp) is a popular rest client in .net

Below are common issues I'd met during development.

1. Serialize/Deserialize wrong DateTime data

There was an issue [here](https://github.com/restsharp/RestSharp/issues/834)

Issue: submit data contains DateTime then get wrong data at api.

Submit:

```json
{
    "DateOfBirth": "1992-04-16T00:00:00"
}
```

Receive:

```cs
DateOfBirth.ToString("yyyy/MM/dd hh:mm:ss"); // = "1992/04/15 05:00:00"
```

Reason:

```cs
var request = new RestRequest(...);
request.AddJsonBody(data);
```

Fix:

```cs
req.AddParameter("application/json; charset=utf-8", JsonConvert.SerializeObject(data), ParameterType.RequestBody);
```

Here I use [Newtonsoft.Json](https://www.newtonsoft.com/json) to serialize the data