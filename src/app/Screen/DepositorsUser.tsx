import React from "react";
import AdminNavbarHeader from "@/src/app/components/AdminPage/AdminNavbarHeader";
import AdminPageNavbar from "@/src/app/components/AdminPage/AdminPageNavbar";
import DepositorsUserFinancial from "@/src/app/components/AdminPage/DepositorsUserFinancial";

function DepositorsUser() {
  return (
    <div>
      <div className="flex dark:bg-[#283B4D] ">
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
        <div className="w-full bg-[#F8F9FA] dark:bg-[#283B4D]">
          <DepositorsUserFinancial />
        </div>
      </div>
    </div>
  );
}

export default DepositorsUser;
