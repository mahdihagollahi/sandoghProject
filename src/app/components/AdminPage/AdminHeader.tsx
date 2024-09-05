import React from 'react';
import Image from 'next/image';
import IconImage from '@/src/app/assent/Img/adminPanel/defultUser.png';
import axios from 'axios';
import { useQuery, UseQueryResult } from '@tanstack/react-query';

interface User {
  name: string;
  image: string | typeof IconImage;
}

const fetchUserData = async (): Promise<User> => {
  const authToken = localStorage.getItem('authToken');

  if (!authToken) {
    throw new Error('No token found, please log in.');
  }

  const response = await axios.post<{ user: { first_name: string; last_name: string; media: [] } }>(
    'https://mohammadelia30.ir/shabab/api/auth/me',
    {},
    {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${authToken}`,
      },
    }
  );

  const userData = response.data.user;
  const fullName = `${userData.first_name} ${userData.last_name}` || 'نام کاربر نیست';

  return {
    name: fullName,
    image: userData.media.length > 0 ? userData.media[0] : IconImage.src, 
  };
};

const AdminHeader: React.FC = () => {
  const { data: user, error, isLoading }: UseQueryResult<User, Error> = useQuery({
    queryKey: ['user'],
    queryFn: fetchUserData,
  });

  if (isLoading) {
    return (
      <div className='font-custom'>
        <div className='flex gap-[10%] w-[101%] flex-col md:flex-row justify-between dark:bg-[#4F5D74] bg-[#FFFFFF] mt-8 ml-3 md:mr-14 md:ml-3 lg:ml-3 xl:px-5 rounded-md shadow-md py-3 px-3 h-auto md:h-16'>
        <div className='flex items-center gap-40 mb-4 md:mb-0'>
            <p className='mt-1 whitespace-nowrap text-[#2D3748] dark:text-[#F5F5F5] font-light text-lg'>
              سلام، وقت شما بخیر به بخش داشبورد خوش آمدید، گزارشات مورد نیاز شما در اختیار شماست!
            </p>
          </div>
          <div className='flex justify-between mt-2 dark:text-[#F5F5F5] gap-4'>
            <span className="loading loading-dots text-accent loading-sm"></span>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className=''>
        <div className='flex gap-[10%] w-[101%] flex-col md:flex-row justify-between dark:bg-[#4F5D74] bg-[#FFFFFF] mt-8 ml-3 md:mr-14 md:ml-3 lg:ml-3 xl:px-5 rounded-md shadow-md py-3 px-3 h-auto md:h-16'>
        <div className='flex items-center gap-40 mb-4 md:mb-0'>
            <p className='mt-1 whitespace-nowrap text-[#2D3748] dark:text-[#F5F5F5] font-light text-lg'>
              سلام، وقت شما بخیر به بخش داشبورد خوش آمدید، گزارشات مورد نیاز شما در اختیار شماست!
            </p>
          </div>
          <div className='flex justify-between mt-2 dark:text-[#F5F5F5] gap-4'>
            خطا: {error.message}
          </div>
        </div>
      </div>
    );
  }

  const userImage = user?.image ? user.image : IconImage.src;

  return (
    <div className=''>
        <div className='flex gap-[10%] w-[101%] flex-col md:flex-row justify-between dark:bg-[#4F5D74] bg-[#FFFFFF] mt-8 ml-3 md:mr-14 md:ml-3 lg:ml-3 xl:px-5 rounded-md shadow-md py-3 px-3 h-auto md:h-16'>
        <div className='flex items-center mb-4 md:mb-0'>
            <p className='mt-1 whitespace-nowrap text-[#2D3748] dark:text-[#F5F5F5] font-light text-lg'>
            سلام، وقت شما بخیر به بخش داشبورد خوش آمدید، گزارشات مورد نیاز شما در اختیار شماست!
          </p>
        </div>
      
        <div className='flex justify-between gap-4'>
          <div>
            <Image
              className='bg-[#FFFFFF] dark:bg-[#4F5D74] rounded-full'
              src={userImage} 
              alt='user'
              width={40}
              height={40}
            />
          </div>
          <div className='hidden lg:inline lg:h-auto md:mb-4'>
            <p className='text-[#2D3748] mt-2 flex dark:text-[#F5F5F5] whitespace-nowrap items-center font-medium text-base'>
              {user?.name}
            </p>
        
        </div>
      </div>
      </div>
    </div>
  );
};

export default AdminHeader;
