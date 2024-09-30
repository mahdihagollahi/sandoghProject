import React from "react";
import AdminNavbarHeader from "@/app/components/AdminPage/AdminNavbarHeader";
import AdminPageNavbar from "@/app/components/AdminPage/AdminPageNavbar";
import DetailUser from "@/app/components/AdminPage/DetailUserComponnent";

function DetailUserPage() {
  return (
    <div className="flex dark:bg-[#283B4D] bg-[#F8F9FA] ">
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
      <div className="flex justify-center bg-[#F8F9FA] dark:bg-[#283B4D]">
        <DetailUser />
      </div>
    </div>
  );
}

export default DetailUserPage;
