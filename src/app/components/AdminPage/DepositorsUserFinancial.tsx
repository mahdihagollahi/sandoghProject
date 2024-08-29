import React from "react";
import UserTableDespositors from "@/src/app/components/AdminPage/UserTableDespositors";
import Image from "next/image";
import backImage from "@/src/app/assent/Img/adminPanel/back.svg";
import RoutTableFiancial from "./RoutTableFinancial";
import Link from "next/link";
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

const fetchUsers = async () => {
  try {
    const response = await axiosInstance.get(
      "http://hosseinshabab.iapp.ir/api/factors/index"
    );
    return response.data as PaginatedResponse;
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

  if (isLoading) return <div>Loading...</div>;

  if (isError) return <div>Error: {error.message}</div>;

  return (
    <div>
      <div className="flex gap-[74%] items-center mb-2 mt-10 mr-3">
        <div className="mr-2">
          <p className="font-bold text-lg">مدیریت مالی</p>
        </div>
        <div className="flex justify-end mr-2">
          <Link href="/Rout/showuserdetail">
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
      <UserTableDespositors users={data?.data || []} />
    </div>
  );
};

export default DepositorsUserFinancial;
