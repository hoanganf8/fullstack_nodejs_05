import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from "redux";
import { thunk } from "redux-thunk";
import { counterReducer } from "./reducers/counterReducer";
import { loggerMiddleware } from "./middlewares/loggerMiddleware";
import { todoReducer } from "./reducers/todoReducer";

const rootReducer = combineReducers({
  counter: counterReducer,
  todo: todoReducer,
});

const middlewares = [thunk, loggerMiddleware];

export const store = createStore(rootReducer, applyMiddleware(...middlewares));
