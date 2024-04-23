const expire = `2024-04-30 09:30:30`;
const daysEl = document.querySelector(".countdown .days .number");
const hoursEl = document.querySelector(".countdown .hours .number");
const minsEl = document.querySelector(".countdown .mins .number");
const secondsEl = document.querySelector(".countdown .seconds .number");

// console.log(daysEl);
// console.log(hoursEl);
// console.log(minsEl);
// console.log(secondsEl);

const handleCountdown = () => {
  //Lấy time của thời gian hiện tại
  const nowTime = new Date().getTime();
  //Lấy time của expire
  const expireTime = new Date(expire).getTime();
  //Tính khoảng thời gian
  let diffTime = (expireTime - nowTime) / 1000;
  //Tính số ngày
  const days = Math.floor(diffTime / 86400);
  //Tính số giờ
  diffTime -= days * 86400;
  const hours = Math.floor(diffTime / 3600);
  //Tính số phút
  diffTime -= hours * 3600;
  const mins = Math.floor(diffTime / 60);
  //Tính số giây
  const seconds = Math.floor(diffTime - mins * 60);
  daysEl.innerText = days;
  hoursEl.innerText = hours;
  minsEl.innerText = mins;
  secondsEl.innerText = seconds;
};
handleCountdown();
setInterval(handleCountdown, 1000);
