import React, { useEffect, useState } from "react";
import Image from "next/image";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import IconImage from '@/app/assent/Img/adminPanel/defultUser.png';
import Link from 'next/link';

interface Message {
  id: number;
  description: string;
  priority: string;
  created_at: string;
  first_name: string | null;
  last_name: string | null;
  avatar: string | null;
  ticket_id: number;
  messages:any
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
    const token = localStorage.getItem("authToken");
    setAuthToken(token);
  }, []);

  const fetchMessages = async (): Promise<Message[]> => {
    const response = await axios.get<ApiResponse>(
      "https://fundcharitynet.com/api/messages/index",
      {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      }
    );

    return response.data.ticket.data.flatMap(ticket => ticket.messages);
  };

  const { data, isLoading, error } = useQuery({
    queryKey: ["messages"],
    queryFn: fetchMessages,
    enabled: !!authToken,
    staleTime: 1000 * 60 * 5,
  });

  if (isLoading) {
    return (
      <div>
        <div className="flex gap-[500px] justify-between items-center mb-2 mt-[50px]">
          <div className="mr-4">
            <p className="font-bold dark:text-white text-lg">پشتیبانی</p>
          </div>
        </div>

        <div className="py-2 mt-14">
          <p className="font-bold dark:text-white">
            پیام‌های در انتظار پاسخگویی
          </p>
        </div>
        <div className="bg-white dark:bg-[#4F5D74] w-[145%] h-[100%] shadow-md mt-5 px-[340px] py-80 pb-4 cursor-pointer rounded-md">          <div className="flex justify-center items-center">
            <span className="loading loading-dots text-[#4FD1C5] loading-lg -mt-60"></span>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <div className="flex gap-[500px] justify-between items-center mb-2 mt-[50px]">
          <div className="mr-4">
            <p className="font-bold dark:text-white text-lg">پشتیبانی</p>
          </div>
        </div>

        <div className="py-2 mt-14">
          <p className="font-bold dark:text-white">
            پیام‌های در انتظار پاسخگویی
          </p>
        </div>
        <div className="bg-white dark:bg-black w-[145%] h-[100%] shadow-md mt-5 px-2 py-2 pb-4 cursor-pointer rounded-md">
          <p>
            خطا در دریافت داده‌ها:{" "}
            {error instanceof Error ? error.message : "نامشخص"}
          </p>
        </div>
      </div>
    );
  }

  if (!data || data.length === 0) {
    return (
      <div>
        <div className="flex gap-[500px] justify-between items-center mb-2 mt-[50px]">
          <div className="mr-4">
            <p className="font-bold dark:text-white text-lg">پشتیبانی</p>
          </div>
        </div>

        <div className="py-2 mt-14">
          <p className="font-bold dark:text-white">
            پیام‌های در انتظار پاسخگویی
          </p>
        </div>
        <div className="bg-white dark:bg-[#4F5D74] w-[145%] h-[100%] shadow-md mt-5 px-[210px] py-80 pb-4 cursor-pointer rounded-md">
          <p className="flex -mt-40 dark:text-white mr-40">هیچ پیامی یافت نشد.</p>
        </div>
      </div>
    );
  }

  return (

    <div>
    <div className="flex gap-[500px] justify-between items-center mb-2 mt-[50px]">
      <div className="mr-4">
        <p className="font-bold dark:text-white text-lg">پشتیبانی</p>
      </div>
    </div>

    <div>
      <div className="py-2 mt-14">
        <p className="font-bold dark:text-white">
          پیام‌های در انتظار پاسخگویی
        </p>
      </div>
      <div className="bg-white dark:bg-[#4F5D74] w-[540%] h-[100%] shadow-md mt-5 px-2 py-2 pb-4 cursor-pointer rounded-sm">
        {data.map((message) => (
          <Link 
            href={`/supportchat/${message.ticket_id}`}
            key={message.id}
          >
            <div
              className={`flex w-[100%] mt-10 py-4 gap-4 items-start rounded-md ${
                message.id % 2 === 0
                  ? "bg-[#4FD1C50D] border-r-4 border-[#00A991]"
                  : "bg-[#2D37480D] border-r-4 border-[#2D3748]"
              }`}
            >
              <Image
                src={message.avatar ? message.avatar : IconImage}
                width={40}
                height={40}
                alt="user"
                className="rounded-full"
              />
              <div className="text-right">
                <p className="font-bold dark:text-white text-[#003B33]">
                  {message.first_name ? `${message.first_name} ${message.last_name}` : "بدون نام"}
                </p>
                <p className="text-[#003B33] dark:text-white font-normal">
                  {message.description}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  </div>
);
} 
export default SupportMessage;


