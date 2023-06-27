---
title: Remember password for Remote Desktop Connection on Windows 11
author: Quang Phan
tags: [windows, remotedesktopconnection, rdp]
description: Remember password for remote desktop connection on Windows 11
---

### Issues

Windows 11 doesn't save password of your remote desktop connection even you check the save password checkbox

### Solution

You may found few articles on google, this is yet another one but I tried it and it works, so if it doesn't work for you, keep searching :)

Open cmd (better use powershell in Admin mode)

```
cmdkey /generic:TERMSRV/<targetname> /user:<username> /pass:<password>
```

for example:

```
cmdkey /generic:TERMSRV/12.23.32.21 /user:admin /pass:123456
```

**Notes**

I also did this one but not sure if it contributes to the above or not LOL

1. Open regedit
2. Go to key `Computer\HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\Lsa`
3. Find the key `DisableDomainCreds` and set it to `0`

That's all.
