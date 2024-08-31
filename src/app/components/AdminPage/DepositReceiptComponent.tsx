// import React from 'react';
// import Image from 'next/image';
// import axios from 'axios';
// import { useQuery } from '@tanstack/react-query';
// import backImage from '@/src/app/assent/Img/adminPanel/back.svg';
// import UserTableReceipt from './UserTableReceipt'; // فرض می‌شود که این کامپوننت برای نمایش داده‌ها استفاده می‌شود
// import FishComponent from './FishComponent';
// import TableSumFish from './TableSumFish';

// interface User {
//   id: number;
//   first_name: string;
//   last_name: string;
//   phone_number: string;
//   emergency_number: string;
//   home_number: string;
//   national_code: string;
//   card_number: string;
//   sheba_number: string;
//   address: string;
//   debt: number;
//   created_at: string;
//   updated_at: string;
// }

// // تابع برای دریافت داده‌های کاربر بر اساس ID
// async function fetchUserById(userId: number): Promise<User[]> {
//   const authToken = localStorage.getItem('authToken');
//   if (!authToken) {
//     throw new Error('Token not found');
//   }

//   const response = await axios.get('https://mohammadelia30.ir/shabab/api/installments/show/admin', {
//     headers: {
//       Authorization: `Bearer ${authToken}`,
//     },
//   });

//   console.log('API Response:', response.data);

//   const users = response.data.data;
//   const user = users.find((user: User) => user.id === userId);
//   if (!user) {
//     throw new Error('User not found');
//   }

//   return [user]; // به صورت آرایه‌ای با یک کاربر برمی‌گردد
// }

// interface DepositReceiptComponentProps {
//   userId: number;
// }

// function DepositReceiptComponent({ userId }: DepositReceiptComponentProps) {
//   const { data: users = [], isLoading, error } = useQuery<User[]>({
//     queryKey: ['user', userId],
//     queryFn: () => fetchUserById(userId),
//     placeholderData: [],
//   });

//   if (isLoading) {
//     return (
//       <div>
//         <div className='flex gap-[82%] items-center mb-2 mt-12 mr-4'>
//           <div className='mr-4'>
//             <p className='font-bold text-lg whitespace-nowrap'>مدیریت مالی</p>
//           </div>
//           <div className='flex justify-end mr-20'>
//             <a href="/deposited" className='flex items-center'>
//               بازگشت
//               <Image src={backImage} width={38} height={38} alt='arrow' />
//             </a>
//           </div>
//         </div>
//         <p>درحال بارگزاری...</p>
//       </div>
//     );
//   }

//   if (error instanceof Error) {
//     return (
//       <div>
//         <div className='flex gap-[82%] items-center mb-2 mt-12 mr-4'>
//           <div className='mr-4'>
//             <p className='font-bold text-lg whitespace-nowrap'>مدیریت مالی</p>
//           </div>
//           <div className='flex justify-end mr-20'>
//             <a href="/deposited" className='flex items-center'>
//               بازگشت
//               <Image src={backImage} width={38} height={38} alt='arrow' />
//             </a>
//           </div>
//         </div>
//         <p>خطا: {error.message}</p>
//       </div>
//     );
//   }

//   const user = users[0]; // چون انتظار داریم فقط یک کاربر در آرایه باشد

//   return (
//     <div>
//       <div className='flex gap-[82%] items-center mb-2 mt-12 mr-4'>
//         <div className='mr-4'>
//           <p className='font-bold text-lg whitespace-nowrap'>مدیریت مالی</p>
//         </div>
//         <div className='flex justify-end mr-20'>
//           <a href="/deposited" className='flex items-center'>
//             بازگشت
//             <Image src={backImage} width={38} height={38} alt='arrow' />
//           </a>
//         </div>
//       </div>
//       <div>
// <UserTableReceipt users={user} />
//       </div>
//       <div className='flex gap-12'>
//         <div>
//           <FishComponent />
//         </div>
//         <div>
//           <TableSumFish />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default DepositReceiptComponent;

import React from "react";
import Image from "next/image";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import backImage from "@/src/app/assent/Img/adminPanel/back.svg";
import UserTableReceipt from "./UserTableReceipt"; 
import FishComponent from "./FishComponent";
import TableSumFish from "./TableSumFish";

interface User {
  id: number;
  first_name: string;
  last_name: string;
  phone_number: string;
  emergency_number: string;
  home_number: string;
  national_code: string;
  card_number: string;
  sheba_number: string;
  address: string;
  debt: number;
  created_at: string;
  updated_at: string;
}


async function fetchUserById(userId: number): Promise<User[]> {
  const authToken = localStorage.getItem("authToken");
  if (!authToken) {
    throw new Error("Token not found");
  }

  const response = await axios.get(
    "https://mohammadelia30.ir/shabab/api/installments/show/admin/2",
    {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    }
  );


  console.log("API Response:", response.data);

  if (!response.data || !response.data.data) {
    throw new Error("Unexpected API response format");
  }

  const users = response.data.data;
  console.log("All Users:", users);

  if (!Array.isArray(users)) {
    throw new Error("Users data is not an array");
  }

  const user = users.find((user: User) => user.id === userId);

  if (!user) {
    console.error(`User with ID ${userId} not found.`);
    console.log(
      "Available User IDs:",
      users.map((u) => u.id)
    );
    throw new Error(`User with ID ${userId} not found`);
  }

  return [user];
}

interface DepositReceiptComponentProps {
  userId: number;
}

function DepositReceiptComponent({ userId }: DepositReceiptComponentProps) {
  const {
    data: users = [],
    isLoading,
    error,
  } = useQuery<User[]>({
    queryKey: ["user", userId],
    queryFn: () => fetchUserById(userId),
    placeholderData: [],
  });

  if (isLoading) {
    return (
      <div>
        <div className="flex gap-[82%] items-center mb-2 mt-12 mr-4">
          <div className="mr-4">
            <p className="font-bold text-lg whitespace-nowrap">مدیریت مالی</p>
          </div>
          <div className="flex justify-end mr-20">
            <a href="/deposited" className="flex items-center">
              بازگشت
              <Image src={backImage} width={38} height={38} alt="arrow" />
            </a>
          </div>
        </div>
        <div>
        <UserTableReceipt  />
        <div className="flex justify-center items-center -mt-10">
            <span className="loading loading-dots text-accent loading-lg"></span>
          </div>
        <div className="flex gap-12">
          <div>
            <FishComponent />
          </div>
          <div>
            <TableSumFish />
          </div>
        </div>
      </div>
      </div>
    );
  }

  if (error instanceof Error) {
    return (
      <div>
        <div className="flex gap-[82%] items-center mb-2 mt-12 mr-4">
          <div className="mr-4">
            <p className="font-bold text-lg whitespace-nowrap">مدیریت مالی</p>
          </div>
          <div className="flex justify-end mr-20">
            <a href="/deposited" className="flex items-center">
              بازگشت
              <Image src={backImage} width={38} height={38} alt="arrow" />
            </a>
          </div>
        </div>
        <div>
          <UserTableReceipt  />
          <p>خطا: {error.message}</p>
        </div>
        <div className="flex gap-12">
          <div>
            <FishComponent />
          </div>
          <div>
            <TableSumFish />
          </div>
        </div>
      </div>
    );
  }

  const user = users[0]; 

  return (
    <div>
      <div className="flex gap-[82%] items-center mb-2 mt-12 mr-4">
        <div className="mr-4">
          <p className="font-bold text-lg whitespace-nowrap">مدیریت مالی</p>
        </div>
        <div className="flex justify-end mr-20">
          <a href="/deposited" className="flex items-center">
            بازگشت
            <Image src={backImage} width={38} height={38} alt="arrow" />
          </a>
        </div>
      </div>
      <UserTableReceipt user={user} />

      <div className="flex gap-12">
        <div>
          <FishComponent />
        </div>
        <div>
          <TableSumFish />
        </div>
      </div>
    </div>
  );
}

export default DepositReceiptComponent;
