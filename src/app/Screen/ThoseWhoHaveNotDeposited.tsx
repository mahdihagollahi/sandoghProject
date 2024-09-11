import React from "react";
import AdminNavbarHeader from "@/src/app/components/AdminPage/AdminNavbarHeader";
import AdminPageNavbar from "@/src/app/components/AdminPage/AdminPageNavbar";
import NotDepositorsUserFinancial from "@/src/app/components/AdminPage/NotDepositorsUserFinancial";

function ThoseWhoHaveNotDeposited() {
  return (
    <div>
      <div className="flex dark:bg-[#283B4D] ">
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
        <div className="w-full bg-[#F8F9FA]">
          <NotDepositorsUserFinancial />
        </div>
      </div>
    </div>
  );
}

export default ThoseWhoHaveNotDeposited;
