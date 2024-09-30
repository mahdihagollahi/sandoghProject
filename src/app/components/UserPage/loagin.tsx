import React, { useState } from "react";
import axios from "axios";
import Image from "next/image";
import greenBackground from "@/src/app/assent/Img/userPanel/GreenBackgound.png";
import Link from "next/link";

export default function Loagin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState<boolean>(false);


 
  const handleLogin = async () => {
    try {
      const response = await axios.post(
        "https://mohammadelia30.ir/shabab/api/auth/login",
        {
          user_name: username,  
          password: password,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      );
      console.log(response);
  
      if (response.status === 200 && response.data.token) {
        localStorage.setItem("authToken", response.data.token);
  
        window.location.href = "/dashboarduser";
      }
    } catch (err: any) {
      if (err.response && err.response.data) {
        setError(
          err.response.data.message || "نام کاربری یا رمز عبور اشتباه است."
        );
      } else {
        setError("مشکلی در ارتباط با سرور پیش آمد.");
      }
    }
  };

  return (
    <div className="relative h-[450px]">
      <div>
        <Image
          sizes="100vw"
          style={{
            width: "100%",
            height: "350px",
          }}
          src={greenBackground}
          alt=""
        />
      </div>
      <div className="bg-white flex justify-center absolute top-[20%] left-[30%] rounded-[30px] shadow-md">
        <div className="w-[626px] h-[528px] rounded-[30px] p-[40px] shadow-md">
          <div className="flex flex-row-reverse justify-between">
            <div className="flex flex-row gap-1 ">
              <div>
                <Link href="/">بازگشت</Link>
              </div>
              <div>
                <span>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.25 11.7256L19.25 11.7256"
                      stroke="black"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M10.2988 5.701L4.24883 11.725L10.2988 17.75"
                      stroke="black"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </div>
            </div>
            <div>
              <span className="text-[#4FD1C5] text-lg text-right">
                وارد کردن نام کاربری و رمز عبور
              </span>
            </div>
          </div>

          <div>
            <p className="text-sm text-right text-[#999999] mt-10">
              برای وارد شدن به صندوق لطفا نام کاربری و رمز عبوری که از قبل در
              اختیار شما داده شده است را وارد کنید
            </p>
          </div>

          <div className="flex flex-col gap-[20px] justify-center item-center mt-[50px] mr-[55px]">
            <div className="flex flex-col">
              <input
                className="w-[420px] h-[42px] rounded-md p-3 border-[1px] border-[#E2E8F0]"
                type="text"
                
                placeholder="نام کاربری"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <span className="text-[#999999]">
                نام کاربری ، شماره ملی شما است
              </span>
            </div>

            <div className="flex flex-col relative ">
              <input
                className="w-[420px] h-[42px] rounded-md p-3 border-[1px] border-[#E2E8F0]"
                
                placeholder=" رمز عبور"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <div
                className="absolute top-8 right-96 transform -translate-y-6 cursor-pointer "
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.98 8.223A10.477 10.477 0 0112 5.25c3.037 0 5.789 1.23 7.776 3.223m2.165 2.653a.75.75 0 01.011 1.042C19.888 17.88 16.164 19.5 12 19.5c-3.037 0-5.789-1.23-7.776-3.223a10.448 10.448 0 01-1.799-2.522.75.75 0 01.011-1.042M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 3l18 18"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    />
                  </svg>
                )}
              </div>
              <span className="text-[#999999]">رمز عبور خود را وارد کنید</span>
            </div>
          </div>

          {error && (
            <div className="text-red-500 text-sm text-right mr-[55px] mt-[20px]">
              {error}
            </div>
          )}

          <button
            onClick={handleLogin}
            className="bg-[#4FD1C5] w-[420px] h-[56px] text-white rounded-[5px] mr-[55px] mt-[65px]"
          >
            ورود
          </button>
        </div>
      </div>
    </div>
  );
}



