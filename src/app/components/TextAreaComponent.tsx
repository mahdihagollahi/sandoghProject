import React from 'react';

const TextAreaComponent = ({onClose}) => {
  return (
    <div className="w-full mx-auto  flex flex-col gap-3 pb-3 rounded-lg shadow-md">
      <textarea
        className="w-[600px] h-[228px] p-4  border border-gray-300 rounded-md text-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
        placeholder="متن خود را بنویسید ..."
        dir="rtl"
      ></textarea>
      <button className="w-20 mr-3 p-2 bg-teal-400 text-white rounded-md text-lg hover:bg-teal-500"
      onClick={onClose}
      >
        ارسال
      </button>
    </div>
  );
};

export default TextAreaComponent;