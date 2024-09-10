import React from "react";
import AdminNavbarHeader from "@/src/app/components/AdminPage/AdminNavbarHeader";
import AdminPageNavbar from "@/src/app/components/AdminPage/AdminPageNavbar";
import SupportMessage from "../components/AdminPage/SupportMessage";

function Support() {
  return (
    <div className="dark:bg-[#283B4D] ">
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
        <div>
          <SupportMessage />
        </div>
      </div>
    </div>
  );
}

export default Support;
