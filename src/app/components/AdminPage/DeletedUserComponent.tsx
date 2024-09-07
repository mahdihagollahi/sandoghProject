import React, { useEffect } from "react";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import axios from "axios";
import Image from "next/image";
import backImage from "@/src/app/assent/Img/adminPanel/back.svg";
import ImageSearch from "@/src/app/assent/Img/adminPanel/Search.svg";
import UserDeleteTable from "@/src/app/components/AdminPage/UserDeleteTable";
import RoutTableUser from "./RoutTableUser";

interface User {
  id: number;
  first_name: string;
  last_name: string;
  phone_number: string;
  emergency_number: string;
  home_number: string;
  national_code: string;
  card_number: string;
  sheba_number: string;
  address: string;
  debt: number;
  created_at: string;
  updated_at: string;
}

interface UserResponse {
  user: {
    current_page: number;
    data: User[];
    first_page_url: string;
    last_page: number;
    last_page_url: string;
    next_page_url: string | null;
    path: string;
    per_page: number;
    prev_page_url: string | null;
    total: number;
  };
}

const fetchUsers = async (): Promise<User[]> => {
  const token = localStorage.getItem("authToken");

  if (!token) {
    throw new Error("No auth token found");
  }

  try {
    const { data } = await axios.put<UserResponse>(
      "https://mohammadelia30.ir/shabab/api/users/index",
      { permission: "deleted" },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return data.user.data;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
};

const DeleteUser: React.FC = () => {
  const queryClient = new QueryClient();

  useEffect(() => {
    const authToken = localStorage.getItem("authToken");
    if (!authToken) {
      console.log("No auth token found");
    }
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <UserList />
    </QueryClientProvider>
  );
};

const handleBack = () => {
  window.history.back(); 
};

const UserList: React.FC = () => {
  const { data: users = [], isLoading, error } = useQuery("users", fetchUsers);

  if (isLoading) {
    return (
      <div>
        <div className="flex gap-24 items-center mb-2 mt-10 mr-3">
          <div className="mr-[1%]">
            <p className="font-bold text-lg">مشاهده کاربران</p>
          </div>
          <div className="flex mr-[3%] items-center gap-2">
            <label className="input flex items-center border border-[#E2E8F0] gap-4">
              <Image src={ImageSearch} width={20} height={20} alt="search" />
              <input
                className="w-[32rem] h-[32rem]"
                type="search"
                placeholder="جستجو نام کاربری یا شماره تلفن"
              />
            </label>
          </div>
          <div className="flex justify-end items-center cursor-pointer mr-5" onClick={handleBack}>
              بازگشت
              <Image src={backImage} width={38} height={38} alt="arrow" />
          </div>
        </div>
        <div>
          <RoutTableUser />
          <div>
            <UserDeleteTable users={users} />
            <div className="flex justify-center items-center -mt-5">
              <span className="loading loading-dots text-accent loading-lg"></span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <div className="flex gap-24 items-center mb-2 mt-10 mr-3">
          <div className="mr-[1%]">
            <p className="font-bold text-lg">مشاهده کاربران</p>
          </div>
          <div className="flex mr-[3%] items-center gap-2">
            <label className="input flex items-center border border-[#E2E8F0] gap-4">
              <Image src={ImageSearch} width={20} height={20} alt="search" />
              <input
                className="w-[32rem] h-[32rem]"
                type="search"
                placeholder="جستجو نام کاربری یا شماره تلفن"
              />
            </label>
          </div>
          <div className="flex justify-end items-center cursor-pointer mr-5" onClick={handleBack}>
              بازگشت
              <Image src={backImage} width={38} height={38} alt="arrow" />
          </div>
        </div>
        <div>
          <RoutTableUser />

          <div>
            <UserDeleteTable users={users} />
            <div className="flex justify-center items-center -mt-5">
              خطا در بارگزاری داده
            </div>
          </div>
        </div>
      </div>
    );
  }

  if(users.length === 0){
    return(
      <div>
      <div className="flex gap-24 items-center mb-2 mt-10 mr-3">
        <div className="mr-[1%]">
          <p className="font-bold text-lg">مشاهده کاربران</p>
        </div>
        <div className="flex mr-[3%] items-center gap-2">
          <label className="input flex items-center border border-[#E2E8F0] gap-4">
            <Image src={ImageSearch} width={20} height={20} alt="search" />
            <input
              className="w-[32rem] h-[32rem]"
              type="search"
              placeholder="جستجو نام کاربری یا شماره تلفن"
            />
          </label>
        </div>
        <div className="flex justify-end items-center cursor-pointer mr-5" onClick={handleBack}>
            بازگشت
            <Image src={backImage} width={38} height={38} alt="arrow" />
        </div>
      </div>
      <div>
        <RoutTableUser />
        <div>
          <UserDeleteTable users={users} />
          <div className="flex justify-center items-center -mt-5">
            کاربری یافت نشد
          </div>
        </div>
      </div>
    </div>
    )
  }

  return (
    <div>
      <div className="flex gap-24 items-center mb-2 mt-10 mr-3">
        <div className="mr-[1%]">
          <p className="font-bold text-lg">مشاهده کاربران</p>
        </div>
        <div className="flex mr-[3%] items-center gap-2">
          <label className="input flex items-center border border-[#E2E8F0] gap-4">
            <Image src={ImageSearch} width={20} height={20} alt="search" />
            <input
              className="w-[32rem] h-[32rem]"
              type="search"
              placeholder="جستجو نام کاربری یا شماره تلفن"
            />
          </label>
        </div>
        <div className="flex justify-end items-center cursor-pointer mr-5" onClick={handleBack}>
            بازگشت
            <Image src={backImage} width={38} height={38} alt="arrow" />
        </div>
      </div>
      <div>
        <RoutTableUser />
      </div>
      <UserDeleteTable users={users} />
    </div>
  );
};

export default DeleteUser;
