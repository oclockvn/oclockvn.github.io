---
title: cmder và "chiêu" khi làm việc với git trên Windows
description: tips working with git on windows with cmder
author: Quang Phan
tags: [windows, git, cmder]
---

Bạn thường xuyên sử dụng git? và bạn thích command line hơn GUI? dưới đây là 1 số "chiêu" giúp bạn tăng tốc độ khi làm việc với git **trên Windows**

### Quickly, create branch

Bạn thường xuyên lấy title của issue làm branch? okay mình cũng thường xuyên làm vậy 😁, vậy nên mình viết cái [gcb](https://develoveper-vn.github.io/gcb/) này để đỡ tốn thời gian typing.

> gcb = git checkout -b

### Cmder is your best friend

[cmder](https://cmder.net/) is a **Portable console emulator for Windows**, và nếu bạn chưa biết, cmder như là 1 phiên bản cải tiến của cmd trên windows với nhiều chức năng mở rộng như multiple tabs, copy & paste Ctrl C Ctrl V, alias, ...

okay, cũng bắt đầu với 1 số "chiêu" dưới đây hen!

### 1. Cmder context menu

đây là chiêu dùng để open cmder ở folder hiện tại bằng context menu.

bạn mở cmd as admin tại folder chứa cmder và execute lệnh bên dưới:

```bash
cmder.exe /register ALL
```

> ngoài ra bạn vẫn có thể xài command `cmder` trên address bar nếu như quen với cách đó.

### 2. Cmder tabs

y hệt chrome, `Ctrl + T ` để mở tab mới, `Ctrl + W` để đóng tab, `Ctrl + {number}` để switch tab.

![cmder tab](\assets\img\git-tips\cmder-tabs.jpg)

### 3. Cmder alias

![cmder tab](\assets\img\git-tips\cmder-aliases.jpg)

dùng `alias` để show all aliases và `alias {alias}={command}` để set alias. Sử dụng `alias /reload` để "kích hoạt" alias mà không cần đóng và mở lại cmder.

ví dụ bạn muốn tạo alias cho checkout command:

```
alias gc=git checkout $*
```

`$*` dùng để pass toàn bộ option phía sau alias vào command. Nếu không có nó thì nếu bạn type:

```bash
gc -b create-my-new-branch
```

thì cmder chỉ thực hiện tới `gc` mà thôi.

### 4. Cmder alias for git

dưới đây là 1 số alias mà mình set cho git:

```bash
ga=git add .
gb=git branch $*
gc=git checkout $*
gcm=git commit -m $*
gf=git fetch $*
gl=git log --oneline --all --graph --decorate  $*
gm=git merge $*
gp=git pull $*
gpm=git pull origin master
gpo=git pull origin $*
gps=git push $*
gpso=git push origin $*
gs=git status
gst=git stash save -u $*
```

bạn cũng có thể type trực tiếp vào alias config tại folder chứa cmder:

```
\path\to\cmder\config\user_aliases.cmd
```

okay, vậy thử xem nó nhanh hơn thế nào trong TH sau đây nhé: dừng toàn bộ công việc hiện tại lại và hotfix 1 bug trên prod (giả sử master là prod).

flow sẽ là:

0. check status: `git status` (mình hay làm z 😉)
1. stash (including untracked files): `git stash -u`  
2. checkout master: `git checkout master`
3. tạo nhánh hotfix: `git checkout -b hotfix\typo`
4. fix bug then commit: `git add . && git commit -m "fix typo at ..."`
5. push to remote: `git push origin hotfix\typo`

nếu alias, tất nhiên flow cũng sẽ là vậy 🤣, chỉ có điều bạn sẽ gõ nhanh hơn mà thôi LOL:

0. `gs`
1. `gst`
2. `gc master`
3. `gc -b hotfix/typo`
4. `ga && gcm "..."`
5. `gpso hotfix/typo`

### 5. Tips khác

- find branch: `gb | grep "some keyword"`
- copy current branch: `gb --show-current | clip`. Bạn có thể alias `--show-current` để nhanh hơn.

Bạn hãy tự khám phá và tìm thêm các cách cho mình he :)

### Ngoài lề

1. cmder khá tốt nhưng tốc độ khởi động chậm của nó là 1 vấn đề. Hy vọng sẽ sớm được cải thiện, hoặc new [terminal](https://github.com/microsoft/terminal) sẽ làm tốt hơn cmder.
2. Dạo này giang hồ thường xuyên blame các nhân vật trên internet về việc nói đan xen tiếng Anh và tiếng Việt. Bản thân mình cũng không thích việc đó và cũng không ủng hộ việc nói đan xen như vậy, nhưng có thể thông cảm được. Trong các bài viết của mình thường xuyên viết đan xen Việt - Anh, điều này không hẳn là thói quen mà là những từ ngữ đó khá quen thuộc với giới lập trình viên, và có thể dùng từ tiếng Anh cũng dễ hiểu hơn so với dịch ra tiếng Việt nữa :)
