import React, { useState } from "react";
import Image from "next/image";
import axios, { AxiosResponse } from "axios";
import { useMutation, QueryClient, QueryClientProvider } from "react-query";
import greenBackground from "@/src/app/assent/Img/userPanel/GreenBackgound.png";
import Password2 from "@/src/app/components/UserPage/Password2";
import Link from "next/link";

interface LoginResponse {
  token?: string;
  message?: string;
}

const loginAdmin = async (loginData: {
  user_name: string;
  password: string;
}) => {
  const response: AxiosResponse<LoginResponse> = await axios.post(
    "https://mohammadelia30.ir/shabab/api/auth/login/admin",
    loginData
  );
  return response.data;
};

const queryClient = new QueryClient();

const LoginAdminContent: React.FC = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showModal, setShowModal] = useState<boolean>(false);

  const { mutate: handleLogin, isLoading } = useMutation(loginAdmin, {
    onSuccess: (data) => {
      if (data.token) {
        localStorage.setItem("authToken", data.token);
        window.location.href = "/dashboard";
      } else {
        setErrorMessage(data.message || "نام کاربری و رمز عبور اشتباه است");
      }
    },
    onError: (error: any) => {
      if (error.response) {
        setErrorMessage(error.response.data.message || "ورود ناموفق بود.");
      } else if (error.request) {
        setErrorMessage("پاسخی از سرور دریافت نشد. لطفاً دوباره تلاش کنید.");
      } else {
        setErrorMessage("مشکلی در ارسال درخواست به وجود آمد.");
      }
    },
  });

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const handleSubmit = () => {
    handleLogin({ user_name: username, password: password });
  };

  const handleFocus = () => {
    document.documentElement.lang = "en";
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

      <div className="bg-white dark:bg-[#4F5D74] flex justify-center absolute top-[30%] left-[28.5%] rounded-[30px] shadow-md">
        <div className="w-[626px] h-[528px] rounded-[30px] p-[40px] shadow-md relative">
          <div className="flex flex-row-reverse justify-between">
            <div className="flex flex-row gap-1 "></div>
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
              <span className="text-[#999999]">
                نام کاربری ، شماره ملی شما است
              </span>
              <input
                className="w-[420px] h-[42px] rounded-md p-3 border-[1px] border-[#E2E8F0]"
                placeholder="نام کاربری"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                onFocus={handleFocus}
              />
            </div>

            <div className="flex flex-col relative">
              <span className="text-[#999999]">رمز عبور خود را وارد کنید</span>
              <input
                className="w-[420px] h-[42px] rounded-md p-3 border-[1px] border-[#E2E8F0]"
                placeholder="رمز عبور"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onFocus={handleFocus}
              />

              <div
                className="absolute top-14 right-96 transform -translate-y-6 cursor-pointer "
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
              <div>
                <p
                  className="text-[#394860] text-sm mt-1 cursor-pointer"
                  onClick={handleOpenModal}
                >
                  فراموشی رمز؟
                </p>
              </div>
            </div>
          </div>

          {errorMessage && (
            <div className="bg-[#FFF2F2] text-[#C30000] flex justify-center items-center w-60 mx-auto py-3 rounded-md text-base font-normal text-center absolute top-[380px] left-1/2 transform -translate-x-1/2 m ">
              <button
                className="text-[#6B7280] mb-6"
                onClick={() => setErrorMessage("")}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
              </button>
              <span>{errorMessage}</span>
            </div>
          )}

          <div className="absolute bottom-9 left-1/2 transform -translate-x-1/2">
            {/* <Link href="/dashboard"> */}
              <button
                className="bg-[#4FD1C5] w-[420px] h-[56px] text-white rounded-[5px]"
                onClick={handleSubmit}
                disabled={isLoading}
              >
                {isLoading ? "در حال ورود..." : "ورود"}
              </button>
            {/* </Link> */}
          </div>
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <Password2 handleCloseModal={handleCloseModal} />
        </div>
      )}
    </div>
  );
};

const LoginAdmin: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <LoginAdminContent />
    </QueryClientProvider>
  );
};

export default LoginAdmin;
