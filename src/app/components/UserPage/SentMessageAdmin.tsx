

import React from "react";
import { useQuery, QueryClient, QueryClientProvider } from "react-query";
import axios from "axios";


const queryClient = new QueryClient();

const fetchSentMessages = async () => {
  const authToken = localStorage.getItem("authToken");
  if (!authToken) {
    throw new Error("Token not found");
  }
  const response = await axios.get(
    "https://fundcharitynet.com/api/messages/sentMessages",
    {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    }
  );
  return response.data;
};

const SentMessageComponent: React.FC = () => {
  const { data, error, isLoading } = useQuery(
    "sentMessages",
    fetchSentMessages
  );

  if (isLoading) {
    return   <div>
    <div className="flex justify-between items-center mb-2 mt-12">
      <div className="mr-2">
        <p className="font-bold dark:text-white text-lg">پیام ها</p>
      </div>
    </div>

    <div className="flex flex-col gap-[5px] justify-center mt-12">
    <span className="loading loading-dots text-[#4FD1C5] loading-lg"></span>

    </div>
  </div>;
  }

  if (error) {
    return(
        <div>
        <div className="flex justify-between items-center mb-2 mt-12">
          <div className="mr-2">
            <p className="font-bold dark:text-white text-lg">پیام ها</p>
          </div>
        </div>

        <div className="flex flex-col gap-[5px] mt-12">
        <div>خطا در دریافت اطلاعات: {error.message}</div>
        </div>
      </div>
     
    ) ;
  }

  
  const messages = Array.isArray(data) ? data : [];

  if (messages.length === 0) {
    return (
      <div>
        <div className="flex justify-between items-center mb-2 mt-12">
          <div className="mr-2">
            <p className="font-bold dark:text-white text-lg">پیام ها</p>
          </div>
        </div>

        <div className="flex flex-col gap-[5px] mt-12">
            <p>
                پیامی موجود نیست
            </p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-2 mt-10">
        <div className="mr-2">
          <p className="font-bold dark:text-white text-lg">پیام ها</p>
        </div>
      </div>

      <div className="flex flex-col gap-[5px] mt-12">
        {messages.map((msg, index) => (
          <div
            key={msg.id}
            className={`p-[10px] w-[1025px] h-[100px] ${
              index % 2 === 0
                ? "bg-[#d7ebe8] border-r-[3px] border-[#4FD1C5]"
                : "bg-[#d4d4d4] border-r-[3px] border-[#394860]"
            }`}
          >
            <div className="flex flex-row justify-between w-[961px] h-[27px]">
              <h4 className="text-sm text-[#5B5B5B] dark:text-white font-bold">
                {msg.subject}
              </h4>
              <span className="text-sm dark:text-white text-[#5B5B5B]">
                {msg.date}
              </span>
            </div>
            <div className="mt-[10px]">
              <p className="text-xs dark:text-white text-[#5B5B5B]">
                {msg.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const SentMessageAdmin: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <SentMessageComponent />
    </QueryClientProvider>
  );
};

export default SentMessageAdmin;
