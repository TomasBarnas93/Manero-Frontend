import React from 'react'
import { NavLink } from 'react-router-dom';

const Icon = (props) => {


  return (

      <NavLink
        to={props.to}
        className={`${props.button} rounded-3xl text-center`}
      >
        <i className={`${props.icon}`}></i>
      </NavLink>
    
  );
}

export default Icon