import React, { useState } from 'react';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import EveryLoanAplicationTable from '@/app/components/AdminPage/EveryLoanAplicationTable';
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
      'https://fundcharitynet.com/api/loans/show/admin',
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
      name: `${loan.user.first_name || 'نام'} ${loan.user.last_name || 'نام خانوادگی'}`,
      amount: `${loan.price.toLocaleString()} تومان`,
      date: new Date(loan.created_at).toLocaleDateString('fa-IR'),
      description: loan.user_description || 'بدون توضیح',
      type: loan.type === 'urgent' ? 'ضروری' : 'معمولی',
      requestNumber: loan.loan_number,
      guarantors: Array.isArray(loan.guarantors)
        ? loan.guarantors.map((guarantor: any) => `${guarantor.first_name} ${guarantor.last_name}`)
        : [],
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


const EveryRequestLoan: React.FC = () => {
  const [isUrgent, setIsUrgent] = useState(false);

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['loans', isUrgent],
    queryFn: () => fetchLoans(isUrgent),
  });

  const users = data || [];

  if (isLoading) {
    return (
      <div>
        <div className="flex justify-between items-center mb-2 mt-[50px] mr-3">
          <div className="-mr-1">
            <p className="font-bold text-lg whitespace-nowrap dark:text-white">درخواست وام</p>
          </div>
        </div>
        <div className="flex gap-[47.5%]  items-center">
          <div >
            <RoutRequestLoan />
          </div>
        </div>
        <div className='w-[210%] mt-5 '>
          <EveryLoanAplicationTable />
          <div className="flex justify-center items-center ">
            <span className="loading loading-dots text-[#4FD1C5] loading-lg"></span>
          </div>
        </div>
      </div>
    );
  }

  if (isError) {
    return (
      <div>
        <div className="flex justify-between items-center mb-2 mt-[50px] mr-3">
          <div className="-mr-1 dark:text-white">
            <p className="font-bold text-lg">درخواست وام</p>
          </div>
        </div>
        <div className="flex gap-[47.5%] items-center">
          <div>
            <RoutRequestLoan />
          </div>
          <div>
            <div className="mt-4 dark:text-white">
              خطا در دریافت داده‌ها: {error instanceof Error ? error.message : 'مشخص نشده'}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (users.length === 0) {
    return (
      <div>
        <div className="flex justify-between items-center mb-2 mt-[50px] mr-3">
          <div className="-mr-1 dark:text-white">
            <p className="font-bold text-lg">درخواست وام</p>
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
          {/* <EveryLoanAplicationTable users={users} /> */}
          <div className="flex justify-center dark:text-white items-center">
            <div>کاربری یافت نشد</div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-2 mt-[50px] mr-3">
        <div className="-mr-1 dark:text-white">
          <p className="font-bold text-lg">درخواست وام</p>
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