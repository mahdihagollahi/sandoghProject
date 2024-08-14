
import React from 'react'
import Image from 'next/image';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import backImage from '@/src/app/assent/Img/adminPanel/back.svg';
import UserTableReceipt from './UserTableReceipt';
import FishComponent from './FishComponent';
import TableSumFish from './TableSumFish';

interface User {
  id: number;
  Description: string;
  name: string;
  joinDate: string;
  depositAmount: string;
}

async function fetchUsers() {
  const authToken = localStorage.getItem('authToken');
  if (!authToken) {
    throw new Error('Token not found');
  }

  const response = await axios.put('https://shabab.v1r.ir/api/installments/show/admin', {}, {
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
  });

  console.log('API Response:', response.data); 

  if (!response.data || !response.data.data) {
    throw new Error('Unexpected API response format');
  }

  return response.data.data as User[]; 
}

function DepositReceiptComponent() {
  const { data: users = [], isLoading, error } = useQuery<User[]>({
    queryKey: ['users'],
    queryFn: fetchUsers,
    placeholderData: [], 
  });

  if (isLoading) return (
    <div>
         <div className='flex gap-[82%] items-center mb-2 mt-12 mr-4'>
        <div className='mr-4'>
          <p className='font-bold text-lg whitespace-nowrap'>مدیریت مالی</p>
        </div>
        <div className='flex justify-end mr-20'>
          <a href="/deposited" className='flex items-center'>
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
      <div>
        <UserTableReceipt users={users} />
        <p>درحال بارگزاری...</p>
      </div>
      <div className='flex gap-12'>
        <div>
          <FishComponent />
        </div>
        <div>
          <TableSumFish />
        </div>
      </div>
    </div>
  );
  if (error instanceof Error) return (
    <div>
         <div className='flex gap-[82%] items-center mb-2 mt-12 mr-4'>
        <div className='mr-4'>
          <p className='font-bold text-lg whitespace-nowrap'>مدیریت مالی</p>
        </div>
        <div className='flex justify-end mr-20'>
          <a href="/deposited" className='flex items-center'>
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
      <div>
        <UserTableReceipt users={users} />
        <p>
          خطا
          {error.message}
        </p>
      </div>
      <div className='flex gap-12'>
        <div>
          <FishComponent />
        </div>
        <div>
          <TableSumFish />
        </div>
      </div>
      </div>
  )
    ;

  return (
    <div>
      <div className='flex gap-[82%] items-center mb-2 mt-12 mr-4'>
        <div className='mr-4'>
          <p className='font-bold text-lg whitespace-nowrap'>مدیریت مالی</p>
        </div>
        <div className='flex justify-end mr-20'>
          <a href="/deposited" className='flex items-center'>
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
      <div>
        <UserTableReceipt users={users} />
      </div>
      <div className='flex gap-12'>
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
