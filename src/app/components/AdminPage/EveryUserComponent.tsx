import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import UserTable from "@/app/components/AdminPage/UserTable";
import RoutTableUser from "./RoutTableUser";
import InputSearchUser from "./InputSearchUser";

interface User {
  id: number;
  src: string;
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
      <div>
        <div className="flex gap-24 items-center  mb-2 mt-10 mr-3">
          <div className=" dark:text-white absolute z-10 ">
            <p className="font-bold text-lg">مشاهده کاربران</p>
          </div>

          <InputSearchUser />
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
      <div>
        <div className="flex gap-24 items-center mb-2 mt-10 mr-3">
          <div className="mr-[1%] dark:text-white  absolute z-10 mt-2">
            <p className="font-bold text-lg">مشاهده کاربران</p>
          </div>

          <InputSearchUser />
        </div>
        <div>
          <RoutTableUser />
        </div>
        <p className="text-red-500 font-bold">{error.message}</p>
      </div>
    );

  if (users.length === 0) {
    return (
      <div>
        <div className="flex gap-24 items-center mb-2 mt-10 mr-3">
          <div className="mr-[1%] dark:text-white  absolute z-10 mt-2">
            <p className="font-bold text-lg ">مشاهده کاربران</p>
          </div>

          <InputSearchUser />
        </div>
        <div>
          <RoutTableUser />
        </div>
        <div>
          <UserTable users={[]} onUserSelect={setSelectedUserId} />
          <div className="flex justify-center dark:text-white items-center -mt-5">
            کاربری یافت نشد
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="mr-[1%] absolute dark:text-white  z-10 mt-2">
        <p className="font-bold text-lg ">مشاهده کاربران</p>
      </div>
      <div className="flex gap-24 items-center mb-2 mt-10 ">
        <InputSearchUser />
      </div>
      <div>
        <RoutTableUser />
      </div>

      <UserTable users={users} onUserSelect={setSelectedUserId} />
    </div>
  );
};

export default EveryUser;
