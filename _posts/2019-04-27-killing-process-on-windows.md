---
title: Killing processes on windows by specific port
tags: [window]
author: Quang Phan
description: killing process on windows by specific port
---

### Find process

Either using Task Manager > Performance > Open Resource Monitor > Network > Listening Ports

or using the [currport](http://www.nirsoft.net/utils/cports.html)

or manual by:

Start the cmd or powershell

```
netstat -aon | findstr "8080"
```

To kill a process with given pid:

```
taskkill /F /PID <pid>
```
