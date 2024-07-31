import React from "react";


function Jaryan() {
  return (
    <>
      <div className="w-[950px] h-[450px] rounded-md shadow-md">
        <div className="flex flex-row justify-around p-[40px] w-[900px]  border-b-2 ">
          <span>شماره درخواست</span>
          <span>مبلغ وام</span>
          <span>تاریخ درخواست</span>
          <span>توضیحات</span>
        </div>
        <div className="flex flex-row gap-8 p-[40px] w-[900px] mr-[70px] text-base">
          <span className="w-28">درخواست 1</span>
          <span className="mr-12 opacity-[70%]">50.000.000 تومان</span>
          <span className="mr-12 opacity-[70%]">1403/03/17</span>
          <span className="w-[250px] mr-8 opacity-[70%]">
            برای خرج عروسی و مراسم ازدواج نیاز دارم و حتما باید چک های تالارو
            پاس کنم بد گیرم اقای قنبری اگه میشه تایید کنید
          </span>
        </div>
        <div className="flex flex-row gap-3 pr-28">
          <span>درجه وام:</span>
          <div className="flex flex-row gap-2">
            <span>معمولی</span>
            <input
              type="radio"
              name="radio-5"
              className="radio radio-success"
              checked="checked"
            />
          </div>
        </div>
        <div className="flex flex-row gap-6 pr-28 mt-6">
          <span>ضامن درخواستی:</span>
          <div className="flex flex-row gap-4 -mt-1">
            <button className="border-[#4FD1C5] border-2 rounded-md p-2">
              رحمان مقدم
            </button>
            <button className="border-[#4FD1C5] border-2 rounded-md p-2">
              موسی مقدم
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Jaryan;
