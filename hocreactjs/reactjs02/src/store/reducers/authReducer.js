export const authState = {
  isAuthenticated: false,
};

export const authReducer = (state, action) => {
  switch (action.type) {
    case "auth/set_user":
      return { ...state, isAuthenticated: true };
    default:
      return state;
  }
};
