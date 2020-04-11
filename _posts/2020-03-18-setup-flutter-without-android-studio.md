---
title: Setup Flutter without Android Studio
tags: ["flutter"]
description: Setup Flutter without Android Studio
---

### Environment

- Windows 10
- Target folder: `D:` (use any folder that you want)

### 1. Install flutter

```
D:
mkdir flutter
cd flutter
git clone https://github.com/flutter/flutter.git -b stable
```

Open environtment setup and add to Path:

```
D:\flutter\bin
```

Restart terminal to take affect.

#### If you want to upgrade, run:

```
flutter upgrade
```

### 2. Install JDK

Download [jdk](https://www.oracle.com/java/technologies/javase-jdk13-downloads.html) then add `JAVA_HOME` variable:

```
C:\Program Files\Java\jdk1.8.0_211 # replace with yours
```

### 3. Install Android SDK

Download at [https://developer.android.com/studio/#command-tools](https://developer.android.com/studio/#command-tools)

then extract to `D:\android\sdk\`, there will be a `tools` folder, set 2 variables:

- `ANDROID_HOME` to `D:\android\sdk`
- `ANDROID_SDK_ROOT` to `D:\android\sdk\tools`

### 4. Download Android SDK

```
sdkmanager "system-images;android-28;default;x86_64"
sdkmanager "platform-tools"
sdkmanager "platforms;android-28"
sdkmanager "build-tools;28.0.3"
sdkmanager emulator
```

Accept the licenses:

```
sdkmanager --licenses
```

### 5. Config flutter

We need to add these variables to `Path`:

```
D:\Android\sdk\tools
D:\Android\sdk\tools\bin
D:\Android\sdk\platform-tools
```

Configure android sdk:

```
flutter config --android-sdk D:\android\sdk
```

### 6. Create the Emulator

```
avdmanager -s create avd -n nexus -k "system-images;android-28;default;x86_64"
```

Run the emulator:

```
flutter emulators --launch nexus
```

Other commands:

- Create an emulator based on real device features: `avdmanager -s create avd -n latest -k "system-images;android-28;default;x86_64" -d 30`
- Show devide id (instead of 30): `avdmanager list device`
- Delete existed virtual emulator: `avdmanager delete avd -n nexus`
- List all already created virtual emulators: `avdmanager list avd`

In case you encounter issue, check this [guide](https://github.com/oclockvn/oclockvn.github.io/issues/34)

### 7. Check all issues

```
flutter doctor -v
```
