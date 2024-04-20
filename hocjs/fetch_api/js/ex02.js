// const loginUrl = `https://api.escuelajs.co/api/v1/auth/login`;

// const handleLogin = async (email, password) => {
//   const response = await fetch(loginUrl, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({ email, password }),
//   });
//   console.log(response);
//   if (response.ok) {
//     const data = await response.json();
//     console.log(data);
//   }
// };

// handleLogin("john@mail.com", "changeme");

//Bộ nhớ trình duyệt
// localStorage.setItem("token", "123");

// const token = localStorage.getItem("token");
// console.log(token);

// localStorage.removeItem("token");

// sessionStorage.setItem("token", "123");

import config from "./config.js";
import { httpClient } from "./client.js";
const { serverApi } = config;
httpClient.serverApi = serverApi; //Cập nhật serverApi cho request

const root = document.querySelector("#root");

const app = {
  loginForm: function () {
    return `<form action="" class="login-form">
    <h2>Đăng nhập</h2>
    <div>
      <input type="email" name="email" placeholder="Email..." />
    </div>
    <div>
      <input type="password" name="password" placeholder="Password..." />
    </div>
    <button>Login</button>
  </form>`;
  },
  profile: function () {
    return `<h2>Chào mừng bạn quay trở lại</h2>
    <h3>Chào, <span class="profile-name">Loading...</span> <button class="logout-btn">Đăng xuất</button></h3>`;
  },
  render: function () {
    let isLogin = false;
    if (localStorage.getItem("tokens")) {
      try {
        const tokens = JSON.parse(localStorage.getItem("tokens"));
        if (tokens.access_token) {
          isLogin = true;
          this.sendRequestProfile();
        }
      } catch (e) {
        console.log(e.message);
      }
    }

    root.innerHTML = isLogin ? this.profile() : this.loginForm();
  },
  addEvent: function () {
    root.addEventListener("submit", (e) => {
      e.preventDefault();
      if (e.target.classList.contains("login-form")) {
        const formData = Object.fromEntries([...new FormData(e.target)]);
        this.sendRequestLogin(formData);
      }
    });
    root.addEventListener("click", (e) => {
      if (e.target.classList.contains("logout-btn")) {
        localStorage.removeItem("tokens");
        //Gửi request tới server để thêm token vào blacklist
        this.render();
      }
    });
  },
  sendRequestLogin: async function (data) {
    //gọi api login

    const { res: response, data: tokens } = await httpClient.post(
      "/auth/login",
      data
    );

    //Thất bại --> Thông báo lỗi
    if (!response.ok) {
      alert("Email hoặc mật khẩu không chính xác");
      return;
    }
    //Nếu thành công --> Lưu vào localStorage
    localStorage.setItem("tokens", JSON.stringify(tokens));
    this.render();
  },
  sendRequestRefreshToken: async function (refreshToken) {
    try {
      const { res: response, data } = await httpClient.post(
        "/auth/refresh-token",
        { refreshToken }
      );

      if (!response.ok) {
        throw new Error("Refresh Token Invalid");
      }
      return data;
    } catch {
      return false;
    }
  },
  sendRequestProfile: async function () {
    const { access_token: accessToken, refresh_token: refreshToken } =
      JSON.parse(localStorage.getItem("tokens"));

    httpClient.token = accessToken;

    const { res: response, data } = await httpClient.get("/auth/profile");
    //Kiểm tra:
    //Nếu thất bại --> Đăng xuất
    if (!response.ok) {
      //Gọi API refresh-token để cấp lại access token mới
      //Lưu access token vào localStorage
      //Gọi lại request profile
      // localStorage.removeItem("tokens");
      // this.render();
      //Gọi API Refresh token
      const newToken = await this.sendRequestRefreshToken(refreshToken);
      if (!newToken) {
        //--> Nếu lỗi --> Đăng xuất
        localStorage.removeItem("tokens");
        this.render();
      } else {
        //Nếu thành công
        // - Lưu token mới vào Storage
        localStorage.setItem("tokens", JSON.stringify(newToken));
        // - Gọi lại request bị lỗi
        this.sendRequestProfile();
      }
      return;
    }
    //Nếu thành công --> Lấy dữ liệu và hiển thị lên trình duyệt
    const profileNameEl = root.querySelector(".profile-name");
    profileNameEl.innerText = data.name;
  },
  start: function () {
    this.render();
    this.addEvent();
  },
};
app.start();

/*
Call API 
- Public --> Ai cũng có thể truy cập được
- Private --> Chỉ cho phép truy cập một số người hoặc có điều kiện xác thực
==> Bearer Token --> Xác minh danh tính --> Nếu đúng sẽ trả về dữ liệu
Ví dụ: Đăng nhập sẽ xem được trang tài khoản, đăng nhập xem giá khuyến mãi tất cả sản phẩm
==> Bearer Token --> Xác minh danh tính --> Nếu đúng kiểm tra xem có quyền hay không --> Trả về dữ liệu
Ví dụ: Chỉ được xem các khóa học đã mua, học viên không được xóa khóa học,...

Xác thực ==> Token ==> Authorization ==> Lấy userId ==> Kiểm tra userId với Database xem có quyền hay không?

Quy trình xử lý refresh token

Khi access token hết hạn ==> Gửi request tới api refresh token
- Hợp lệ --> Trả về access token mới
+ Lưu access token vào storage trên trình duyệt
+ Gọi lại request vừa bị lỗi

- Không hợp lệ --> Đăng xuất

Ví dụ: 
- Request 1 --> Success
- Request 2 --> Failed --> Refresh Token --> Request 2
- Request 3 --> Success theo access token mới
*/

// let accessToken = "ahihi";
// let isExpired = false;
// let isRefreshToken = false;
// let refreshTokenPromise = null;
// const refreshToken = () => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       const token = Math.random();
//       console.log(token);
//       resolve("new token: " + token);
//     }, 1000);
//   });
// };
// const requestApi = (url) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       //Giả sử request /courses bị hết hạn token
//       if (!isRefreshToken && url === "/posts") {
//         isExpired = true;
//       }
//       if (isExpired) {
//         reject("Token expired");
//       }
//       resolve(`Data by Request ${url} with Token: ${accessToken}`);
//     }, 1000);
//   });
// };

//Viết 1 hàm mới để xử lý gọi API và cấp lại access token khi bị hết hạn
// const httpClient = async (url) => {
//   try {
//     const response = await requestApi(url);
//     return response;
//   } catch (e) {
//     //Khi request bị lỗi --> Gọi tới api refresh token
//     if (!refreshTokenPromise) {
//       refreshTokenPromise = refreshToken();
//     }
//     const newAccessToken = await refreshTokenPromise;
//     accessToken = newAccessToken;
//     isExpired = false;
//     isRefreshToken = true;
//     const response = await requestApi(url);
//     return response;
//   }
// };

// //Call API
// httpClient("/profile").then((data) => {
//   console.log(data);
// });

// //Expire --> Cấp lại access mới
// httpClient("/courses").then((data) => {
//   console.log(data);
// });

// //Expire --> Chờ
// httpClient("/posts").then((data) => {
//   console.log(data);
// });

// //Expire --> Chờ
// httpClient("/my-course").then((data) => {
//   console.log(data);
// });

//CORS
//localStorage
//sessionStorage
//cookie, session
