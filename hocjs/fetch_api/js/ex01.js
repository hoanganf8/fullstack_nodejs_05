/*
Trong JS làm sao để gọi API?
- Thư viện: axios, jquery ajax,...
- Hàm có sẵn: XmlHttpRequest, fetch (*)
*/

//Hàm fetch(url, options)
/*
url: URL của API
options: Object để thiết lập HTTP Request
Hàm fetch trả về 1 promise
*/

const userApi = `http://localhost:3000/users`;
// fetch(userApi)
//   .then((response) => {
//     //Đọc dữ liệu từ api
//     //   response.text().then((data) => {
//     //     console.log(data);
//     //     const users = JSON.parse(data);
//     //     console.log(users);
//     //   });
//     return response.json();
//   })
//   .then((users) => {
//     console.log(users);
//   });

const root = document.querySelector("#root");
const render = (users) => {
  root.innerHTML = `<div class="users">
    <h2>Danh sách người dùng</h2>
    ${users
      .map(
        ({ id, name }) => `
      <div class="user-item">
        <p>Tên: ${name}</p>
        <button data-id="${id}" data-type="detail">Chi tiết</button>
        <button data-id="${id}" data-type="delete">Xóa</button>
        <button data-id="${id}" data-type="update">Sửa</button>
      </div>`
      )
      .join("")}
  </div>`;

  root.querySelector(".users").addEventListener("click", (e) => {
    if (e.target.dataset.type === "detail" && e.target.dataset.id) {
      const userId = e.target.dataset.id;
      showDetailUser(userId);
    }
    if (e.target.dataset.type === "delete" && e.target.dataset.id) {
      if (confirm("Bạn có chắc chắn?")) {
        const userId = e.target.dataset.id;
        deleteUser(userId);
      }
    }

    if (e.target.dataset.type === "update" && e.target.dataset.id) {
      const userId = e.target.dataset.id;
      updateUser(userId);
    }
  });
};
const renderUser = ({ name, email }) => {
  root.innerHTML = `<div class="users">
   <h2>Chi tiết người dùng</h2>
   <p>Tên: ${name}</p>
   <p>Email: ${email}</p>
   <button onclick="showUser()">Quay lại</button>
   </div>
   `;
};
const deleteUser = async (id) => {
  const response = await fetch(userApi + `/${id}`, {
    method: "DELETE",
  });
  if (response.ok) {
    showUser();
  }
};
const updateUser = async (id) => {
  const response = await fetch(userApi + `/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name: "User 11" }),
  });
  if (response.ok) {
    //Thành công
    showUser();
  }
};
const showDetailUser = async (id) => {
  const response = await fetch(userApi + `/${id}`);
  const user = await response.json();
  renderUser(user);
};
const query = {
  _sort: "id",
  _order: "desc",
  //   _limit: 2,
  //   _page: 1,
};
const showUser = async () => {
  const queryString = Object.keys(query)
    ? `?${new URLSearchParams(query).toString()}`
    : "";
  const response = await fetch(userApi + queryString);
  const users = await response.json();
  render(users);
};
showUser();

//Xử lý thêm dữ liệu
const formAdd = document.querySelector(".form-add");
formAdd.addEventListener("submit", (e) => {
  e.preventDefault();
  const form = Object.fromEntries([...new FormData(e.target)]);
  addUser(form);
});

const addUser = async (data) => {
  const response = await fetch(userApi, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  if (response.ok) {
    //Thành công
    showUser();
  }
};

//Client side rendering (CSR)
