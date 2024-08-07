"use client";
import React from "react";
<<<<<<< HEAD
import Landing from "./components/UserPage/landing";

=======
import Image from "next/image";
import clock from "@/src/app/assent/Img/userPanel/clock.png";
import back from "@/src/app/assent/Img/userPanel/back.svg";
import logo from "@/src/app/assent/Img/userPanel/logo.svg"
>>>>>>> calender

function page() {
  return (
    <>
      <div className="w-[40%] p-8 shadow-md rounded-md ">
      <div className="flex flex-row justify-between  ">
            <div className="flex flex-row gap-4">
             <Image className="w-6 " src={logo} alt=""/>
             <span className="text-[#394860] font-bold ">صندوق قرض الحسنه مهر</span>
            </div>
            <div className="flex flex-row gap-1">
              <span className="font-bold">بازگشت</span>
              <Image className="mt-1" src={back} alt=""/>
            </div>
          </div>
        <div className="flex flex-col   justify-center items-center ">
         
          <div>
            <h3 className="text-[#4FD1C5] text-3xl items-center">ورود</h3>
          </div>
          <div className="flex flex-col gap-4 mt-10">
            <label className="text-[#999999]">
              رمز عبور به شماره موبایل وارد شده پیامک شد
            </label>
            <input
              className="border-[1px] border-solid rounded-md p-3 border-[#d7d7d7] mt-3 w-96"
              placeholder="شماره موبایل را وارد کنید"
            />
            <div className="flex flex-row gap-3 -mt-3">
              <Image className="w-4 h-4 mt-1" src={clock} alt="" />
              <span>تا دریافت مجدد کد</span>
            </div>
          </div>
        </div>
<<<<<<< HEAD
      </div> */}
      <Landing/>
      
=======
      </div>
>>>>>>> calender
    </>
  );
}
export default page;
