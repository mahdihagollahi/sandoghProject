import React, { useState } from 'react';
import axios from 'axios';
import backImage from "@/src/app/assent/Img/adminPanel/back.svg";
import Image from "next/image";


interface TextAreaComponentProps {
  userId: string;
  onClose?: () => void;
  onSend: (message: string) => void;
}

const TextAreaComponent: React.FC<TextAreaComponentProps> = ({ userId, onClose, onSend }) => {
  const [message, setMessage] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSendClick = async () => {
    setIsLoading(true);
    try {
      await axios.post('https://mohammadelia30.ir/shabab/api/messages/create/admin', {
        user_id: userId,  
        message: message,
        type: 'unsystematic', 
        description: 'Your description here'  
      });
      onSend(message);
      setMessage(''); 
    } catch (error) {
      console.error("Failed to send message:", error);
    } finally {
      setIsLoading(false);
      if (onClose) {
        onClose();  
      }
    }
  };

  return (
    <div className="w-full mx-auto flex flex-col gap-3 pb-3 rounded-lg shadow-md">
            <div className="flex justify-end mr-2 cursor-pointer" onClick={onClose}>
           
              <div className="flex items-center" >
                بازگشت
                <Image src={backImage} width={38} height={38} alt="arrow" />
              </div>
         
          </div>
      <textarea
        className="w-[600px] h-[228px] p-4 border border-gray-300 rounded-md text-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
        placeholder="متن خود را بنویسید ..."
        dir="rtl"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        disabled={isLoading}
      ></textarea>
      <button
        className="w-20 mr-3 p-2 bg-teal-400 text-white rounded-md text-lg hover:bg-teal-500"
        onClick={handleSendClick}
        disabled={isLoading}
      >
        {isLoading ? 'در حال ارسال...' : 'ارسال'}
      </button>
    </div>
  );
};

export default TextAreaComponent;
