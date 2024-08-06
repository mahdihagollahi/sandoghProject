import React from 'react'
import Image from 'next/image';
import backImage from '@/src/app/assent/Img/adminPanel/back.svg'
import UserTableReceipt from './UserTableReceipt';
import FishComponent from './FishComponent';
import TableSumFish from './TableSumFish';

interface User {
  id: number;
  Description:string
  name: string;
  joinDate: string;
  depositAmount:string
}

const users: User[] = [
  { id: 1, name: 'امیر قنبری', depositAmount:'5,000,000', joinDate: '1404/01/16' ,Description:'سلام ، من 6 تا قسط رو همزمان پرداخت کردم این ماه' },
  
];
function DepositReceiptComponent() {
  return (
    <div>
           <div className='flex gap-[82%]  items-center mb-2 mt-12 mr-4  '>
            <div className='mr-4 '>
                <p className='font-bold text-lg whitespace-nowrap'>
                مدیریت مالی
                </p>
            </div>
           


            <div className='flex justify-end mr-20  '>
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
    <div className='flex gap-12  '>
        <div >
            <FishComponent/>
        </div>

        <div className=''>
        <TableSumFish/>
        </div>
    </div>
    </div>
  )
}

export default DepositReceiptComponent