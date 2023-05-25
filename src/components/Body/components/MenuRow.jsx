import React from 'react';

const MenuRow = ({ title, icon }) => {
  return (
    <div className="flex items-center justify-between h-12 py-2 border-b border-gray-300 w-full">
      <p className="text-base font-normal text-left ml-4">{title}</p>
    </div>
  );
};

export default MenuRow;
