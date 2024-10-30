"use client";
import React from "react";

import axios from "axios";

interface ModaloutProps {
  handleCloseModal: () => void;
}

const Modalout: React.FC<ModaloutProps> = ({ handleCloseModal }) => {
  const handleLogout = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const authToken = localStorage.getItem("authToken");

    try {
      const response = await axios.post(
        "https://fundcharitynet.com/api/auth/logout",
        {},
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${authToken}`,
          },
        }
      );

      if (response.status === 200) {
        console.log("خروج موفقیت‌آمیز بود");

        window.location.href = "/loginadmin";
      } else {
        console.error("خروج ناموفق بود");
      }
    } catch (error) {
      console.error("خطا در خروج:", error);
    }
  };

  const handleBack = () => {
    window.history.back();
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center gap-3 w-96 shadow-md p-8 rounded-md ">
        <h4 className="font-bold">خروج</h4>
        <p>آیا از خروج خود اطمینان دارید؟</p>
        <div className="flex flex-row-reverse gap-2">
          <button
            className="text-red-500 py-2 px-10 hover:bg-[#FFF2F2] hover:rounded-md"
            onClick={handleLogout}
          >
            خروج
          </button>
          <div onClick={handleBack}>
            <button
              className="text-[#1D91CC] py-2 px-10 hover:bg-blue-100 hover:rounded-md"
              onClick={handleCloseModal}
            >
              بازگشت
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modalout;

