// import React, { useState } from 'react';
// import { useMutation, QueryClient, QueryClientProvider } from 'react-query';
// import axios , { AxiosError } from 'axios';
// import backImage from '@/src/app/assent/Img/adminPanel/back.svg';
// import Image from 'next/image';


// const queryClient = new QueryClient();

// interface TextAreaComponentProps {
//   userId: string;
//   onClose?: () => void;
//   onSend: (message: string) => void;
// }

// const ModalRejectLoans: React.FC<TextAreaComponentProps> = ({
//   userId,
//   onClose,
//   onSend,
// }) => {
//   const [message, setMessage] = useState<string>('');
//   const [errorMessage, setErrorMessage] = useState<string | null>(null); // Store server error
//   const [isLoading, setIsLoading] = useState<boolean>(false);


//   const mutation = useMutation(
//     async (loanData: {
//       loan_id: number;
//       admin_accept: 'accepted' | 'faild';
//       installment_count: number;
//       loan_price: number;
//     }) => {
//       const authToken = localStorage.getItem('authToken');
//       if (!authToken) {
//         throw new Error('No auth token found');
//       }

//       const response = await axios.post(
//         'https://mohammadelia30.ir/shabab/api/loans/accept/admin',
//         loanData,
//         {
//           headers: {
//             Authorization: `Bearer ${authToken}`,
//           },
//         }
//       );
//       return response.data;
//     },
//     {
//       onSuccess: (data) => {
//         console.log('API response:', data);
//         onSend(message); 
//         setMessage('');
//         if (onClose) {
//           onClose();
//         }
//       },
//       onError: (error) => {
//         const axiosError = error as AxiosError;
//         setErrorMessage(
//           axiosError.response?.data?.message || 'خطا در اتصال به سرور. لطفا دوباره تلاش کنید.'
//         ); 
//         console.error('Failed to send loan rejection:', error);
//       },
//       onSettled: () => {
//         setIsLoading(false);
//       },
//     }
//   );

//   const handleSendClick = () => {
//     setIsLoading(true);
//     setErrorMessage(null); 
//     try {
//       mutation.mutate({
//         loan_id: 42,
//         admin_accept: 'faild', 
//         installment_count: 17,
//         loan_price: 850000,
//       });
//     } catch (error) {
//       console.error('Error initiating API request:', error);
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
//       <div className="w-[600px] bg-white rounded-lg shadow-lg p-4">
//         <div className="flex justify-end mb-2">
//           <button onClick={onClose} className="flex items-center">
//             بازگشت
//             <Image src={backImage} width={38} height={38} alt="arrow" />
//           </button>
//         </div>
//         <textarea
//           className="w-full h-[228px] p-4 border border-gray-300 rounded-md text-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
//           placeholder="متن خود را بنویسید ..."
//           dir="rtl"
//           value={message}
//           onChange={(e) => setMessage(e.target.value)}
//           disabled={isLoading}
//         ></textarea>
        
       
//         {errorMessage && (
//           <div className="text-red-500 mt-2">
//             {errorMessage}
//           </div>
//         )}
        
//         <div className="flex justify-end mt-4">
//           <button
//             className="w-20 p-2 bg-teal-400 text-white rounded-md text-lg hover:bg-teal-500"
//             onClick={handleSendClick}
//             disabled={isLoading}
//           >
//             {isLoading ? 'در حال ارسال...' : 'ارسال'}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };


// const ModalRejectLoansWithProvider: React.FC<TextAreaComponentProps> = (props) => {
//   return (
//     <QueryClientProvider client={queryClient}>
//       <ModalRejectLoans {...props} />
//     </QueryClientProvider>
//   );
// };

// export default ModalRejectLoansWithProvider;

import React, { useState } from 'react';
import { useMutation, QueryClient, QueryClientProvider } from 'react-query';
import axios, { AxiosError } from 'axios'; // Import AxiosError
import backImage from '@/src/app/assent/Img/adminPanel/back.svg';
import Image from 'next/image';

const queryClient = new QueryClient();

interface TextAreaComponentProps {
  userId: string;
  onClose?: () => void;
  onSend: (message: string) => void;
}

interface ErrorResponse {
  message: string;
}

const ModalRejectLoans: React.FC<TextAreaComponentProps> = ({
  userId,
  onClose,
  onSend,
}) => {
  const [message, setMessage] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string | null>(null); // Store server error
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const mutation = useMutation(
    async (loanData: {
      loan_id: number;
      admin_accept: 'accepted' | 'faild';
      installment_count: number;
      loan_price: number;
    }) => {
      const authToken = localStorage.getItem('authToken');
      if (!authToken) {
        throw new Error('No auth token found');
      }

      const response = await axios.post(
        'https://mohammadelia30.ir/shabab/api/loans/accept/admin',
        loanData,
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        }
      );
      return response.data;
    },
    {
      onSuccess: (data) => {
        console.log('API response:', data);
        onSend(message); 
        setMessage('');
        if (onClose) {
          onClose();
        }
      },
      onError: (error) => {
        const axiosError = error  as AxiosError<ErrorResponse>; 
        setErrorMessage(
          axiosError.response?.data?.message || 'خطا در اتصال به سرور. لطفا دوباره تلاش کنید.'
        ); 
        console.error('Failed to send loan rejection:', error);
      },
      onSettled: () => {
        setIsLoading(false);
      },
    }
  );

  const handleSendClick = () => {
    setIsLoading(true);
    setErrorMessage(null); 
    try {
      mutation.mutate({
        loan_id: 42,
        admin_accept: 'faild', 
        installment_count: 17,
        loan_price: 850000,
      });
    } catch (error) {
      console.error('Error initiating API request:', error);
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
      <div className="w-[600px] bg-white rounded-lg shadow-lg p-4">
        <div className="flex justify-end mb-2">
          <button onClick={onClose} className="flex items-center">
            بازگشت
            <Image src={backImage} width={38} height={38} alt="arrow" />
          </button>
        </div>
        <textarea
          className="w-full h-[228px] p-4 border border-gray-300 rounded-md text-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="متن خود را بنویسید ..."
          dir="rtl"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          disabled={isLoading}
        ></textarea>
        
       
        {errorMessage && (
          <div className="text-red-500 mt-2">
            {errorMessage}
          </div>
        )}
        
        <div className="flex justify-end mt-4">
          <button
            className="w-20 p-2 bg-teal-400 text-white rounded-md text-lg hover:bg-teal-500"
            onClick={handleSendClick}
            disabled={isLoading}
          >
            {isLoading ? 'در حال ارسال...' : 'ارسال'}
          </button>
        </div>
      </div>
    </div>
  );
};

const ModalRejectLoansWithProvider: React.FC<TextAreaComponentProps> = (props) => {
  return (
    <QueryClientProvider client={queryClient}>
      <ModalRejectLoans {...props} />
    </QueryClientProvider>
  );
};

export default ModalRejectLoansWithProvider;
