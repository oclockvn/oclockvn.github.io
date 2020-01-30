---
title: Download video bằng tool ffmpeg trên Windows
tags: ["ffmpeg"]
---

> Đây là 1 bài chia sẻ vui!

Dành cho bạn nào chưa biết thì [ffmpeg](https://www.ffmpeg.org/) là cái tool xịn xò dùng để tải video ở những nơi...không thể tải bằng cách thông thường được. Hiện tại thì mình không còn dùng [IDM](https://www.internetdownloadmanager.com/) nữa (chắc hết thời sinh viên thì tư tưởng dùng đồ cr@ck cũng hết), coccoc thì download cũng khá ok nhưng 1 số trang thì có vẻ không download được.

Tool này dùng khá đơn giản, bạn download về không cần cài đặt, lấy được link m3u8 và dùng command của nó để tải (hơi rắc rối dành cho những bạn ít biết về công nghệ):

```
ffmpeg -i https://path-to/playlist.m3u8 -map p:2? -bsf:a aac_adtstoasc -vcodec copy -c copy -crf 50 "video.mp4"
```

Các tham số nếu muốn custom thì bạn chịu khó tham khảo tại [đây](http://ffmpeg.org/ffmpeg.html#Options), đáng chú ý là `-map p:2?`, tham khảo tại [đây](https://superuser.com/questions/624563/how-to-resize-a-video-to-make-it-smaller-with-ffmpeg)

### Cách lấy link m3u8

Đơn giản thôi, ví dụ như mình muốn download video [Black Clover Ep 01 - fptplay](https://fptplay.vn/xem-video/black-clover-59cb5f7e5583202636c1819f), các bước sẽ là:

1. Mở video lên
2. Mở developer tool lên (F12)
3. Chuyển qua tab network
4. Filter với từ khóa `playlist`
5. Copy > Copy link address

![fptplay playlist m3u8](\assets\img\small\fptplay-playlist.png)

Có link rồi bạn chỉ cần thay thế vào cái lệnh ở trên kia, nếu muốn lưu với tên khác thì đổi cái "video.mp4" thành tên bạn muốn. Copy cái đó dán vào command line (cmd) và enter. Thế là xong.

Hơi phiền tí là bạn phải run command ở nơi chứa cái tool ffmpeg, nếu không thì nó không biết lệnh `ffmpeg` là gì.

![ffmpeg tool](\assets\img\small\ffmpeg-tool.png)

Nếu bạn muốn run everywhere thì chịu khó gg cách add vào environment PATH.

Okay, phần thú vị đây. Nếu chỉ là download 1 2 tập thì như vậy là đủ. Nhưng với anime dài vài chục tập thì tốn cơm lắm 😂. Do đó vài chiêu sau đây giúp bạn ít tốn cơm hơn.

### 1. Dùng bookmarklet

Từ cái command phía trên, tạo 1 [bookmarklet](https://en.wikipedia.org/wiki/Bookmarklet) để tự động tạo command:

<script src="https://gist.github.com/oclockvn/5931721e4dc837d3a22ae790e3318bb2.js"></script>

Sau khi tạo bookmarklet, bạn copy link phim, bấm vào bookmark và nhập theo format:

```
filename playlist-link
```

với filename là tên output, với filename = 2 bạn sẽ có file output là E2.mp4, còn link thì bạn dán link vừa copy vào. Xem video để biết chi tiết:

<iframe width="1349" height="480" src="https://www.youtube.com/embed/vblCH1KD7CM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### 2. Dùng auto download tool

Giả sử bạn đã lấy xong 100 link phim, giờ bạn chỉ cần click vào từng file đó để download. Nhưng 1 lúc có lẽ bạn chỉ download được tầm 5 phim (còn tùy vào internet nhà bạn nữa). Giờ có 1 tool mà cứ vài phút tự động download 1 tập thì hay biết mấy he 😁 Oh yeah, có đấy, nó đây [ffmpeg-queue-downloader](https://github.com/oclockvn/ffmpeg-queue-downloader)

Bạn chỉ cần lấy link phim và lưu tại thư mục chứa tool này rồi start tool là xong.

<iframe width="1349" height="480" src="https://www.youtube.com/embed/Z4G0Oqv8fus" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Enjoy!
