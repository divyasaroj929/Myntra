import React from "react";

const PropinputBtn = (props) => {
  return (
    <input
      type={props.type}
      className={props.className}
      value={props.value}
      onClick={props.onClick}
    />
  );
};

export default PropinputBtn;
