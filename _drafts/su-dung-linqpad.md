---
title: Sử dụng linqpad cơ bản và nâng cao
tags: ["linqpad"]
---

### Linqpad là gì?

Để biết linqpad là gì thì truy cập [linqpad.net](https://www.linqpad.net/) các bạn sẽ biết ngay thôi. Download linqpad 6 [tại đây](https://www.linqpad.net/Download.aspx).

Nội dung bài viết mình sẽ giới thiệu 1 số chiêu hay ho của linqpad mà mình hay xài. Trước tiên hay đi sơ qua những cái cơ bản.

### 1. Connect & run

Kết nối với CSDL rất đơn giản, chỉ cần mở ra, add connection và điền thông tin, vậy là xong.

![connection](\assets\img\linqpad\setup.png)

Để thực hiện query cũng đơn giản không kém, bạn chọn db, nhập table (hoặc sử dụng shortcut) và F5 là xong

![run query](\assets\img\linqpad\run.png)

### 2. Query languages

Linqpad hỗ trợ nhiều kiểu query, trong đó thường xuyên sử dụng nhất vẫn là Expression, Statement và SQL:

![languages](\assets\img\linqpad\query_language.png)

Sự khác biệt giữa Expression và Statement là bạn có thể thực thi được 1 hoặc nhiều query cùng lúc:

![languages](\assets\img\linqpad\language.png)

Linqpad sẽ tự động chuyển đổi giữa Expression và Statement khi bạn thêm/bớt dấu ; ở cuối dòng.

### 3. Shortcuts

Linqpad có 1 số shortcut built-in dành cho những query thường xuyên sử dụng nhất, R-click vào table bạn sẽ thấy:

![languages](\assets\img\linqpad\shortcut.png)

### 4. Dump

Dump là cách bạn "in" ra mọi thứ trong linqpad. Như ở trên có nói, cách bạn sử dụng Statement để thực hiện nhiều query chính là `Dump` ra những query expression.

Bên trên là những cái cơ bản bạn hay sử dụng nhất khi dùng linqpad, nhưng nó không chỉ có vậy, dưới đây là những lý do mình thích linqpad hơn sql mgmt tool.

### 5. Run query from code

Như bạn đã thấy, với Expression và Statement thì cú pháp sử dụng của mình chính là [Linq](https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/concepts/linq/), do đó, nếu bạn muốn xem kết quả câu query code của mình, chỉ cần copy nó ra và chạy với Linqpad (dĩ nhiên bạn cần chỉnh sử đôi chút vì nó sẽ không biết các class trong project của bạn, nhưng có hề gì khi C# đã có anonymous type)

![languages](\assets\img\linqpad\real_query.png)

Với mọi code C# đều valid trong linqpad, do đó dĩ nhiên cú pháp linq hoặc extension method đều chạy ok:

![languages](\assets\img\linqpad\linq.png)

1 lần nữa nhắc lại là bạn hoàn toàn có thể copy code từ project của mình để chạy trực tiếp trong linqpad, do đó những câu lệnh như join, paging, ... đều chạy mượt mà. Và 1 điều vô cùng thích thú đó là, `GroupBy` xịn xò:

![languages](\assets\img\linqpad\group_by.png)

### 6. Insert/Update/Delete

Tất nhiên khả năng CRUD thì không có gì để nói, nhưng vì khả năng chạy bằng code từ project của bạn nên ... đó, lấy code và run thôi:

<script src="https://gist.github.com/oclockvn/d0c50a4a7f43a873f8c27705aef29f84.js"></script>

Mấu chốt ở đây là:

```cs
Products.InsertOnSubmit(p);
Products.DeleteOnSubmit(p2);
SubmitChanges();
```

Điều này còn thú vị hơn nếu bạn kết hợp với extension method.

### 7. Extension method

Là extension method của C#, điểm mạnh là bạn kết hợp được với query của mình:

![languages](\assets\img\linqpad\extension_method.png)

Vậy thì áp dụng như thế nào? Hãy tưởng tựng bạn muốn migrate 1 vài data nhưng bạn không biết hoặc không thể làm bằng sql thì sẽ ra sao? Cụ thể như bạn muốn xóa hết dấu của những sản phẩm đã thêm ngày hôm qua, rất dễ nếu bạn code C# nhỉ:

<script src="https://gist.github.com/oclockvn/86613b5d364abfa1952c41679e25651e.js"></script>

### 8. Generated sql

Bạn muốn biết với câu query paging của mình, code sql sinh ra là gì? Linqpad làm điều đó cho bạn:

![languages](\assets\img\linqpad\generated_sql.png)

Từ đây thì bạn có thể biết bạn đang viết câu lệnh join loại gì, select đã tối ưu hay chưa, hoặc đơn giản là lấy code sql này để đi chạy chỗ khác...từ đó tối ưu code của mình.

> Chú ý là generated sql sẽ có đôi chút khác nhau giữa các phiên bản của entity framework (EF 5,6 và Core) và tùy thuộc vào phiên bản của sql server, cho nên ở đây mang tính tham khảo là chủ yếu.

### 9. Kho samples phong phú

Linqpad có 1 kho các samples phong phú và đủ đơn giản để bạn nhìn vào là hiểu, và chỉ cần biết cách dùng 1 ít trong số các tính năng của linqpad thì bạn đã tăng tốc độ và năng suất làm việc của mình lên rất nhiều rồi.

![languages](\assets\img\linqpad\samples.png)

### 10. Không chỉ sql server

Với linqpad 6 (thực ra linqpad 5 và nhỏ hơn cũng có nhưng phải dùng driver) thì việc connect vào các dbms khác là vô cùng đơn giản. Ở bước thêm mới connection và chọn driver, bạn chỉ cần chọn Entity Framework Core (multi-provider) là có thể kết nối với các dbms khác:

![languages](\assets\img\linqpad\multi_provider.png)

Nếu dbms của bạn không nằm trong số này, bạn có thể tìm kiếm drivers của cộng đồng (cũng nằm trong popup add connection) hoặc viết mới (chắc chả ai rảnh LOL) phù hợp với nhu cầu của bạn.

### Kết

Okay, sơ sơ vậy chắc đủ rồi. Hy vọng bài viết giúp ích các bạn.
