/*
1. Check all | Uncheck all
- Lắng nghe sự kiện onchange vào input checkbox có class check-all
- Lặp qua từng input checkbox có class check-item
- Dựa vào trạng thái của check-all để cập nhật trạng thái cho check-item
- Đếm số lượng item được check và enable/disable button
*/
var checkAll = document.querySelector(".check-all");
var checkItems = document.querySelectorAll(".check-item");
var btn = document.querySelector(".btn");
var count = 0;
checkAll.addEventListener("change", function () {
  var status = this.checked;
  checkItems.forEach(function (checkItem) {
    checkItem.checked = status;
  });
  if (status) {
    btn.removeAttribute("disabled");
    btn.children[0].innerText = checkItems.length;
    count = checkItems.length;
  } else {
    btn.setAttribute("disabled", "disabled");
    btn.children[0].innerText = 0;
    count = 0;
  }
});

checkItems.forEach(function (checkItem) {
  checkItem.addEventListener("change", function () {
    if (checkItem.checked) {
      count++;
    } else {
      count--;
    }

    if (count === checkItems.length) {
      checkAll.checked = true;
    } else {
      checkAll.checked = false;
    }

    if (count > 0) {
      btn.removeAttribute("disabled");
      btn.children[0].innerText = count;
    } else {
      btn.setAttribute("disabled", "disabled");
      btn.children[0].innerText = 0;
    }
  });
});
