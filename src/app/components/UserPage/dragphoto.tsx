import React from "react";
import Image from "next/image";
import man from "@/src/app/imag/man.svg";
import icon from "@/src/app/imag/Iconly (1).svg";

export default function dragphoto() {
  return (
    <>
      <div className="flex flex-col gap-[28px]">
        <div className="border-dashed w-[200px]  p-[10px] h-[200px] rounded-md border-2  border-[#4FD1C5]">
          <Image
            className="mr-[150px] mb-[8px] "
            style={{ width: "18px", height: "18px" }}
            src={icon}
            alt=""
          />
          <Image
            className="mr-[13px] mb-[5px] "
            style={{ width: "148px", height: "148px" }}
            src={man}
            alt=""
          />
        </div>
        <div>
          <ul className="list-disc list-inside flex flex-col gap-[10px] text-[#2D3748]">
            <li>لطفا عکس پروفایل خود را در کادر قراره داده شده باگذاری کنید</li>
            <li>حجم عکس ها بیشتر از 2 مگابایت نباشند</li>
            <li>عکس از تصویر خودتان باشد</li>
          </ul>
        </div>
      </div>
    </>
  );
}
