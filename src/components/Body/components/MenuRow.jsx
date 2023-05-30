import React from 'react';

const MenuRow = ({ title, iconClass, onClick }) => {
  return (
    <button
      className="flex items-center justify-between h-12 py-2 border-b border-gray-300 w-full bg-transparent"
      onClick={onClick}
    >
      <div className="flex items-center">
        <i className={`${iconClass} w-6`}></i>
        <p className="text-base font-normal text-left ml-3">{title}</p>
      </div>
      <i className="fas fa-chevron-right text-gray-500 cursor-pointer"></i>
    </button>
  );
};

export default MenuRow;
