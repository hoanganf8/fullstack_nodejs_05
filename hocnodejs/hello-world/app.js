const http = require("http"); //commonjs
const url = require("url");
const getPage = (path) => {
  let page;
  switch (path) {
    case "/":
      page = "home";
      break;
    case "/gioi-thieu":
      page = "about";
      break;
    case "/san-pham":
      page = "products";
      break;
  }
  if (page) {
    return require("./pages/" + page);
  }
};
const getApi = (pathname) => {
  switch (pathname) {
    case "/api/users":
      return require("./api/users");
  }
};
const server = http.createServer((req, res) => {
  const urlParse = url.parse(req.url);
  const pathname = urlParse.pathname;
  if (pathname.startsWith("/api")) {
    res.setHeader("Content-Type", "application/json; charset=utf-8");
    return res.end(JSON.stringify(getApi(pathname)));
  }
  res.setHeader("Content-Type", "text/html; charset=utf-8");
  res.end(getPage(pathname));
});

server.listen(3000, null, () => {
  console.log("Server listening on port 3000");
});
