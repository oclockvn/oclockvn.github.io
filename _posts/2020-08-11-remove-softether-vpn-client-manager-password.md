---
title: Remove Softether vpn client manager Administrator password
author: Quang Phan
tags: [vpn]
description: Remove SoftEther VPN client manager Administrator password
---

I had some things need to setup vpn and I chose [SoftEther vpn](https://www.softether.org/). I will not mention the reason about why I chose it but the stupid issue I faced when start in for the first time.

![It requires password](\assets\img\softether-vpn.png)

WTF? It requires password for the first time even I didn't do anything? I google for few minutes but still got nothing.

So I decided to take a look at the installation folder and noticed this file:

```
"C:\Program Files\SoftEther VPN Client\vpn_client.config"
```

I cannot open it with normal user permission so I opened notepad under admin role, you will see something like this:

```
declare root
{
	...
	byte EncryptedPassword +WzqGYrR3VYXrAhKPZLGEHcIwO8=
	bool HideVPNGateServiceMessage false

	declare AccountDatabase
	{
		declare Account0
		{
			...

			declare ClientAuth
			{
				uint AuthType 1
				byte HashedPassword AAAAAAAAAAAAAAAAAAAAAAAAAAA=
				string Username secure
			}
			declare ClientOption
			{
				...
			}
		}
		declare Account1
		{
			...

			declare ClientAuth
			{
				uint AuthType 1
				byte HashedPassword NM9pzs8NzSC+N8hy1n6YWf6BkS8=
				string Username sensor
			}
		}
	}
}
```

You know what I'm gonna do right? I deleted 3 lines that contain the `Password`, save it and yeah, it works.

I don't know if there are any security issues with that or not LOL, but screw it, just let me do my job first.

(pstt, please let me know if any security issues with that LOL)
