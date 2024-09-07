import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import UserTable from "@/src/app/components/AdminPage/UserTable";
import Image from "next/image";
import backImage from "@/src/app/assent/Img/adminPanel/back.svg";
import ImageSearch from "@/src/app/assent/Img/adminPanel/Search.svg";
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
    to: number;
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
      { permission: "active" },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const users = data.user.data;

    return users;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
};

const handleBack = () => {
  window.history.back(); 
};

const EveryUser: React.FC = () => {
  const [selectedUserId, setSelectedUserId] = useState<number | null>(null);

  const {
    data: users = [],
    error,
    isLoading,
  } = useQuery<User[], Error>({
    queryKey: ["users"],
    queryFn: fetchUsers,
    retry: 1,
  });

  if (isLoading)
    return (
      <div >
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
        <div>
          <UserTable users={[]} onUserSelect={setSelectedUserId} />
          <div className="flex justify-center items-center -mt-5">
            <span className="loading loading-dots text-accent loading-lg"></span>
          </div>
        </div>
      </div>
    );

  if (error)
    return (
      <div >
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
        <p className="text-red-500 font-bold">{error.message}</p>
      </div>
    );

    if(users.length===0){
      return(
        <div >
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
        <div>
          <UserTable users={[]} onUserSelect={setSelectedUserId} />
          <div className="flex justify-center items-center -mt-5">
            <span className="loading loading-dots text-accent loading-lg"></span>
          </div>
        </div>
      </div>
      )
    }

  return (
    <div >
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
  
        <UserTable users={users} onUserSelect={setSelectedUserId} />
   
    </div>
  );
};

export default EveryUser;
