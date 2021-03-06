---
title: "Build and publish a package to nuget"
tags: ["tip"]
author: Quang Phan
description: How to build and publish a nuget package
---

### 1. Of course you will need VS 

latest is the best

### 2. Then, install `nuget.exe` by  

2.1. Download nuget from [nuget](https://dist.nuget.org/win-x86-commandline/latest/nuget.exe)  
2.2. Saving nuget.exe to suitable folder  
2.3. Add to PATH environment variable like `C:\nuget`  

### 3. Of course you need a library to publish

It's a project, say `MyApp` (then there is a `MyApp.csproj` file at root directory)

### 4. Open cmd at root dir

for windows (of course) you can select the address bar (Alt + D) then type `cmd`

### 5. Run the command below to create nuspec file

```
nuget spec MyApp.csproj
```

### 6. Update that nuspec file to match your release notes

pay attention at some required fields such as 

- licenseUrl
- projectUrl
- iconUrl
- releaseNotes
- tags

### 7. Create package with command

```
nuget pack
```

for release mode, use additional param

```
nuget pack -Prop Configuration=Release
```

A package will be created, say `MyApp.1.0.0.nupkg`

### 8. Run command below to publish that package

```
nuget push <package>.nupkg <apikey> -Source https://api.nuget.org/v3/index.json
```

with  
 - \<package\> is your package name
 - \<apikey\> is your nuget api key

And done!
