
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
  const token = localStorage.getItem('authToken');

  if (!token) {
    throw new Error('No token found, please log in.');
  }

  const response = await axios.post<User>(
    'https://shabab.v1r.ir/api/auth/me',
    {},
    {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
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

  if (isLoading) return <p>در حال بارگذاری...</p>;
  if (error) return <p>خطا در بارگذاری داده‌ها: {error.message}</p>;

  return (
    <div className='w-[97%]'>
      <div className='flex gap-4 flex-col md:flex-row justify-between bg-[#FFFFFF] w-[72%] mt-4 ml-3 md:mr-20 md:ml-3 lg:mr-20 lg:ml-3 xl:mr-[28%] rounded-md shadow-lg py-3 px-3 h-auto md:h-16'>
        <div className='flex items-center mb-4 md:mb-0'>
          <p className='mt-1 text-[#2D3748] font-light text-lg'>
            سلام، وقت شما بخیر به بخش داشبورد خوش آمدید، گزارشات مورد نیاز شما در اختیار شماست!
          </p>
        </div>
        <div className='flex justify-between gap-4'>
          <div>
            {user && (
              <Image
                className='bg-[#FFFFFF] rounded-full'
                src={user.image} 
                alt='user'
                width={40}
                height={40}
              />
            )}
          </div>
          <div className='hidden lg:inline lg:h-auto md:mb-4'>
            <p className='text-[#2D3748] mt-2 flex items-center font-medium text-base'>
              {user?.name}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminHeader;
