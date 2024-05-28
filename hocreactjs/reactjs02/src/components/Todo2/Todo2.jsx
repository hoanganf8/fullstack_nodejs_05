import { useState } from "react";
import {
  addTodo,
  deleteTodo,
  completedTodo,
} from "../../store/actions/todoActions";
import { useSelector, useDispatch } from "../../store/hook";
import "./Todo.scss";

export default function Todo2() {
  const todoList = useSelector((state) => state.todo.todoList);
  const todoListCompleted = useSelector((state) =>
    state.todo.todoList.filter((todo) => todo.completed)
  );
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const handleChangeValue = (e) => {
    setName(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const todo = {
      name,
      completed: false,
    };
    dispatch(addTodo(todo));
    setName("");
  };
  const handleDelete = (index) => {
    if (window.confirm("Bạn có chắc?")) {
      dispatch(deleteTodo(index));
    }
  };
  const handleMarkCompleted = (index, status) => {
    dispatch(completedTodo(index, status));
  };
  return (
    <div>
      <ul>
        {todoList.map(({ name, completed }, index) => (
          <li className={`${completed ? "completed" : ""}`} key={index}>
            <input
              type="checkbox"
              onChange={(e) => handleMarkCompleted(index, e.target.checked)}
            />
            <span>{name}</span>
            <button onClick={() => handleDelete(index)}>&times;</button>
          </li>
        ))}
      </ul>
      <h3>Đã hoàn thành: {todoListCompleted.length}</h3>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Tên..."
          onChange={handleChangeValue}
          value={name}
        />
        <button>Thêm</button>
      </form>
    </div>
  );
}
