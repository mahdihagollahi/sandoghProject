import React, { useState } from "react";
import Image from "next/image";
import axios from "axios";
import EyeIconImage from "@/app/assent/Img/adminPanel/eye.svg";
import IconlytikImage from "@/app/assent/Img/adminPanel/tik.svg";
import IconlycrossImage from "@/app/assent/Img/adminPanel/cross.svg";
import statusIconImage from "@/app/assent/Img/adminPanel/statusIcon.svg";
import Modal from "./Modal";
import DepositSlip from "@/app/components/AdminPage/DepositSlip";
import Paginate from "./Paginate";
import Link from "next/link";

interface User {
  id: number;
  name: string;
  depositAmount: number;
  joinDate: string;
}

interface UserTableProps {
  users?: User[];
}

const UserTableDespositors: React.FC<UserTableProps> = ({ users = [] }) => {
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [statusUpdateError, setStatusUpdateError] = useState<string | null>(
    null
  );
  const itemsPerPage = 7;

  const axiosInstance = axios.create({
    baseURL: "https://fundcharitynet.com/api",
  });

  axiosInstance.interceptors.request.use((config) => {
    const authToken = localStorage.getItem("authToken");
    if (authToken) {
      config.headers.Authorization = `Bearer ${authToken}`;
    }
    return config;
  });

  const handleStatusChange = async (
    userId: number,
    status: "accept" | "pending" | "reject"
  ) => {
    try {
      await axiosInstance.post("/factors/accept", {
        userId,
        accept_status: status,
      });
    } catch (error) {
      setStatusUpdateError("مشکلی در تغییر وضعیت به وجود آمده است.");
      console.error("Error:", error);
    }
  };

  const pageClick = (data: { selected: number }) => {
    setCurrentPage(data.selected);
  };

  if (!Array.isArray(users)) {
    console.error("Invalid prop: users should be an array.");
    return null;
  }

  const offset = currentPage * itemsPerPage;
  const currentPageData = users.slice(offset, offset + itemsPerPage);
  const pageCount = Math.ceil(users.length / itemsPerPage);

  const handleOpenModal = () => {
    setIsModalVisible(true);
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
  };

  return (
    <div>
      <div className="p-4 pl-20">
        <div className="w-[103%] bg-white shadow-md rounded-md overflow-hidden p-10  dark:bg-[#4F5D74] dark:text-white">
          <table className="w-full table-auto border-collapse">
            <thead>
              <tr>
                <th className="w-[15%] pl-8 py-2">ردیف</th>
                <th className="w-[10%] py-2">نام کاربر</th>
                <th className="w-[29%] pl-10 py-2">مبلغ واریز</th>
                <th className="w-[23%] pl-24 py-2">تاریخ</th>
                <th className="w-[12%] pl-32 py-2">رسید</th>
                <th className="w-[12%] py-2 whitespace-nowrap">تعیین وضعیت</th>
              </tr>
            </thead>
          </table>
          <div className="">
            <table className="w-full mt-[3%] table-auto border-collapse">
              <tbody className="divide-y divide-gray-200 space-y-4">
                {currentPageData.map((user) => (
                  <tr key={user.id}>
                    <td className="w-2/12 py-8 px-4 flex gap-20">
                      قسط{user.id}
                    </td>
                    <td className="w-2/12 py-8 pr-12">{user.name}</td>
                    <td className="w-[25%] py-8 pr-10 text-[#718096]">
                      <p>{user.depositAmount} تومان</p>
                    </td>
                    <td className="w-2/12 py-2 px-4">{user.joinDate}</td>
                    <td className="w-3/12 py-2 ">
                      <Link href={`/depositreceipt/${user.id}`} passHref>
                       

                        <button className="py-[2%] px-8 border flex items-center gap-2 border-teal-400 p-1 rounded-md">
                          <Image
                            src={EyeIconImage}
                            width={24}
                            height={24}
                            alt=""
                          />
                          <p className="font-normal text-sm text-teal-400">
                            فیش واریزی
                          </p>
                        </button>
                      </Link>
                  
                    </td>
                    <td className="py-8">
                      <div className="flex justify-center gap-2">
                        <button
                          onClick={() => handleStatusChange(user.id, "accept")}
                        >
                          <Image
                            src={IconlytikImage}
                            width={20}
                            height={20}
                            alt="accept"
                          />
                        </button>
                        <button
                          onClick={() => handleStatusChange(user.id, "pending")}
                        >
                          <Image
                            src={statusIconImage}
                            width={20}
                            height={20}
                            alt="accept"
                          />
                        </button>
                        <button
                          onClick={() => handleStatusChange(user.id, "reject")}
                        >
                          <Image
                            src={IconlycrossImage}
                            width={20}
                            height={20}
                            alt="reject"
                          />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <Paginate
              // pageCount={pageCount}
              pageClick={pageClick}
              currentPageData={currentPageData} 
              pageCount={pageCount}
              // onPageChange={pageClick}
              // marginPagesDisplayed={2}
              // pageRangeDisplayed={5}
            />
          </div>
        </div>
      </div>
      {statusUpdateError && (
        <div className="bg-red-600 text-white p-4 rounded">
          {statusUpdateError}
        </div>
      )}
    </div>
  );
};

export default UserTableDespositors;
