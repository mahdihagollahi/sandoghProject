import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import { usePathname } from "next/navigation";
import DefaultAvatar from "@/src/app/assent/Img/adminPanel/defultUser.png";
import arrowImage from "@/src/app/assent/Img/adminPanel/back.svg";
import cardImage from "@/src/app/assent/Img/adminPanel/carddetail.svg";
import cardImage2 from "@/src/app/assent/Img/adminPanel/carddetail2.png";

const DetailUser: React.FC = () => {
  const pathname = usePathname();
  const userId = pathname.split("/").pop();
  console.log("User ID:", userId);

  const [userDetail, setUserDetail] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchUserData = async () => {
      setLoading(true);
      const authToken = localStorage.getItem("authToken");

      try {
        const response = await axios.put(
          `https://mohammadelia30.ir/shabab/api/users/index/${userId}`,
          {},
          {
            headers: {
              Authorization: `Bearer ${authToken}`,
              "Content-Type": "application/json",
            },
          }
        );
        setUserDetail(response.data.user);
      } catch (error) {
        setError("Failed to fetch user data");
        console.error("Error fetching user data:", error);
      } finally {
        setLoading(false);
      }
    };

    if (userId) {
      fetchUserData();
    }
  }, [userId]);

  const handleBack = () => {
    window.history.back();
  };

  if (loading) {
    return (
      <div>
        <div className="flex gap-[150%] items-center mb-2 mt-14">
          <div className="mr-2">
            <p className="font-bold text-lg whitespace-nowrap">
              مشاهده کاربران
            </p>
          </div>
          <div className="flex justify-end mr-2"></div>
        </div>

        <div className="bg-white dark:bg-[#4F5D74] w-full h-20 shadow-md mt-5  cursor-pointer rounded-md ">
          <div className="flex justify-center items-center">
            <span className="loading loading-dots text-accent loading-lg"></span>
          </div>
        </div>
      </div>
    );
  }

  if (error)
    return (
      <div>
        <div className="flex gap-[150%] items-center mb-2 mt-14">
          <div className="mr-2">
            <p className="font-bold text-lg whitespace-nowrap">
              مشاهده کاربران
            </p>
          </div>
          <div className="flex justify-end mr-2"></div>
        </div>

        <div className="bg-white dark:bg-[#4F5D74] w-full h-20 shadow-md mt-5  cursor-pointer rounded-md ">
          <div className="flex justify-center items-center">
            <p>Error: {error}</p>
          </div>
        </div>
      </div>
    );

  if (!userDetail)
    return (
      <div>
        <div className="flex gap-[150%] items-center mb-2 mt-14">
          <div className="mr-2">
            <p className="font-bold text-lg whitespace-nowrap">
              مشاهده کاربران
            </p>
          </div>
          <div className="flex justify-end mr-2"></div>
        </div>

        <div className="bg-white dark:bg-[#4F5D74] w-full h-20 shadow-md mt-5  cursor-pointer rounded-md ">
          <div className="flex justify-center items-center">
            <p>دیتا دریافت نشد</p>
          </div>
        </div>
      </div>
    );

  return (
    <div>
      <div className="flex gap-[79.9%] items-center mb-2 mt-14">
        <div className="mr-2">
          <p className="font-bold text-lg whitespace-nowrap">مشاهده کاربران</p>
        </div>
        <div
          className="flex justify-end mr-2 items-center cursor-pointer"
          onClick={handleBack}
        >
          بازگشت
          <Image src={arrowImage} width={38} height={38} alt="arrow" />
        </div>
      </div>

      <div className="bg-white dark:bg-[#4F5D74] shadow-md mt-14 px-[102px] py-20 cursor-pointer rounded-md">
        <div className="flex justify-center">
          <Image
            src={userDetail.avatar || DefaultAvatar}
            width={98}
            height={98}
            alt="user"
            className="rounded-sm"
          />
        </div>
        <div className="flex justify-center">
          <button>مسدود</button>
        </div>
        <div className="flex justify-center mt-5">
          <div>
            <p className="font-normal mr-6 text-[9px] text-[#2D3748]">
              شماره کارت
            </p>
            <Image
              src={userDetail.card_image || cardImage}
              width={244}
              height={140}
              alt="cardNumber"
            />
          </div>

          <div>
            <p className="font-normal mr-6 text-[9px] text-[#2D3748]">
              کارت ملی
            </p>
            <Image
              src={userDetail.national_card_image || cardImage2}
              width={244}
              height={140}
              alt="cardNumber"
            />
          </div>
        </div>

        <div className="mt-10">
          <div className="flex">
            <div className="relative">
              <label className="absolute -top-2 z-10 left-[83%] px-3 bg-white py-2 dark:bg-[#4F5D74]">
                نام
              </label>
              <input
                type="text"
                value={userDetail.first_name || ""}
                className="border w-[100%] md:w-96 h-14 text-black px-40 border-[#CACACA] rounded-md relative m-3"
                readOnly
              />
            </div>
            <div className="relative w-full md:w-auto">
              <label className="absolute -top-2 z-10 left-[68%] px-3 bg-white py-2">
                نام خانوادگی
              </label>
              <input
                type="text"
                value={userDetail.last_name || ""}
                className="border w-96 md:w-96 h-14 border-[#CACACA] px-40 rounded-md relative m-3"
                readOnly
              />
            </div>
          </div>
          <div className="flex">
            <div className="relative w-full md:w-auto">
              <label className="absolute -top-2 z-10 left-[67%] px-3 bg-white py-2">
                شماره موبایل
              </label>
              <input
                type="text"
                value={userDetail.phone_number || ""}
                className="border w-96 md:w-96 h-14 border-[#CACACA]   px-32 rounded-md relative m-3"
                readOnly
              />
            </div>
            <div className="relative w-full md:w-auto">
              <label className="absolute -top-2 z-10 left-[58%] px-3 bg-white py-2">
                شماره تلفن ضروری
              </label>
              <input
                type="text"
                value={userDetail.emergency_number || ""}
                className="border w-96 md:w-96 h-14 border-[#CACACA]  px-32 rounded-md relative m-3"
                readOnly
              />
            </div>
          </div>

          <div className="flex">
            <div className="relative w-full md:w-auto">
              <label className="absolute -top-2 z-10 left-[72%] px-3 bg-white py-2">
                تلفن منزل
              </label>
              <input
                type="text"
                value={userDetail.home_number || ""}
                className="border w-96 md:w-96 h-14 border-[#CACACA]  px-32 rounded-md relative m-3"
                readOnly
              />
            </div>
            <div className="relative w-full md:w-auto">
              <label className="absolute -top-2 z-10 left-[76%] px-3 bg-white py-2">
                کد ملی
              </label>
              <input
                type="text"
                value={userDetail.national_code || ""}
                className="border w-96 md:w-96 h-14 border-[#CACACA]  px-32 rounded-md relative m-3"
                readOnly
              />
            </div>
          </div>

          <div className="flex">
            <div className="relative w-full md:w-auto">
              <label className="absolute -top-2 z-10 left-[71%] px-3 bg-white py-2">
                شماره کارت
              </label>
              <input
                type="text"
                value={userDetail.card_number || ""}
                className="border w-96 md:w-96 h-14 border-[#CACACA]  px-24 rounded-md relative m-3"
                readOnly
              />
            </div>
            <div className="relative w-full md:w-auto">
              <label className="absolute -top-2 z-10 left-[72%] px-3 bg-white py-2">
                شماره شبا
              </label>
              <input
                type="text"
                value={userDetail.sheba_number || ""}
                className="border w-96 md:w-96 h-14 border-[#CACACA]  px-16 rounded-md relative m-3"
                readOnly
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailUser;
