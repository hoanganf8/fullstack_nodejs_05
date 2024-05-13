import React from "react";
import PropTypes from "prop-types";

export default function HeaderInner({ title, onGetData }) {
  console.log(title);
  return (
    <>
      <h3>Header F8</h3>
      <h4>Học lập trình không khó</h4>
    </>
  );
}

HeaderInner.propTypes = {
  title: PropTypes.string.isRequired,
  onGetData: PropTypes.func,
};

/*
PropTypes.array,
PropTypes.bool,
PropTypes.func,
PropTypes.number,
PropTypes.object,
PropTypes.string,
PropTypes.symbol,
PropTypes.node,
PropTypes.element,
PropTypes.elementType
*/
