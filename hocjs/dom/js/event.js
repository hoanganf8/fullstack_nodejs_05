//Định nghĩa các event

//Định nghĩa event finish để tất cả các thẻ input range đều có thể lắng nghe được
var rangeList = document.querySelectorAll('input[type="range"]');
if (rangeList.length) {
  var finishEvent = new CustomEvent("finish", {
    detail: "123",
  });
  //sloppy mode
  finishEvent.detail = "456";
  rangeList.forEach(function (range) {
    range.addEventListener("input", function () {
      var value = this.value;
      if (+value === 100) {
        this.dispatchEvent(finishEvent);
      }
    });
  });
}

/*
Mục đích sử dụng
- Đóng gói nhiều event có sẵn thành 1 event riêng --> Dễ tái sử dụng
- Gửi logic qua nhiều cấp nhưng không muốn xử lý thủ công
- Trigger Event có sẵn
*/
