import React from "react";

function AcceptRequest() {
  return (
    <>
      <div className="w-[100%] bg-white h-[638px] rounded-md shadow-md p-10">
        <div className="flex flex-row justify-around p-[20px] -mt-5 w-[900px] -mr-6  border-b-2 ">
          <span>شماره درخواست</span>
          <span>مبلغ وام</span>
          <span>تاریخ درخواست</span>
          <span> توضیحات مدیر صندوق</span>
        </div>
        <div className="flex flex-row gap-8 p-[20px] w-[900px] text-base border-b-2 ">
          <span className="w-24 mr-12">درخواست 1</span>
          <span className="mr-12 opacity-[70%]">50.000.000 تومان</span>
          <span className="mr-12 opacity-[70%]">1403/03/17</span>
          <span className="w-72 mr-8 opacity-[70%]">
          با درخواست شما موفقت گردید و در نوبت وام قرار گرفتید ودرتاریخ <span className="text-[#F83030]">1403/04/10</span>به شماره حساب ثبت شده شما واریز میگردد 
          و اقساط ماهانه تا یک سال به مبلغ2000واریز کنید.
          </span>
        </div>
        <div className="flex flex-row gap-8 p-[20px] w-[900px] text-base border-b-2 ">
          <span className="w-24 mr-12">درخواست 5</span>
          <span className="mr-12 opacity-[70%]">120.000.000 تومان</span>
          <span className="mr-12 opacity-[70%]">1403/10/27</span>
          <span className="w-72 mr-8 opacity-[70%]">
          با درخواست شما موفقت گردید و در نوبت وام قرار گرفتید ودرتاریخ <span className="text-[#F83030]">1401/09/10</span>به شماره حساب ثبت شده شما واریز میگردد 
          و اقساط ماهانه تا یک سال به مبلغ2000واریز کنید.
          </span>
        </div>
        <div className="flex flex-row gap-8 p-[20px] w-[900px] text-base border-b-2 ">
          <span className="w-24 mr-12">درخواست 8</span>
          <span className="mr-12 opacity-[70%]">90.000.000 تومان</span>
          <span className="mr-12 opacity-[70%]">1403/11/20</span>
          <span className="w-72 mr-8 opacity-[70%]">
          با درخواست شما موفقت گردید و در نوبت وام قرار گرفتید ودرتاریخ <span className="text-[#F83030]">1402/09/30</span>به شماره حساب ثبت شده شما واریز میگردد 
          و اقساط ماهانه تا یک سال به مبلغ2000واریز کنید.
          </span>
        </div>
      </div>
     
    </>
  );
}

export default AcceptRequest;
