import React from "react";
import Image from "next/image";
import icon from "@/src/app/assent/imag/Iconly (1).svg";
import dragcard from "@/src/app/assent/imag/drapcart.svg"

export default function DragCart() {
  return (
    <>
    <div className="flex flex-col gap-[28px]">
        <div className="border-dashed w-[345px]  p-[10px] h-[200px] rounded-md border-2  border-[#4FD1C5]">
          <Image
            className="mr-[300px] mb-[8px] "
            style={{ width: "18px", height: "18px" }}
            src={icon}
            alt=""
          />
          <div className="flex flex-col gap-[20px] justify-center items-center">
            <Image className="w-[18px] h-[15px] mt-2" src={dragcard} alt=""/>
            <p className="text-[#2D3748] text-sm">آپلود عکس کارت ملی از فایل ها</p>
            <p className="text-[#809FB8] text-sm">اینجا بکشید و رها کنید</p>
          </div>
         
        </div>
        <div>
          <ul className="list-disc list-inside flex flex-col gap-[10px] text-[#2D3748]">
            <li>لطفا عکس کارت ملی خود را در کادر قراره داده شده باگذاری کنید </li>
            <li>حجم عکس ها بیشتر از 2 مگابایت نباشند</li>
            <li>عکس کاملا واضح باشد</li>
          </ul>
        </div>
      </div>
   
    </>
  );
}