
import React from 'react';
import Image from 'next/image';
import IconImage from '@/src/app/assent/Img/adminPanel/defultUser.png';
import axios from 'axios';
import { useQuery, UseQueryResult } from '@tanstack/react-query';

interface User {
  name: string;
  image: string;
}


const fetchUserData = async (): Promise<User> => {
  const authToken = localStorage.getItem('authToken');

  if (!authToken) {
    throw new Error('No token found, please log in.');
  }

  const response = await axios.post<User>(
   'https://mohammadelia30.ir/shabab/api/auth/me',
    {},
    {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${authToken}`,
      },
    }
  );

  return {
    name: response.data.name || 'نام کاربر نیست',
    image: response.data.image || IconImage,
  };
};

const AdminHeader: React.FC = () => {
  const { data: user, error, isLoading }: UseQueryResult<User, Error> = useQuery({
    queryKey: ['user'], 
    queryFn: fetchUserData,
  });

  if (isLoading) return (
    <div className='font-custom'>
      <div className='flex gap-4 w-[90%] flex-col md:flex-row justify-between dark:bg-black bg-[#FFFFFF] mt-8 ml-3 md:mr-20 md:ml-3  lg:ml-3 xl:px-5 rounded-md  shadow-md py-3 px-3 h-auto md:h-16'>
        <div className='flex items-center gap-40 mb-4 md:mb-0'>
          <p className='mt-1 whitespace-nowrap text-[#2D3748] dark:text-white font-light  text-lg'>
            سلام، وقت شما بخیر به بخش داشبورد خوش آمدید، گزارشات مورد نیاز شما در اختیار شماست!
          </p>
        </div>
        <div className='flex justify-between mr-60 whitespace-nowrap mt-2 dark:text-white gap-4'>
          در حال بارگذاری...
        </div>
      </div>
    </div>
  );
  if (error) return (
    <div className=''>
      <div className='flex gap-4 w-[90%] flex-col md:flex-row justify-between dark:bg-black bg-[#FFFFFF] mt-8 ml-3 md:mr-20 md:ml-3 lg:mr-20 lg:ml-3 xl:px-5 rounded-md  shadow-md py-3 px-3 h-auto md:h-16'>
      <div className='flex items-center gap-40 mb-4 md:mb-0'>
          <p className='mt-1 whitespace-nowrap text-[#2D3748] font-light dark:text-white text-lg'>
            سلام، وقت شما بخیر به بخش داشبورد خوش آمدید، گزارشات مورد نیاز شما در اختیار شماست!
          </p>
        </div>
        <div className='flex justify-between mr-52 mt-2 whitespace-nowrap dark:text-white gap-4'>
         خطا:{error.message}
        </div>
      </div>
    </div>
  );;

  return (
    <div className=''>
      <div className='flex gap-4 w-[90%] flex-col md:flex-row justify-between dark:bg-black bg-[#FFFFFF] mt-8 ml-3 md:mr-20 md:ml-3 lg:mr-20 lg:ml-3 xl:px-5 rounded-md  shadow-md py-3 px-3 h-auto md:h-16'>
      <div className='flex items-center  mb-4 md:mb-0'>
          <p className='mt-1 whitespace-nowrap text-[#2D3748] dark:text-white font-light text-lg'>
            سلام، وقت شما بخیر به بخش داشبورد خوش آمدید، گزارشات مورد نیاز شما در اختیار شماست!
          </p>
        </div>
        <div className='flex justify-between mr-40 gap-4'>
          <div>
            {user && (
              <Image
                className='bg-[#FFFFFF] dark:bg-black rounded-full'
                src={user.image} 
                alt='user'
                width={40}
                height={40}
              />
            )}
          </div>
          <div className='hidden lg:inline lg:h-auto md:mb-4'>
            <p className='text-[#2D3748] mt-2 flex dark:text-white whitespace-nowrap items-center font-medium text-base'>
              {user?.name}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminHeader;
