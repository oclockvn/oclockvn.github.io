---
title: Reset password of Windows Subsystem For Linux user
description: Reset password of Windows Subsystem For Linux user
author: Quang Phan
tags: [wsl, linux]
---

### Do you still remember your password?

Okay, let check by this simple trick: execute sudo command like

```
sudo cat /etc/shadow
```

then you have to enter your password, if not correct then follow steps below.

### Check your installed version of Ubuntu

> I'm using Ubuntu in this post, for other distro it'a all the same (gg for more details)

by go to 

```
%userprofile%\AppData\Local\Microsoft\WindowsApps
```

or exec `dir` command:

```bash
dir %userprofile%\AppData\Local\Microsoft\WindowsApps
```

will get this sort of result:

```
 Volume in drive C has no label.
 Volume Serial Number is F868-A53E

 Directory of C:\Users\xxx\AppData\Local\Microsoft\WindowsApps

07/05/2019  10:15 PM    <DIR>          Backup
...
07/26/2019  11:13 PM                 0 ubuntu1804.exe
               6 File(s)              0 bytes
               6 Dir(s)  71,374,589,952 bytes free

```

if there is a `ubuntu1804.exe` then use the `ubuntu1804` command, `ubuntu.exe` then `ubuntu`, etc.

### Reset user password

#### 1. Change default user to root

open cmd and run this command:

```bash
ubuntu1804 config --default-user root
```

> again, my distro version is ubuntu1804

#### 2. Reset password

launch your ubuntu and exec the command to reset the user's password, say user **demo**

```bash
passwd demo
```

enter your new password

#### 3. Change default user back

exec this command:

```bash
ubuntu config --default-user <username>
```

in this case the username is **demo**

```bash
ubuntu config --default-user demo
```

after that, you can verify your password with command `sudo cat /etc/shadow` again.

That's all.
