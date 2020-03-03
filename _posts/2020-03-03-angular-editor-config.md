---
title: Angular editor config for vscode
author: [Quang Phan]
tags: [angular, editorconfig, vscode]
description: Setup vscode editor config for angular project
---

1. Install extension [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) and set as default formatter (R-click any files > Format Document With...)

2. Edit following settings:

```json
{
  "editor.formatOnSave": true,
  "html.format.wrapAttributes": "force-expand-multiline",
  "prettier.requireConfig": true
}
```

3. Add the `.prettierrc.json` placed in root dir

```json
{
  "trailingComma": "es5",
  "tabWidth": 2,
  "semi": true,
  "singleQuote": false,
  "bracketSpacing": true
}
```
