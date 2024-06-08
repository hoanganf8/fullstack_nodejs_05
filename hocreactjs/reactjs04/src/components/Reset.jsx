import PropTypes from "prop-types";
import { memo } from "react";
const Reset = memo(function Reset({ onClick }) {
  //   console.log("reset render");
  return <button onClick={onClick}>Xóa lịch sử</button>;
});

Reset.propTypes = {
  onClick: PropTypes.func,
};

export default Reset;
