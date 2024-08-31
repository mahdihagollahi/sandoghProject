import React, { useEffect } from 'react';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';
import axios from 'axios';
import UserDeleteTable from '@/src/app/components/AdminPage/UserDeleteTable';
import Image from 'next/image';
import backImage from '@/src/app/assent/Img/adminPanel/back.svg';
import ImageSearch from '@/src/app/assent/Img/adminPanel/Search.svg';
import RoutTableUser from './RoutTableUser';

interface User {
  id: number;
  src: string;
  name: string;
  joinDate: string;
  loans: string;
  permission: string;
}

const fetchUsers = async () => {
  const authToken = localStorage.getItem('authToken');

  if (!authToken) {
    throw new Error('No auth token found');
  }

  const { data } = await axios.put('https://mohammadelia30.ir/shabab/api/users/index', {
    permission: 'deleted'
  }, {
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
  });

  console.log('Fetched data:', data); 

  return data;
};

const EveryUser: React.FC = () => {
  const queryClient = new QueryClient();

  useEffect(() => {
    const authToken = localStorage.getItem('authToken');
    if (!authToken) {
      console.log('No auth token found');
      
    }
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <UserList />
    </QueryClientProvider>
  );
};

const UserList: React.FC = () => {
  const { data, isLoading, error } = useQuery('users', fetchUsers);

  useEffect(() => {
    if (data) {
      console.log('Data type:', typeof data);
      console.log('Data:', data);
    }
  }, [data]);

  const users: User[] = Array.isArray(data) ? data : [];

  const filteredUsers = users.filter((user: User) => user.permission === 'deleted');

  if (isLoading){
    return(
      <div>
      <div className='flex gap-24 items-center mb-2 mt-5 mr-3'>
        <div className='mr-2'>
          <p className='font-bold text-lg'>مشاهده کاربران</p>
        </div>
        <div className='flex items-center gap-2'>
          <label className="input flex items-center border border-[#E2E8F0] gap-4">
            <Image src={ImageSearch} width={20} height={20} alt='search' />
            <input
              className='w-[32rem] h-[32rem]'
              type="search"
              placeholder="جستجو نام کاربری یا شماره تلفن"
            />
          </label>
        </div>
        <div className='flex justify-end mr-2'>
          <a href="" className='flex items-center'>
            بازگشت
            <Image src={backImage} width={38} height={38} alt='arrow' />
          </a>
        </div>
      </div>
      <div>
        <RoutTableUser />
      </div>
      <div>
      <UserDeleteTable users={filteredUsers} />
        <div className='flex justify-center items-center -mt-5'>
          <span className="loading loading-dots text-accent loading-lg"></span>
        </div>
      </div>
    </div>
    )
  };
  if (error) return <div>Error occurred</div>;

  return (
    <div>
      <div className='flex gap-24 items-center mb-2 mt-5 mr-3'>
        <div className='mr-2'>
          <p className='font-bold text-lg'>مشاهده کاربران</p>
        </div>
        <div className='flex items-center gap-2'>
          <label className="input flex items-center border border-[#E2E8F0] gap-4">
            <Image src={ImageSearch} width={20} height={20} alt='search' />
            <input
              className='w-[32rem] h-[32rem]'
              type="search"
              placeholder="جستجو نام کاربری یا شماره تلفن"
            />
          </label>
        </div>
        <div className='flex justify-end mr-2'>
          <a href="" className='flex items-center'>
            بازگشت
            <Image src={backImage} width={38} height={38} alt='arrow' />
          </a>
        </div>
      </div>
      <div>
        <RoutTableUser />
      </div>
      <UserDeleteTable users={filteredUsers} />
    </div>
  );
};

export default EveryUser;
