"use client";
import React from "react";
import Image from "next/image";
import backImage from "@/app/assent/Img/adminPanel/back.svg"

function UserRule() {
  return (
    <>
      <div className="flex gap-[70%] items-center mb-2 mt-12   ">
        <div className="mr-2 ">
          <p className="font-bold text-lg">قوانین ومقررات</p>
        </div>

        <div className="flex gap-96  ">
          <a href="/requestloanaplication" className="flex items-center">
            بازگشت
            <Image src={backImage} width={38} height={38} alt="arrow" />
          </a>
        </div>
      </div>
      <div className="flex flex-col gap-7 p-10 mt-10 w-[85%]  shadow-md rounded-md">
        <div className=" p-5 rounded-md flex flex-col gap-8 w-[100%]">
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
      </div>
    </>
  );
}
export default UserRule;
