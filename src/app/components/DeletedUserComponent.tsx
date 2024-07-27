import React from 'react';
import UserTable from '@/src/app/components/UserTable';
import Image from 'next/image';
import backImage from '../assent/Img/adminPanel/back.svg'
import Image1 from '../assent/Img/adminPanel/Avatar.svg';
import Image2 from '../assent/Img/adminPanel/Avatar-2.svg';
import Image3 from '../assent/Img/adminPanel/avatar online copy.svg';
import Image4 from '../assent/Img/adminPanel/avatar online.svg';
import ImageSearch from '../assent/Img/adminPanel/Search.svg';
import RoutTableUser from './RoutTableUser';

interface User {
  id: number;
  src: string;
  name: string;
  joinDate: string;
  loans: string;
}

const users: User[] = [
  { id: 1, src: Image1, name: 'امیر قنبری', joinDate: '1404/01/16', loans: '1 وام' },
  { id: 2, src: Image2, name: 'مینا قنبری', joinDate: '1404/01/16', loans: '0 وام' },
  { id: 3, src: Image3, name: 'فاطمه طالبیان', joinDate: '1404/01/16', loans: '2 وام' },
  { id: 4, src: Image4, name: 'نگین سعیدی', joinDate: '1404/01/16', loans: '0 وام' },
  { id: 5, src: Image1, name: 'کنی سپهری', joinDate: '1404/01/16', loans: '2 وام' },
  { id: 6, src: Image2, name: 'نگین سعیدی', joinDate: '1404/01/16', loans: '0 وام' },
  { id: 8, src: Image3, name: 'سکینه داوودی', joinDate: '1404/01/16', loans: '0 وام' },
  { id: 9, src: Image3, name: 'سکینه داوودی', joinDate: '1404/01/16', loans: '0 وام' },
  { id: 10, src: Image3, name: 'سکینه داوودی', joinDate: '1404/01/16', loans: '0 وام' },
  { id: 12, src: Image3, name: 'سکینه داوودی', joinDate: '1404/01/16', loans: '0 وام' },
  { id: 13, src: Image3, name: 'سکینه داوودی', joinDate: '1404/01/16', loans: '0 وام' },
  { id: 14, src: Image3, name: 'سکینه داوودی', joinDate: '1404/01/16', loans: '0 وام' },
  { id: 15, src: Image3, name: 'سکینه داوودی', joinDate: '1404/01/16', loans: '0 وام' },
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
              <a href="" className='flex items-center'>
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
        <RoutTableUser/>
      </div>
      <UserTable users={users} />
    </div>
   
  );
};

export default EveryUser;

