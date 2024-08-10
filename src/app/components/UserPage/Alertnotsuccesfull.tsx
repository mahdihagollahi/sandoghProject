"use client";
import React from "react";
import Image from "next/image";
import no from "@/src/app/assent/Img/userPanel/no.svg";

function Alertnotsuccesfull() {
  return (
    <>
      <div className="flex flex-row w-56 p-1 rounded-md shadow-md justify-center items-center ">
        <Image src={no} alt="" />
        <span className="text-[#C30000]">رمزعبور را اشتباه وارد کردید</span>
      </div>
    </>
  );
}
export default Alertnotsuccesfull;
