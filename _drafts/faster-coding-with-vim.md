
Bài viết dành cho những người chưa từng sử dụng vim!

### Động lực

1. Nếu bạn gõ 10 ngón thì bàn phím như 1 cánh tay nối dài hay 1 phần cơ thể của bạn vậy. Lúc đó bạn chỉ tập trung vào công việc thay vì tập trung vào nhìn bàn phím.
2. Bạn trông có vẻ cool ngầu hơn khi code mà không cần rê tay lên con chuột. Về tốc độ code và tốc độ làm việc thì tùy thuộc vào bạn rồi 😜

### Đôi nét

Tuy rằng đã biết tới [VIM](https://en.wikipedia.org/wiki/Vim_(text_editor)) khá lâu nhưng mình vẫn không sử dụng nó nhiều, 1 phần vì thấy nó khó xài, 1 phần cứ nghĩ phải dùng 1 cái editor củ chuối nào đó để code nên mình cũng hơi ẹ.

Không sử dụng VIM để code nhưng mình chắc các bạn chí ít cũng đã từng đụng tới nó, cụ thể như:
- git, chắc hẳn bạn đã từng google how to exit git message screen 😂
- [vimium](https://chrome.google.com/webstore/detail/vimium/dbepggeogbaibhgnhhndojpepiihcmeb?hl=en), thường thì những ai đã dùng vim thì mới dùng cái này, nhưng cũng có các trường hợp ngược lại. Nếu bạn chưa thử thì nó cũng đáng để thử lắm.
- gmail shortcuts, nếu bạn hay dùng shortcut của gmail thì bạn sẽ thấy kha khác các phím tắt giống với vim. Còn nếu chưa? hãy enable gmail shortcut liền đi

Đôi chút về bản thân để các bạn thấy sự tương đồng:
- Windows user
- visual studio, vscode, linqpad, chrome

### Setup

Các projects của mình đa số là chỉ cần dùng [vs](https://visualstudio.microsoft.com/) (.net) và [vscode](https://code.visualstudio.com/) (js/flutter/rails) nên không cần dùng nhiều IDE/editor. May thay là có vim extension cho cả 2:

- Ở visual studio thì cài đặt [vsvim](https://marketplace.visualstudio.com/items?itemName=JaredParMSFT.VsVim)
- Ở vscode thì xài [neovim](https://marketplace.visualstudio.com/items?itemName=asvetliakov.vscode-neovim) (NOTE: cái này nhanh hơn và không bị lag như [vim](https://marketplace.visualstudio.com/items?itemName=vscodevim.vim))
- Nếu xài [linqpad](https://www.linqpad.net/) thì có thể [enable vim mode](https://forum.linqpad.net/discussion/1427/vi-mode-experimental-build)
- Cài thêm [vimium](https://chrome.google.com/webstore/detail/vimium/dbepggeogbaibhgnhhndojpepiihcmeb?hl=en) ở chrome hoặc Edge để quen tay với vim shotcuts
- pin cái vim [cheat sheet](https://vim.rtorr.com/) này lại để tra cứu khi mới làm quen.

Như vậy là bạn đi đâu cũng thấy vim rồi đó.

### Luyện tập 1: Tập gõ 10 ngón!

Giai đoạn chán nản mà không phải ai cũng dễ vượt qua.

Mình không biết những người khác khi dùng vim thì họ có gõ 10 ngón hay không, nhưng bản thân mình ngay khi có ý định dùng vim thì mình đã tập thói quen gõ 10 ngón. Bạn có thể vào đầy https://typingclub.com/ hoặc đây https://www.typing.academy/ để luyện tập gõ 10 ngón trước, khi đó tốc độ xài vim của bạn sẽ nhanh hơn đáng kể.

Nếu bạn chưa từng gõ 10 ngón mà chỉ gõ theo thói quen, bạn cần 1 khoảng thời gian để cơ tay bạn quen dần. Mình đã quen dần với trong khoảng 3 tuần.

Trong thời gian làm quen, bạn hãy cố gắng gõ chính xác thay vì nhanh, đồng thời đặt tay đúng vị trí để khỏi bị sai sau khi tay đã quen (giống như khi bạn tập viết, 1 khi đã quen với cách cầm bút thì khó mà đổi được).

Đối với dev thì bàn tay sẽ hơi lệch qua 2 bên 1 chút so với gõ văn bản thông thường vì các phím `() [] ;' , . /`, do đó có thể bạn sẽ hơi mỏi tay trong giai đoạn đầu, nhưng hãy cố gắng đi vì sau đó cũng quen dần thôi.

Thực tế bạn không cần thiết phải sử dụng 10 ngón (mình chỉ dùng được 9 ngón do bàn tay trái đặt lệch qua 1 ô vì phải bấm shift thường xuyên) và có thể chỉnh sửa vị trí đặt tay sao cho mình cảm thấy thoải mái nhất. Tuy nhiên recommend là vẫn cố gắng theo standard thì hơn.

### Luyện tập 2: Làm quen với vim

Vim có rất nhiều lệnh, thực tế khi sử dụng thì mình chỉ dùng những lệnh cơ bản nhất của nó, đến khi có 1 nhu cầu nhất định thì bạn mới cần search và thực hành command cụ thể. Do đó hãy cứ bắt đầu bằng những thứ cơ bản trước:

- vim có 3 mode cơ bản là normal mode (bạn di chuyển con trỏ), edit mode (thêm text) và visual mode (mark text)

**Ở normal mode**: bạn có thể di chuyển cursor và mark text, cũng như yank (copy) và delete text
  - di chuyển bằng các phím `h, j, k, l` tương ứng với left ⬅, down ⬇, up ⬆, right ➡. Cũng như mọi người thì mình khuyên là nên dùng phím hjkl
- `a` để append, `i` để insert, `c` để change, `x` để xóa và `d` để xóa marked text (`a` và `i` sẽ chuyển từ normal mode sang edit mode)
- `y` để copy (yank) và `p` để dán (paste), `yy` để duplicate line
- `w` để go to next word, `e` để go to end of word, `b` để go back to start of word
- `^` để go to first charactor of sentense, `$` để go to last charator of sentense (giống regex)
- `gg` để di chuyển về đầu trang, `G` để di chuyển tới cuối trang
- `f` + {any charactor} để jump to that charactor, `t` + {charactor} để jump to before that charactor.

**Ở edit mode**: bạn gõ như bình thường và `esc` để quay lại normal mode.

**Chuyển sang visual mode** từ normal mode bằng `v` hoặc `V` (whole line)

Các command với file như `:q` (quit) hoặc `:w` (write) ... vì ít dùng nên bạn có thể tham khảo ở cheat sheet.

Bạn cũng cần 1 - 2 tuần để làm quen với những command này và sử dụng không cần suy nghĩ, sau đó bạn sẽ kết hợp được 1 cách tự nhiên các command với nhau cho dù bạn chưa đọc/học nó.

### Kết hợp các command

Điều thú vị ở vim là sau khi học 1 bạn sẽ biết 10. Chính vì lẽ đó mà người ta nói vim như 1 ngôn ngữ vậy. 1 số cách diễn đạt sẽ trở thành command kết hợp như:

- delete (`d`) a (`a`) word (`w`) --> `daw`
- change (`c`) inner (`i`) quote (`"`) --> `ci"`
- change inner tag --> `cit`
- delete 2 lines --> `d2j`
- go forward = `f` then go backward = `F`
- paste after = `p` then paste before = `P`
- delete (`d`) until end of line (`$`) --> `d$`
- mark (`V`) to end of page (`G`) --> `VG`

Ví dụ bạn có 1 đoạn code sau:

```js
|const post = "vim tutor";
```
con trỏ đang ở đầu dòng, bạn đang ở normal mode (default).

1. Bạn muốn đi tới cuối dòng: `$` (hoặc `g_` để không include endline)
2. Bạn muốn sửa text: `f"ci"` = go to " (`f"`) then change inner " (`ci"`), lúc đó bạn sẽ ở edit mode và con trỏ của bạn sẽ ở ngay `const post = "|";`

Có vẻ khó nhớ? Tất nhiên, bạn phải xài thì bạn sẽ không quên đâu, giống như khi đã biết cách đi xe đạp thì sẽ không bao giờ quên vậy.

Enjoy!
