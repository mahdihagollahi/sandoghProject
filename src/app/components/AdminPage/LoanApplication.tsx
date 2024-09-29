import React from "react";
import Image from "next/image";
import groupImage from "@/src/app/assent/Img/adminPanel/Iconly copy.svg";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

interface UserIdResponse {
  user_id: number;
  [key: string]: any;
}

const fetchRequestCount = async (): Promise<UserIdResponse> => {
  const authToken = localStorage.getItem("authToken");
  if (!authToken) {
    throw new Error('لطفا دوباره لاگین کنید');
  }

  const response = await axios.get<UserIdResponse>(
    "https://mohammadelia30.ir/shabab/api/loans/requestCnt",
    {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    }
  );

  return response.data;
};

function LoanApplication() {
  const { data, error, isLoading } = useQuery({
    queryKey: ["requestCnt"],
    queryFn: fetchRequestCount,
  });

  if (isLoading) {
    return (
      <div className="w-full flex">
        <div className="bg-[#ffff] dark:bg-[#4F5D74]  px-4 py-5 rounded-md shadow-md flex flex-col gap-12 md:items-center xl:w-72">
          <div className="flex justify-between gap-20">
            <p className="text-[#2D3748] dark:text-white font-bold text-sm leading-5">
              درخواست‌های وام
            </p>
            <Image src={groupImage} width={24} height={24} alt="group" />
          </div>
          <div className="flex justify-between gap-[117px]">
            <div>
              <p className="font-bold dark:text-white whitespace-normal text-[#A0AEC0] text-xs leading-8">
                تعداد:
              </p>
            </div>
            <div className="flex items-center gap-1">
              <span className="loading loading-dots text-accent loading-sm"></span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full flex">
        <div className="bg-[#ffff] dark:bg-[#4F5D74] rounded-md px-4 py-5 shadow-md flex flex-col gap-12 md:items-center xl:w-72">
          <div className="flex justify-between gap-20">
            <p className="text-[#2D3748] dark:text-white font-bold text-sm leading-5">
              درخواست‌های وام
            </p>
            <Image src={groupImage} width={24} height={24} alt="group" />
          </div>
          <div className="flex justify-between gap-[117px]">
            <div>
              <p className="font-bold dark:text-white whitespace-normal text-[#A0AEC0] text-xs leading-8">
                تعداد:
              </p>
            </div>
            <div className="flex items-center gap-1">
              <p className="font-bold text-[#A0AEC0] whitespace-normal dark:text-white text-xs leading-8">
                خطا در دریافت اطلاعات
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div>
      <div className="w-full flex">
        <div className="bg-[#ffff] dark:bg-[#4F5D74] rounded-md px-4 py-5 shadow-md flex flex-col gap-12 md:items-center xl:w-72">
          <div className="flex justify-between gap-20">
            <p className="text-[#2D3748] dark:text-white font-bold text-sm leading-5">
              درخواست‌های وام
            </p>
            <Image src={groupImage} width={24} height={24} alt="group" />
          </div>
          <div className="flex justify-between gap-[117px]">
            <div>
              <p className="font-bold dark:text-white whitespace-normal text-[#A0AEC0] text-xs leading-8">
                تعداد:
              </p>
            </div>
            <div className="flex items-center gap-1">
              <p className="font-bold text-[#A0AEC0] whitespace-normal dark:text-white text-xs leading-8">
                {data?.loans}
              </p>
              <p className="font-bold text-[#A0AEC0] whitespace-normal dark:text-white text-xs leading-8">
                نفر در صف
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoanApplication;
