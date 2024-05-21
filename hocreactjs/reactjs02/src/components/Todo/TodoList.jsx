import PropTypes from "prop-types";
export default function TodoList({ todoList }) {
  return (
    <div>
      <ul>
        {todoList.map(({ name, completed }, index) => (
          <li className={`${completed ? "completed" : ""}`} key={index}>
            <input type="checkbox" /> {name} <button>&times;</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
TodoList.propTypes = {
  todoList: PropTypes.array.isRequired,
};
