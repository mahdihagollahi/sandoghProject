import React from "react";
import Image from "next/image";
import cardfish from "@/src/app/assent/imag/Fill 425.svg";
import trash from "@/src/app/assent/imag/trash.svg";

export default function dragfish() {
  return (
    <>
      <div className="flex flex-col">
        <div className="border-dashed w-[400px]  p-[10px] h-[250px] rounded-md border-2 flex flex-col items-center justify-center  border-[#4FD1C5]">
          <div className="flex flex-col gap-[20px] justify-center items-center">
            <Image className="w-[35px] h-[35px] mt-2" src={cardfish} alt="" />
            <p className="text-[#2D3748] text-base font-bold">
              آپلود عکس از فایل ها
            </p>
            <p className="text-[#809FB8] text-xs">اینجا بکشید و رها کنید</p>
          </div>
        </div>
        <div className="flex flex-row gap-2 mt-5">
          <div className="relative">
            <input className="border-[#4FD1C5] rounded-md border-[1px] w-[110px] h-[42px]" />
            <span className="absolute -top-[8px] right-2 text-xs bg-white">
              <span className="text-[red]">*</span>مبلغ پرداخت
            </span>
          </div>
          <button className="bg-[#4FD1C5] text-[#ffff] w-[282px] h-[42px] rounded-md ">
            <div className="flex flex-row justify-center gap-1">
              <div>
                <Image className="w-[24px] h-[24px]" src={trash} alt="" />
              </div>
              <div className="text-sm">حذف یا بارگذاری مجدد</div>
            </div>
          </button>
        </div>
        <div className="relative mt-5">
          <input className="border-[#4FD1C5] rounded-md border-[1px] w-[400px] h-[100px]"/>
          <span className="absolute -top-[8px] right-3 text-xs bg-white">توضیحات</span>
        </div>
        <ul className="text-[#2D3748] opacity-[80%] list-disc list-inside text-sm mt-5">
          <li>لطفا بیش از 100 کاراکتر توضیحات ننویسید !</li>
        </ul>
      </div>
    </>
  );
}
