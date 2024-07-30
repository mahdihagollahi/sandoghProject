import React from 'react';

const Modal = ({ isVisible, children }) => {
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center">
      <div className="bg-white rounded-lg relative">
      
        {children}
      </div>
    </div>
  );
};

export default Modal;
