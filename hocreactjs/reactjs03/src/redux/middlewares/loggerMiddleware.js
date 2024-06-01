//Cấu trúc Middleware
export const loggerMiddleware = function (store) {
  return function (next) {
    return function (action) {
      console.log("Store", store);
      console.log("next", next);
      console.log("action", action);
      next(action); //Cho phép đi lên reducer
    };
  };
};
