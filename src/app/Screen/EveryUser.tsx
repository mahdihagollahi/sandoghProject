"use client";
import React from "react";
import AdminNavbarHeader from "@/src/app/components/AdminPage/AdminNavbarHeader";
import AdminPageNavbar from "@/src/app/components/AdminPage/AdminPageNavbar";
import EveryUserComponent from "@/src/app/components/AdminPage/EveryUserComponent";

function EveryUser() {
  return (
    <div className="dark:bg-[#283B4D] h-full ">
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
        <div className="w-[100%] bg-[#F8F9FA]  ">
          <EveryUserComponent />
        </div>
      </div>
    </div>
  );
}

export default EveryUser;
