import React from "react";
import AdminNavbarHeader from "@/app/components/AdminPage/AdminNavbarHeader";
import AdminPageNavbar from "@/app/components/AdminPage/AdminPageNavbar";
import SupportMessage from "../components/AdminPage/SupportMessage";

function Support() {
  return (
    <div className="dark:bg-[#283B4D] ">
      <div className="flex bg-[#F8F9FA] dark:bg-[#283B4D]">
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
        <div className="bg-[#F8F9FA] dark:bg-[#283B4D]">
          <SupportMessage />
        </div>
      </div>
    </div>
  );
}

export default Support;
