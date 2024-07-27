import React from "react";
import Image from "next/image";
import eshterak from "@/src/app/assent/imag/Wallet.svg";
import vamghest from "@/src/app/assent/imag/vamghest.svg";

export default function buttompament() {
  return (
    <>
    <div className="flex flex-row w-[268px] h-[56px] gap-2 bg-white rounded-md ">
      <div className="flex flex-row gap-[3px]   ">
        <Image className="w-[18px] h-[16px] mt-[18px] " src={eshterak} alt="" />
        <button className="text-[#9F9F9F]">اقساط اشتراک</button>
      </div>
      <div className="flex flex-row gap-[3px]">
        <Image className="w-[20px] h-[20px] mt-[18px]" src={vamghest} alt="" />
        <button className="text-[#9F9F9F]">اقساط وام</button>
      </div>
    </div>
    </>
  );
}
