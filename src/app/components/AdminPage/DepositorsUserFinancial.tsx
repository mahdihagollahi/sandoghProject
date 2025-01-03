import React from "react";
import UserTableDespositors from "@/app/components/AdminPage/UserTableDespositors";
import Image from "next/image";
import backImage from "@/app/assent/Img/adminPanel/back.svg";
import RoutTableFiancial from "./RoutTableFinancial";
import axios from "axios";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

interface User {
  id: number;
  name: string;
  joinDate: string;
  depositAmount: number;
}

interface PaginatedResponse {
  current_page: number;
  data: User[];
  last_page: number;
  per_page: number;
  total: number;
}

const axiosInstance = axios.create({
  baseURL: "https://fundcharitynet.com/api",
});

axiosInstance.interceptors.request.use(
  (config) => {
    const authToken = localStorage.getItem("authToken");
    if (authToken) {
      config.headers.Authorization = `Bearer ${authToken}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

const fetchUsers = async (): Promise<PaginatedResponse> => {
  try {
    const response = await axiosInstance.put("/factors/index");
    console.log("API Response Data:", response.data);
    return response.data.factors as PaginatedResponse;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
};

const updateUser = async (updatedUser: User) => {
  const response = await axiosInstance.put(
    `/factors/index/${updatedUser.id}`,
    updatedUser,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  return response.data;
};

const DepositorsUserFinancial: React.FC = () => {
  const queryClient = useQueryClient();

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
  });

  const mutation = useMutation({
    mutationFn: updateUser,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
    onError: (error) => {
      console.error("Error updating user:", error);
    },
  });

  const handleUpdate = (user: User) => {
    mutation.mutate(user);
  };

  const handleBack = () => {
    window.history.back();
  };

  if (isLoading) {
    return (
      <div>
        <div className="flex gap-[77%] items-center mb-2 mt-[46px] mr-3">
          <div className="mr-2 dark:text-white">
            <p className="font-bold text-lg">مدیریت مالی</p>
          </div>
          <div className="flex justify-end mr-2">
            <div
              className="flex items-center dark:text-white cursor-pointer"
              onClick={handleBack}
            >
              بازگشت
              <Image src={backImage} width={38} height={38} alt="arrow" />
            </div>
          </div>
        </div>
        <div>
          <RoutTableFiancial />
        </div>
        <div>
          <UserTableDespositors users={[]} />
          <div className="flex justify-center items-center -mt-20">
            <span className="loading loading-dots text-[#4FD1C5] loading-lg"></span>
          </div>
        </div>
      </div>
    );
  }

  if (isError) {
    return (
      <div>
        <div className="flex gap-[77%] items-center mb-2 mt-[46px] mr-3">
          <div className="mr-2 dark:text-white">
            <p className="font-bold text-lg">مدیریت مالی</p>
          </div>
          <div className="flex justify-end mr-2">
            <div
              className="flex items-center dark:text-white cursor-pointer"
              onClick={handleBack}
            >
              بازگشت
              <Image src={backImage} width={38} height={38} alt="arrow" />
            </div>
          </div>
        </div>
        <div>
          <RoutTableFiancial />
        </div>
        <div>
          <UserTableDespositors users={[]} />
          <div className="flex justify-center dark:text-white items-center -mt-20">
            <div>
              Error:{" "}
              {error instanceof Error
                ? error.message
                : "An unknown error occurred"}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!data || !data.data || data.data.length === 0) {
    return (
      <div>
        <div className="flex gap-[77%] items-center mb-2 mt-[46px] mr-3">
          <div className="mr-2 dark:text-white">
            <p className="font-bold text-lg">مدیریت مالی</p>
          </div>
          <div className="flex justify-end mr-2">
            <div
              className="flex items-center dark:text-white cursor-pointer"
              onClick={handleBack}
            >
              بازگشت
              <Image src={backImage} width={38} height={38} alt="arrow" />
            </div>
          </div>
        </div>
        <div>
          <RoutTableFiancial />
        </div>
        <div>
          <UserTableDespositors users={[]} />
          <div className="flex justify-center items-center dark:text-white -mt-14">
            کاربری یافت نشد
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="flex gap-[77%] items-center mb-2 mt-[46px] mr-3">
        <div className="mr-2 dark:text-white">
          <p className="font-bold text-lg">مدیریت مالی</p>
        </div>
        <div className="flex justify-end mr-2">
          <div
            className="flex items-center dark:text-white cursor-pointer"
            onClick={handleBack}
          >
            بازگشت
            <Image src={backImage} width={38} height={38} alt="arrow" />
          </div>
        </div>
      </div>
      <div>
        <RoutTableFiancial />
      </div>
      <UserTableDespositors users={data?.data || []} />
    </div>
  );
};

export default DepositorsUserFinancial;
