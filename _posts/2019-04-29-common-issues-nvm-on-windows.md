---
title: common issues when using nvm on Windows
tags: [windows]
author: Quang Phan
description: common issues with nvm on windows
---

[nvm](https://github.com/coreybutler/nvm-windows) node version manager for Windows

### 1. Install notes

You should:

1\. Uninstall nodejs first  
2\. Delete the node install folder Program Files\nodejs and npm folder %AppData%\npm

> %AppData% usually is C:\Users\<username>\AppData\Roaming

### 2. Install nvm

Download link above.

You may face the error:

```
exit status 1: 'C:\Users\<username>' is not recognized as an internal or external command, operable program or batch file.
```

that's because the nvm's root contains space (i.e. "Program Files"). The solution is set nvm's root to an non-space folder i.e `C:\nodejs\nvm`

```
cd C:
mkdir nodejs
cd nodejs
mkdir nvm
nvm root C:\nodejs\nvm
```

After moving the root directory, you may face the issue:

```
exec: "C:\\nodejs\\nvm\\elevate.cmd": file does not exist
```

To fix this, just copy all the files from old root to new root.

Your old root might be:

```
C:\Users\<username>\AppData\Roaming\nvm
# or 
%AppData%\nvm
```

Done! You're good to go.
