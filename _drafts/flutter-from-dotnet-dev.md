---
title: Giới thiệu flutter cho .net và angular developer
tags: ["flutter", ".net", "angular"]
description: Giới thiệu flutter cho .net và angular developer
---

Nếu bạn là 1 .net developer, đặc biệt nếu bạn đã làm qua angular hoặc knockoutjs (reactive programming or observable) thì bạn có 1 lợi thế rất lớn nếu muốn tìm hiểu [flutter](https://flutter.dev/). Nội dung bài viết này là giới thiệu flutter cho các .net dev thông qua các khái niệm tương đương (hoặc có thể là tương tự). Okay let's go.

Các bạn <span style="color: #fff">trẻ trâu</span> đừng vào nói là java/kotlin dev có lợi thế nhiều hơn nhé, đúng đấy nhưng...
![we do not do that here](\assets\img\flutter\we_dont_do_it_here.jpg)

### 1. C# vs Dart

Dart là ngôn ngữ dùng viết viết flutter, có khá nhiều khái niệm/implementation tương đương giữa Dart và C# khiến cho .net dev có 1 lợi thế lớn. Để xem chi tiết về Dart thì các bạn vào [doc](https://dart.dev/) của nó mà xem nhé, ở đây mình sẽ cho các bạn thấy sự giống nhau:

<script src="https://gist.github.com/oclockvn/a658ecca62434e561ffe4e6cad494ec1.js"></script>

<script src="https://gist.github.com/oclockvn/d814e2d8bea126a68bbb2421e0a448c4.js"></script>

Khá là giống đúng hông?! 😁 về mặt ngôn ngữ (đều là strongly type) thì Dart khá giống C#, cho nên rất dễ làm quen từ cú pháp, kiểu dữ liệu, method, ...

#### ⭐⭐⭐ Dart 2.0

Từ Dart 2.0 bạn không cần dùng keyword new để tạo instance nữa, cho nên thay vì `var product = new Product()` thì bạn có thể viết gọn lại là `var product = Product()`. Cũng khá gọn :)

okay tiếp 1 số cái hay gặp nữa nè.

### 2. Task vs Future

2 khái niệm tương tự nhau, hãy xem ví dụ này nhé:

Sử dụng `Task` trong C#:

<script src="https://gist.github.com/oclockvn/79211a2c2cb38f3790b8dab571812a1f.js"></script>

Còn đây là người anh em không cùng cha nhưng khác mẹ `Future` trong Dart:

<script src="https://gist.github.com/oclockvn/632ff181a2c9f67d541bed56e2242498.js"></script>

cú pháp có đôi chút khác nhưng không cần giải thích nhiều, easy hen 😉

### 3. Action/Func vs VoidCallback/Function

Tuy ngữ cảnh sử dụng có đôi chút khác biệt nhưng ý nghĩa thì tương tự nhau. Ở C# mình ít khi xài từ "callback" nên `VoidCallback` so sánh với `delegate` có lẽ sẽ hợp lý hơn. Còn Func với Function thì cũng khác ngữ cảnh sử dụng nhưng ý nghĩa thì cũng tương tự luôn. Xem ví dụ:

<script src="https://gist.github.com/oclockvn/19928664ddf55482094d9b4018cdd00b.js"></script>

Nếu bạn xem ví dụ dưới đây mà chưa hiểu, cứ thay `Function` thành `Func<Widget>` là sẽ hiểu 😎.
<script src="https://gist.github.com/oclockvn/a68465f5fdbd82f7042fe5e468238ca8.js"></script>

Bên dưới `return StreamBuilderObserver(onSuccess: () {})` là cách bạn truyền 1 Function vào trong Dart thôi.

Còn kha khá cái giống nhau nữa trong quá trình làm việc bạn sẽ thấy. Điều này dẫn tới việc nếu bạn là .net khá thì chỉ tốn vài giờ hoặc có thể là phút để làm được flutter thôi 🤣🤣🤣

### 4. State management. Stream. Reactive programming.

Nếu bạn chỉ làm backend thì khái niệm state management có lẽ không giải thích tương đương được, nhưng ngày nay chắc cũng kha khá anh em làm fullstack nên cũng không còn lạ lẫm gì nữa. Đối với ae chưa biết state là gì thì lên gg research cho lẹ thôi 😜.

Trong flutter thì có khá nhiều cách quản lý state, và mỗi người thích 1 phong cách riêng. Nội dung bài viết mình chỉ stick vào bloc pattern + rxdart vì nó giống rxjs, đều là implement của ReactiveX. Do đó ae angular sẽ cảm thấy familiar hơn.

Okay, vì đều là rx nên flutter sẽ có các khái niệm tương đương và cũng chẳng cần giải thích nữa:

- Subject (BehaviourSubject/ReplaySubject)
- Stream/Observable

> Í khoan khoan, ở đây rxdart là 1 package của flutter, cho nên mình đang nói về rxdart chứ không nói về Dart Stream nhé :)

Cùng xem 1 component cơ bản bên angular nhé:

<script src="https://gist.github.com/oclockvn/27bc73d78627d7e103bd1a9443d0a97d.js"></script>

không có gì nhiều để giải thích cả, load data khi component init thôi. Sau khi `this.products` có data thì view sẽ được update theo.

Còn đây là 1 flutter widget cơ bản:

<script src="https://gist.github.com/oclockvn/bcd9a36e0ee467649ebbe098ba57bf5a.js"></script>

Okay, lần này chắc phải giải thích nhiều rồi:
- Trong flutter, mọi UI components đề là widget
- Có 2 loại widget là stateful và stateless (có vẻ giống react nè)
- Nếu bạn muốn update UI khi có state thay đổi, bạn phải dùng stateful widget (giống react chứ còn cm gì nữa :v)
- Muốn thay đổi state, bạn dùng `setState(new-state)` để thay đổi (1) (ơ đệt, đang nói về react à :v)...
- hoặc là, có 1 số cách khác, ví dụ ở đây mình dùng `StreamBuilder` để lắng nghe thay đổi của `_productvm.products$`, khi đó StreamBuilder sẽ rebuild lại và ta có UI updated.

Vậy cái mình quan tâm ở đây chính là nội dung của `ProductViewModel`, nó có gì trong đó thì xem nè:

<script src="https://gist.github.com/oclockvn/297ae11c2dd604b4c02ebb7a1bc0d68a.js"></script>

mấu chốt ở đây là 1 cái BehaviorSubject để giữ current values và 1 cái Stream (read only) để UI subscribe changes, như vậy muốn thay đổi gì bạn cứ "send" value cho behavior subject, những thằng nào subscribe cái stream này (ở đây là StreamBuilder) sẽ được notify khi data changes.

### Kết

Định giới thiệu ngắn gọn mà viết cũng tè le nhiều quá LOL, hy vọng bài viết giúp ích được cho các ae .net muốn tìm hiểu flutter. Flutter community cũng khá lớn, ae lên mạng search cũng khá nhiều nên không cần lo lắng. Sắp tới cơ hội chắc cũng sẽ nhiều cho ae : ))
