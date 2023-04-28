import React from 'react'

const Icon = (props) => {



  return (
    <button
      className={`${props.button} hover:bg-slate-300 rounded-3xl text-center`}
    >
      <i className={`${props.icon}`}></i>
    </button>
  );
}

export default Icon