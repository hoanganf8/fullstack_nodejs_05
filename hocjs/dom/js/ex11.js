var carousel = document.querySelector(".carousel");
var carouselImages = carousel.querySelector(".carousel-images");
var carouselNextBtn = carousel.querySelector(".carousel .carousel-nav .next");
var carouselPrevBtn = carousel.querySelector(".carousel .carousel-nav .prev");
var carouselItems = carouselImages.children;

//Tính kích thước chiều rộng của 1 item
var itemWidth = carouselImages.clientWidth;

//Tính tổng kích thước các item
var totalWidth = itemWidth * carouselItems.length;

//Cập nhật css cho carousel-image
carouselImages.style.width = `${totalWidth}px`;

//Lắng nghe sự kiện click vào nút next
var translateX = 0;
carouselNextBtn.addEventListener("click", function () {
  if (Math.abs(translateX) >= totalWidth - itemWidth) {
    return; //Thoát hàm
  }
  translateX -= itemWidth;
  carouselImages.style.translate = `${translateX}px`;
});

carouselPrevBtn.addEventListener("click", function () {
  if (Math.abs(translateX) < itemWidth) {
    return; //Thoát hàm
  }
  translateX += itemWidth;
  carouselImages.style.translate = `${translateX}px`;
});
