import React from 'react';
import Image from 'next/image';
import backImage from '../assent/Img/adminPanel/back.svg'
import ImageSearch from '../assent/Img/adminPanel/Search.svg';
import LoanAplicationTable from '@/app/components/LoanAplicationTable';

interface User {
  id: number;
  name: string;
  cash: string;
  date: string;
  explain:string;

}

const users: User[] = [
  { id: 1,  name: 'کتی سپهری', cash: '5,000,000', date: '1403/03/17' ,  explain:'برای خرج عروسی و مراسم ازدواج  نیاز دارم و حتما باید چک های تالارو پاس کنم بد گیرم اقای قنبری اگه میشه تایید کنید' },
  { id: 2,  name: 'مینا قنبری', cash: '5,000,000', date: '1403/03/17' ,  explain:'برای خرج عروسی و مراسم ازدواج  نیاز دارم و حتما باید چک های تالارو پاس کنم بد گیرم اقای قنبری اگه میشه تایید کنید' },
  { id: 3,  name: 'فاطمه طالبیان', cash: '5,000,000', date: ' 1403/03/17',  explain:'برای خرج عروسی و مراسم ازدواج  نیاز دارم و حتما باید چک های تالارو پاس کنم بد گیرم اقای قنبری اگه میشه تایید کنید' },
  { id: 4,  name: 'نگین سعیدی', cash: '5,000,000', date: '1403/03/17' ,  explain:'برای خرج عروسی و مراسم ازدواج  نیاز دارم و حتما باید چک های تالارو پاس کنم بد گیرم اقای قنبری اگه میشه تایید کنید' },
  { id: 5,  name: 'کنی سپهری', cash: '5,000,000', date: '1403/03/17' ,  explain:'برای خرج عروسی و مراسم ازدواج  نیاز دارم و حتما باید چک های تالارو پاس کنم بد گیرم اقای قنبری اگه میشه تایید کنید' },
  { id: 6,  name: 'نگین سعیدی', cash: '5,000,000', date: '1403/03/17' ,  explain:'برای خرج عروسی و مراسم ازدواج  نیاز دارم و حتما باید چک های تالارو پاس کنم بد گیرم اقای قنبری اگه میشه تایید کنید' },
  { id: 8,  name: 'سکینه داوودی', cash: '5,000,000', date: '1403/03/17' ,  explain:'برای خرج عروسی و مراسم ازدواج  نیاز دارم و حتما باید چک های تالارو پاس کنم بد گیرم اقای قنبری اگه میشه تایید کنید' },
  { id: 9,  name: 'سکینه داوودی', cash: '5,000,000', date: '1403/03/17' ,  explain:'برای خرج عروسی و مراسم ازدواج  نیاز دارم و حتما باید چک های تالارو پاس کنم بد گیرم اقای قنبری اگه میشه تایید کنید' },
  { id: 10,  name: 'سکینه داوودی', cash: '5,000,000', date: '1403/03/17' ,  explain:'برای خرج عروسی و مراسم ازدواج  نیاز دارم و حتما باید چک های تالارو پاس کنم بد گیرم اقای قنبری اگه میشه تایید کنید' },
  { id: 12,  name: 'سکینه داوودی', cash: '5,000,000', date: '1403/03/17' ,  explain:'برای خرج عروسی و مراسم ازدواج  نیاز دارم و حتما باید چک های تالارو پاس کنم بد گیرم اقای قنبری اگه میشه تایید کنید' },
  { id: 13,  name: 'سکینه داوودی', cash: '5,000,000', date: '1403/03/17' ,  explain:'برای خرج عروسی و مراسم ازدواج  نیاز دارم و حتما باید چک های تالارو پاس کنم بد گیرم اقای قنبری اگه میشه تایید کنید' },
  { id: 14,  name: 'سکینه داوودی', cash: '5,000,000', date: '1403/03/17' ,  explain:'برای خرج عروسی و مراسم ازدواج  نیاز دارم و حتما باید چک های تالارو پاس کنم بد گیرم اقای قنبری اگه میشه تایید کنید' },
  { id: 15,  name: 'سکینه داوودی', cash: '5,000,000', date: '1403/03/17' ,  explain:'برای خرج عروسی و مراسم ازدواج  نیاز دارم و حتما باید چک های تالارو پاس کنم بد گیرم اقای قنبری اگه میشه تایید کنید' },
];

const EveryUser: React.FC = () => {
  return (
    <div >
         <div className='flex gap-32  items-center mb-2 mt-5 mr-3  '>
            <div className='mr-2 '>
                <p className='font-bold text-lg'>
                مشاهده کاربران           
                </p>
            </div>
            <div className='flex items-center gap-2 '>
          <label className="input  flex items-center border border-[#E2E8F0] gap-4  ">
           
              <Image
              src={ImageSearch}
              width={20}
              height={20}
              alt='search'
              />
           

            <input className='w-[32rem] h-[32rem]' type="search"   placeholder="جستجو نام کاربری یا شماره تلفن"   />
          </label>

         
        </div>


            <div className='flex justify-end mr-2  '>
              <a href="">
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
      
      </div>
      <LoanAplicationTable users={users} />
    </div>
   
  );
};

export default EveryUser;

