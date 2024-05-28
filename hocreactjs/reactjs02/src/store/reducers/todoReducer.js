export const todoState = {
  todoList: [],
};

export const todoReducer = (state, action) => {
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
    default:
      return state;
  }
};
