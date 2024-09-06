import React from "react";
import UserTableFinancial from "@/src/app/components/AdminPage/UserTableNotDespositors";
import Image from "next/image";
import backImage from "@/src/app/assent/Img/adminPanel/back.svg";
import RoutTableFiancial from "./RoutTableFinancial";
import Link from "next/link";
import axios from "axios";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import dayjs from "dayjs";
import jalaliday from "jalaliday";

dayjs.extend(jalaliday);

interface User {
  id: string;
  name: string;
  joinDate: string;
  loans: string;
  depositAmount: string;
}

const axiosInstance = axios.create({
  baseURL: "https://mohammadelia30.ir/shabab/api",
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

const toPersianDigits = (num: number | string): string => {
  const persianDigits = "۰۱۲۳۴۵۶۷۸۹";
  return num
    .toString()
    .replace(/\d/g, (digit) => persianDigits[parseInt(digit)]);
};

const fetchUsers = async (): Promise<User[]> => {
  try {
    const response = await axiosInstance.get("/installments/show/admin");
    console.log("API response:", response.data);

    if (
      response.data &&
      response.data.users &&
      Array.isArray(response.data.users.data)
    ) {
      return response.data.users.data.map((user) => ({
        id: toPersianDigits(user.id),
        name: `${user.first_name} ${user.last_name}`,
        joinDate: toPersianDigits(
          dayjs(user.created_at).calendar("jalali").format("YYYY/MM/DD")
        ),
        loans: toPersianDigits(user.debt),
        depositAmount: toPersianDigits(user.card_number),
      }));
    } else {
      throw new Error("Data is not in the expected format");
    }
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
};

const updateUser = async (updatedUser: User) => {
  try {
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
  } catch (error) {
    console.error("Error updating user:", error);
    throw error;
  }
};

const NotDepositorsUserFinancial: React.FC = () => {
  const queryClient = useQueryClient();

  const {
    data: users = [],
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
  });

  const mutation = useMutation({
    mutationFn: updateUser,
    onSuccess: () => {
      queryClient.invalidateQueries(["users"]);
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
        <div className="flex gap-[77%] items-center mb-2 mt-12 mr-3">
          <div className="mr-2">
            <p className="font-bold text-lg">مدیریت مالی</p>
          </div>
          <div className="flex justify-end mr-2">
              <div className="flex items-center cursor-pointer" onClick={handleBack}>
                بازگشت
                <Image src={backImage} width={38} height={38} alt="arrow" />
              </div>
          </div>
        </div>
        <div>
          <RoutTableFiancial />
        </div>
        <div>
          <UserTableFinancial users={users as User[]} />
          <div className="flex justify-center items-center -mt-10">
            <span className="loading loading-dots text-accent loading-lg"></span>
          </div>
        </div>
      </div>
    );
  }

  if (isError) {
    return (
      <div>
        <div className="flex gap-[77%] items-center mb-2 mt-12 mr-3">
          <div className="mr-2">
            <p className="font-bold text-lg">مدیریت مالی</p>
          </div>
          <div className="flex justify-end mr-2">
          <div className="flex items-center cursor-pointer" onClick={handleBack}>
                بازگشت
                <Image src={backImage} width={38} height={38} alt="arrow" />
              </div>
          </div>
        </div>
        <div>
          <RoutTableFiancial />
        </div>
        <div>
          <UserTableFinancial users={users as User[]} />
          <div className="flex justify-center items-center -mt-20">
            <p>
              Error:{" "}
              {error instanceof Error
                ? error.message
                : "An unknown error occurred"}
            </p>
            ;
          </div>
        </div>
      </div>
    );
  }

  if (!Array.isArray(users)) {
    return (
      <div>
        <div className="flex gap-[77%] items-center mb-2 mt-12 mr-3">
          <div className="mr-2">
            <p className="font-bold text-lg">مدیریت مالی</p>
          </div>
          <div className="flex justify-end mr-2">
          <div className="flex items-center cursor-pointer" onClick={handleBack}>
                بازگشت
                <Image src={backImage} width={38} height={38} alt="arrow" />
              </div>
          </div>
        </div>
        <div>
          <RoutTableFiancial />
        </div>
        <div>
          <UserTableFinancial users={users as User[]} />
          <div className="flex justify-center items-center -mt-20">
            <p>Error: Data format is incorrect</p>{" "}
          </div>
        </div>
      </div>
    );
  }

  if (!Array.isArray(users) || users.length === 0) {
    return (
      <div>
        <div className="flex gap-[77%] items-center mb-2 mt-12 mr-3">
          <div className="mr-2">
            <p className="font-bold text-lg">مدیریت مالی</p>
          </div>
          <div className="flex justify-end mr-2">
          <div className="flex items-center cursor-pointer" onClick={handleBack}>
                بازگشت
                <Image src={backImage} width={38} height={38} alt="arrow" />
              </div>
          </div>
        </div>
        <div>
          <RoutTableFiancial />
        </div>
        <div>
          <UserTableFinancial users={users as User[]} />
          <div className="flex justify-center items-center -mt-10">
            <p>کاربری یافت نشد </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="flex gap-[77%] items-center mb-2 mt-12 mr-3">
        <div className="mr-2">
          <p className="font-bold text-lg">مدیریت مالی</p>
        </div>
        <div className="flex justify-end mr-2">
        <div className="flex items-center cursor-pointer" onClick={handleBack}>
              بازگشت
              <Image src={backImage} width={38} height={38} alt="arrow" />
            </div>
        </div>
      </div>
      <div>
        <RoutTableFiancial />
      </div>
      <UserTableFinancial users={users as User[]} />
    </div>
  );
};

export default NotDepositorsUserFinancial;
