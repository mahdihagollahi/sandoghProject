"use client";
import React from "react";
import AdminNavbarHeader from "@/src/app/components/AdminPage/AdminNavbarHeader";
import AdminPageNavbar from "@/src/app/components/AdminPage/AdminPageNavbar";
import SentedMassege from "../components/UserPage/SendMassege";

function ManagementAccount() {
  return (
    <div>
      <div className="flex dark:bg-[#283B4D]">
        <div className="bg-[#F8F9FA]">
          <div>
            <div>
              <AdminNavbarHeader />
            </div>
            <div>
              <AdminPageNavbar />
            </div>
          </div>
        </div>
        <div className="bg-[#F8F9FA]">
          <SentedMassege />
        </div>
      </div>
    </div>
  );
}

export default ManagementAccount;
