//Async Await
// Cách viết tuần tự
/*
function async() {
    await promise1() --> Chạy hàm then()
    await promise2() --> Chạy hàm then()
    await promise3() --> Chạy hàm then()
    console.log(1);
}
*/

const myPromise = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Data");
  }, 2000);
});
// const a = 10;
// const showData = async () => {
//   //Hàm này luôn trả về 1 promise
//   //   const data = await myPromise;
//   //   console.log(data);
//   //   const result = await a;
//   //a = await (await b)
//   const todos = await (
//     await fetch(`https://jsonplaceholder.typicode.com/todos`)
//   ).json();
//   console.log(todos);
// };
// showData();

(async () => {
  const data = await myPromise;
  console.log(data);
})();
