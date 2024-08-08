import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import IconImage from '@/src/app/assent/Img/adminPanel/defultUser.png'
import axios from 'axios';

interface User {
  name: string;
  image: string;
}

const AdminHeader: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const fetchUserData = async () => {
      const token = localStorage.getItem('authToken'); 

      if (!token) {
        console.error('No token found, please log in.');
        return;
      }

      try {
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

        console.log(response.data); 

        setUser({
          name: response.data.name || 'نام کاربر نیست',
          image: response.data.image || IconImage, // مقدار پیش‌فرض برای تصویر
        });
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, []);

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
                src={user.image} // استفاده از تصویر دریافت شده از API
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
