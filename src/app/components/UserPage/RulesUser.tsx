
import React, { useEffect, useState } from "react";
import Image from "next/image";
import pozetiv from "@/app/assent/Img/userPanel/pozetiv.svg";
import negtiv from "@/app/assent/Img/userPanel/negtiv.svg";
import pen from "@/app/assent/Img/userPanel/pen.svg";

export default function RulesUser() {
  const [settings, setSettings] = useState(null);
  const authToken = typeof window !== "undefined" ? localStorage.getItem("authToken") : null;

  useEffect(() => {
    const fetchSettings = async () => {
      if (!authToken) {
        alert("توکن احراز هویت یافت نشد.");
        return;
      }

      try {
        const response = await fetch("https://mohammadelia30.ir/shabab/api/settings/index", {
          method: "GET",
          headers: {
            "Authorization": `Bearer ${authToken}`, // ارسال توکن به هدر
          },
        });

        if (response.ok) {
          const data = await response.json();
          setSettings(data.setting);
        } else {
          alert("خطا در دریافت اطلاعات.");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchSettings();
  }, [authToken]);

  return (
    <>
      <div className="flex justify-between items-center mb-2 mt-10">
        <div className="mr-2">
          <p className="font-bold text-lg">تنظیمات</p>
        </div>
      </div>
      <div className="p-[40px] w-[950px] mt-10 h-[2487px]">
        <div>
          <h3>قوانین و مقررات</h3>
        </div>

        {/* بخش قوانین شما */}

        {settings && (
          <div className="p-[24px] border-b-[1px] w-[837px]">
            <div className="flex flex-row gap-3">
              <Image className="w-[16px] h-[16px]" src={pen} alt="" />
              <span>اطلاعات صندوق</span>
            </div>
            <p className="mt-[20px] w-[500px]">
              نام صندوق: {settings.fund_name}
            </p>
            <p className="mt-[20px] w-[500px]">
              شماره تلفن: {settings.phone_number}
            </p>
            <p className="mt-[20px] w-[500px]">
              شماره کارت: {settings.card_number}
            </p>
            <p className="mt-[20px] w-[500px]">
              تعداد ضامن‌ها: {settings.guarantors_count}
            </p>
            <p className="mt-[20px] w-[500px]">
              تعداد وام‌ها: {settings.loans_count}
            </p>
            <p className="mt-[20px] w-[500px]">
              حق اشتراک: {settings.subscription}
            </p>
          </div>
        )}
      </div>
    </>
  );
}