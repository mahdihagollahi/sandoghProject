"use client";
import React from "react";
import axios from "axios";
import { useQuery, QueryClient, QueryClientProvider } from "react-query";

// QueryClient initialization
const queryClient = new QueryClient();

interface TableSumFishProps {
  userId: number;
}

const fetchFactors = async (userId: number) => {
  const authToken = localStorage.getItem("authToken");
  if (!authToken) {
    throw new Error("Token not found");
  }

  const { data } = await axios.put(
    `https://fundcharitynet.com/api/factors/index/${userId}`,
    {},
    {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    }
  );
  return data;
};

const TableSumFish: React.FC<TableSumFishProps> = ({ userId }) => {
  const { data, isLoading, isError } = useQuery(["factors", userId], () =>
    fetchFactors(userId)
  );

  if (isLoading) {
    return (
      <div className="">
        <div className="w-[117%] py-7 shadow-md rounded-md bg-white dark:bg-[#4F5D74] dark:text-white">
          <div>
            <span className="font-bold mr-12">صورت حساب پرداخت شما</span>
          </div>
          <div className="mr-5 w-[500px] ">
            <div>
              <span className="loading loading-dots text-[#4FD1C5] loading-lg my-60 mr-[50%]"></span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="">
        <div className="w-[117%] py-7 shadow-md rounded-md bg-white dark:bg-[#4F5D74] dark:text-white">
          <div>
            <span className="font-bold mr-12">صورت حساب پرداخت شما</span>
          </div>
          <div className="mr-5 w-[500px] ">
            <div>خطایی رخ داده است</div>
          </div>
        </div>
      </div>
    );
  }

  const list = data?.list || [];
  const sum = data?.sum || [];

  return (
    <div className="">
      <div className="w-[117%] py-7 shadow-md rounded-md bg-white dark:bg-[#4F5D74] dark:text-white">
        <div>
          <span className="font-bold mr-12">صورت حساب پرداخت شما</span>
        </div>
        <div className="flex flex-row justify-between mr-5 w-[500px] mt-10 ">
          <div>
            <span className="font-bold dark:text-white">شماره</span>
            {list.map((item: any, index: number) => (
              <div key={index}>
                <div className="mt-3">
                  <span>{item.name}</span>
                </div>
              </div>
            ))}
          </div>
          <div>
            <span className="font-bold mr-1 dark:text-white">مبلغ</span>
            {list.map((item: any, index: number) => (
              <div key={index} className="bg-white dark:bg-[#4F5D74]">
                <div className="mt-3">
                  <span>{item.payment}</span>
                </div>
              </div>
            ))}
          </div>
          <div>
            <span className="font-bold mr-1">تاریخ</span>
            {list.map((item: any, index: number) => (
              <div key={index}>
                <div className="mt-3">
                  <span>{item.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-row gap-28 mt-5">
          <span className="font-bold mr-10">مجموع مبلغ واریزی : </span>
          {sum.map((task: any, index: number) => (
            <div key={index} className="flex items-center gap-1">
              <p className="text-[#4FD1C5]">{task.sum}</p>
              <p>میلیون تومان</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const TableSumFishWrapper: React.FC<{ userId: number }> = ({ userId }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <TableSumFish userId={userId} />
    </QueryClientProvider>
  );
};

export default TableSumFishWrapper;
