"use client"
import { useState } from 'react';

export default function Chat() {
  const [messages, setMessages] = useState([
    { id: 1, text: 'سلام من هرکاری میکنم نمیتونم رسید پرداختو بارگذاری کنم و خطا میده باید چیکار کنم؟؟؟', sender: 'user' },
    { id: 2, text: 'سلام، لطفا مطمئن شوید که فایل شما در قالب درست است.', sender: 'opposite' }
  ]);
  const [newMessage, setNewMessage] = useState('');

  const handleSend = () => {
    if (newMessage.trim()) {
      setMessages([...messages, { id: messages.length + 1, text: newMessage, sender: 'user' }]);
      setNewMessage('');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-lg border-2 border-blue-100 rounded-lg overflow-hidden bg-white">
        <div className="bg-blue-100 p-4 flex items-center border-b-2 border-blue-200">
          <img src="/profile-pic.jpg" alt="Profile Picture" className="w-10 h-10 rounded-full ml-4" />
          <span className="font-bold text-lg">امیر فنیری</span>
        </div>
        <div className="p-4 h-96 overflow-y-auto">
          {messages.map(message => (
            <div key={message.id} className={`mb-4 flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
              <p className={`p-3 rounded-lg inline-block max-w-4/5 ${message.sender === 'user' ? 'bg-blue-100' : 'bg-gray-100'}`}>
                {message.text}
              </p>
              {message.sender === 'opposite' && (
                <img src="/opposite-profile-pic.jpg" alt="Opposite Profile Picture" className="w-8 h-8 rounded-full mr-2" />
              )}
            </div>
          ))}
        </div>
        <div className="p-4 border-t-2 border-blue-200 bg-white flex">
          <input
            type="text"
            className="flex-grow p-3 border rounded-l-full border-blue-100"
            placeholder="تایپ کنید"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
          />
          <button
            className="bg-blue-500 text-white p-3 rounded-r-full"
            onClick={handleSend}
          >
            ارسال
          </button>
        </div>
      </div>
    </div>
  );
}
