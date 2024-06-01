export const authState = {
  isAuthenticated: false,
  user: {},
  isLoading: true,
};

export const authReducer = (state, action) => {
  switch (action.type) {
    case "auth/set_user":
      return { ...state, isAuthenticated: action.payload ?? true };
    case "auth/set_user_profile":
      return { ...state, user: action.payload };
    case "auth/set_user_loading":
      return { ...state, isLoading: action.payload };
    default:
      return state;
  }
};
