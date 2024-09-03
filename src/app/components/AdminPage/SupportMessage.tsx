import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import axios from 'axios';
import Link from 'next/link';
import { useQuery } from '@tanstack/react-query';
import arrowImage from '@/src/app/assent/Img/adminPanel/back.svg';

interface Message {
  id: number;
  description: string;
  priority: string;
  created_at: string;
}

interface Ticket {
  current_page: number;
  data: Message[];  
  last_page: number;
  per_page: number;
  total: number;
}

interface ApiResponse {
  ticket: Ticket;
}

function SupportMessage() {
  const [authToken, setAuthToken] = useState<string | null>(null);

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    setAuthToken(token);
  }, []);

  const fetchMessages = async (): Promise<Message[]> => {
    const response = await axios.get<ApiResponse>('https://mohammadelia30.ir/shabab/api/messages/index', {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    });


    return response.data.ticket.data;
  };

  const { data, isLoading, error } = useQuery({
    queryKey: ['messages'],
    queryFn: fetchMessages,
    enabled: !!authToken,
    staleTime: 1000 * 60 * 5,
  });

  if (isLoading) {
    return (
      <div>
        <div className='flex gap-[500px] justify-between items-center mb-2 mt-10'>
          <div className='mr-4'>
            <p className='font-bold dark:text-white text-lg'>پشتیبانی</p>
          </div>
          <div className='absolute flex mr-[60.5%]'>
            <Link href="/" className='flex dark:text-white items-center'>
              بازگشت
              <Image src={arrowImage} width={38} height={38} alt='arrow' />
            </Link>
          </div>
        </div>

        <div className='py-2 mt-5'>
          <p className='font-bold dark:text-white'>پیام‌های در انتظار پاسخگویی</p>
        </div>
        <div className='bg-white dark:bg-black w-[145%] h-[100%] shadow-lg mt-5 px-2 py-2 pb-4 cursor-pointer rounded-sm'>
          <div className="flex justify-center items-center">
            <span className="loading loading-dots text-accent loading-lg"></span>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <div className='flex gap-[500px] justify-between items-center mb-2 mt-10'>
          <div className='mr-4'>
            <p className='font-bold dark:text-white text-lg'>پشتیبانی</p>
          </div>
          <div className='absolute flex mr-[60.5%]'>
            <Link href="/" className='flex dark:text-white items-center'>
              بازگشت
              <Image src={arrowImage} width={38} height={38} alt='arrow' />
            </Link>
          </div>
        </div>

        <div className='py-2 mt-5'>
          <p className='font-bold dark:text-white'>پیام‌های در انتظار پاسخگویی</p>
        </div>
        <div className='bg-white dark:bg-black w-[145%] h-[100%] shadow-lg mt-5 px-2 py-2 pb-4 cursor-pointer rounded-sm'>
          <p>خطا در دریافت داده‌ها: {error instanceof Error ? error.message : 'نامشخص'}</p>
        </div>
      </div>
    );
  }

  if (!data || data.length === 0) {
    return (
      <div>
        <div className='flex gap-[500px] justify-between items-center mb-2 mt-10'>
          <div className='mr-4'>
            <p className='font-bold dark:text-white text-lg'>پشتیبانی</p>
          </div>
          <div className='absolute flex mr-[60.5%]'>
            <Link href="/" className='flex dark:text-white items-center'>
              بازگشت
              <Image src={arrowImage} width={38} height={38} alt='arrow' />
            </Link>
          </div>
        </div>

        <div className='py-2 mt-5'>
          <p className='font-bold dark:text-white'>پیام‌های در انتظار پاسخگویی</p>
        </div>
        <div className='bg-white dark:bg-black w-[145%] h-[100%] shadow-lg mt-5 px-2 py-2 pb-4 cursor-pointer rounded-sm'>
          <p>هیچ پیامی یافت نشد.</p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className='flex gap-[500px] justify-between items-center mb-2 mt-10'>
        <div className='mr-4'>
          <p className='font-bold dark:text-white text-lg'>پشتیبانی</p>
        </div>
        <div className='absolute flex mr-[60.5%]'>
          <Link href="/" className='flex dark:text-white items-center'>
            بازگشت
            <Image src={arrowImage} width={38} height={38} alt='arrow' />
          </Link>
        </div>
      </div>

      <div>
        <div className='py-2 mt-5'>
          <p className='font-bold dark:text-white'>پیام‌های در انتظار پاسخگویی</p>
        </div>
        <div className='bg-white dark:bg-black w-[145%] h-[100%] shadow-lg mt-5 px-2 py-2 pb-4 cursor-pointer rounded-sm'>
          {data.map((message) => (
            <div
              key={message.id}
              className={`flex w-[100%] mt-10 py-4 gap-4 items-start rounded-md ${
                message.id % 2 === 0
                  ? 'bg-[#4FD1C50D] border-r-4 border-[#00A991]'
                  : 'bg-[#2D37480D] border-r-4 border-[#2D3748]'
              }`}
            >
              <Image src='/path/to/default-avatar.png' width={40} height={40} alt='user' className='rounded-full' />
              <div className='text-right'>
                <p className='font-bold dark:text-white text-[#003B33]'>{`پیام ${message.id}`}</p>
                <p className='text-[#003B33] dark:text-white font-normal'>{message.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SupportMessage;
