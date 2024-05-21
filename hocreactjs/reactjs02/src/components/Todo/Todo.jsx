import { useReducer } from "react";
import TodoAdd from "./TodoAdd";
import TodoList from "./TodoList";
import { initialState, reducer } from "../../utils/reducer";

export default function Todo() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { todoList } = state;
  const handleAddTodo = (todoName) => {
    //Quy ước mỗi todo là 1 object
    /*
   {
    name: 'Tên todo',
    completed: 'Trạng thái todo'
   }
   */
    const todo = {
      name: todoName,
      completed: true,
    };
    dispatch({
      type: "todo/add",
      payload: todo,
    });
  };
  return (
    <div>
      <TodoList todoList={todoList} />
      <TodoAdd onSubmit={handleAddTodo} />
    </div>
  );
}
