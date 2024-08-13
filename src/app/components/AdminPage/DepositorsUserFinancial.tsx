// import React from 'react';
// import UserTableDespositors from '@/src/app/components/AdminPage/UserTableDespositors';
// import Image from 'next/image';
// import backImage from '@/src/app/assent/Img/adminPanel/back.svg';
// import RoutTableFiancial from './RoutTableFinancial';
// import Link from 'next/link';
// import axios from 'axios';
// import { useMutation, useQueryClient } from '@tanstack/react-query';

// interface User {
//   id: number;
//   name: string;
//   joinDate: string;
//   loans: string;
//   depositAmount: string;
// }

// const users: User[] = [
//   // داده‌های فیک
// ];

// const DepositorsUserFinancial: React.FC = () => {
//   const queryClient = useQueryClient();

//   // تابع برای ارسال درخواست PUT
//   const updateUser = async (id: number, data: any) => {
//     const response = await axios.put(`https://shabab.v1r.ir/api/factors/index/${id}`, data, {
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     });
//     return response.data;
//   };

//   // استفاده از useMutation برای آپدیت کردن داده‌ها
//   const mutation = useMutation({
//     mutationFn: (updatedUser: User) => updateUser(updatedUser.id, updatedUser),
//     onSuccess: () => {
//       queryClient.invalidateQueries(['users']);
//     },
//   });

//   const handleUpdate = (user: User) => {
//     mutation.mutate(user);
//   };

//   return (
//     <div>
//       <div className='flex gap-[74%] items-center mb-2 mt-10 mr-3'>
//         <div className='mr-2'>
//           <p className='font-bold text-lg'>مدیریت مالی</p>
//         </div>
//         <div className='flex justify-end mr-2'>
//           <Link href="/showuserdetail">
//             <div className='flex items-center'>
//               بازگشت
//               <Image src={backImage} width={38} height={38} alt='arrow' />
//             </div>
//           </Link>
//         </div>
//       </div>
//       <div>
//         <RoutTableFiancial />
//       </div>
//       <UserTableDespositors users={users}  />
//     </div>
//   );
// };

// export default DepositorsUserFinancial;


import React from 'react';
import UserTableDespositors from '@/src/app/components/AdminPage/UserTableDespositors';
import Image from 'next/image';
import backImage from '@/src/app/assent/Img/adminPanel/back.svg';
import RoutTableFiancial from './RoutTableFinancial';
import Link from 'next/link';
import axios from 'axios';
import { useMutation, useQueryClient } from '@tanstack/react-query';

interface User {
  id: number;
  name: string;
  joinDate: string;
  loans: string;
  depositAmount: string;
}

const users: User[] = [
  // داده‌های فیک
];

const DepositorsUserFinancial: React.FC = () => {
  const queryClient = useQueryClient();

  // تعریف axiosInstance با interceptor برای اضافه کردن توکن
  const axiosInstance = axios.create({
    baseURL: 'https://shabab.v1r.ir/api',
  });

  axiosInstance.interceptors.request.use(
    (config) => {
      const authToken = localStorage.getItem('authToken');
      if (authToken) {
        config.headers.Authorization = `Bearer ${authToken}`;
      }
      return config;
    },
    (error) => Promise.reject(error)
  );

  // تابع برای ارسال درخواست PUT
  const updateUser = async (id: number, data: any) => {
    const response = await axiosInstance.put(`/factors/index/${id}`, data, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  };

  // استفاده از useMutation برای آپدیت کردن داده‌ها
  const mutation = useMutation({
    mutationFn: (updatedUser: User) => updateUser(updatedUser.id, updatedUser),
    onSuccess: () => {
      queryClient.invalidateQueries(['users']);
    },
  });

  const handleUpdate = (user: User) => {
    mutation.mutate(user);
  };

  return (
    <div>
      <div className='flex gap-[74%] items-center mb-2 mt-10 mr-3'>
        <div className='mr-2'>
          <p className='font-bold text-lg'>مدیریت مالی</p>
        </div>
        <div className='flex justify-end mr-2'>
          <Link href="/showuserdetail">
            <div className='flex items-center'>
              بازگشت
              <Image src={backImage} width={38} height={38} alt='arrow' />
            </div>
          </Link>
        </div>
      </div>
      <div>
        <RoutTableFiancial />
      </div>
      <UserTableDespositors users={users} />
    </div>
  );
};

export default DepositorsUserFinancial;

