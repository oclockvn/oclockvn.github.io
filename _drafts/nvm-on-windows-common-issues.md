---
title: common issues when using nvm on Windows
tags: [windows]
author: Quang Phan
---

[nvm](https://github.com/coreybutler/nvm-windows) node version manager for Windows

1. Install notes

You should:

1\. Uninstall nodejs first
2\. Delete the node install folder Program Files\nodejs and npm folder %AppData%\npm

> %AppData% usually is C:\Users\<username>\AppData\Roaming

2. Install nvm

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

Done! You're good to go.
