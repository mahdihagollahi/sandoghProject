"use client";
import React from "react";
import AdminNavbarHeader from "@/src/app/components/AdminPage/AdminNavbarHeader";
import AdminPageNavbar from "@/src/app/components/AdminPage/AdminPageNavbar";
import SaveInformation from "@/src/app/components/AdminPage/SaveInformation";

function ManagementAccount() {
  return (
    <div className="dark:bg-[#283B4D]">
      <div className="flex bg-[#F8F9FA] ">
        <div>
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
          <SaveInformation />
        </div>
      </div>
    </div>
  );
}

export default ManagementAccount;
