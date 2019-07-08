---
title: Git useful commands
author: Quang Phan
tags: [git]
description: useful git commands for your daily coding
---

### 1. Show latest commit on branches

```
git branch -v
```

For remote branches, use `git branch -v -a`

### 2. Show top 3 latest commits

```
git log -3
```

some additionals option:

`--oneline` to show one line  
`--branches` to show remote branch (if available)

### 3. Show commits by author

```
git log -3 --author="some body"
```

### 4. Show all authors

```
git log | grep Author: | sort | uniq
git shortlog -snc
git shortlog -sne
```

### 5. Rename branch

```
# for current branch
git branch -m "new name"

# for other branches
git branch -m <old-name> <new-name>
```

> tip: `-m` is like move file command in file system
