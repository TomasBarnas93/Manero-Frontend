import React from 'react';

const SignoutConfirm = ({ onConfirm, onCancel }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="w-80 h-80 flex items-center justify-center">
        <div className="relative w-72 h-72 rounded-full flex flex-col items-center justify-center">
          <div className="absolute w-80 h-80 rounded-full bg-transparent flex items-center justify-center border-8 border-white"></div>
          <div className="absolute w-64 h-64 rounded-full bg-white flex flex-col items-center justify-center border-10 border-white">
            <div className="relative h-14 mt-15">
              <div className="absolute left-1/2 top-0 bg-black w-[1px] h-full"></div>
            </div>
            <h2 className="text-l font-semibold mb-3 text-black text-center break-words"> Are you sure you<br /> want to sign out?</h2>
            <div className="flex flex-col items-center space-y-4">
              <button className="w-24 py-2 bg-black text-white rounded-md" onClick={onConfirm}>SURE</button>
              <button className="w-24 py-2 bg-white text-black rounded-md" onClick={onCancel}>CANCEL</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignoutConfirm;
