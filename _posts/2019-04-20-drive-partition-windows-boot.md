---
title: From Drive partition to Windows boot mode.
author: ['Quang Phan']
tags: ['tip', 'windows']
description: windows boot mode. drive partition.
---

**MBR**: Master Boot Record  
**GPT**: Guid Partition Table

### 1. Convert between 2 types when install Windows

1. [Open the cmd gg this](https://www.google.com/search?q=open+command+prompt+windows+setup) or press the `Shift + F10` 

2. Enter disk part

```
diskpart
```

3\. List all disks

```
list disk
```

Pay attention at the column `Gpt`, if it has a `*` then it's Gpt.

4\. Select the disk you want to convert

```
select disk 0 # or whatever disk number you want in the list
```

5\. Clear the disk (required)

Make sure you backedup your data, otherwise they'll gone.

```
clean
```

6\. Convert to MBR or vise versa

```
convert mbr # to convert from Gpt -> Mbr
convert gpt # to convert from Mgr -> Gpt
```

All done. You can exit the cmd to continue with your setup.

### 2. Legacy vs UEFI

Read more at [this](https://www.google.com/search?q=legacy+vs+uefi).

So basically, if you want to use UEFI mode, then your drive must be a `Gpt` partition.

Boot mode | Partition
--- | ---
UEFI | GPT
Legacy/Bios | MBR

### 3. Create UEFI usb boot

More at [Creating Windows UEFI Boot-Stick in Windows](https://www.thomas-krenn.com/en/wiki/Creating_Windows_UEFI_Boot-Stick_in_Windows)

> I recommended Rufus
