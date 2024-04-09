//Async Await
const myPromise = Promise.reject("Error");
const getData = async () => {
  try {
    const data = await myPromise;
    console.log(data);
  } catch (e) {
    console.log(e);
  } finally {
    console.log("Thực hiện xong");
  }

  //Xử lý để show dữ liệu lên trình duyệt (Xử lý DOM)

  //   return data;
};

//Xử lý DOM
getData();

//Bắt lỗi khi dùng async, await
//Thứ tự chạy của try catch
/*
- Chạy code ở trong try block
- Nếu xảy ra lỗi --> Chuyển xuống catch
- Sau cùng: finally
// */
// console.log("1");
// try {
//   //   getA();
//   // const a;
//   //Tự tạo lỗi (Thường sử dụng khi gặp lỗi logic)
//   const a = 10;
//   if (a <= 10) {
//     // console.log("Giá trị phải lớn hơn 10");
//     //Bắn lỗi xuống catch
//     throw new Error("Giá trị phải lớn hơn 10");
//   }
//   console.log("F8");
// } catch (e) {
//   //e = exception
//   console.log(e);
//   //   if (e.message.includes("not defined")) {
//   //     console.log("Có lỗi xảy ra: ", e.message);
//   //   } else {
//   //     console.log(e);
//   //   }
// } finally {
//   console.log("Đã xong");
// }
// console.log("2");

const callUser = () =>
  new Promise((resolve, reject) => {
    reject("Error");
  });

const getUser = async () => {
  try {
    const user = callUser();
    return user;
  } catch (e) {
    console.log(e);
    // return e;
  }
  /*
  Nếu return không có await --> Trả về y nguyên promise ban đầu --> Dễ dàng bắt lỗi ở ngoài
  Nếu return có await --> Resolve data sau đó trả về promise --> Khó bắt lỗi ở ngoài
  */
};

// getUser()
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

const users = ["Item 1", "Item 2", "Item 3"];
const getUserByIndex = (index) =>
  new Promise((resolve) => {
    setTimeout(() => {
      const user = users.find((item, _index) => index === _index);
      resolve(user);
    }, 1000);
  });

const arr = [0, 2]; //Trả về các user có index trong mảng arr
(async () => {
  let output = "";
  //   arr.forEach(async (item) => {
  //     const user = await getUserByIndex(item);
  //     console.log(user);
  //     output += user + " ";
  //   });
  //   for (let item of arr) {
  //     const user = await getUserByIndex(item);
  //     console.log(user);
  //     output += user + " ";
  //   }
  const userResolve = await Promise.all(
    arr.map((item) => getUserByIndex(item))
  );
  output = userResolve.join("");
  console.log(output);
})();
