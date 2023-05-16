import React from 'react'
import { NavLink } from 'react-router-dom';

const Icon = (props) => {

  return (

      <NavLink
        to={props.to}
        className={`${props.button} ${props.active===props.to ? "bg-gray-200" : ""} rounded-3xl text-center inline-block }`}
      >
        <i className={`${props.icon}`}></i>
      </NavLink>
    
  );
}

export default Icon