import React from "react";

function radrequst() {
  return (
    <>
      <div className="w-[950px] h-[538px] rounded-md shadow-md p-10">
        <div className="flex flex-row justify-around p-[40px] -mt-5 w-[900px]  border-b-2 ">
          <span>شماره درخواست</span>
          <span>مبلغ وام</span>
          <span>تاریخ درخواست</span>
          <span>توضیحات</span>
        </div>
        <div className="flex flex-row gap-8 p-[40px] w-[900px] text-base border-b-2 ">
          <span className="w-28">درخواست 1</span>
          <span className="mr-12 opacity-[70%]">50.000.000 تومان</span>
          <span className="mr-12 opacity-[70%]">1403/03/17</span>
          <span className="w-[250px] mr-8 opacity-[70%]">
            درخواست شما به دلیل اینکه در پرداخت اشتراک ماهانه واریز های منظمی
            نداشتید تایید نشد
          </span>
        </div>
        <div className="flex flex-row gap-8 p-[40px] w-[900px]  text-base border-b-2 ">
          <span className="w-28">درخواست 1</span>
          <span className="mr-12 opacity-[70%]">50.000.000 تومان</span>
          <span className="mr-12 opacity-[70%]">1403/03/17</span>
          <span className="w-[250px] mr-8 opacity-[70%]">
            درخواست شما به دلیل قبول نکردن ضامن انتخاب شده رد شد
          </span>
        </div>
        <div className="flex flex-row gap-8 p-[40px] w-[900px]  text-base  ">
          <span className="w-28">درخواست 1</span>
          <span className="mr-12 opacity-[70%]">50.000.000 تومان</span>
          <span className="mr-12 opacity-[70%]">1403/03/17</span>
          <span className="w-[250px] mr-8 opacity-[70%]">
            درخواست شما به دلیل قبول نکردن ضامن انتخاب شده رد شد
          </span>
        </div>
      </div>
    </>
  );
}

export default radrequst;
