import React, { useState, FormEvent } from "react";
import Image from "next/image";
import arrowImage from "@/src/app/assent/Img/adminPanel/back.svg";
import axios from "axios";

const api = axios.create({
  baseURL: "https://mohammadelia30.ir/shabab/api",
  headers: {
    "Content-Type": "application/json",
  },
});

interface AxiosErrorResponse {
  message: string;
}

const InputPassword: React.FC = () => {
  const [nationalCode, setNationalCode] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    const data = {
      national_code: nationalCode,
      password: phoneNumber,
    };

    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      const token = localStorage.getItem("authToken");
      console.log("Token:", token);

      if (!token) throw new Error("No token found");

      const response = await api.post("/users/create", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setSuccess(response.data.message || "کاربر با موفقیت اضافه شد");
    } catch (err) {
      console.error("Error:", err);
      if (axios.isAxiosError(err) && err.response) {
        const errorResponse = err.response.data as AxiosErrorResponse;
        setError(errorResponse.message || "An error occurred");
      } else {
        setError((err as Error).message || "An error occurred");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4 dark:text-white">
      <div className="flex justify-between items-center mb-2 mt-7">
        <div className="mr-2">
          <p className="font-bold dark:text-white text-lg">تعیین رمز کاربران</p>
        </div>
      </div>

      <div className="mx-auto w-[125vh] ">
        <div className="bg-white dark:bg-[#4F5D74] rounded-md shadow-md mt-10 p-6 md:p-10 ">
          <form onSubmit={handleSubmit}>
            <div className="flex flex-wrap justify-center items-center gap-4 md:flex-wrap">
              <div className="relative w-full md:w-auto">
                <label className="absolute -top-2 z-10 left-[73%] px-3 dark:bg-black dark:text-white bg-white py-2">
                  نام کاربری
                </label>
                <input
                  type="text"
                  value={nationalCode}
                  onChange={(e) => setNationalCode(e.target.value)}
                  className="border w-96 md:w-96 h-14 border-[#CACACA] px-5 rounded-md relative m-3"
                />
              </div>

              <div className="relative w-full md:w-auto">
                <label className="absolute -top-2 z-10 left-[68%] px-3 dark:bg-[#030303] dark:text-white bg-white py-2">
                  شماره موبایل
                </label>
                <input
                  type="text"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  className="border w-96 md:w-96 h-14 border-[#CACACA]  px-5 rounded-md relative m-3"
                />
              </div>
            </div>

            <div className="flex justify-center mt-20">
              <button
                type="submit"
                className="w-[30vw] md:w-2/3 lg:w-3/4 flex items-center justify-center h-14 rounded-md bg-[#4FD1C5] text-white font-bold text-base whitespace-nowrap"
              >
                ذخیره اطلاعات
              </button>
            </div>
          </form>

          {loading && <p>درحال پردازش...</p>}
          {error && <p className="text-red-500">ارور: {error}</p>}
          {success && (
            <p className="text-green-500">کاربر با موفقیت اضافه شد</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default InputPassword;
