//Câu lệnh rẽ nhánh Switch Case
var action = "delete";
switch (action) {
  case "create":
  case "add":
  case "insert":
    console.log("Thêm mới");
    break;
  case "update":
  case "edit":
    console.log("Cập nhật");
    break;
  case "delete":
  case "remove":
  case "destroy":
    console.log("Xóa");
    break;
  case "show":
  case "view":
    console.log("Hiển thị");
    break;
  default:
    console.log("Không tồn tại");
    break;
}
//Bài tập: Chuyển đoạn code trên thành dạng if else
if (action === "create" || action === "add" || action === "insert") {
  console.log("Thêm mới");
} else if (action === "update" || action === "edit") {
  console.log("Cập nhật");
} else if (action === "delete" || action === "remove" || action === "destroy") {
  console.log("Xóa");
} else if (action === "show" || action === "view") {
  console.log("Hiển thị");
} else {
  console.log("Không tồn tại");
}

//Hiển thị số ngày trong tháng
/*
Tháng 31 ngày: 1, 3, 5, 7, 8, 10, 12
Tháng 30 ngày: 4, 6, 9, 11
Tháng 29 hoặc 28 ngày: 2

Yêu cầu: Kiểm tra tháng hợp lệ và hiển thị số ngày trong tháng đó
- Số nguyên --> Không được dùng hàm
- Từ 1 đến 12
*/
var month = 4;
if (month % 1 === 0 && month >= 1 && month <= 12 && typeof month === "number") {
  //   month = month * 1;
  switch (month) {
    case 2:
      console.log("Tháng 2 có 28 hoặc 29 ngày");
      break;
    case 4:
    case 6:
    case 9:
    case 11:
      console.log(`Tháng ${month} có 30 ngày`);
      break;
    default:
      console.log(`Tháng ${month} có 31 ngày`);
      break;
  }
} else {
  console.log("Tháng không hợp lệ");
}
