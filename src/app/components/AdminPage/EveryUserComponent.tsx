
import React from "react";
import axios from "axios";
import { useQuery } from '@tanstack/react-query'; // اطمینان از استفاده از نسخه درست
import UserTable from "@/src/app/components/AdminPage/UserTable";
import Image from "next/image";
import backImage from "@/src/app/assent/Img/adminPanel/back.svg";
import ImageSearch from "@/src/app/assent/Img/adminPanel/Search.svg";
import RoutTableUser from "./RoutTableUser";

interface User {
  id: number;
  src: string;
  name: string;
  joinDate: string;
  loans: string;
}

const fetchUsers = async (): Promise<User[]> => {
  const token = localStorage.getItem('authToken');
  if (!token) {
    throw new Error("No auth token found");
  }

  const response = await axios.put(
    "https://shabab.v1r.ir/api/users/index",
    {},
    {
      headers: {
        'Accept': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    }
  );

  return response.data.map((user: any) => ({
    id: user.id,
    src: user.avatar_url || "/default-avatar.png",
    name: `${user.first_name} ${user.last_name}`,
    joinDate: new Date(user.created_at).toLocaleDateString("fa-IR"),
    loans: "0 وام",
  }));
};

const EveryUser: React.FC = () => {
  const { data: users, error, isLoading } = useQuery<User[], Error>({
    queryKey: ['users'], // کلید منحصر به فرد برای کوئری
    queryFn: fetchUsers, // تابعی برای دریافت داده‌ها
  });

  if (isLoading) return (
    <div>
       <div className="flex gap-24 items-center mb-2 mt-5 mr-3">
        <div className="mr-2">
          <p className="font-bold text-lg">مشاهده کاربران</p>
        </div>
        <div className="flex items-center gap-2">
          <label className="input flex items-center border border-[#E2E8F0] gap-4">
            <Image src={ImageSearch} width={20} height={20} alt="search" />
            <input
              className="w-[32rem] h-[32rem]"
              type="search"
              placeholder="جستجو نام کاربری یا شماره تلفن"
            />
          </label>
        </div>
        <div className="flex justify-end mr-2">
          <a href="" className="flex items-center">
            بازگشت
            <Image src={backImage} width={38} height={38} alt="arrow" />
          </a>
        </div>
      </div>
      <div>
        <RoutTableUser />
      </div>
      <UserTable users={[]} />
     
    </div>
  )
  ;
  if (error) return <p>{error.message}</p>;

  return (
    <div>
      <div className="flex gap-24 items-center mb-2 mt-5 mr-3">
        <div className="mr-2">
          <p className="font-bold text-lg">مشاهده کاربران</p>
        </div>
        <div className="flex items-center gap-2">
          <label className="input flex items-center border border-[#E2E8F0] gap-4">
            <Image src={ImageSearch} width={20} height={20} alt="search" />
            <input
              className="w-[32rem] h-[32rem]"
              type="search"
              placeholder="جستجو نام کاربری یا شماره تلفن"
            />
          </label>
        </div>
        <div className="flex justify-end mr-2">
          <a href="" className="flex items-center">
            بازگشت
            <Image src={backImage} width={38} height={38} alt="arrow" />
          </a>
        </div>
      </div>
      <div>
        <RoutTableUser />
      </div>
      <UserTable users={users || []} />
    </div>
  );
};

export default EveryUser;
