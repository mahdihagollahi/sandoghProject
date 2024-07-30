import React from "react";
import Image from "next/image";
import greenBackground from "@/src/app/assent/Img/userPanel/GreenBackgound.png";

export default function Loagin() {
  return (
    <div className="relative h-[500px]">
      <div>
        <Image
          sizes="100vw"
          style={{
            width: "100%",
            height: "260px",
          }}
          src={greenBackground}
          alt=""
        />
      </div>
      <div className="bg-white flex justify-center content-center  absolute top-[40px] left-[320px] rounded-[30px] shadow-md">
        <div className="w-[626px] h-[488px] rounded-[30px] p-[40px] shadow-md">
          <div className="flex flex-row-reverse justify-between">
            <div className="flex flex-row gap-1 ">
              <div>
                <span>بازگشت</span>
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

          <div className="flex flex-col gap-[20px] justify-center item-center  mt-[50px] mr-[55px]">
            <div className="flex flex-col">
              <input
                className="w-[420px] h-[42px] rounded-md p-3 border-[1px] border-[#E2E8F0]"
                placeholder="نام کاربری"
              />
              <span className="text-[#999999]">
                نام کاربری ، شماره ملی شما است
              </span>
            </div>

            <div className="flex flex-col ">
              <input
                className="w-[420px] h-[42px] rounded-md p-3 border-[1px] border-[#E2E8F0]"
                placeholder=" رمز عبور"
              />
              <span className="text-[#999999]">رمز عبور خود را وارد کنید</span>
            </div>
          </div>

          <button className="bg-[#4FD1C5] w-[420px] h-[56px] text-white rounded-[5px] mr-[55px] mt-[65px]">
            ورود
          </button>
        </div>
      </div>
    </div>
  );
}
