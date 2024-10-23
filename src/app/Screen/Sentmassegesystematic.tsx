"use client";
import React from "react";
import UserNavbarHeader from "@/app/components/UserPage/UserNavbarHeader";
import SentedMassege from "@/app/components/UserPage/sendmassege";
import UserPageNavbar from "../components/UserPage/UserPageNavbar";
import Buttommassege from "../components/UserPage/Buttommassege";

function Sentmassegesystematic() {
  return (
    <div className="dark:bg-[#283B4D]">
      <div className="flex dark:bg-[#283B4D] ">
        <div className="dark:bg-[#283B4D]">
          <div className="dark:bg-[#283B4D]">
            <div className="dark:bg-[#283B4D]">
              <UserNavbarHeader />
            </div>
            <div className="dark:bg-[#283B4D]">
              <UserPageNavbar />
            </div>
          </div>
        </div>
       
        <div className="dark:bg-[#283B4D]">
        <div className="mr-2 mt-12">
          <p className="font-bold dark:text-white text-lg">پیام ها</p>
        </div>
        <div className="my-10">
          <Buttommassege/>
        </div>
          <SentedMassege />
        </div>
      </div>
    </div>
  );
}

export default Sentmassegesystematic;
