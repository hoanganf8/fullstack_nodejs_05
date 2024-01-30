//Callback Function

var showStudentInfo = () => {
  console.log("show students info");
};
var showStudentInfo2 = () => {
  console.log("show students info 2");
};
var showStudents = (func) => {
  console.log("show students");
  //func là 1 tham số --> Hàm
  if (typeof func === "function") {
    func();
  }
};

// showStudents(showStudentInfo);
// showStudents(showStudentInfo2);
// showStudents(function () {
//   console.log("Học JS quá khó");
// });

//Hàm setTimeout(callback, time, arguments) --> Delay quá trình thực thi hàm callback
var displayName = function (course) {
  console.log("Hoàng An F8");
  console.log(course);
};
// setTimeout(displayName, 1000, "Fullstack");
var handleDisplayName = function () {
  //   console.log("handleDisplayNames");
  displayName("Fullstack");
};
// setTimeout(handleDisplayName, 1000);
//setTimeout() --> handleDisplayName() --> displayName()

function getA(callback) {
  setTimeout(function () {
    console.log("getA");
    if (typeof callback === "function") {
      callback();
    }
  }, 2000);
}
function getB(callback) {
  setTimeout(function () {
    console.log("getB");
    if (typeof callback === "function") {
      callback();
      /*
        callback = function () {
            getC(getA);
        }
        */
    }
  }, 1000);
}
function getC(callback) {
  setTimeout(function () {
    console.log("getC");
    if (typeof callback === "function") {
      callback(); //getA()
    }
  }, 500);
}
// getA(function () {
//   getB(getC);
// });
// var handleGetB = function () {
//   var handleGetC = function () {
//     getA();
//   };
//   getC(handleGetC);
// };
// getB(handleGetB);

// arguments --> Bind các đối số
function max() {
  console.log(arguments); //Object (Array-like Object)
  //   arguments.forEach(function () {});
  function chidren() {
    console.log(arguments);
  }
  chidren("a", "b", "c");
}
max(5, 10, 15, 20, 25);

//Lưu ý: Không hỗ trợ trong Arrow Function (ES6) --> Cần sử dụng Rest Parameter
