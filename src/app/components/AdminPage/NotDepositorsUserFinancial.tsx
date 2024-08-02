import React from 'react';
import UserTableFinancial from '@/src/app/components/AdminPage/UserTableNotDespositors';
import Image from 'next/image';
import backImage from '@/src/app/assent/Img/adminPanel/back.svg'
import RoutTableFiancial from './RoutTableFinancial';
import Link from 'next/link';
interface User {
  id: number;
  name: string;
  joinDate: string;
  loans: string;
  depositAmount:string;
}

const users: User[] = [
  { id: 1 , name: 'امیر قنبری', depositAmount:'5,000,000' ,  joinDate: '1404/01/16', loans: '1 وام' },
  { id: 2,  name: 'مینا قنبری', depositAmount:'5,000,000' ,  joinDate: '1404/01/16', loans: '0 وام' },
  { id: 3,  name: 'فاطمه طالبیان', depositAmount:'5,000,000' ,  joinDate: '1404/01/16', loans: '2 وام' },
  { id: 4,  name: 'نگین سعیدی', depositAmount:'5,000,000' ,  joinDate: '1404/01/16', loans: '0 وام' },
  { id: 5,  name: 'کنی سپهری', depositAmount:'5,000,000' ,  joinDate: '1404/01/16', loans: '2 وام' },
  { id: 6,  name: 'نگین سعیدی', depositAmount:'5,000,000' ,  joinDate: '1404/01/16', loans: '0 وام' },
  { id: 8,  name: 'سکینه داوودی', depositAmount:'5,000,000' ,  joinDate: '1404/01/16', loans: '0 وام' },
  { id: 9,  name: 'سکینه داوودی', depositAmount:'5,000,000' ,  joinDate: '1404/01/16', loans: '0 وام' },
  { id: 10,  name: 'سکینه داوودی', depositAmount:'5,000,000' ,  joinDate: '1404/01/16', loans: '0 وام' },
  { id: 12,  name: 'سکینه داوودی', depositAmount:'5,000,000' ,  joinDate: '1404/01/16', loans: '0 وام' },
  { id: 13,  name: 'سکینه داوودی', depositAmount:'5,000,000' ,  joinDate: '1404/01/16', loans: '0 وام' },
  { id: 14,  name: 'سکینه داوودی', depositAmount:'5,000,000' ,  joinDate: '1404/01/16', loans: '0 وام' },
  { id: 15,  name: 'سکینه داوودی', depositAmount:'5,000,000' ,  joinDate: '1404/01/16', loans: '0 وام' },
];

const NotDepositorsUserFinancial: React.FC = () => {
  return (
    <div >
         <div className='flex gap-[74%]  items-center mb-2 mt-5 mr-3  '>
            <div className='mr-2 '>
                <p className='font-bold text-lg'>
                مدیریت مالی               
                 </p>
            </div>
           


            <div className='flex justify-end mr-2  '>
            <Link href="/showuserdetail">
             
             <div  className='flex items-center'>
             بازگشت
             <Image
               src={backImage}
               width={38}
               height={38}
               alt='arrow'

               />
             </div>
             </Link>
              
            </div>
        </div>
      <div>
        <RoutTableFiancial/>
      </div>
      <UserTableFinancial users={users} />
    </div>
   
  );
};

export default NotDepositorsUserFinancial;

