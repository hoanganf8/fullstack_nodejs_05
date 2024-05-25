//Action Creator
// ==> Hàm trả về actionObject

export const addTodo = (todo) => {
  return {
    type: "todo/add",
    payload: todo,
  };
};

export const deleteTodo = (index) => {
  return {
    type: "todo/delete",
    payload: index,
  };
};

export const completedTodo = (index, status) => {
  return {
    type: "todo/completed",
    payload: {
      index,
      status,
    },
  };
};
