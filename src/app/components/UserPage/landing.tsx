import React from "react";
import Image from "next/image";
import loagin from "@/src/app/imag/loagin.png";
import Group from "@/src/app/imag/Group 39519.svg";
import loagimg from "@/src/app/imag/tiny-sponsors-giving-donations-startup-project-person-raising-money-online-financial-growth-flat-vector-illustration-crowdfunding-internet-cooperation-concept-banner-website-design 1.svg";

export default function landing() {
  return (
    <>
      <div className="relative h-[500px]">
        <div>
          <Image
            sizes="100vw"
            style={{
              width: "100%",
              height: "260px",
            }}
            src={loagin}
            alt=""
          />
        </div>

        <div className="flex flex-row absolute gap-6 top-[10px] mr-[44px]">
          <Image className=" w-[24px] h-6" src={Group} alt="" />
          <p className="font-bold	">صندوق قرض الحسنه مهر </p>
        </div>
        <div>
          <Image
            className="top-[20px] right-[750px]  absolute"
            style={{ width: "503px", height: "298px" }}
            src={loagimg}
            alt=""
          />
        </div>
        <div className="flex flex-col gap-[30px] mr-[44px] absolute top-[70px]">
          <p>صندوق قرض الحسنه مهر ، با مهر در کنار هم </p>
          <p className="w-[550px]">
            ما در کنار جمع شده‌ایم تا در صندوق قرض الحسنه شریک باشیم ، هر یک از
            کاربران صندوق حق اشتراک ثابت ماهانه ی خود را دارد و در صورتی که وام
            بخواهند میتوانند مبلغ پیشنهادی خود را اعلام کنند و وام دریافت کنند .
          </p>
        </div>
        <button className="bg-[#4FD1C5] w-[300px] h-[56px] text-white rounded-[5px] absolute top-[235px] mr-[44px]">
          ورود کاربران
        </button>
        <div>
          <p className="w-[1080px] mr-[44px] mt-24 opacity-[60%]">
            برای عضویت در صندوق مهر به عنوان کاربر ، شما ابتدا باید با مدیر
            صندوق هماهنگ و اعلام عضویت کنید ، سپس نام کاربری و رمز شما در سیستم
            ثبت و آماده ورود به صندوق میشوید ، اگر نام کاربری و رمز شما تایید
            شده است ، خوش آمدید !
          </p>
        </div>
        <div>
          <p className="w-[1080px] mr-[44px] mt-[40px] opacity-[60%]" ><span className="text-[#4FD1C5]">*</span>ورود به سایت به منزله پذیرش تمامی قوانین سایت است .</p>
        </div>
        <div>
          <p className="opacity-[60%] mt-[60px] flex justify-center">کلیه حقوق سایت محفوظ و متعلق به طراح  <span  className="text-[#4FD1C5]"> Ghanbaryamir2000@gmail.com </span> می‌باشد.</p>
        </div>
      </div>
    </>
  );
}
