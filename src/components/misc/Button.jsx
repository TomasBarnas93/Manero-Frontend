import React from "react";
import { NavLink } from "react-router-dom";

const Button = (props) => {
  return (
    <NavLink to={props.to}>
      <button className={`rounded-3xl bg-white text-black p-2 hover:bg-cyan-50 ${props.classes}`}>
        {props.text}
      </button>
    </NavLink>
  );
};

export default Button;
