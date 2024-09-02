
// import React, { useState } from 'react';
// import Image from 'next/image';
// import backImage from '@/src/app/assent/Img/adminPanel/back.svg';
// import ChekedLoanAplicationTable from '@/src/app/components/AdminPage/ChekedLoanAplicationTable';
// import RoutRequestLoan from './RoutRequestLoan';
// import SwichButton from './SwichButton';

// interface User {
//   name: string;
//   requestNumber: number;
//   amount: string;
//   date: string;
//   type: 'ضروری' | 'معمولی';
//   guarantors: string[];
//   description: string;
// }

// const users: User[] = [
//   {
//     name: "کتی سپهری",
//     requestNumber: 3,
//     amount: "50,000,000 تومان",
//     date: "1404/03/17",
//     type: "ضروری",
//     guarantors: ["حامد رحمانی"],
//     description: "برای خرج عروسی و مراسم ازدواج نیاز دارم و حتما باید چک‌های تالارو پاس کنم. بد گریم آقای فیضی اگه میشه تایید کنید."
//   },
//   {
//     name: "ابراهیم علی نیا",
//     requestNumber: 2,
//     amount: "30,000,000 تومان",
//     date: "1404/01/16",
//     type: "ضروری",
//     guarantors: ["حامد رحمانی"],
//     description: "برای عمل قلب باز پدرم می‌خوام اوضاع خیلی بریخته ممکنه جونشو از دست بده هیچکسیم نداره قرض بگیریم لطفا وام این ماهو برای من در نظر بگیرید."
//   },
//   {
//     name: "مینا فیضی",
//     requestNumber: 3,
//     amount: "50,000,000 تومان",
//     date: "1404/03/17",
//     type: "معمولی",
//     guarantors: ["حامد رحمانی"],
//     description: "برای خرج عروسی و مراسم ازدواج نیاز دارم و حتما باید چک‌های تالارو پاس کنم. بد گریم آقای فیضی اگه میشه تایید کنید."
//   },
// ];

// const RequestLoan: React.FC = () => {
//   const [isUrgent, setIsUrgent] = useState<boolean>(false);

//   const filteredUsers = users.filter(user => isUrgent ? user.type === 'ضروری' : user.type === 'معمولی');

//   return (
//     <div>
//       <div className='flex justify-between items-center mb-2 mt-10 mr-3'>
//         <div className='mr-2'>
//           <p className='font-bold text-lg'>
//             درخواست وام
//           </p>
//         </div>
//         <div>
//           <a href="#" className='flex items-center ml-7'>
//             بازگشت
//             <Image
//               src={backImage}
//               width={38}
//               height={38}
//               alt='arrow'
//             />
//           </a>
//         </div>
//       </div>
//       <div className='flex gap-[47%] items-center'>
//         <div>
//           <RoutRequestLoan />
//         </div>
//         <div>
//           <SwichButton setIsUrgent={setIsUrgent} />
//         </div>
//       </div>
//       <div className='mt-4'>
//         <ChekedLoanAplicationTable users={filteredUsers} />
//       </div>
//     </div>
//   );
// };

// export default RequestLoan;



import React, { useState } from 'react';
import Image from 'next/image';
import axios from 'axios';
import { useQuery, QueryClient, QueryClientProvider } from 'react-query';
import backImage from '@/src/app/assent/Img/adminPanel/back.svg';
import ChekedLoanAplicationTable from '@/src/app/components/AdminPage/ChekedLoanAplicationTable';
import RoutRequestLoan from './RoutRequestLoan';
import SwichButton from './SwichButton';

interface User {
  name: string;
  requestNumber: number;
  amount: string;
  date: string;
  type: 'ضروری' | 'معمولی';
  guarantors: string[];
  description: string;
}


const queryClient = new QueryClient();

const LoanRequestComponent: React.FC = () => {
  const [isUrgent, setIsUrgent] = useState<boolean>(false);


  const authToken = typeof window !== 'undefined' ? localStorage.getItem('authToken') : null;


  const fetchUsers = async () => {
    if (!authToken) {
      throw new Error('توکن احراز هویت یافت نشد.');
    }

    try {
      const response = await axios.post(
        'https://mohammadelia30.ir/shabab/api/loans/show/admin',
        {
          count: 'checked',
        },
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
            'Content-Type': 'application/json',
          },
        }
      );

   
      console.log('وضعیت پاسخ:', response.status);
      console.log('داده‌های دریافت‌شده:', response.data);

      return response.data;
    } catch (error) {
      console.error('خطا در دریافت داده‌ها:', error);
      throw error;
    }
  };

  const { data, isLoading, error } = useQuery('users', fetchUsers);

  console.log("داده‌های دریافت‌شده از React Query:", data);

  if (isLoading){
    return(
      <div>
      <div className='flex justify-between items-center mb-2 mt-10 mr-3'>
        <div className='mr-2'>
          <p className='font-bold text-lg'>
            درخواست وام
          </p>
        </div>
        <div>
          <a href="#" className='flex items-center ml-7'>
            بازگشت
            <Image
              src={backImage}
              width={38}
              height={38}
              alt='arrow'
            />
          </a>
        </div>
      </div>
      <div className='flex gap-[47%] items-center'>
        <div>
          <RoutRequestLoan />
        </div>
        <div>
          <SwichButton setIsUrgent={setIsUrgent} />
        </div>
      </div>
      <div className='mt-4'>
      <ChekedLoanAplicationTable users={data} />
      <div className='flex justify-center items-center -mt-5'>
          <span className="loading loading-dots text-accent loading-lg"></span>
        </div>
      </div>
    </div>
    )
  };
  if (error) {
    return(
      <div>
      <div className='flex justify-between items-center mb-2 mt-10 mr-3'>
        <div className='mr-2'>
          <p className='font-bold text-lg'>
            درخواست وام
          </p>
        </div>
        <div>
          <a href="#" className='flex items-center ml-7'>
            بازگشت
            <Image
              src={backImage}
              width={38}
              height={38}
              alt='arrow'
            />
          </a>
        </div>
      </div>
      <div className='flex gap-[47%] items-center'>
        <div>
          <RoutRequestLoan />
        </div>
        <div>
          <SwichButton setIsUrgent={setIsUrgent} />
        </div>
      </div>
      <div className='mt-4'>
        <ChekedLoanAplicationTable users={data} />
      </div>
      <p>خطایی رخ داده است: {(error as Error).message}</p>
    </div>
    )
  } ;

  return (
    <div>
      <div className='flex justify-between items-center mb-2 mt-10 mr-3'>
        <div className='mr-2'>
          <p className='font-bold text-lg'>
            درخواست وام
          </p>
        </div>
        <div>
          <a href="#" className='flex items-center ml-7'>
            بازگشت
            <Image
              src={backImage}
              width={38}
              height={38}
              alt='arrow'
            />
          </a>
        </div>
      </div>
      <div className='flex gap-[47%] items-center'>
        <div>
          <RoutRequestLoan />
        </div>
        <div>
          <SwichButton setIsUrgent={setIsUrgent} />
        </div>
      </div>
      <div className='mt-4'>
        <ChekedLoanAplicationTable users={data} />
      </div>
    </div>
  );
};

const RequestLoan: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <LoanRequestComponent />
    </QueryClientProvider>
  );
};

export default RequestLoan;
