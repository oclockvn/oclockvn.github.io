---
title: Fix winget could not update packages
tags: ["windows", "winget"]
author: Quang Phan
description: Fix winget could not update packages
---

## Issues

You may get following issues when updating winget packages:

- Progress gets cancelled:

```
C:\Windows\System32>winget source update
Updating all sources...
Updating source: msstore...
Done
Updating source: winget...
Cancelled
```

- Failed to open url:

```
An unexpected error occurred while executing the command:
InternetOpenUrl() failed.
0x80072efd : unknown error
```

## Solutions

> For following steps, you better run the commands in administrator mode

- First of all, try to update winget to the latest version, you can download from Microsoft Store or use below command:

```
winget install "App Installer" -s msstore --force
```

Check the [discussion](https://github.com/microsoft/winget-cli/issues/3652) for more ways.

- (Optional) Next, make sure winget get sources are up-to-date with command:

```
winget source update --force
```

- Finally, append this line to your host file (it's located at `C:\Windows\System32\drivers\etc\host`):

```
152.195.19.97 cdn.winget.microsoft.com
```

Now it should be fine to run winget commands.
