import React from 'react';
import Image from 'next/image';
import groupImage from '@/src/app/assent/Img/adminPanel/Iconly.svg';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

interface UserIdResponse {
  user_id: number;
  [key: string]: any; 
}

const fetchUserId = async (): Promise<UserIdResponse> => {
  const authToken = localStorage.getItem('authToken');
  if (!authToken) {
    throw new Error('Token not found in localStorage');
  }

  const response = await axios.get<UserIdResponse>('https://mohammadelia30.ir/shabab/api/users/memberCnt', {
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
  });

  return response.data;
};

function NumberOfMembers() {
  const { data, error, isLoading } = useQuery({
    queryKey: ['memberCnt'],
    queryFn: fetchUserId,
  });

  if(isLoading){
    return(
     
          <div className='w-full flex'>
      <div className='bg-[#ffff] dark:bg-black rounded-md px-4 py-8 shadow-lg flex flex-col gap-12 md:items-center md:ml-5 xl:w-72'>
        <div className='flex justify-between gap-20'>
          <p className='text-[#2D3748] dark:text-white font-bold text-sm leading-5'>
            تعداد اعضای عضو
          </p>
          <Image src={groupImage} width={24} height={24} alt='group' />
        </div>
        <div className='flex justify-between gap-[117px]'>
          <div>
            <p className='font-bold text-[#A0AEC0] dark:text-white text-xs leading-8'>
              تعداد :
            </p>
          </div>
          <div className='flex items-center gap-1'>
            <p className='font-bold text-[#A0AEC0] dark:text-white text-xs leading-8'>
             درحال بارگذاری
            </p>
            
          </div>
        </div>
      </div>
      </div>
    );
  }

  if(error){
    return(
      <div className='w-full flex'>
      <div className='bg-[#ffff] dark:bg-black rounded-md px-4 py-5 shadow-lg flex flex-col gap-12 md:items-center md:ml-5 xl:w-72'>
        <div className='flex justify-between gap-20'>
          <p className='text-[#2D3748] dark:text-white font-bold text-sm leading-5'>
            تعداد اعضای عضو
          </p>
          <Image src={groupImage} width={24} height={24} alt='group' />
        </div>
        <div className='flex justify-between gap-[117px]'>
          <div>
            <p className='font-bold text-[#A0AEC0] dark:text-white text-xs leading-8'>
              تعداد :
            </p>
          </div>
          <div className='flex items-center gap-1'>
            <p className='font-bold text-[#A0AEC0] dark:text-white text-xs leading-8'>
             اطلاعات موجود نیست
            </p>
           
          </div>
        </div>
      </div>
      </div>
    )
  }

  return (
    <div className='w-full flex'>
      <div className='bg-[#ffff] dark:bg-black rounded-md px-4 py-5 shadow-lg flex flex-col gap-12 md:items-center md:ml-5 xl:w-72'>
        <div className='flex justify-between gap-20'>
          <p className='text-[#2D3748] dark:text-white font-bold text-sm leading-5'>
            تعداد اعضای عضو
          </p>
          <Image src={groupImage} width={24} height={24} alt='group' />
        </div>
        <div className='flex justify-between gap-[117px]'>
          <div>
            <p className='font-bold text-[#A0AEC0] dark:text-white text-xs leading-8'>
              تعداد :
            </p>
          </div>
          <div className='flex items-center gap-1'>
            <p className='font-bold text-[#A0AEC0] dark:text-white text-xs leading-8'>
              {JSON.stringify(data)}
            </p>
            <p className='font-bold dark:text-white text-[#A0AEC0] text-xs leading-8'>
              نفر عضو
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NumberOfMembers;

