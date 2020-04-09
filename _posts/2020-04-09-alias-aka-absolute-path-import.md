---
title: Alias A.K.A absolute path import
tags: ["js"]
description: Setup alias for your nextjs/jest project
---

Surely, you saw a lot of this:

```js
import SomeComponent from "../../../../src/components/MyComponent";
```

Do you want to make it shorter like this:

```js
import SomeComponent from "@/src/components/MyComponent";
```

Then you need to config the `@` as an alias.

### 1. Setup for nextjs
Open your next.config.js and add this line:

```js
// const path = require("path");

webpack(config, options) {
  // other configs
  config.resolve.alias["@"] = path.resolve(__dirname); 
}
```

You might want to tell your editor (vscode) to recognize the path too, open your `tsconfig.json` and add this:

```json
"paths": {
  "@/*": ["./*"]
}
```

> `tsconfig.json` should locate at the same the `package.json`'s directory.

So, if you have a structure like this:

```
/package.json
/tsconfig.json
/src
  /core
    store.js
  /components
    /common
      /header/header.js
```

then in the `header`, you can import the store like this:

```js
import store from "@/src/core/store";
``` 

### 2. Setup for jest

If you're using jest for testing, it might not know the absolute path you configured above, so we have to config jest as well. The configuration file depending on your setup, either in `package.json` or `jest.config.js`. The sample below applies for `jest.config.js`

```js
module.exports = {
  moduleNameMapper: {
    "^@\/(.*)$": "<rootDir>/$1"
  }
};
```

Okay, so the mapper config will replace any module name with the pattern `^@\/(.*)$` by the replacement `<rootDir>/$1`, in which:

- `$1` will be replaced in the `(*)` group in the search pattern
- `<rootDir>` is a special config in jest, it's same as `package.json` directory

`// todo: config for other libraries/frameworks`
