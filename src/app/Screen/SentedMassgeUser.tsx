"use client";
import React from "react";
import AdminNavbarHeader from "@/app/components/AdminPage/AdminNavbarHeader";
import SentedMassege from "@/app/components/UserPage/sendmassege";
import UserPageNavbar from "../components/UserPage/UserPageNavbar";

function ManagementAccount() {
  return (
    <div className="dark:bg-[#283B4D]">
      <div className="flex dark:bg-[#283B4D] ">
        <div className="dark:bg-[#283B4D]">
          <div className="dark:bg-[#283B4D]">
            <div className="dark:bg-[#283B4D]">
              <AdminNavbarHeader />
            </div>
            <div className="dark:bg-[#283B4D]">
              <UserPageNavbar />
            </div>
          </div>
        </div>
        <div className="dark:bg-[#283B4D]">
          <SentedMassege />
        </div>
      </div>
    </div>
  );
}

export default ManagementAccount;
