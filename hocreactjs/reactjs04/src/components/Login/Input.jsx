import PropTypes from "prop-types";
import { useId } from "react";
export default function Input({ label, type = "text", name, value }) {
  const id = useId();
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        id={id}
        name={name}
        placeholder={`${label}...`}
        defaultValue={value}
      />
    </div>
  );
}

Input.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
};
