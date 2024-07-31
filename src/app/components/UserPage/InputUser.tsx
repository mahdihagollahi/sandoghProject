import React from "react";
export default function inputuser() {
  return (
    <>
      <div className="flex flex-row gap-3 w-[60%]">
        <div className="relative ">
          <label className="absolute -top-2 z-10 left-[75%] px-3 bg-white py-2">
            * نام
          </label>
          <input
            type="text"
            className="border w-[282px]  h-[32px]  text-[#050505]	border-[#B0E4DD] rounded-md relative  m-3  "
          />
        </div>

        <div className="relative w-full md:w-auto ">
          <label className="absolute -top-2 z-10 left-[62%] px-1 bg-white py-2">
            * نام خانوادگی
          </label>
          <input
            type="text"
            className="border  w-[282px]  h-[32px]  text-[#050505]	border-[#B0E4DD] rounded-md relative  m-3  "
          />
        </div>

        <div className="relative w-full md:w-auto ">
          <label className="absolute -top-2 z-10 left-[68%] px-3 bg-white py-2">
            * کد ملی
          </label>
          <input
            type="text"
            className="border  w-[282px]  h-[32px]  text-[#050505]	border-[#B0E4DD] rounded-md relative  m-3  "
          />
        </div>
      </div>

      <div className="flex flex-row gap-3 w-[60%]">
        <div className="relative ">
          <label className="absolute -top-2 z-10 left-[58%] px-3 bg-white py-2">
            *شماره موبایل
          </label>
          <input
            type="text"
            className="border w-[282px]  h-[32px]  text-[#050505]	border-[#B0E4DD] rounded-md relative  m-3  "
          />
        </div>

        <div className="relative w-full md:w-auto ">
          <label className="absolute -top-2 z-10 left-[68%] px-1 bg-white py-2">
            * تلفن منزل
          </label>
          <input
            type="text"
            className="border  w-[282px]  h-[32px]  text-[#050505]	border-[#B0E4DD] rounded-md relative  m-3  "
          />
        </div>

        <div className="relative w-full md:w-auto ">
          <label className="absolute -top-2 z-10 left-[48%] px-1 bg-white py-2">
            * شماره تماس ضروری
          </label>
          <input
            type="text"
            className="border  w-[282px]  h-[32px]  text-[#050505]	border-[#B0E4DD] rounded-md relative  m-3  "
          />
        </div>
      </div>

      <div className="flex flex-row gap-3 w-[60%] mt-10">
        <div className="relative w-full md:w-auto ">
          <label className="absolute -top-2 z-10 left-[74%] px-1 bg-white py-2">
            * خیابان
          </label>
          <input
            type="text"
            className="border  w-[282px]  h-[32px]  text-[#050505]	border-[#B0E4DD] rounded-md relative  m-3  "
          />
        </div>

        <div className="relative w-full md:w-auto ">
          <label className="absolute -top-2 z-10 left-[76%] px-1 bg-white py-2">
            * کوچه
          </label>
          <input
            type="text"
            className="border  w-[282px]  h-[32px]  text-[#050505]	border-[#B0E4DD] rounded-md relative  m-3  "
          />
        </div>

        <div className="relative w-full md:w-auto ">
          <label className="absolute -top-2 z-10 left-[78%] px-1 bg-white py-2">
            * شهر
          </label>
          <input
            type="text"
            className="border  w-[282px]  h-[32px]  text-[#050505]	border-[#B0E4DD] rounded-md relative  m-3  "
          />
        </div>
      </div>

      <div className="flex flex-row gap-3 w-[60%]">
        <div className="relative w-full md:w-auto ">
          <label className="absolute -top-2 z-10 left-[78%] px-1 bg-white py-2">
            * پلاک
          </label>
          <input
            type="text"
            className="border  w-[282px]  h-[32px]  text-[#050505]	border-[#B0E4DD] rounded-md relative  m-3  "
          />
        </div>

        <div className="relative w-full md:w-auto ">
          <label className="absolute -top-2 z-10 left-[80%] px-1 bg-white py-2">
            توضیحات بیشتر
          </label>
          <input
            type="text"
            className="border  w-[600px]  h-[32px]  text-[#050505]	border-[#B0E4DD] rounded-md relative  m-3  "
          />
        </div>
      </div>

      <div className="flex flex-row gap-3 w-[60%] mt-10">
        <div className="relative w-full md:w-auto ">
          <label className="absolute -top-2 z-10 left-[80%] px-1 bg-white py-2">
            * شماره شبا
          </label>
          <input
            type="text"
            className="border  w-[440px]  h-[32px]  text-[#050505]	border-[#B0E4DD] rounded-md relative  m-3  "
          />
        </div>

        <div className="relative w-full md:w-auto ">
          <label className="absolute -top-2 z-10 left-[76%] px-1 bg-white py-2">
            * شماره کارت
          </label>
          <input
            type="text"
            className="border  w-[440px]  h-[32px]  text-[#050505]	border-[#B0E4DD] rounded-md relative  m-3  "
          />
        </div>
      </div>
    </>
  );
}
