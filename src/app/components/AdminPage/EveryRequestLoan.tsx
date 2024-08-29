import React, { useState } from 'react';
import Image from 'next/image';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import backImage from '@/src/app/assent/Img/adminPanel/back.svg';
import EveryLoanAplicationTable from '@/src/app/components/AdminPage/EveryLoanAplicationTable';
import RoutRequestLoan from './RoutRequestLoan';
import SwichButton from './SwichButton';

interface Loan {
  id: number;
  name: string;
  amount: string;
  date: string;
  description: string;
  type: string;
  requestNumber: number;
  guarantors: string;
}

const fetchLoans = async () => {
  try {
    const token = localStorage.getItem('authToken');

    const response = await axios.post('https://mohammadelia30.ir/shabab/api/loans/show/admin', {}, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    });

    const { count, loans } = response.data;

    return {
      count, 
      loans: loans.map((loan: any) => ({
        id: loan.id,
        name: `${loan.user.first_name} ${loan.user.last_name}`,
        amount: `${loan.price.toLocaleString()} تومان`,
        date: new Date(loan.created_at).toLocaleDateString('fa-IR'),
        description: loan.user_description,
        type: loan.type === 'urgent' ? 'ضروری' : 'معمولی',
        requestNumber: loan.loan_number,
        guarantors: loan.guarantors_accept === 'accepted' ? 'نامشخص' : 'رحمانی'
      }))
    };
  } catch (error) {
    console.error('Error fetching loan data:', error);
    throw error;
  }
};

const EveryRequestLoan: React.FC = () => {
  const [isUrgent, setIsUrgent] = useState(false);

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['loans'],
    queryFn: fetchLoans
  });

  const count = data?.count;
  const users = data?.loans || [];

  if (isLoading) {
    return (
      <div>
        
        <div className='flex  justify-between items-center mb-2 mt-10 mr-3'>
          <div className='mr-2'>
            <p className='font-bold text-lg whitespace-nowrap dark:text-white'>درخواست وام</p>
          </div>
          <div className='mr-[210%]'>
            <a href="" className='flex  text-lg  dark:text-white items-center '>
              بازگشت
              <Image src={backImage} width={68} height={68} alt='arrow' />
            </a>
          </div>
        </div>
        <div className='flex gap-[47%] items-center'>
          <div>
            <RoutRequestLoan />
          </div>
      
        </div>
        <div className='mt-4'>
          در حال بارگزاری
        </div>
      </div>
    );
  }

  if (isError) {
    return (
      <div>
        <div className='flex justify-between items-center mb-2 mt-10 mr-3'>
          <div className='mr-2'>
            <p className='font-bold text-lg whitespace-nowrap'>درخواست وام</p>
          </div>
          <div className='mr-[210%]'>
            <a href="" className='flex  text-lg  dark:text-white items-center '>
              بازگشت
              <Image src={backImage} width={68} height={68} alt='arrow' />
            </a>
          </div>
        </div>
        <div className='flex gap-[47%] items-center'>
          <div>
            <RoutRequestLoan />
          </div>
        
        </div>
        <div className='mt-4'>
          خطا در دریافت داده‌ها: {error instanceof Error ? error.message : 'مشخص نشده'}
        </div>
      </div>
    );
  }

  const filteredUsers = users.filter(user => isUrgent ? user.type === 'ضروری' : user.type === 'معمولی');

  return (
    <div>
      <div className='flex justify-between items-center mb-2 mt-10 mr-3'>
        <div className='mr-2'>
          <p className='font-bold text-lg'>درخواست وام</p>
        </div>
        <div>
          <a href="" className='flex items-center ml-7'>
            بازگشت
            <Image src={backImage} width={38} height={38} alt='arrow' />
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
        تعداد درخواست‌ها: {count}
      </div>
      <div className='mt-4'>
        <EveryLoanAplicationTable users={filteredUsers} />
      </div>
    </div>
  );
};

export default EveryRequestLoan;
