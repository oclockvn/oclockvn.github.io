---
title: "Fix ERROR in node_modules/rxjs/internal/types.d.ts(81,44): error TS1005: ';' expected."
tags: ["til"]
author: Quang Phan
description: node packages version error
---

### Error

The error is sort of:

```
ERROR in node_modules/rxjs/internal/types.d.ts(81,44): error TS1005: ';' expected.
node_modules/rxjs/internal/types.d.ts(81,74): error TS1005: ';' expected.
node_modules/rxjs/internal/types.d.ts(81,77): error TS1109: Expression expected.
```

### Solution

Open `package.json`

```
// old:
"rxjs": "^6.3.2"

// new:
"rxjs": "6.3.2" # removed the `^` mark
```

Or basically get rid of current version, upgrade to newer version will fix it.

Then update packages and run again!
