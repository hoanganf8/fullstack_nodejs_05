//Tạo hook để đọc state từ Global
import { useContext } from "react";
import { ProviderContext } from "./Provider";
export const useSelector = (callback) => {
  if (typeof callback !== "function") {
    throw new Error("Callback phải là function");
  }
  const { state } = useContext(ProviderContext);
  return callback(state);
};

export const useDispatch = () => {
  const { dispatch } = useContext(ProviderContext);
  return dispatch;
};
