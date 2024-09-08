"use client";
import React, { useState } from "react";
import Image from "next/image";
import backImage from "@/src/app/assent/Img/adminPanel/back.svg";
import posetiv from "@/src/app/assent/Img/userPanel/posetiv.svg";
import negetiv from "@/src/app/assent/Img/userPanel/negtiv.svg";

function RuleAdmin() {
  const [counter, setcounter] = useState(0);
  const [vam, setvam] = useState(0);
  function posetive() {
    setcounter(counter + 1);
  }
  function negtiv() {
    if (counter > 0) {
      setcounter(counter - 1);
    }
  }

  function vamposetive() {
    setvam(vam + 1);
  }
  function vamnegtiv() {
    if (vam > 0) {
      setvam(vam - 1);
    }
  }

  
  return (
    <>
      <div className="flex gap-[70%] items-center mb-2 mt-12   ">
        <div className="mr-2 ">
          <p className="font-bold text-lg">قوانین ومقررات</p>
        </div>   
      </div>
      <div className="flex flex-col gap-7 p-10 mt-10 w-[90%] shadow-md rounded-md">
        <div className=" p-5 border-[1px] border-slate-500 flex flex-col gap-8 w-[90%]">
          <div className="flex flex-col">
            <span className="font-bold">پرداخت اقساط </span>
            <p>
              اقساط اشتراک خود صندوق بی نهایت و بلند مدت است و تا زمانی که
              کاربران و مدیر بخواهند ادامه پیدا میکند ، اما برای اقساط و میزان
              اقساط وام هایی که دریافت میکنید توسط مدیر به شما اعلام میشود که چه
              تعداد و چه میزان باید بپردازید
            </p>
          </div>
          <div className="flex flex-col">
            <span className="font-bold">ضامن</span>
            <p>
              پس از تایید درخواست وام شما توسط مدیر ، شما باید 2 نفر از اعضای
              صندوق را به عنوان ضامن خود معرفی کنید و اسامی آنان را در لیست ضامن
              ها وارد کنید تا مبلغ وام به شما پرداخت شود .
            </p>
          </div>
          <div className="flex flex-col">
            <span className="font-bold">ضامن خارج از صندوق</span>
            <p>
              با توجه به اینکه صندوق قرض الحسنه خانوادگی و دوستانه است و همه ی
              اعضا یکدیگر را میشناسند باید ضامن نیز از بین از همان اعضا باشد .
            </p>
          </div>
          <div className="flex flex-col">
            <span className="font-bold">مدارک</span>
            <p>
              وام تنها مدارکی که نیاز است مدارک و اطلاعات ثبت شده در پروفایل
              کاربری شماست .
            </p>
          </div>
        </div>
        <div>
          <div className=" flex flex-row gap-9">
            <span>تعداد مجاز ضامن ها برای هر کاربر</span>
            <div className="flex flex-row gap-4">
              <Image onClick={() => posetive()} src={posetiv} alt="" />
              <span>{counter}</span>
              <Image onClick={() => negtiv()} src={negetiv} alt="" />
            </div>
          </div>
          <div className=" flex flex-row gap-9 mt-[10px]">
            <span>تعداد وام های مجاز برای هر کاربر</span>
            <div className="flex flex-row gap-4">
              <Image onClick={() => vamposetive()} src={posetiv} alt="" />
              <span>{vam}</span>
              <Image onClick={() => vamnegtiv()} src={negetiv} alt="" />
            </div>
          </div>
          <div className="flex flex-row gap-4 mt-[10px]">
            <span>مبلغ حق اشتراک را مشخص کنید</span>
            <input
              className="w-28 border-[1px] border-[#CACACA] rounded-md p-2"
              type="number"
              placeholder="مبلغ به ریال"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default RuleAdmin;
