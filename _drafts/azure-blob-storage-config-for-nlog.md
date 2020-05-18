# Configure Azure Blob Storage for NLog in .Net Core

Instead of writing your logs to file system, you can config it to write to blog storage, here we use [AzureBlogStorage](https://github.com/JDetmar/NLog.Extensions.AzureStorage)

> Assume you have setup the packages already

```xml
<ItemGroup>
  <PackageReference Include="NLog" Version="4.7.0" />
  <PackageReference Include="NLog.Web.AspNetCore" Version="4.9.1" />
  <PackageReference Include="NLog.Extensions.AzureBlobStorage" Version="2.3.0" />
</ItemGroup>
```

A typical `nlog.config` for azure blob storage looks like below:

```xml
<?xml version="1.0" encoding="utf-8" ?>
<nlog xmlns="http://www.nlog-project.org/schemas/NLog.xsd"
      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
      autoReload="true"
      internalLogLevel="info"
      internalLogFile="C:\temp\fallback-log.txt"
      throwConfigExceptions="true">

  <extensions>
    <add assembly="NLog.Web.AspNetCore"/>
    <add assembly="NLog.Extensions.AzureBlobStorage" />
  </extensions>

  <targets async="true">
    <target
      xsi:type="AzureBlobStorage"
      name="azure"
      layout="${longdate:universalTime=true} ${level:uppercase=true} - ${logger}: ${message} ${exception:format=tostring}"
      connectionString="your-connection-string-goes-here"
      container="logs"
      blobName="${date:universalTime=true:format=yy-MM-dd}.log" />
  </targets>

  <rules>
    <logger name="*" minlevel="Trace" writeTo="azure" />
  </rules>

</nlog>
```

The only problem you might encounter while setting it up is the connection string. Here is the correct way:

1. Create the container coressponding in your `nlog.config`, in this case is `logs` container
2. Open Azure Storage Explorer then R-Click into the blob container > Copy Blob Container. It's a json object.
3. Copy the `connectionString`'s value from the info above.
4. Replace `&` by `&amp` in the connection string above, you can use notepad/notepad++ or whatever your fav editor to do that.
5. Put in the `connectionString` in the nlog config and you're good to go.

Notes:
- You can config the `internalLogFile` to catch the fallback log when your setting is incorrect
- By combining with `throwConfigExceptions` nlog will tell you if your setting has problem.

So if your connection string is:

```
SharedAccessSignature=sv=2019-02-02&ss=bt&srt=sco&sp=rwdlacu...
```

It should be:

```
SharedAccessSignature=sv=2019-02-02&amp;ss=bt&amp;srt=sco&amp;sp=rwdlacu...
```

EOD!
