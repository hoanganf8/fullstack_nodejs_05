//debounce --> Kỹ thuật thực thi 1 hàm khi không thao tác trong 1 khoảng gian
export const debounce = (func, timeout = 300) => {
  let timer; //Lưu trữ giá trị của setTimeout
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func(...args);
    }, timeout);
  };
};
//debounce là 1 hàm
