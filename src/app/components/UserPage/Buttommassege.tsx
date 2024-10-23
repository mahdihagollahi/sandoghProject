import React from "react";
import Image from "next/image";
import masseg from "@/app/assent/Img/userPanel/Iconly (1).svg";
import fedmassg from "@/app/assent/Img/userPanel/Iconly (2).png"

export default function Buttommassege() {
  return (
    <>
    <div className="flex flex-row w-[268px] h-[56px] gap-2 bg-white rounded-md ">
      <div className="flex flex-row gap-[3px] hover:border-b-2 hover:border-green-600 hover:border-solid    ">
        <Image className="w-[18px] h-[16px] mt-[18px] " src={fedmassg} alt="" />
        <button className="text-[#9F9F9F] ">تیکت ها</button>
      </div>
      <div className="flex flex-row gap-[3px] hover:border-b-2 hover:border-green-600 hover:border-solid ">
        <Image className="w-[20px] h-[20px] mt-[18px]"  src={fedmassg} alt="" />
        <button className="text-[#9F9F9F]">پیام های سیستم</button>
      </div>
    </div>
    </>
  );
}
