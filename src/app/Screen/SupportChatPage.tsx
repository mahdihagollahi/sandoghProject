import React from "react";
import AdminNavbarHeader from "@/src/app/components/AdminPage/AdminNavbarHeader";
import AdminPageNavbar from "@/src/app/components/AdminPage/AdminPageNavbar";
import SupportChatComponent from "../components/AdminPage/SupportChatComponent";

function SupportChatPage() {
  return (
    <div>
      <div className="flex dark:bg-[#283B4D]">
        <div className="bg-[#F8F9FA] dark:bg-[#283B4D]">
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
          <SupportChatComponent />
        </div>
      </div>
    </div>
  );
}

export default SupportChatPage;
