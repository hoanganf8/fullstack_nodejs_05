import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodos } from "./redux/middlewares/fetchTodos";

export default function App() {
  const dispatch = useDispatch();
  const todoList = useSelector((state) => state.todo.todoList);
  useEffect(() => {
    dispatch(fetchTodos()); //dispatch lên middleware (thunk)
  }, []);
  return (
    <div>
      {todoList.map(({ id, title }) => (
        <h4 key={id}>{title}</h4>
      ))}
    </div>
  );
}
