import React from 'react'
//behöver mer tailwind css!
const InputBox = ({ label, type, id, placeholder, value, onChange, required }) => {
  return (
    <div className="w-1/2 mx-auto mb-4">
    <label className="block font-medium text-gray-700 mb-1">{label}</label>
    <input
      className="form-input w-full px-4 py-2 rounded border-gray-400 border-2 focus:border-blue-500 focus:outline-none"
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