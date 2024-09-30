import React from "react";
// import Image from "next/image";
// import filter from "@/src/app/assent/Img/userPanel/filter.svg";
// import flash from "@/src/app/assent/Img/userPanel/flash.svg";

export default function Filter() {
  return (
    <>
      <div className="flex flex-row  ">
        {/* <div>
          <button className="p-6 flex text-xs font-bold w-[278px] h-[64px] shadow	rounded">
            <Image
              className="w-[14px] h-[14px] ml-2 mt-1"
              src={filter}
              alt=""
            />
            فیلتر بر اساس درجه وام ها
            <Image className="w-[17px] h-[17px] mr-2 mt-1" src={flash} alt="" />
          </button>
        </div> */}
        <div className="flex flex-row gap-4 items-center mt-4">
          <div className="mt-1 flex items-center gap-2">
            <div>
            <span>معمولی</span>

            </div>
            <div className="mt-2">

            
            <input
              type="radio"
              name="radio-5"
              className="radio  "
            />
            </div>
          </div>
          <div className="mt-1 flex items-center gap-2">
            <div>
            <span>ضروری</span>

            </div>
            <div className="mt-2">

            
            <input
              type="radio"
              name="radio-5"
              className="radio  "
            />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
