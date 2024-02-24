//Bài tập
var query = {
  name: "Hoàng An",
  email: "hoangan.web@gmail.com",
  keyword: "F8",
};

//Chuyển object trên thành dạng query params
// --> name=Hoàng+An&email=hoangan.web@gmail.com&keyword=F8
//Yêu cầu: Không sử dụng hàm URLSearchParams()
// var params = "";
// for (var key in query) {
//   //   console.log(key, query[key]);
//   var sub = `${key}=${query[key]}`;
//   params += `${sub}&`;
// }
// params = params.slice(0, params.length - 1);
// console.log(params);

var params = Object.entries(query)
  .map(function (item) {
    return item.join("=");
  })
  .join("&")
  .replaceAll(" ", "+");
//Chaining
// console.log(params);

//Bài tập 2
var url = `https://fullstack.edu.vn/search/courses?name=Hoàng+An&email=hoangan.web@gmail.com&keyword=F8`;
console.log(url);

//Yêu cầu: Tách từng thành phần của url
/*
- Protocol: https
- Domain: fullstack.edu.vn
- Path: search
- Query: {
    name: Hoàng An,
    email: hoangan.web@gmail.com
    keyword: F8
}
*/

var urlArr = url.split("//");
var protocol = urlArr[0].slice(0, -1);
var rest = urlArr[1];
var domain = rest.slice(0, rest.indexOf("/"));
var afterDomain = rest.slice(rest.indexOf("/"));
var pathname = afterDomain.slice(0, afterDomain.indexOf("?"));
var params = afterDomain.slice(afterDomain.indexOf("?") + 1);
var query = params.split("&").map(function (item) {
  var itemArr = item.replaceAll("+", " ").split("=");
  return itemArr;
});
query = Object.fromEntries(query);
console.log(protocol);
console.log(domain);
console.log(pathname);
console.log(query);
