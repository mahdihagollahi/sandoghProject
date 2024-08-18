"use client";
import React from "react";
import Image from "next/image";
import clock from "@/src/app/assent/Img/userPanel/clock.png";
import back from "@/src/app/assent/Img/userPanel/back.svg";
import logo from "@/src/app/assent/Img/userPanel/logo.svg";
import { useState,useEffect } from "react";


function Password2({handleCloseModal}) {

  const [time, setTime] = useState(120);

  useEffect(() => {
    if (time > 0) {
      const timer = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [time]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? `0${secs}` : secs}`;
  };


  return (
    <>
       <div className="flex justify-center mt-64  items-center">
      <div className="w-[40%] p-8 shadow-md rounded-md ">
     

        
      <div className="flex flex-row  justify-between  ">
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
            <div className="flex flex-row gap-1 -mt-3">
              <Image className="w-4 h-4 mt-1" src={clock} alt="" />
              <span className="text-[#4FD1C5]">{formatTime(time)}</span>
              <span>تا دریافت مجدد کد</span>
            </div>
          </div>
        </div>
      <div>
      <button
            className="bg-[#4FD1C5] w-[420px] h-[56px] text-white rounded-[5px] mr-[55px] mt-10"
            onClick={handleCloseModal}
          >
           ارسال
          </button>
      </div>
      </div>
      </div>

    </>
  );
}
export default Password2;
