import React from "react";
import Image from "next/image";
import exper from "@/src/app/assent/Img/userPanel/Exclamation.svg";

function Pagsupport() {
  return (
    <>
      <div className="flex flex-col gap-10 px-16">
        <div>نیاز به پشتیبانی دارید ؟</div>
        <div className="flex flex-row gap-1">
          <Image src={exper} alt="" />
          <span className="mt-1">
            لطفا پیام یا سوال خود را در قالب تیکت پشتیبانی ارسال کنید.درسریع
            ترین زمان پاسخگو شما هستیم.
          </span>
        </div>
        <div>اولویت تیکت را انتخاب کنید</div>
        <div className="flex flex-row gap-10">
          <div className="flex flex-row gap-1">
            <input
              type="radio"
              name="radio-5"
              className="radio radio-[#4FD1C5]"
            />
            <span className="">متوسط</span>
          </div>
          <div className="flex flex-row gap-1">
            <input
              type="radio"
              name="radio-5"
              className="radio radio-[#4FD1C5]"
            />
            <span className="">کم</span>
          </div>
          <div className="flex flex-row gap-1">
            <input
              type="radio"
              name="radio-5"
              className="radio radio-[#4FD1C5]"
            />
            <span className="">ضروری</span>
          </div>
        </div>
        <div className="relative">
          <div>
            <textarea className="w-[900px] h-56 border-[#070707] border-2 rounded-md mt-4"></textarea>
          </div>
          <div className="absolute top-0 right-4 p-1 bg-white">
            سوال خود را در این قسمت تایپ کنید
          </div>
        </div>
      </div>
    </>
  );
}

export default Pagsupport;
