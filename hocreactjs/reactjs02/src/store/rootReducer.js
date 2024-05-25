export const initialState = {
  todoList: [],
  count: 0,
};
export const rootReducer = (state, action) => {
  switch (action.type) {
    case "todo/add":
      return { ...state, todoList: [...state.todoList, action.payload] };
    case "todo/delete":
      return {
        ...state,
        todoList: state.todoList.filter((_, index) => index !== action.payload),
      };
    case "todo/completed":
      return {
        ...state,
        todoList: state.todoList.map((todo, index) => {
          if (index === action.payload.index) {
            todo.completed = action.payload.status;
          }
          return todo;
        }),
      };
    case "counter/increment":
      return { ...state, count: state.count + 1 };
    default:
      return state;
  }
};
