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
import { debounce } from "./utils.js";

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
const form = document.querySelector(".form-add");
const search = document.querySelector(".search");
const pagination = document.querySelector(".pagination");
const render = (users) => {
  root.innerHTML = `<div class="users">
    <h2>Danh sách người dùng</h2>
    ${
      users.length
        ? users
            .map(
              ({ id, name }) => `
      <div class="user-item">
        <p>Tên: ${name}</p>
        <button data-id="${id}" data-type="detail">Chi tiết</button>
        <button data-id="${id}" data-type="delete">Xóa</button>
        <button data-id="${id}" data-type="update">Sửa</button>
      </div>`
            )
            .join("")
        : `<h3>Không tìm thấy người dùng</h3>`
    }
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

const renderPaginate = (totalUsers) => {
  //Tính tổng số trang --> Làm tròn lên (Math.ceil)
  const totalPages = Math.ceil(totalUsers / 3);
  if (totalPages <= 1) {
    pagination.innerHTML = "";
    return;
  }
  let html = ``;
  for (let page = 1; page <= totalPages; page++) {
    html += `<a href="#" class="page" style="${
      page === query._page ? "color: red; font-weight: bold;" : ""
    }">${page}</a>`;
  }
  pagination.innerHTML = `
  ${query._page > 1 ? '<a href="#" class="prev">Trước</a>' : ""}
  ${html}
  ${query._page < totalPages ? '<a href="#" class="next">Sau</a>' : ""}
  `;
};
pagination.addEventListener("click", (e) => {
  e.preventDefault();
  if (e.target.classList.contains("page")) {
    const page = +e.target.innerText;
    query._page = page;
  }
  if (e.target.classList.contains("prev")) {
    query._page--;
  }
  if (e.target.classList.contains("next")) {
    query._page++;
  }
  showUser();
});
const deleteUser = async (id) => {
  const response = await fetch(userApi + `/${id}`, {
    method: "DELETE",
  });
  if (response.ok) {
    showUser();
  }
};
const showFormUpdate = async (id) => {
  const response = await fetch(userApi + `/${id}`);
  if (response.ok) {
    const data = await response.json();
    const nameEl = form.querySelector('[name="name"]');
    const emailEl = form.querySelector('[name="email"]');
    const btnEl = form.querySelector("button");
    nameEl.value = data.name;
    emailEl.value = data.email;
    btnEl.innerText = "Cập nhật";
    form.dataset.id = id;
  } else {
    alert("Đã có lỗi xảy ra");
  }
};
const updateUser = async (id) => {
  showFormUpdate(id);
};
const showDetailUser = async (id) => {
  const response = await fetch(userApi + `/${id}`);
  const user = await response.json();
  renderUser(user);
};
const query = {
  _sort: "id",
  _order: "desc",
  _limit: 3,
  _page: 1,
};
const showUser = async () => {
  const queryString = Object.keys(query)
    ? `?${new URLSearchParams(query).toString()}`
    : "";
  const response = await fetch(userApi + queryString);
  const users = await response.json();
  render(users);
  //Phân trang:
  //Tính tổng số trang = Tổng số user / limit
  const totalUsers = response.headers.get("x-total-count");
  renderPaginate(totalUsers);
};

showUser();

//Xử lý thêm dữ liệu
const formAdd = document.querySelector(".form-add");
formAdd.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = Object.fromEntries([...new FormData(e.target)]);
  if (form.dataset.id) {
    //Sửa
    console.log("Gọi hàm sửa");
    const id = form.dataset.id;
    updateUserApi(id, formData);
  } else {
    //Thêm
    addUser(formData);
  }
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

const updateUserApi = async (id, data) => {
  const response = await fetch(userApi + `/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  if (response.ok) {
    //Thành công
    showUser();
    resetForm();
  } else {
    alert("Lỗi này của chúng tôi");
  }
};

const resetForm = () => {
  form.reset();
  delete form.dataset.id;
  form.querySelector("button").innerText = "Thêm";
};

const handleSearch = debounce((e) => {
  const keyword = e.target.value ? e.target.value.trim() : "";
  console.log(keyword);
  //Gọi API có tham số ?q=keyword
  query.q = keyword;
  showUser();
}, 500);

search.addEventListener("input", handleSearch);

//Client side rendering (CSR)
