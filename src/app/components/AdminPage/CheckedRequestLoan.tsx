import React from 'react';
import Image from 'next/image';
import backImage from '@/src/app/assent/Img/adminPanel/back.svg'
import ChekedLoanAplicationTable from '@/src/app/components/AdminPage/ChekedLoanAplicationTable';
import RoutRequestLoan from './RoutRequestLoan';

interface User {
  id: number;
  name: string;
  amount: string;
  date: string;
  description:string;
  type:string;
  requestNumber:number;
  guarantors:string

}

const users: User[] = [
 
  {
    name: "کتی سپهری",
    requestNumber: 3,
    amount: "50,000,000 تومان",
    date: "1404/03/17",
    type: "ضروری",
    guarantors: ["حامد رحمانی"],
    description: "برای خرج عروسی و مراسم ازدواج نیاز دارم و حتما باید چک‌های تالارو پاس کنم. بد گریم آقای فیضی اگه میشه تایید کنید."
  },
  {
    name: "ابراهیم علی نیا",
    requestNumber: 2,
    amount: "30,000,000 تومان",
    date: "1404/01/16",
    type: "ضروری",
    guarantors: ["حامد رحمانی"],
    description: "برای عمل قلب باز پدرم می‌خوام اوضاع خیلی بریخته ممکنه جونشو از دست بده هیچکسیم نداره قرض بگیریم لطفا وام این ماهو برای من در نظر بگیرید."
  },
  {
    name: "مینا فیضی",
    requestNumber: 3,
    amount: "50,000,000 تومان",
    date: "1404/03/17",
    type: "معمولی",
    guarantors: ["حامد رحمانی"],
    description: "برای خرج عروسی و مراسم ازدواج نیاز دارم و حتما باید چک‌های تالارو پاس کنم. بد گریم آقای فیضی اگه میشه تایید کنید."
  },
];

const RequestLoan: React.FC = () => {
  return (
    <div >
         <div className='flex justify-between  items-center mb-2 mt-10 mr-3  '>
            <div className='mr-2 '>
                <p className='font-bold text-lg'>
                درخواست وام                
                </p>
            </div>
           


            <div  >
              <a href="" className='flex items-center ml-7' >
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
      <RoutRequestLoan/>
      </div>
      <div className='mt-4'>
      <ChekedLoanAplicationTable users={users} />

      </div>
    </div>
   
  );
};

export default RequestLoan;
