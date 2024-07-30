import React from "react";
import Image from "next/image";
import search from "../assent/imag/Search.png";
import Exclamation from "../assent/imag/Exclamation.svg";

const user = [
  { id: 1, name: "حامد رحمانی" },
  { id: 1, name: " موسی مقدم" },
];

function Inputvam() {
  return (
    <>
      <div className="w-[950px] shadow-md rounded-md pb-10 pt-10">
        <div className="flex flex-grow justify-around p-[40px] w-[900px] opacity-[70%] border-b-2 ">
          <span>شماره درخواست</span>
          <span>مبلغ وام</span>
          <span>تاریخ درخواست</span>
          <span>توضیحات</span>
        </div>
        <div className="flex flex-grow justify-around p-[40px] w-[900px] mr-[40px]  ">
          <input
            className="border-[1px] w-[148px] h-[56px] rounded-md p-2"
            type="text"
            placeholder="شماره"
          />
          <input
            className="border-[1px] w-[148px] h-[56px] rounded-md p-2"
            type="text"
            placeholder="مبلغ"
          />
          <input
            className="border-[1px] w-[148px] h-[56px] rounded-md p-2"
            type="text"
            placeholder="تاریخ"
          />
          <input
            className="border-[1px] w-[248px] h-[56px] rounded-md p-2"
            type="text"
            placeholder="توضیحات"
          />
        </div>
        <div className=" flex flex-row  ">
          <div>
            <label className="flex flex-row gap-2 relative rounded-md mr-[100px] ">
              <Image
                className="w-[20px] h-[20px] z-10 mt-[17px] mr-3 "
                src={search}
                alt=""
              />
              <input
                className=" p-[8px] w-[402px] h-[56px] absolute pr-12 rounded-md border-[1px]"
                type="text"
                placeholder="جستجو نام کاربری یا شماره تلفن ضامن"
              />
            </label>
          </div>

          <div className="flex flex-row gap-3  mt-1 z-20 absolute right-[570px]">
            {user.map((items, index) => (
              <div key={index}>
                <button className="border-[2px] rounded-md border-[#4FD1C5] p-[10px]">
                  {items.name}
                </button>
              </div>
            ))}
          </div>
        </div>
        <div className=" flex flex-col gap-4">
          <div className="flex flex-row gap-2 opacity-[70%] mt-[100px] mr-[100px]">
            <Image className="w-[20px] h-[20px]" src={Exclamation} alt="" />
            <span>شما تا به حال مجموعا 6 درخواست وام ثبت کرده اید</span>
          </div>
          <div className="flex flex-row gap-2 opacity-[70%] mr-[100px]">
            <Image className="w-[20px] h-[20px]" src={Exclamation} alt="" />
            <span>
              لطفا توضیحات شما برای درخواست وام بیش از 100 کاراکتر نشود
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Inputvam;
