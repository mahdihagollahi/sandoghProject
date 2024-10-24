import React from "react";
import AdminNavbarHeader from "@/app/components/AdminPage/AdminNavbarHeader";
import AdminPageNavbar from "@/app/components/AdminPage/AdminPageNavbar";
import InputPassword from "../components/AdminPage/InputPassword";
import SetUserPassword from "../components/AdminPage/SetedPassword";

function SetUserPasswordPage() {
  return (
    <div className="dark:bg-[#283B4D]">
      <div className="flex ">
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
        <div className="bg-[#F8F9FA] dark:bg-[#283B4D] ">
          <InputPassword />
          <SetUserPassword />
        </div>
      </div>
    </div>
  );
}

export default SetUserPasswordPage;
