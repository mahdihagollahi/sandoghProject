"use client"
import React, { useState } from 'react';

const SwichButton = ({ setIsUrgent }) => {
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => {
    setIsOn(prevState => {
      const newIsOn = !prevState;
      setIsUrgent(newIsOn);  // ارسال وضعیت جدید به والد
      return newIsOn;
    });
  };

  return (
    <div className='flex items-center mt-9'>
      <p className='text-[#000000] font-normal dark:text-white ml-3'>{isOn ? 'ضروری' : 'معمولی'}</p>
      <div
        className={`w-16 h-10 flex items-center rounded-full p-1 cursor-pointer transition-colors duration-300  ${
          isOn ? 'bg-[#409981]' : 'bg-teal-100'
        }`}
        onClick={toggleSwitch}
      >
        <div
          className={`bg-white w-6 h-6 rounded-full shadow-md transform transition-transform duration-300 ${
            isOn ? '-translate-x-8' : 'translate-x-0'
          }`}
        ></div>
      </div>
    </div>
  );
};

export default SwichButton;
