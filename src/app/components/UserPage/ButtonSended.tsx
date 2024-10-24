import React from "react";
import Image from "next/image";
import send from "@/app/assent/Img/userPanel/send.svg"



function ButtonSended({onClick}) {
  return (
    <>
      <div>
        <button onClick={onClick}  className="w-[270px] h-[42px] bg-[#4FD1C5] flex flex-row justify-center items-center gap-2 rounded-md">
          <Image className="w-[16px] h-[16px]" src={send} alt=""/>
          <span className="text-[#fff]">ثبت و ارسال</span>
        </button>
      </div>
    </>
  );
}

export default ButtonSended;