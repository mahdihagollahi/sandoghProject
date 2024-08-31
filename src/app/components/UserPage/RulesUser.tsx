import React from "react";
import Image from 'next/image';
import backImage from '@/src/app/assent/Img/adminPanel/back.svg'
import pozetiv from "@/src/app/assent/Img/userPanel/pozetiv.svg";
import negtiv from "@/src/app/assent/Img/userPanel/negtiv.svg";
import pen from "@/src/app/assent/Img/userPanel/pen.svg";

export default function RulesUser() {
  return (
    <>
     <div className='flex justify-between items-center mb-2 mt-10   '>
            <div className='mr-2 '>
                <p className='font-bold text-lg'>
                تنظیمات                
                </p>
            </div>
          


            <div className='flex justify-end  '>
              <a href="/requestloanaplication" className='flex items-center'>
              بازگشت
              <Image
                src={backImage}
                width={38}
                height={38}
                alt='arrow'

                />
              </a>
              
            </div>
        </div>
      <div className="p-[40px] w-[950px] mt-10 h-[2487px]">
        <div className="flex flex-row justify-between w-[837px]">
          <div className="flex flex-row gap-[100px]">
            <span>تعداد وام های مجاز برای هر کاربر</span>
            <div className="flex flex-row gap-3">
              <button>
                <Image className="w-[20px] h-[20px]" src={pozetiv} alt="" />
              </button>
              <span>2</span>
              <button>
                <Image className="w-[20px] h-[20px]" src={negtiv} alt="" />
              </button>
            </div>
          </div>
          <div className="flex flex-row gap-[100px]">
            <span>تعداد مجاز ضامن ها برای هر کاربر</span>
            <div className="flex flex-row gap-3">
              <button>
                <Image className="w-[20px] h-[20px]" src={pozetiv} alt="" />
              </button>
              <span>2</span>
              <button>
                <Image className="w-[20px] h-[20px]" src={negtiv} alt="" />
              </button>
            </div>
          </div>
        </div>
        <div className="mt-[219px]">
          <h3>قوانین و مقررات</h3>
        </div>
        <div className="p-[24px] border-b-[1px] w-[837px] ">
          <div className="flex flex-row gap-3">
            <Image className="w-[16px] h-[16px]" src={pen} alt="" />
            <span>پرداخت اقساط </span>
          </div>
          <p className="mt-[20px] w-[500px]">
            اقساط اشتراک خود صندوق بی نهایت و بلند مدت است و تا زمانی که کاربران
            و مدیر بخواهند ادامه پیدا میکند ، اما برای اقساط و میزان اقساط وام
            هایی که دریافت میکنید توسط مدیر به شما اعلام میشود که چه تعداد و چه
            میزان باید بپردازید.
          </p>
        </div>
        <div className="p-[24px] border-b-[1px] w-[837px] ">
          <div className="flex flex-row gap-3">
            <Image className="w-[16px] h-[16px]" src={pen} alt="" />
            <span>ضامن</span>
          </div>
          <p className="mt-[20px] w-[500px]">
            ضامن پس از تایید درخواست وام شما توسط مدیر ، شما باید 2 نفر از اعضای
            صندوق را به عنوان ضامن خود معرفی کنید و اسامی آنان را در لیست ضامن
            ها وارد کنید تا مبلغ وام به شما پرداخت شود .
          </p>
        </div>
        <div className="p-[24px] border-b-[1px] w-[837px] ">
          <div className="flex flex-row gap-3">
            <Image className="w-[16px] h-[16px]" src={pen} alt="" />
            <span>ضامن خارج از صندوق</span>
          </div>
          <p className="mt-[20px] w-[500px]">
            با توجه به اینکه صندوق قرض الحسنه خانوادگی و دوستانه است و همه ی
            اعضا یکدیگر را میشناسند باید ضامن نیز از بین از همان اعضا باشد .
          </p>
        </div>
        <div className="p-[24px] border-b-[1px] w-[837px] ">
          <div className="flex flex-row gap-3">
            <Image className="w-[16px] h-[16px]" src={pen} alt="" />
            <span> مدارک وام </span>
          </div>
          <p className="mt-[20px] w-[500px]">
            تنها مدارکی که نیاز است مدارک و اطلاعات ثبت شده در پروفایل کاربری
            شماست .
          </p>
        </div>
        <div className="p-[24px] border-b-[1px] w-[837px] ">
          <div className="flex flex-row gap-3">
            <Image className="w-[16px] h-[16px]" src={pen} alt="" />
            <span> تغییر رمز و نام کاربری </span>
          </div>
          <p className="mt-[20px] w-[500px]">
            رمز و نام کاربری شما همواره شماره موبایل و کد ملی شماست و نیازی
            ندارید که آن را تغییر بدهید یا ان را فراموش کنید.
          </p>
        </div>
        <div className="p-[24px] border-b-[1px] w-[837px] ">
          <div className="flex flex-row gap-3">
            <Image className="w-[16px] h-[16px]" src={pen} alt="" />
            <span> مسدودی حساب</span>
          </div>
          <p className="mt-[20px] w-[500px]">
            مسدودی حساب بستگی به نوع کارکرد کاربر دارد ، در صورت بی نظمی در روند
            باز پرداخت اقساط وام و یا اشتراک ماهانه صندوق اهمال بورزند و یا
            اینکه قصد کلاهبرداری و یا ارسال فیش های تقلبی و ...داشته باشند حساب
            کاربری آنان مسدود خواهد شد (مدیریت صندوق میتواند حساب مسدودی را
            دوباره به روند عادی صندوق برگرداند)
          </p>
        </div>
        <div className="p-[24px] border-b-[1px] w-[837px] ">
          <div className="flex flex-row gap-3">
            <Image className="w-[16px] h-[16px]" src={pen} alt="" />
            <span>غیبت در صندوق</span>
          </div>
          <p className="mt-[20px] w-[500px]">
            غیبت در صندوق اگر کاربری به هر دلیلی نتواند برای مدتی در صندوق باشد
            میتواند به مدیریت اعلام کند و طبق تصمیم گیری مدیر صندوق حساب او تا
            زمانی که خود کاربر میخواهد مسدود میشود (البته اگر در ان زمان وام
            فعالی نداشته باشد ) سپس دوباره توسط مدیر به صندوق برمیگردد.
          </p>
        </div>
       
      </div>

    </>
  );
}
