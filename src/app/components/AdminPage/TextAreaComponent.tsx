// import React, { useState } from 'react';

// interface TextAreaComponentProps {
//   onClose?: () => void;
//   onSend: (message: string) => void;
// }

// const TextAreaComponent: React.FC<TextAreaComponentProps> = ({ onClose, onSend }) => {
//   const [message, setMessage] = useState<string>('');

//   const handleSendClick = () => {
//     onSend(message);
//   };
//   return (
//     <div className="w-full mx-auto  flex flex-col gap-3 pb-3 rounded-lg shadow-md">
//       <textarea
//         className="w-[600px] h-[228px] p-4 border border-gray-300 rounded-md text-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
//         placeholder="متن خود را بنویسید ..."
//         dir="rtl"
//         value={message}
//         onChange={(e) => setMessage(e.target.value)}
//       ></textarea>
//       <button
//         className="w-20 mr-3 p-2 bg-teal-400 text-white rounded-md text-lg hover:bg-teal-500"
//         onClick={handleSendClick}
//       >
//         ارسال
//       </button>
//     </div>
//   );
// };

// export default TextAreaComponent;


import React, { useState } from 'react';
import { useMutation, QueryClient, QueryClientProvider } from 'react-query';
import axios from 'axios';

interface TextAreaComponentProps {
  userId: string;
  onClose?: () => void;
  onSend: (message: string) => void;
}

// کامپوننت اصلی TextAreaComponent
const TextAreaComponent: React.FC<TextAreaComponentProps> = ({ userId, onClose, onSend }) => {
  const [message, setMessage] = useState<string>('');

  // تعریف mutation برای ارسال درخواست POST
  const mutation = useMutation((newMessage: string) => {
    return axios.post('https://mohammadelia30.ir/shabab/api/messages/create/admin', {
      user_id: userId,  // استفاده از user_id
      message: newMessage,
      type: 'unsystematic',  // مقدار ثابت برای type
      description: 'Your description here'  // مقدار ثابت برای description
    });
  });

  const handleSendClick = () => {
    mutation.mutate(message, {
      onSuccess: () => {
        onSend(message);
        setMessage('');  // پاک کردن textarea پس از ارسال پیام
      },
      onError: (error) => {
        console.error("Failed to send message:", error);
      }
    });
  };

  return (
    <div className="w-full mx-auto flex flex-col gap-3 pb-3 rounded-lg shadow-md">
      <textarea
        className="w-[600px] h-[228px] p-4 border border-gray-300 rounded-md text-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
        placeholder="متن خود را بنویسید ..."
        dir="rtl"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      ></textarea>
      <button
        className="w-20 mr-3 p-2 bg-teal-400 text-white rounded-md text-lg hover:bg-teal-500"
        onClick={handleSendClick}
      >
        ارسال
      </button>
    </div>
  );
};

// تابع کمکی که کامپوننت را با QueryClientProvider محصور می‌کند
export function WrappedTextAreaComponent(props: TextAreaComponentProps) {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <TextAreaComponent {...props} />
    </QueryClientProvider>
  );
}

export default TextAreaComponent;

