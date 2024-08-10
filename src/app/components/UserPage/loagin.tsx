import React, { useState } from "react";
import axios from "axios";
import Image from "next/image";
import greenBackground from "@/src/app/assent/Img/userPanel/GreenBackgound.png";
import Link from "next/link";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {
    try {
      const response = await axios.post(
        "https://shabab.v1r.ir/api/auth/login",
        {
          username: username,
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
      // else {
      //   setError("خطایی در دریافت توکن وجود دارد.");
      // }
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
                <Link href="/Landing">بازگشت</Link>
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
                maxLength={10}
                minLength={10}
                placeholder="نام کاربری"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <span className="text-[#999999]">
                نام کاربری ، شماره ملی شما است
              </span>
            </div>

            <div className="flex flex-col ">
              <input
                className="w-[420px] h-[42px] rounded-md p-3 border-[1px] border-[#E2E8F0]"
                minLength={6}
                placeholder=" رمز عبور"
                type="text"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
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



