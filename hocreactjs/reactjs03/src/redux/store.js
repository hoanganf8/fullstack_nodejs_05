import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from "redux";
import { counterReducer } from "./reducers/counterReducer";
import { loggerMiddleware } from "./middlewares/loggerMiddleware";

const rootReducer = combineReducers({
  counter: counterReducer,
});

export const store = createStore(
  rootReducer,
  applyMiddleware(loggerMiddleware)
);
