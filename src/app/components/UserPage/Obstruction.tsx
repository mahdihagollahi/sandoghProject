"use client";
import React from "react";
import Image from "next/image";
import greenBackground from "@/app/assent/Img/userPanel/GreenBackgound.png";
import egnor from "@/app/assent/Img/userPanel/egnor.svg"

function Obstruction() {
  return (
    <>
      <div className="relative h-[450px]">
        <div>
          <Image
            sizes="100vw"
            style={{
              width: "100%",
              height: "350px",
            }}
            src={greenBackground}
            alt=""
          />
        </div>
        <div className="bg-white flex justify-center  absolute top-[20%] left-[30%] rounded-[30px] shadow-md">
          <div className="w-[626px] h-[528px] rounded-[30px] p-[40px] shadow-md">
            <div className="flex flex-col gap-8 justify-center items-center mt-[15%] ">
              <Image className="border-2 rounded-full shadow-md border-solid  " src={egnor} alt=""/>
              <p className="text-[#868686] border-2 border-solid rounded-md p-4 w-80 items-center ">شما از سمت مدیر صندوق مسدود شده اید</p>
              <button className="bg-[#4FD1C5] text-[#fff] w-96 p-2 rounded-md h-12 mt-6 ">برو به صفحه اصلی</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Obstruction;