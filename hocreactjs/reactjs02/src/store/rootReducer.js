import { combineReducers } from "./core";
import { todoReducer, todoState } from "./reducers/todoReducer";
import { counterState, couterReducer } from "./reducers/counterReducer";
import { authReducer, authState } from "./reducers/authReducer";

export const rootReducer = combineReducers({
  counter: couterReducer,
  todo: todoReducer,
  auth: authReducer,
});

export const initialState = {
  todo: todoState,
  counter: counterState,
  auth: authState,
};

//Mục tiêu: Có được 1 hàm reducer sau khi đã nối và 1 object initialState sau khi đã nối
//Để phân biệt reducer này với reducer kia cần đặt 1 key

/*
- ReducerA và stateA
- ReducerB và stateB
- ReducerC và stateC

=> rootReducer và rootInitalState = ReducerA và stateA + ReducerB và stateB ReducerC và stateC
*/
