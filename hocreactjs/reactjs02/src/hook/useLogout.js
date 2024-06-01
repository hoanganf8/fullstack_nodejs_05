import { useDispatch } from "../store/hook";

export const useLogout = () => {
  const dispatch = useDispatch();
  return {
    logout: () => {
      localStorage.removeItem("login_token");
      dispatch({ type: "auth/set_user", payload: false });
      dispatch({ type: "auth/set_user_profile", payload: {} });
    },
  };
};
