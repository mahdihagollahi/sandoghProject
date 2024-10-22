import React from "react";
import Image from "next/image";
import Link from "next/link";
import loagin from "@/app/assent/Img/userPanel/loagin.png";
import Group from "@/app/assent/Img/userPanel/Group 39519.svg";
import loagimg from "@/app/assent/Img/userPanel/menWithBollon.svg"
export default function Landing() {
  return (
    <>
      <div className="relative bg-[#F8F9FA] ">
        <div>
          <Image
            sizes="100vw"
            style={{
              width: "100%",
              height: "350px",
            }}
            src={loagin}
            alt=""
          />
        </div>

        <div className="flex flex-row absolute gap-6 top-[2%] mr-[2.5%]">
          <Image className=" w-[24px] h-6" src={Group} alt="" />
          <p className="font-bold	">صندوق قرض الحسنه مهر </p>
        </div>
        <div>
          <Image
            className="top-[20%] right-[60%]  absolute"
            style={{ width: "503px", height: "298px" }}
            src={loagimg}
            alt=""
          />
        </div>
        <div className="flex flex-col gap-[30px] mr-[2.5%] absolute top-[16%]">
          <p>صندوق قرض الحسنه مهر ، با مهر در کنار هم </p>
          <p className="w-[550px]">
            ما در کنار جمع شده‌ایم تا در صندوق قرض الحسنه شریک باشیم ، هر یک از
            کاربران صندوق حق اشتراک ثابت ماهانه ی خود را دارد و در صورتی که وام
            بخواهند میتوانند مبلغ پیشنهادی خود را اعلام کنند و وام دریافت کنند .
          </p>
        </div>
        <Link href='/loginuser'>
     
        <button className="bg-[#4FD1C5] w-[300px] h-[56px] text-white rounded-[5px] absolute top-[40%] right-[2.5%]">
          ورود کاربران
        </button>
        </Link>
        <div className="bg-[#F8F9FA]">

    
        <div>
          <p className="w-[1080px]   mr-[2.5%] mt-[18%] opacity-[60%]">
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
      </div>
    </>
  );
}
