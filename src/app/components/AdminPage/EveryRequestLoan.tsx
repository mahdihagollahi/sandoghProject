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

const fetchLoans = async (isUrgent: boolean) => {
  try {
    const token = localStorage.getItem('authToken');
    const loanType = isUrgent ? 'neccessary' : 'normal';

    const response = await axios.post(
      'https://mohammadelia30.ir/shabab/api/loans/show/admin',
      {
        count: 'all',
        type: loanType,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      }
    );
  
    const { loans } = response.data;

    return loans.map((loan: any) => ({
      id: loan.id,
      name: `${loan.user.first_name} ${loan.user.last_name}`,
      amount: `${loan.price.toLocaleString()} تومان`,
      date: new Date(loan.created_at).toLocaleDateString('fa-IR'),
      description: loan.user_description || 'بدون توضیح',
      type: loan.type === 'urgent' ? 'ضروری' : 'معمولی',
      requestNumber: loan.loan_number,
      guarantors: Array.isArray(loan.guarantors) ? loan.guarantors : [],
    }));
  } catch (error) {
    console.error('Error fetching loan data:', error);
    if (axios.isAxiosError(error)) {
      console.error('Error response data:', error.response?.data);
      console.error('Error response status:', error.response?.status);
    }
    throw error;
  }
};
const handleBack = () => {
  window.history.back(); 
};

const EveryRequestLoan: React.FC<Loan> = () => {
  const [isUrgent, setIsUrgent] = useState(false);

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['loans', isUrgent],
    queryFn: () => fetchLoans(isUrgent),
  });

  const users = data || [];
 
  if (isLoading) {
    return (
      <div>
        <div className="flex justify-between items-center mb-2 mt-12 mr-3">
            <div className="-mr-1">
            <p className="font-bold text-lg whitespace-nowrap dark:text-white">درخواست وام</p>
          </div>
          <div className="mr-[168%] flex items-center cursor-pointer" onClick={handleBack}>
              بازگشت
              <Image src={backImage} width={68} height={68} alt="arrow" />
          </div>
        </div>
       <div className="flex gap-[47.5%] items-center">
          <div>
            <RoutRequestLoan />
          </div>
        </div>
        <div className='w-[210%] mt-5 '>
          <EveryLoanAplicationTable />
          <div className="flex justify-center items-center ">
            <span className="loading loading-dots text-accent loading-lg"></span>
          </div>
        </div>
      </div>
    );
  }

  if (isError) {
    return (
      <div>
      <div className="flex justify-between items-center mb-2 mt-12 mr-3">
        <div className="-mr-1">
          <p className="font-bold text-lg">درخواست وام</p>
        </div>
        <div className="flex items-center cursor-pointer" onClick={handleBack}>
            بازگشت
            <Image src={backImage} width={38} height={38} alt="arrow" />
        </div>
      </div>
      <div className="flex gap-[47.5%] items-center">
        <div>
          <RoutRequestLoan />
        </div>
        <div>
        <div className="mt-4">
          خطا در دریافت داده‌ها: {error instanceof Error ? error.message : 'مشخص نشده'}
        </div>
      </div>
      </div>
      </div>
    );
  }

  if(users.length === 0){
    return(
      <div>
      <div className="flex justify-between items-center mb-2 mt-12 mr-3">
        <div className="-mr-1">
          <p className="font-bold text-lg">درخواست وام</p>
        </div>
        <div className="flex items-center cursor-pointer " onClick={handleBack}>
            بازگشت
            <Image src={backImage} width={38} height={38} alt="arrow" />
        </div>
      </div>
      <div className="flex gap-[47.5%] items-center">
        <div>
          <RoutRequestLoan />
        </div>
        <div>
          <SwichButton setIsUrgent={setIsUrgent} />
        </div>
      </div>
      <div className="mt-4">
        <EveryLoanAplicationTable users={users} />
        <div className="flex justify-center items-center">
        <div>
          کاربری یافت نشد
        </div>
        </div>
      </div>
    </div>
    )
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-2 mt-12 mr-3">
        <div className="-mr-1">
          <p className="font-bold text-lg">درخواست وام</p>
        </div>
        <div className="flex items-center cursor-pointer ml-10" onClick={handleBack}>
            بازگشت
            <Image src={backImage} width={38} height={38} alt="arrow" />
        </div>
      </div>
      <div className="flex gap-[47.5%] items-center">
        <div>
          <RoutRequestLoan />
        </div>
        <div>
          <SwichButton setIsUrgent={setIsUrgent} />
        </div>
      </div>
      <div className="mt-4">
        <EveryLoanAplicationTable users={users} />
      </div>
    </div>
  );
};

export default EveryRequestLoan;
