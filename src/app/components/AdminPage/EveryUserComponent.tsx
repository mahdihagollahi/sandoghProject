import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import UserTable from '@/src/app/components/AdminPage/UserTable';
import Image from 'next/image';
import backImage from '@/src/app/assent/Img/adminPanel/back.svg';
import ImageSearch from '@/src/app/assent/Img/adminPanel/Search.svg';
import RoutTableUser from './RoutTableUser';
import DetailUser from './DetailUserComponnent';

interface User {
  id: number;
  src: string;
  name: string;
  joinDate: string;
  loans: string;
  permission: string; 
}

const fetchUsers = async (): Promise<User[]> => {
  const token = localStorage.getItem('authToken');

  if (!token) {
    throw new Error("No auth token found");
  }

  try {
    const { data } = await axios.put(
      "https://mohammadelia30.ir/shabab/api/users/index",
      { 
        permission: 'active' 
      },
      {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      }
    );

   

    return data;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
};



const EveryUser: React.FC = () => {
  const [selectedUserId, setSelectedUserId] = useState<number | null>(null);

  const { data: users = [], error, isLoading } = useQuery<User[], Error>({
    queryKey: ['users'],
    queryFn: fetchUsers,
    retry: 1, 
  });

  if (isLoading) return (
    <div className='dark:bg-black'>
      <div className="flex gap-24 items-center mb-2 mt-10 mr-3">
        <div className="mr-2">
          <p className="font-bold text-lg">مشاهده کاربران</p>
        </div>
        <div className="flex items-center gap-2">
          <label className="input flex items-center border border-[#E2E8F0] gap-4">
            <Image src={ImageSearch} width={20} height={20} alt="search" />
            <input
              className="w-[32rem] h-[32rem]"
              type="search"
              placeholder="جستجو نام کاربری یا شماره تلفن"
            />
          </label>
        </div>
        <div className="flex justify-end mr-2">
          <a href="" className="flex items-center">
            بازگشت
            <Image src={backImage} width={38} height={38} alt="arrow" />
          </a>
        </div>
      </div>
      <div>
        <RoutTableUser />
      </div>
      <div>
        <UserTable users={[]} onUserSelect={setSelectedUserId} />
        <div className='flex justify-center items-center -mt-5'>
          <span className="loading loading-dots text-accent loading-lg"></span>
        </div>
      </div>
    </div>
  );

  if (error) return (
    <div className='dark:bg-black'>
      <div className="flex gap-24 items-center mb-2 mt-10 mr-3">
        <div className="mr-2">
          <p className="font-bold text-lg">مشاهده کاربران</p>
        </div>
        <div className="flex items-center gap-2">
          <label className="input flex items-center border border-[#E2E8F0] gap-4">
            <Image src={ImageSearch} width={20} height={20} alt="search" />
            <input
              className="w-[32rem] h-[32rem]"
              type="search"
              placeholder="جستجو نام کاربری یا شماره تلفن"
            />
          </label>
        </div>
        <div className="flex justify-end mr-2">
          <a href="" className="flex items-center">
            بازگشت
            <Image src={backImage} width={38} height={38} alt="arrow" />
          </a>
        </div>
      </div>
      <div>
        <RoutTableUser />
      </div>
      <p className='text-red-500 font-bold'>{error.message}</p>
    </div>
  );

  return (
    <div className='dark:bg-black'>
      <div className="flex gap-24 items-center mb-2 mt-5 mr-3">
        <div className="mr-2">
          <p className="font-bold text-lg">مشاهده کاربران</p>
        </div>
        <div className="flex items-center gap-2">
          <label className="input flex items-center border border-[#E2E8F0] gap-4">
            <Image src={ImageSearch} width={20} height={20} alt="search" />
            <input
              className="w-[32rem] h-[32rem]"
              type="search"
              placeholder="جستجو نام کاربری یا شماره تلفن"
            />
          </label>
        </div>
        <div className="flex justify-end mr-2">
          <a href="" className="flex items-center">
            بازگشت
            <Image src={backImage} width={38} height={38} alt="arrow" />
          </a>
        </div>
      </div>
      <div>
        <RoutTableUser />
      </div>
      {selectedUserId ? (
        <DetailUser userId={selectedUserId} />
      ) : (
        <UserTable users={users} onUserSelect={setSelectedUserId} />
      )}
    </div>
  );
};

export default EveryUser;



