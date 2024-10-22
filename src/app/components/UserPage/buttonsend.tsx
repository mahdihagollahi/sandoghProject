import React from "react";
import Image from "next/image";
import send from "@/app/assent/Img/userPanel/Fill 103.svg"

export default function buttonsend() {
  return (
    <>
    <button className="flex flex-row bg-[#4FD1C5] w-[320px] h-[42px] rounded-md gap-2 justify-center items-center">
      <Image src={ send} alt=""/>
      <span className="text-[#fff] text-base">ثبت و ارسال</span>
    </button>
      
    </>
  );
}
