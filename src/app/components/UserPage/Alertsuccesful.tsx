"use client";
import React from "react";
import Image from "next/image";
import no from "@/src/app/assent/Img/userPanel/no.svg"



function Alertsuccesful() {
  return (
    <>
    
     <div className="flex flex-row w-44 p-1 rounded-md shadow-md justify-center items-center ">
      <Image src={no} alt=""/>
      <span className="text-[#00966D]">با موفقیت وارد شدید!</span>
      </div>      

    </>
  );
}
export default Alertsuccesful;
