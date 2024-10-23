import React, { useState, ChangeEvent } from "react";
import axios from "axios";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import Background from "@/app/assent/Img/adminPanel/Background.png";
import EditIcon from "@/app/assent/Img/adminPanel/Edit.svg";
import Image from "next/image";

interface UserData {
  fund_name: string;
  card_number: string;
  created_at: string;
}

const fetchUserData = async (): Promise<UserData> => {
  const authToken = localStorage.getItem("authToken");
  if (!authToken) {
    throw new Error("No auth token found");
  }

  const response = await axios.get<{ setting: UserData }>(
    "https://mohammadelia30.ir/shabab/api/settings/index",
    {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    }
  );

  const cardNumberString = response.data.setting.card_number.toString();

  return {
    fund_name: response.data.setting.fund_name,
    card_number: cardNumberString,
    created_at: response.data.setting.created_at,
  };
};

const updateCardNumber = async (newCardNumber: string) => {
  const authToken = localStorage.getItem("authToken");
  if (!authToken) {
    throw new Error('لطفا دوباره لاگین کنید');
  }

  await axios.post(
    "https://mohammadelia30.ir/shabab/api/settings/edit",
    { card_number: newCardNumber },
    {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    }
  );
};

function CardAdmin() {
  const queryClient = useQueryClient();
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [cardNumber, setCardNumber] = useState<string>("");

  const queryOptions = {
    queryKey: ["userData"],
    queryFn: fetchUserData,
    onSuccess: (data: UserData) => {
      setCardNumber(data.card_number);
      console.log("Card Number fetched:", data.card_number);
    },
  };

  const { data, isLoading, error } = useQuery<UserData, Error>(queryOptions);

  const handleEditClick = () => {
    setIsEditing(!isEditing);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCardNumber(e.target.value);
  };

  const handleSaveClick = async () => {
    try {
      await updateCardNumber(cardNumber as string);
      setIsEditing(false);
      queryClient.invalidateQueries({ queryKey: ["userData"] });
    } catch (error) {
      console.error("Error updating card number:", error);
    }
  };

  const handleFocus = () => {
    document.documentElement.lang = "en";
  };

  if (isLoading)
    return (
      <div className="flex flex-col items-center mr-3">
        <div className="">
          <div className="bg-white dark:bg-[#4F5D74]  py-[9.9%] rounded-md shadow-md md:items-center xl:w-[120%]">
            <div className="relative flex justify-center items-center h-48">
              <div
                className="absolute inset-0 w-80 h-40 mr-8 rounded-3xl"
                style={{ backgroundImage: `url(${Background.src})` }}
              ></div>
              <div className="relative z-10">
                <span className="loading text-[#4FD1C5]  loading-dots loading-lg"></span>
              </div>
            </div>
            <div className="mt-8 mx-auto pb-3 pt-2 px-7 w-full md:w-80 h-10 border border-[#4FD1C5] cursor-pointer">
              <button
                onClick={isEditing ? handleSaveClick : handleEditClick}
                className="flex justify-between items-center dark:bg-[#4F5D74] dark:text-[#F5F5F5] bg-white w-60 whitespace-nowrap font-light"
              >
                <Image src={EditIcon} width={20} height={20} alt="edit" />
                {isEditing ? "تایید" : "آیا شماره کارت صندوق را تغییر میدهید؟"}
              </button>
            </div>
          </div>
        </div>
      </div>
    );

  if (error)
    return (
      <div className="flex flex-col items-center mr-3">
        <div className="">
          <div className="bg-white dark:bg-[#4F5D74]  py-[9.9%] rounded-md shadow-md md:items-center xl:w-[120%]">
            <div className="relative flex justify-center items-center h-48">
              <div
                className="absolute inset-0 w-80 h-40 mr-8 rounded-3xl"
                style={{ backgroundImage: `url(${Background.src})` }}
              ></div>
              <div className="relative z-10">
                <p className="text-white text-lg mr-5 mb-10 font-normal">
                  Error: {error.message}
                </p>
              </div>
            </div>
            <div className="mt-8 mx-auto pb-3 pt-2 px-7 w-full md:w-80 h-10 border border-[#4FD1C5] cursor-pointer">
              <button
                onClick={isEditing ? handleSaveClick : handleEditClick}
                className="flex justify-between items-center dark:bg-[#4F5D74] dark:text-[#F5F5F5] bg-white w-60 whitespace-nowrap font-light"
              >
                <Image src={EditIcon} width={20} height={20} alt="edit" />
                {isEditing ? "تایید" : "آیا شماره کارت صندوق را تغییر میدهید؟"}
              </button>
            </div>
          </div>
        </div>
      </div>
    );

  return (
    <div className="flex flex-col items-center mr-3">
      <div className="">
        <div className="bg-white dark:bg-[#4F5D74]  py-[9.9%] rounded-md shadow-md md:items-center xl:w-[120%]">
          <div className="relative flex justify-center items-center h-48">
            <div
              className="absolute inset-0 w-80 h-40 mr-8 rounded-3xl"
              style={{ backgroundImage: `url(${Background.src})` }}
            ></div>
            <div className="relative z-10">
              <p className="text-white  mr-32 mb-3 -mt-5 font-normal text-base">
                {data?.fund_name}
              </p>
              <div className="text-white text-lg mr-32 font-normal tracking-wider ">
                {isEditing ? (
                  <input
                    type="text"
                    maxLength={16}
                    value={cardNumber}
                    onChange={handleInputChange}
                    onFocus={handleFocus}
                    className="bg-transparent border-b-2 border-white focus:outline-none w-full"
                  />
                ) : (
                  <p className="flex text-white mr-3 mb-2 font-light text-base">
                    {data?.card_number || "شماره کارت موجود نیست"}
                  </p>
                )}
              </div>
              <div className="text-white mr-56">
                <p className="flex text-white font-light text-base">انقضا</p>
                <p className="flex text-white font-light text-base">
                  {new Date(data?.created_at || "شماره کارت موجود نیست").toLocaleDateString("fa-IR")}
                </p>
              </div>
            </div>
          </div>
          <div className="mt-8 mx-auto pb-3 pt-2 px-7 w-full md:w-80 h-10 border border-[#4FD1C5] cursor-pointer">
            <button
              onClick={isEditing ? handleSaveClick : handleEditClick}
              className="flex justify-between items-center dark:bg-[#4F5D74] dark:text-[#F5F5F5] bg-white w-60 whitespace-nowrap font-light"
            >
              <Image src={EditIcon} width={20} height={20} alt="edit" />
              {isEditing ? "تایید" : "آیا شماره کارت صندوق را تغییر میدهید؟"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardAdmin;
