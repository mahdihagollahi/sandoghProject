import React from 'react';

const Modal = ({ isVisible, children }) => {
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center z-50">
      <div className=" rounded-lg bg-white shadow-lg p-6 relative">
        {children}
      </div>
    </div>
  );
};

export default Modal;
