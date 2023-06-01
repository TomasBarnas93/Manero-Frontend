import React from 'react'

const InputBox = ({ label, type, id, placeholder, value, onChange, required, classes }) => {
  return (
  <div className="w-100 mx-auto mb-4 relative px-2 mt-8">
    <label className="block font-medium text-gray-700 mb-1 absolute -top-4 left-5 bg-white px-2 z-5">{label}</label>
    <input
      className={`form-input w-full px-4 py-2 rounded-3xl border-gray-200 border-2 focus:border-blue-500 focus:outline-none ${classes}`}
      id={id}
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required={required}
    />
  </div>
  )
}

export default InputBox;