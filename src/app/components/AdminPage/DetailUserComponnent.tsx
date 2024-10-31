"use client";

import React, { useState } from "react";
import axios from "axios";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  useMutation,
  useQuery,
  QueryClient,
  QueryClientProvider,
} from "react-query"; 
import DefaultAvatar from "@/app/assent/Img/adminPanel/defultUser.png";
import arrowImage from "@/app/assent/Img/adminPanel/back.svg";
import cardImage from "@/app/assent/Img/adminPanel/carddetail.svg";
import cardImage2 from "@/app/assent/Img/adminPanel/carddetail2.png";
import DetailUserInput from "./DetailUserInput";


const queryClient = new QueryClient();

const fetchUserData = async (userId: string | undefined) => {
  const authToken = localStorage.getItem("authToken");

  if (!userId) {
    throw new Error("User ID is missing");
  }

  const response = await axios.put(
    `https://fundcharitynet.com/api/users/index/${userId}`,
    {},
    {
      headers: {
        Authorization: `Bearer ${authToken}`,
        "Content-Type": "application/json",
      },
    }
  );

  return response.data.user;
};

const DetailUser: React.FC = () => {
  const pathname = usePathname();
  const userId = pathname.split("/").pop();
  const [error, setError] = useState<string | null>(null);

  const {
    data: userDetail,
    isLoading,
    isError,
  } = useQuery(["userDetail", userId], () => fetchUserData(userId), {
    enabled: !!userId, 
  });

  
  const blockUserMutation = useMutation(
    async () => {
      const authToken = localStorage.getItem("authToken");

      if (!authToken) {
        throw new Error("Authentication token is missing");
      }

      const response = await axios.delete(
        `https://mohammadelia30.ir/shabab/api/users/delete/${userId}`,
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
            "Content-Type": "application/json",
          },
        }
      );

      return response.data;
    },
    {
      onSuccess: () => {
        alert("User has been blocked successfully!");
      },
      onError: (error) => {
        alert("Failed to block user: " + (error as Error).message);
      },
    }
  );

  const handleBack = () => {
    window.history.back();
  };

  const handleBlockUser = () => {
    blockUserMutation.mutate();
  };

  if (isLoading) {
    return (
      <div>
        <div className="flex gap-[150%]  items-center mb-2 mt-12">
          <div className="mr-2">
            <p className="font-bold text-lg dark:text-white whitespace-nowrap">
              مشاهده کاربران
            </p>
          </div>
          <div className="flex justify-end mr-2"></div>
        </div>

        <div className="bg-white dark:bg-[#4F5D74] w-[795%] h-[80%] shadow-md mt-5  rounded-md ">
          <div className="flex ">
            <span className="loading loading-dots text-[#4FD1C5] loading-lg mt-96 mr-[50%]"></span>
          </div>
        </div>
      </div>
    );
  }

  if (isError || !userDetail)
    return (
      <div>
        <div className="flex gap-[150%] items-center mb-2 mt-14">
          <div className="mr-2">
            <p className="font-bold text-lg dark:text-white whitespace-nowrap">
              مشاهده کاربران
            </p>
          </div>
          <div className="flex justify-end mr-2"></div>
        </div>

        <div className="bg-white dark:bg-[#4F5D74] w-[795%] h-[80%] shadow-md mt-5  cursor-pointer rounded-md ">
          <div className="flex dark:text-white justify-center items-center">
            <p>Error: {error || "دیتا دریافت نشد"}</p>
          </div>
        </div>
      </div>
    );

  return (
    <div>
      <div className="flex gap-[79.9%] items-center mb-2 mt-14">
        <div className="mr-2">
          <p className="font-bold text-lg dark:text-white whitespace-nowrap">
            مشاهده کاربران
          </p>
        </div>
        <div
          className="flex justify-end dark:text-white mr-2 items-center cursor-pointer"
          onClick={handleBack}
        >
          بازگشت
          <Image src={arrowImage} width={38} height={38} alt="arrow" />
        </div>
      </div>

      <div className="bg-white dark:bg-[#4F5D74] shadow-md mt-14 px-[102px] py-10  rounded-md">
        <div className="flex justify-center items-center">
          <Image
            src={userDetail.avatar || DefaultAvatar}
            width={98}
            height={98}
            alt="user"
            className="rounded-sm"
          />
        </div>
        <p>
          {userDetail.name}
        </p>

        <div className="flex items-center ">
          <div className="bg-[#F9F9F9] w-36 gap-1 justify-center items-center h-16 absolute flex flex-col mr-[31%] mb-20">
            <span className="font-bold text-[#212121] text-base">
            موجودی
            </span>
           
             {userDetail.debt || 0}   تومن
          </div>

          <div className="bg-[#F9F9F9] w-40 gap-1 justify-center items-center h-20 absolute flex flex-col mr-[41%] mb-20">
            <span className="font-bold mr-3 px-2 text-[#212121] text-base">
            تعداد قسط های
            تسویه شده
            </span>
           
            <span>
            {userDetail.paid_loans || 0} از {userDetail.loans || 0}
            </span>
          </div>

          <div className="bg-[#F9F9F9] w-40 gap-1 justify-center items-center h-20 absolute flex flex-col mr-[52.5%] mb-20">
            <span className="font-bold mr-3 px-2 text-[#212121] text-base">
            تعداد قسط های
            تسویه نشده
            </span>
           
            <span>
            {userDetail.unpaid_loan || 0} از {userDetail.loans || 0}
            </span>
          </div>
        </div>
        <div className="flex dark:text-white justify-center">
          <button
            className="bg-[#FB1D1D] text-white px-4 py-2 rounded-2xl font-medium text-xs"
            onClick={handleBlockUser}
          >
            مسدود
          </button>
        </div>
        <div className="flex justify-center mt-5">
          <div>
            <p className="font-normal dark:text-white mr-6 text-[9px] text-[#2D3748]">
              شماره کارت
            </p>
            <Image
              src={userDetail.card_image || cardImage}
              width={244}
              height={140}
              alt="cardNumber"
            />
          </div>

          <div>
            <p className="font-normal dark:text-white mr-6 text-[9px] text-[#2D3748]">
              کارت ملی
            </p>
            <Image
              src={userDetail.national_card_image || cardImage2}
              width={244}
              height={140}
              alt="cardNumber"
            />
          </div>
        </div>
         <DetailUserInput userDetail={userDetail}/>
      </div>
    </div>
  );
};

const DetailUserWithQueryClient: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <DetailUser />
    </QueryClientProvider>
  );
};

export default DetailUserWithQueryClient;
