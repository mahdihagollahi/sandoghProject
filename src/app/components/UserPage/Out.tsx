"use client";
import React from "react";

function Out() {
  return (
    <>
      <div className="w-[60%] shadow-md rounded-md p-7">
        <div>
          <span className="font-bold ">خروج</span>
          <div >
            <ul className=" flex flex-col gap-2 border-[2px] border-current rounded-md p-6 list-disc w-[800px] mt-2  ">
              <li>اطلاعات شما ذخیره ونگهداری میشود</li>
              <li>وام های شما حذف نمیشوند </li>
              <li>تمامی اطلاعات و داده های ذخیره شده در صندوق حفظ میشوند</li>
              <li>نیازی به پاکسازی بدهی ها و طلب ها نیست</li>
              <li>میتوانید هر زمان که خواستید به صندوق برگردید</li>
            </ul>
          </div>
          <button className="bg-[#394860] text-white w-52 h-9 rounded-md mt-2 mr-[580px] ">خارج میشوم</button>
        </div>
        <div>
          <span className="font-bold text-red-500">انصراف از صندوق</span>
          <div>
            <ul className=" flex flex-col gap-2 border-[2px] border-red-500 rounded-md p-6 list-disc w-[800px] mt-2 ">
              <li>حذف کامل حساب کاربری</li>
              <li>حذف تمامی وام های فعال </li>
              <li>حذف تمامی اطلاعات و داده های ذخیره شده در صندوق</li>
              <li>تسویه حساب و پاکسازی حساب ها</li>
              <li>در صورت داشتن وام فعال مبلغ باقی مانده اقساط از موجودی حساب شما در صندوق کسر و مابقی به شما بازگردانده میشود</li>
            </ul>
          </div>
          <button className="bg-red-500 text-white w-52 h-9 rounded-md mt-2 mr-[580px] ">انصراف میدهم</button>
        </div>
      </div>
    </>
  );
}

export default Out;
