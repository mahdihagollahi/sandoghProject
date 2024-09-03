import React, { useState } from 'react';
import Image from 'next/image';
import axios from 'axios';
import { useQuery, QueryClient, QueryClientProvider } from 'react-query';
import backImage from '@/src/app/assent/Img/adminPanel/back.svg';
import ChekedLoanAplicationTable from '@/src/app/components/AdminPage/ChekedLoanAplicationTable';
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
  guarantors: string[];
}

const fetchLoans = async (isUrgent: boolean) => {
  try {
    const token = localStorage.getItem('authToken');
    const loanType = isUrgent ? 'neccessary' : 'normal';

    const response = await axios.post(
      'https://mohammadelia30.ir/shabab/api/loans/show/admin',
      {
        count: 'checked',
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
const queryClient = new QueryClient();

const LoanRequestComponent: React.FC<Loan> = () => {
  const [isUrgent, setIsUrgent] = useState<boolean>(false);

  const { data, isLoading, error } = useQuery(['loans', isUrgent], () => fetchLoans(isUrgent));

  const users = data || [];

  if (isLoading) {
    return (
      <div>
        <div className="flex justify-between items-center mb-2 mt-10 mr-3">
          <div className="mr-2">
            <p className="font-bold text-lg">درخواست وام</p>
          </div>
          <div className="mr-[210%]">
            <a href="#" className="flex items-center">
              بازگشت
              <Image src={backImage} width={68} height={68} alt="arrow" />
            </a>
          </div>
        </div>
        <div className="flex gap-[47%] items-center">
          <div>
            <RoutRequestLoan />
          </div>
         
        </div>
        <div className='w-[200%] mt-5'>
          <ChekedLoanAplicationTable users={users} />
          <div className="flex justify-center items-center">
            <span className="loading loading-dots text-accent loading-lg"></span>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <div className="flex justify-between gap-[30%] items-center mb-2 mt-10 mr-3">
          <div className="mr-2">
            <p className="font-bold text-lg whitespace-nowrap">درخواست وام</p>
          </div>
          <div className="mr-[210%]">
            <a href="#" className="flex items-center">
              بازگشت
              <Image src={backImage} width={68} height={68} alt="arrow" />
            </a>
          </div>
        </div>
        <div className="flex gap-[47%] items-center">
          <div>
            <RoutRequestLoan />
          </div>
          <div>
            <SwichButton setIsUrgent={setIsUrgent} />
          </div>
        </div>
        <div className="mt-4">
          خطا در دریافت داده‌ها: {error instanceof Error ? error.message : 'مشخص نشده'}
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="flex  gap-[155%] items-center mb-2 mt-10 mr-3">
        <div className="mr-2">
          <p className="font-bold text-lg whitespace-nowrap">درخواست وام</p>
        </div>
        <div>
          <a href="#" className="flex items-center ml-7">
            بازگشت
            <Image src={backImage} width={38} height={38} alt="arrow" />
          </a>
        </div>
      </div>
      <div className="flex gap-[87%] items-center">
        <div>
          <RoutRequestLoan />
        </div>
        <div>
          <SwichButton setIsUrgent={setIsUrgent} />
        </div>
      </div>
      <div className="w-[200%] mt-4">
        <ChekedLoanAplicationTable users={users} />
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
