import React from "react";
import AdminNavbarHeader from "@/src/app/components/AdminPage/AdminNavbarHeader";
import AdminPageNavbar from "@/src/app/components/AdminPage/AdminPageNavbar";
import FinancialManagement from "@/src/app/components/AdminPage/FinancialManagement";

function FinancialManagementPage() {
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
        <div>
          <FinancialManagement />
        </div>
      </div>
    </div>
  );
}

export default FinancialManagementPage;
