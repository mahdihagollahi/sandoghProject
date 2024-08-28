"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import clock from "@/src/app/assent/Img/userPanel/clock.png";
import back from "@/src/app/assent/Img/userPanel/back.svg";
import logo from "@/src/app/assent/Img/userPanel/logo.svg";

interface Password2Props {
  handleCloseModal: () => void;
}

const Password2: React.FC<Password2Props> = ({ handleCloseModal }) => {
  const [time, setTime] = useState(120);

  useEffect(() => {
    if (time > 0) {
      const timer = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [time]);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? `0${secs}` : secs}`;
  };

  return (
    <div className="w-[40%] p-8 bg-white shadow-md rounded-md">
      <div className="flex flex-row justify-between items-center mb-4">
        <div className="flex flex-row gap-4">
          <Image className="w-6" src={logo} alt="" />
          <span className="text-[#394860] font-bold">صندوق قرض الحسنه مهر</span>
        </div>
        <div className="flex flex-row gap-1">
          <span className="font-bold cursor-pointer" onClick={handleCloseModal}>بازگشت</span>
          <Image className="mt-1 cursor-pointer" src={back} alt="" onClick={handleCloseModal} />
        </div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <h3 className="text-[#4FD1C5] text-3xl mb-4">ورود</h3>
        <div className="flex flex-col gap-4">
          <label className="text-[#999999]">رمز عبور به شماره موبایل وارد شده پیامک شد</label>
          <input
            className="border-[1px] border-solid rounded-md p-3 border-[#d7d7d7] mt-3 w-96"
            placeholder="شماره موبایل را وارد کنید"
          />
          <div className="flex flex-row gap-1 items-center">
            <Image className="w-4 h-4" src={clock} alt="" />
            <span className="text-[#4FD1C5]">{formatTime(time)}</span>
            <span>تا دریافت مجدد کد</span>
          </div>
        </div>
        <button
          className="bg-[#4FD1C5] w-[420px] h-[56px] text-white rounded-[5px] mt-10"
          onClick={handleCloseModal}
        >
          ارسال
        </button>
      </div>
    </div>
  );
}

export default Password2;
