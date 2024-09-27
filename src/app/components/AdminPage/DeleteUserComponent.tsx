import React from "react";
import Image from "next/image";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

import eyes from "@/src/app/assent/Img/userPanel/eyes.svg";
import accept from "@/src/app/assent/Img/userPanel/acsept.svg";
import reject from "@/src/app/assent/Img/userPanel/reject.svg";
import Link from "next/link";

interface User {
  id: number;
  first_name: string;
  last_name: string;
  national_code: string;
  phone_number: string;
  created_at: string;
}


const fetchUsers = async (): Promise<User[]> => {
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
  return response.data.users.data;
};

function DeleteUserComponent() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
  });

  if (isLoading)
    return (
      <div>
        <div className="flex gap-[74%] items-center mb-2 mt-10 mr-3">
          <div className="mr-2 mt-[15px]">
            <p className="font-bold text-lg whitespace-nowrap dark:text-white">
              انصراف ها
            </p>
          </div>
          <div className="flex justify-end mr-72"></div>
        </div>
        <div>
          <table className="w-[156%] dark:bg-[#4F5D74] dark:text-white mt-8 p-10 shadow-md rounded-md">
            <thead>
              <tr className="border-b-2 flex flex-row justify-around  p-8 gap-10">
                <th>ردیف</th>
                <th>نام کاربری</th>
                <th>کد ملی</th>
                <th>شماره موبایل</th>
                <th>تاریخ درخواست</th>
                <th className="pl-5">عملیات</th>
              </tr>
            </thead>
            <div className="flex justify-center items-center ">
              <span className="loading loading-dots text-accent loading-lg"></span>
            </div>
          </table>
        </div>
      </div>
    );

  if (error)
    return (
      <div>
        <div>
          <div className="flex gap-[74%] items-center mb-2 mt-10 mr-3">
            <div className="mr-2 mt-[15px]">
              <p className="font-bold text-lg whitespace-nowrap dark:text-white">
                انصراف ها
              </p>
            </div>
            <div className="flex justify-end mr-72"></div>
          </div>
          <div>
            <table className="w-[156%] dark:bg-[#4F5D74] dark:text-white mt-8 p-10 shadow-md rounded-md">
              <thead>
                <tr className="border-b-2 flex flex-row justify-around  p-8 gap-10">
                  <th>ردیف</th>
                  <th>نام کاربری</th>
                  <th>کد ملی</th>
                  <th>شماره موبایل</th>
                  <th>تاریخ درخواست</th>
                  <th className="pl-5">عملیات</th>
                </tr>
              </thead>
              <div>خطا در دریافت داده‌ها: {error.message}</div>
            </table>
          </div>
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
        <div className="flex justify-end mr-72"></div>
      </div>
      <div>
        <table className="w-[156%] dark:bg-[#4F5D74] dark:text-white mt-8 p-10 shadow-md rounded-md">
          <thead>
            <tr className="border-b-2 flex flex-row justify-around  p-8 gap-10">
              <th>ردیف</th>
              <th>نام کاربری</th>
              <th>کد ملی</th>
              <th>شماره موبایل</th>
              <th>تاریخ درخواست</th>
              <th className="pl-5">عملیات</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((item, index) => (
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

                  <button>
                    <Image className="w-5 h-5" src={accept} alt="قبول" />
                  </button>
                  <button>
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
}

export default DeleteUserComponent;
