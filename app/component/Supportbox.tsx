import React from "react";
import Image from 'next/image'
import computerpepole from "../camputerpepole.svg";

export default function Supportbox() {
    return(
        <>
        <div className="w-[617px] h-[350px] p-[40px] text-right rounded-md shadow-lg">
        <h2 className="font-bold">نیاز به پشتیبانی دارید ؟</h2>
        <p className="mt-[30px] text-slate-600	">
          اگر مشکلی برایتان بوجود آمده همین حالا به مدیر صندوق پیام دهید یا
          میتوانید بصورت مستقیم تماس بگیرید
        </p>
        <div className="flex flex-row gap-3">
          <div className=" flex flex-col gap-[12px] mt-[30px]">
            <button className="w-[300px] h-12 border-[1px] text-[#394860]	border-[#394860] rounded-lg	">
              پیام به مدیر صندوق
            </button>
            <button className="w-[300px] h-12 border-[1px] text-[#394860]	border-[#394860] rounded-lg	">
              تماس با مدیر صندوق
            </button>
          </div>
          <div className="mt-[10px]">
            <Image style={{width:"100%"}}  src={computerpepole} alt="" />
          </div>
        </div>
      </div>
        </>
    );
}