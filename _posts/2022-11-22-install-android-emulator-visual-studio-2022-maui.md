---
title: Visual Studio 2022 Installing Android Emulatorv31.2.10 "Specified argument was out of the range of valid values"
author: Quang Phan
tags: [vscode]
description: Visual Studio 2022 Installing Android Emulatorv31.2.10 "Specified argument was out of the range of valid values"
---

### Stackoverflow question

[Visual Studio 2022 Xamarin Android SDK installing Emulator "Operation Failed: Installing Android Emulatorv31.2.10"](https://stackoverflow.com/questions/74375285/visual-studio-2022-xamarin-android-sdk-installing-emulator-operation-failed-in)

### Solution

[https://stackoverflow.com/a/74491669/3649637](https://stackoverflow.com/a/74491669/3649637)

You need this component installed to install any emulator, but VS keeps saying "Specified argument was out of the range of valid values". Below are steps to fix that:

![Sdkmanager](\assets\img\sdkmanager.png)

1. Set full control permission to your local user to the Android folder

![Android full control](\assets\img\android-permission.png)

then uncheck "Read-only" checkbox in the General tab.

2. Accept all licenses

Open cmd at (default) folder `C:\Program Files (x86)\Android\android-sdk\cmdline-tools\7.0\bin`, type this to accept all licenses:

```
sdkmanager.bat --licenses
```

3. Install the emulator

still at that folder, type this:

```
sdkmanager.bat --install emulator
```

After this step, open sdkmanager in Visual Studio, you'll see Android Emulator component is installed. Now you can open device manager to install new emulator.
