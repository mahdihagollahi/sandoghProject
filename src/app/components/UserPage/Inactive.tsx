import React from "react";
import Image from "next/image";
import user from "@/src/app/assent/imag/user.svg";

export default function Inactiv() {
  return (
    <>
      <div className=" bg-[#feffff] w-[950px] h-[486px] shadow-md	 p-[10px] flex flex-col gap-6 justify-center items-center  ">
        <div className="flex flex-col gap-[4px] justify-center items-center   ">
          <p className="text-[#394860] text-sm">
            در حال حاضر شما وام فعالی برای پرداخت اقساط ندارید
          </p>
          <p className="text-[#9F9F9F] text-sm">
            بعد از تایید و واریز وام از سوی مدیر صندوق اقساط شما در این بخش
            نمایش داده میشود
          </p>
        </div>
        <div className="flex flex-col gap-[8px] justify-center items-center mt-2">
          <Image className="w-[554px] h-[242px]" src={user} alt="" />
          <p className="text-[#4FD1C5] text-xs ">
            اگر به وام نیاز دارید میتوانید همین حالا درخواست دهید
          </p>
        </div>
      </div>
    </>
  );
}
