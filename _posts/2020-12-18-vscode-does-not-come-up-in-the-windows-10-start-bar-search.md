---
title: Visual Studio Code doesn't come up in the Windows 10 start bar search
author: Quang Phan
tags: [vscode]
description: Visual Studio Code doesn't come up in the Windows 10 start bar search
---

Solution: Add vscode to Start Menu folder.

### Why does this happen?

Maybe because one of these:

- When you setup vscode, you didn't choose the option "Add to Start Menu"
- Your search indexer suck (maybe because you excluded AppData from the search index)
- Your computer suck
- I don't know 🤣

### Solutions

- Reinstall vscode with "Add to Start Menu" selected
- Buy another computer LOL
- Or, just add vscode into start menu folder, see how to do that below

### Add vscode to start menu folder

This works for everything, so if you want to have any programs show up in start menu, or you want to able to search it in search, do this (video at the end).

1. Open the start menu folder

Normally it's located in `%appdata%\Microsoft\Windows\Start Menu\Programs`, so just copy and paste it into Windows Run (Windows + R)

2. Add shortcut to vscode

R-click > New > Shortcut and browse to vscode folder, normally it's located in `%appdata%\..\Local\Programs\Microsoft VS Code`, pick `Code.exe`, name it `Visual Studio Code` or whatever name you want.

3. All done, now you're able to search vscode in the start menu search.
