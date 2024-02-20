//find()
/*
- Lặp qua từng phần tử của mảng
- Trả về phần tử đầu tiên nếu callback return true
*/
// var users = ["User 1", "User 2", "User 3"];
// console.log(users.indexOf("User 2"));

// var users = [
//   ["User 1", "user1@gmail.com"],
//   ["User 2", "user2@gmail.com"],
//   ["User 3", "user3@gmail.com"],
//   ["User 3", "user2@gmail.com"],
// ];

// --> Tìm thông tin user có email là: user2@gmail.com
// console.log(users.indexOf(["User 2", "user2@gmail.com"]));
// var result = users.find(function (user) {
//   if (user[1] === "user2@gmail.com") {
//     return true;
//   }
// });
// console.log(result);

//findLast()
/*
- Lặp qua từng phần tử của mảng
- Trả về phần tử cuối cùng nếu callback return true
*/

//findIndex()
/*
- Lặp qua từng phần tử của mảng
- Trả về index đầu tiên tìm được nếu callback return true
*/

//findLastIndex()
/*
- Lặp qua từng phần tử của mảng
- Trả về index cuối cùng tìm được nếu callback return true
*/

var users = [
  ["User 1", "user1@gmail.com", 100],
  ["User 2", "user2@gmail.com", 40],
  ["User 2", "user2@gmail.com", 80],
  ["User 3", "user3@gmail.com", 21],
];

//Bài tập: Thay đổi email của user có tuổi lớn nhất thành: admin@gmail.com

/*
- Tìm index của user có tuổi lớn nhất
- Thay đổi email
*/

var maxUser = users[0];
var indexUser = 0;
users.forEach(function (user, index) {
  if (maxUser[2] < user[2]) {
    maxUser = user;
    indexUser = index;
  }
});

if (indexUser) {
  users[indexUser][1] = "admin@gmail.com";
}

console.log(users);
