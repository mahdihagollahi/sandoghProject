import React from "react";
import Image from "next/image";
import eshterak from "@/app/assent/Img/userPanel/Wallet.svg";
import vamghest from "@/app/assent/Img/userPanel/vamghest.svg";

export default function buttommasseg() {
  return (
    <>
    <div className="flex flex-row w-[268px] h-[56px] gap-2 bg-white rounded-md ">
      <div className="flex flex-row gap-[3px] hover:border-b-2 hover:border-green-600 hover:border-solid    ">
        <Image className="w-[18px] h-[16px] mt-[18px] " src={eshterak} alt="" />
        <button className="text-[#9F9F9F] ">اقساط اشتراک</button>
      </div>
      <div className="flex flex-row gap-[3px] hover:border-b-2 hover:border-green-600 hover:border-solid ">
        <Image className="w-[20px] h-[20px] mt-[18px]" src={vamghest} alt="" />
        <button className="text-[#9F9F9F]">اقساط وام</button>
      </div>
    </div>
    </>
  );
}
