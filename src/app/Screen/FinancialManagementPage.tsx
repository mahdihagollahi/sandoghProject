import React from "react";
import AdminNavbarHeader from "@/src/app/components/AdminPage/AdminNavbarHeader";
import AdminPageNavbar from "@/src/app/components/AdminPage/AdminPageNavbar";
import FinancialManagement from "@/src/app/components/AdminPage/FinancialManagement";

function FinancialManagementPage() {
  return (
    <div className="dark:bg-[#283B4D]">
      <div className="flex ">
        <div className="bg-[#F8F9FA]">
          <div>
            <div>
              <AdminNavbarHeader />
            </div>
            <div className="">
              <AdminPageNavbar />
            </div>
          </div>
        </div>
        <div className="w-full bg-[#F8F9FA]">
          <FinancialManagement />
        </div>
      </div>
    </div>
  );
}

export default FinancialManagementPage;
