import React from 'react';
import Image from 'next/image';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import MoneyImage from '@/src/app/assent/Img/adminPanel/3D money card.svg';

const fetchDepositSlip = async () => {
  const token = localStorage.getItem('authToken');

  if (!token) {
    throw new Error('No auth token found');
  }

  const response = await axios.get('https://mohammadelia30.ir/shabab/api/factors/factorCnt', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

 

  return response.data;
};

function NewDepositSlip() {
  const query = useQuery({
    queryKey: ['depositSlip'],
    queryFn: fetchDepositSlip,
  });

  if (query.isLoading) return (
    <div className='ml-8 mr-20 -mt-[17%]'>
      <div className='flex justify-between gap-12 shadow-lg w-[65.9%] h-[20%] rounded-md p-6 dark:bg-black bg-[#ffff]'>
        <div className='flex flex-col gap-9'>
          <div className='flex items-center gap-2'>
            <span className="loading loading-dots text-accent loading-sm"></span>
            <p>فیش واریزی جدید</p>
          </div>
          <div>
            <button className='bg-[#4FD1C5] border border-[#4FD1C5] w-64 h-10 rounded-xl text-white'>
              دیدن همه
            </button>
          </div>
        </div>
        <div>
          <Image
            src={MoneyImage}
            width={132}
            height={121}
            alt='money'
          />
        </div>
      </div>
    </div>
  );

  if (query.error) return (
    <div className='ml-8 mr-20 -mt-[14%]'>
      <div className='flex justify-between gap-12 shadow-lg w-[61%] h-[20%] rounded-md p-6 dark:bg-black bg-[#ffff]'>
        <div className='flex flex-col gap-9'>
          <div>
            <p className='font-bold text-sm leading-8 dark:text-white text-[#2D3748]'>
              An error occurred: {query.error.message}
            </p>
          </div>
          <div>
            <button className='bg-[#4FD1C5] border border-[#4FD1C5] w-64 h-10 rounded-xl text-white'>
              دیدن همه
            </button>
          </div>
        </div>
        <div>
          <Image
            src={MoneyImage}
            width={132}
            height={121}
            alt='money'
          />
        </div>
      </div>
    </div>
  );

  const data = query.data;
  

 

  return (
    <div className='ml-8 mr-20 -mt-[17%]'>
      <div className='flex justify-between gap-12 shadow-lg w-[66.5%] h-[20%] rounded-md p-6 dark:bg-black bg-[#ffff]'>
        <div className='flex flex-col gap-9'>
          <div>
            <p className='font-bold text-sm leading-8 dark:text-white text-[#2D3748]'>
              {data.factors} فیش واریزی جدید
            </p>
          </div>
          <div>
            <button className='bg-[#4FD1C5] border border-[#4FD1C5] w-64 h-10 rounded-xl text-white'>
              دیدن همه
            </button>
          </div>
        </div>
        <div>
          <Image
            src={MoneyImage}
            width={132}
            height={121}
            alt='money'
          />
        </div>
      </div>
    </div>
  );
}

export default NewDepositSlip;

