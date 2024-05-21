import { useState } from "react";
import PropTypes from "prop-types";
export default function TodoAdd({ onSubmit }) {
  const [name, setName] = useState("");
  const handleChangeValue = (e) => {
    setName(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(name); //Gọi prop onSubmit để đẩy dữ liệu từ TodoAdd sang Todo
  };
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input type="text" placeholder="Name..." onChange={handleChangeValue} />
        <button>Add</button>
      </form>
    </div>
  );
}
TodoAdd.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
