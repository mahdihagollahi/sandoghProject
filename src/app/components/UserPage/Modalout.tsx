"use client";
import React from "react";

function Modalout({handleCloseModal}) {
  return (
    <>
      <div className="flex flex-col justify-center items-center gap-3 w-96 shadow-md p-8 rounded-md ">
        <h4 className="font-bold">خروج</h4>
        <p>آیا ازخروج خود اطمینان دارید؟</p>
        <div className="flex flex-row-reverse gap-2">
          <button className="text-red-500  py-2 px-10 hover:bg-[#FFF2F2] hover:rounded-md">خروج</button>
          <button className="text-[#1D91CC] py-2 px-10 hover:bg-blue-100 hover:rounded-md " onClick={handleCloseModal}>بازگشت</button>
        </div>
      </div>
    </>
  );
}

export default Modalout;
