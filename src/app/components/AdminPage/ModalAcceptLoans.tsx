import React, { useState } from 'react';
import axios from 'axios';
import { useMutation , UseMutationResult } from '@tanstack/react-query';
import backImage from '@/app/assent/Img/adminPanel/back.svg';
import Image from 'next/image';

interface User {
  id:number
 
  
}
interface ModalAcceptLoansProps {
  isOpen: boolean;
  onClose: () => void;
  selectedLoan: User | null;
  userId: string; 
}

interface AcceptLoanData {
  loan_id: number;
  admin_accept: string;
  installment_count: number;
  loan_price: number;
}

const acceptLoan = async (data:AcceptLoanData) => {
  const token = localStorage.getItem('authToken'); 
  
  if (!token) {
    throw new Error("No auth token found");
  }

  const response = await axios.post('https://fundcharitynet.com/api/loans/accept/admin', data, {
    headers: {
      Authorization: `Bearer ${token}` 
    }
  });
  return response.data;
};

const ModalAcceptLoans: React.FC<ModalAcceptLoansProps> = ({ isOpen, onClose, selectedLoan, userId }) => {
  const [formData, setFormData] = useState({
    date: "",
    installments: "",
    amount: "",
  });

  const mutation : UseMutationResult<any, unknown, AcceptLoanData, unknown > = useMutation({
    mutationFn: acceptLoan,
    onSuccess: () => {
      onClose();
    },
    onError: (error :unknown) => {
      console.error("Error accepting loan:", error);
    },
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    if (!selectedLoan) {
      console.error("No selected loan");
      return;
    }

    const loanData = {
      loan_id: selectedLoan.id, 
      admin_accept: "accepted",
      installment_count: parseInt(formData.installments, 10),
      loan_price: parseInt(formData.amount, 10),
    };

    mutation.mutate(loanData);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="flex flex-col items-center px-5 border border-gray-300 rounded-lg w-[40%] py-4 bg-white">
      <div className="flex justify-end mb-2">
          <button onClick={onClose} className="flex items-center mr-[470px]">
            بازگشت
            <Image src={backImage} width={38} height={38} alt="arrow" />
          </button>
        </div>
        <div className="flex justify-center gap-10 w-full mb-4">
          <input
            type="text"
            name="amount"
            value={formData.amount}
            onChange={handleInputChange}
            placeholder="مبلغ"
            className="w-1/3 py-3 px-2 border border-gray-300 rounded-md text-lg focus:outline-none focus:border-blue-500"
          />
          <input
            type="text"
            name="installments"
            value={formData.installments}
            onChange={handleInputChange}
            placeholder="تعداد اقساط"
            className="w-1/3 py-3 px-2 border border-gray-300 rounded-md mx-2 text-lg focus:outline-none focus:border-blue-500"
          />
          <input
            type="text"
            name="date"
            value={formData.date}
            onChange={handleInputChange}
            placeholder="تاریخ"
            className="w-1/3 py-3 px-2 border border-gray-300 rounded-md text-lg focus:outline-none focus:border-blue-500"
          />
        </div>
        <textarea
          className="w-full h-20 border-b border-gray-300 p-3 text-lg focus:outline-none focus:border-blue-500 mb-4"
          placeholder="متن خود را بنویسید ..."
        />
        <button
          className="py-2 mt-2 ml-[85%] px-6 bg-teal-400 text-white rounded-md text-lg hover:bg-teal-500"
          onClick={handleSubmit}
          disabled={mutation.isLoading} 
        >
          {mutation.isLoading ? 'در حال ارسال...' : 'ارسال'}
        </button>
        <button
          className="absolute top-2 right-2 text-gray-500"
          onClick={onClose}
        >
          X
        </button>
      </div>
    </div>
  );
};

export default ModalAcceptLoans;



