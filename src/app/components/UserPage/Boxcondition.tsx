import React from "react";
import Image from "next/image";
import jaryan from "@/src/app/assent/Img/userPanel/jaryan.svg";
import radshodeh from "@/src/app/assent/Img/userPanel/radshode.svg";
import taied from "@/src/app/assent/Img/userPanel/taied.svg";

function Boxcondition() {
  return (
    <>
      <div className="flex flex-row w-[1026px] h-[85px] justify-around shadow-md rounded-md items-center ">
        <div className="w-[200px] h-[80px] hover:border-b-2 hover:border-[#4FD1C5]  ">
          <button className="flex flex-row gap-3 mt-[25px] ">
            <Image className="w-[24px] h-[24px] mr-[60px]" src={jaryan} alt="" />
            <span>جریان</span>
          </button>
        </div>
        <div className="w-[200px] h-[80px] hover:border-b-2 hover:border-[#4FD1C5]  ">
          <button className="flex flex-row gap-3 mt-[25px]">
            <Image className="w-[24px] h-[24px] mr-[60px]" src={radshodeh} alt="" />
            <span>رد شده</span>
          </button>
        </div>
        <div className="w-[200px] h-[80px] hover:border-b-2 hover:border-[#4FD1C5]  ">
          <button className="flex flex-row gap-3 mt-[25px]">
            <Image className="w-[24px] h-[24px] mr-[60px]" src={taied} alt="" />
            <span>تایید شده</span>
          </button>
        </div>
      </div>
    </>
  );
}

export default Boxcondition;
