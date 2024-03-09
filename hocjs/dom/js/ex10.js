//DOM Navigation
/*
Element
- parentElement --> Chọn cấp cha
- children --> Chọn cấp con
- nextSiblingElement --> Chọn element tiếp theo (Bên phải)
- previousSiblingElement --> Chọn element phía trước (Bên trái)
- firstElementChild --> Chọn element đầu tiên
- lastElementChild --> Chọn element cuối cùng

Node
- parentNode --> Chọn node cha
- childNodes --> Chọn node con
- nextSibling --> Chọn node tiếp theo
- previousSibling --> Chọn node phía trước
- firstChild --> Chọn node đầu tiên
- lastChild --> Chọn node cuối cùng
*/

// var menuEl = document.querySelector(".menu");
// var items = menuEl.children[1].children[1].children[1].children[0].innerText;
// console.log(items);

// var items = document.querySelectorAll(".menu a");
// items.forEach(function (item) {
//   var subMenu = item.nextElementSibling;
//   if (subMenu) {
//     item.parentElement.classList.add("has-children");
//   }
// });

var items = document.querySelectorAll(".menu a");
// var lastIndex;
items.forEach(function (item, index) {
  item.addEventListener("click", function (e) {
    var subMenu = item.nextElementSibling;
    console.log(subMenu);
    if (subMenu) {
      e.preventDefault();
      var subMenuActive = document.querySelector(".menu ul.open");
      subMenu.classList.toggle("open");
      if (subMenuActive && subMenuActive.classList.contains("open")) {
        subMenuActive.classList.remove("open");
      }
    }
    // console.log(`lastIndex = ${lastIndex}`, `index = ${index}`);
    // lastIndex = index;
  });
});
