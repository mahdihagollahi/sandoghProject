import React, { useState, useEffect } from 'react';
import UserTableFinancial from '@/src/app/components/AdminPage/UserTableNotDespositors';
import Image from 'next/image';
import backImage from '@/src/app/assent/Img/adminPanel/back.svg';
import RoutTableFiancial from './RoutTableFinancial';
import Link from 'next/link';
import axios from 'axios';
import { useMutation, useQueryClient } from '@tanstack/react-query';

interface User {
  id: number;
  name: string;
  joinDate: string;
  loans: string;
  depositAmount: string;
}

const NotDepositorsUserFinancial: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const queryClient = useQueryClient();

  const axiosInstance = axios.create({
    baseURL: 'https://shabab.v1r.ir/api',
  });

  axiosInstance.interceptors.request.use(
    (config) => {
      const authToken = localStorage.getItem('authToken');
      if (authToken) {
        config.headers.Authorization = `Bearer ${authToken}`;
      }
      return config;
    },
    (error) => Promise.reject(error)
  );

  const fetchUsers = async () => {
    try {
      const response = await axiosInstance.put('https://shabab.v1r.ir/api/installments/show/admin'); 
      setUsers(response.data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const updateUser = async (id: number, data: any) => {
    const response = await axiosInstance.put(`/factors/index/${id}`, data, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  };

  const mutation = useMutation({
    mutationFn: (updatedUser: User) => updateUser(updatedUser.id, updatedUser),
    onSuccess: () => {
      queryClient.invalidateQueries(['users']);
      fetchUsers(); 
    },
  });

  const handleUpdate = (user: User) => {
    mutation.mutate(user);
  };

  return (
    <div >
         <div className='flex gap-[74%]  items-center mb-2 mt-5 mr-3  '>
            <div className='mr-2 '>
                <p className='font-bold text-lg'>
                مدیریت مالی               
                 </p>
            </div>
           


            <div className='flex justify-end mr-2  '>
            <Link href="/showuserdetail">
             
             <div  className='flex items-center'>
             بازگشت
             <Image
               src={backImage}
               width={38}
               height={38}
               alt='arrow'

               />
             </div>
             </Link>
              
            </div>
        </div>
      <div>
        <RoutTableFiancial/>
      </div>
      <UserTableFinancial users={users} />
    </div>
   
  );
};

export default NotDepositorsUserFinancial;


