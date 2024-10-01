"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import eyes from "@/app/assent/Img/userPanel/eyes.svg";
import accept from "@/app/assent/Img/userPanel/acsept.svg";
import reject from "@/app/assent/Img/userPanel/reject.svg";
import Link from "next/link";

interface User {
  id: number;
  first_name: string;
  last_name: string;
  national_code: string;
  phone_number: string;
  created_at: string;
}

const DeleteUserComponent: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchUsers = async () => {
    const authToken = localStorage.getItem("authToken");
    if (!authToken) {
      throw new Error("توکن یافت نشد.");
    }

    const response = await axios.get(
      "https://mohammadelia30.ir/shabab/api/users/deactiveShow",
      {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      }
    );
    setUsers(response.data.users.data);
    setLoading(false);
  };

  const postOperation = async (user_id: number, operation: string) => {
    const authToken = localStorage.getItem("authToken");
    if (!authToken) {
      throw new Error("توکن یافت نشد.");
    }

    await axios.post(
      "https://mohammadelia30.ir/shabab/api/users/deactive",
      { user_id, operation },
      {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      }
    );

    fetchUsers();
  };

  useEffect(() => {
    fetchUsers().catch((err) => {
      setError(err.message);
      setLoading(false);
    });
  }, []);

  if (loading)
    return (
      <div>
        <div className="flex gap-[74%] items-center mb-2 mt-10 mr-3">
          <div className="mr-2 mt-[15px]">
            <p className="font-bold text-lg whitespace-nowrap dark:text-white">
              انصراف ها
            </p>
          </div>
        </div>
        <div>
          <table className="w-[156%] bg-white dark:bg-[#4F5D74] dark:text-white mt-8 p-10 shadow-md rounded-md">
            <thead>
              <tr className="border-b-2 flex flex-row justify-around p-8 gap-10">
                <th>ردیف</th>
                <th>نام کاربری</th>
                <th>کد ملی</th>
                <th>شماره موبایل</th>
                <th>تاریخ درخواست</th>
                <th className="pl-5">عملیات</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan={6} className="text-center">
                  <span className="loading loading-dots mt-10 mb-10  text-[#4FD1C5] loading-lg"></span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );

  if (error)
    return (
      <div>
        <div className="flex gap-[74%] items-center mb-2 mt-10 mr-3">
          <div className="mr-2 mt-[15px]">
            <p className="font-bold text-lg whitespace-nowrap dark:text-white">
              انصراف ها
            </p>
          </div>
        </div>
        <div>
          <table className="w-[156%] bg-white dark:bg-[#4F5D74] dark:text-white mt-8 p-10 shadow-md rounded-md">
            <thead>
              <tr className="border-b-2 flex flex-row justify-around p-8 gap-10">
                <th>ردیف</th>
                <th>نام کاربری</th>
                <th>کد ملی</th>
                <th>شماره موبایل</th>
                <th>تاریخ درخواست</th>
                <th className="pl-5">عملیات</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan={6} className="text-center">
                  <div className="mt-10 mb-10">
                    خطا در دریافت داده‌ها: {error}
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );

  if (users.length === 0)
    return (
      <div>
        <div className="flex gap-[74%] items-center mb-2 mt-10 mr-3">
          <div className="mr-2 mt-[15px]">
            <p className="font-bold text-lg whitespace-nowrap dark:text-white">
              انصراف ها
            </p>
          </div>
        </div>
        <div>
          <table className="w-[156%] bg-white dark:bg-[#4F5D74] dark:text-white mt-8 p-10 shadow-md rounded-md">
            <thead>
              <tr className="border-b-2 flex flex-row justify-around p-8 gap-10">
                <th>ردیف</th>
                <th>نام کاربری</th>
                <th>کد ملی</th>
                <th>شماره موبایل</th>
                <th>تاریخ درخواست</th>
                <th className="pl-5">عملیات</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan={6} className="text-center">
                  <p className="mt-10 mb-10">کاربری یافت نشد</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );

  return (
    <div>
      <div className="flex gap-[74%] items-center mb-2 mt-10 mr-3">
        <div className="mr-2 mt-[15px]">
          <p className="font-bold text-lg whitespace-nowrap dark:text-white">
            انصراف ها
          </p>
        </div>
      </div>
      <div>
        <table className="w-[156%] bg-white dark:bg-[#4F5D74] dark:text-white mt-8 p-10 shadow-md rounded-md">
          <thead>
            <tr className="border-b-2 flex flex-row justify-around p-8 gap-10">
              <th>ردیف</th>
              <th>نام کاربری</th>
              <th>کد ملی</th>
              <th>شماره موبایل</th>
              <th>تاریخ درخواست</th>
              <th className="pl-5">عملیات</th>
            </tr>
          </thead>
          <tbody>
            {users.map((item, index) => (
              <tr
                key={item.id}
                className="flex flex-row p-8 border-b-2 justify-around my-5"
              >
                <td>{index + 1}</td>
                <td>{item.first_name + " " + item.last_name}</td>
                <td className="-mr-8">{item.national_code}</td>
                <td className="-mr-9">{item.phone_number}</td>
                <td className="-mr-1">
                  {new Date(item.created_at).toLocaleDateString("fa-IR")}
                </td>
                <td className="flex items-center flex-row gap-2 ">
                  <Link
                    href={`/detailuser/${item.id}`}
                    className="tooltip"
                    data-tip="مشاهده کاربر"
                  >
                    <button className="flex items-center">
                      <Image className="w-5 h-5" src={eyes} alt="مشاهده" />
                    </button>
                  </Link>

                  <button onClick={() => postOperation(item.id, "accept")}>
                    <Image className="w-5 h-5" src={accept} alt="قبول" />
                  </button>
                  <button onClick={() => postOperation(item.id, "failed")}>
                    <Image className="w-5 h-5" src={reject} alt="رد" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DeleteUserComponent;
