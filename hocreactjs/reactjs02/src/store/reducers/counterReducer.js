export const counterState = {
  count: 0,
};
export const couterReducer = (state, action) => {
  switch (action.type) {
    case "counter/increment":
      return { ...state, count: state.count + 1 };
    default:
      return state;
  }
};
