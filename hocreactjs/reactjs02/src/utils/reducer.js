export const reducer = (state, action) => {
  //state: Lưu trữ các prevState (prevValue)
  //action: Object mô tả hành động (currentValue)
  /*
    {
      type: 'ten_action',
      payload: 'dữ liệu cần gửi lên reducer'
    }
    */
  switch (action.type) {
    case "counter/increment":
      return { ...state, count: state.count + action.payload };

    case "counter/decrement":
      return { ...state, count: state.count - action.payload };
    case "todo/add":
      return {
        ...state,
        todoList: [...state.todoList, action.payload],
      };
  }
};

export const initialState = {
  count: 0,
  todoList: [],
};
