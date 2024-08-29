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
  id: number;
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
  return num.toString().replace(/\d/g, (digit) => persianDigits[parseInt(digit)]);
};

const fetchUsers = async (): Promise<User[]> => {
  try {
    const response = await axiosInstance.get("http://hosseinshabab.iapp.ir/api/installments/show/admin");
    console.log("API response:", response.data);

    if (response.data && Array.isArray(response.data.data)) {
      return response.data.data.map(user => ({
        id: toPersianDigits(user.id),
        name: `${user.first_name} ${user.last_name}`,
        joinDate: toPersianDigits(dayjs(user.created_at).calendar('jalali').format('YYYY/MM/DD')), // تبدیل تاریخ به فارسی
        loans: toPersianDigits(user.debt), // تبدیل وام به فارسی
        depositAmount: toPersianDigits(user.card_number) // تبدیل شماره کارت به فارسی
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
    const response = await axiosInstance.put(`/factors/index/${updatedUser.id}`, updatedUser, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error updating user:", error);
    throw error;
  }
};

const NotDepositorsUserFinancial: React.FC = () => {
  const queryClient = useQueryClient();

  const { data: users = [], isLoading, isError, error } = useQuery({
    queryKey: ['users'],
    queryFn: fetchUsers,
  });

  const mutation = useMutation({
    mutationFn: updateUser,
    onSuccess: () => {
      queryClient.invalidateQueries(['users']);
    },
    onError: (error) => {
      console.error('Error updating user:', error);
    },
  });

  const handleUpdate = (user: User) => {
    mutation.mutate(user);
  };

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error: {error instanceof Error ? error.message : "An unknown error occurred"}</p>;

  if (!Array.isArray(users)) {
    return <p>Error: Data format is incorrect</p>;
  }

  return (
    <div>
      <div className="flex gap-[74%] items-center mb-2 mt-12 mr-3">
        <div className="mr-2">
          <p className="font-bold text-lg">مدیریت مالی</p>
        </div>
        <div className="flex justify-end mr-2">
          <Link href="/showuserdetail">
            <div className="flex items-center">
              بازگشت
              <Image src={backImage} width={38} height={38} alt="arrow" />
            </div>
          </Link>
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
