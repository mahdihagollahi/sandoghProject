import React from "react";
import AdminNavbarHeader from "@/app/components/AdminPage/AdminNavbarHeader";
import AdminPageNavbar from "@/app/components/AdminPage/AdminPageNavbar";
import CheckedRequestLoan from "../components/AdminPage/CheckedRequestLoan";

function CheckedLoanApplicationPage() {
  return (
    <div>
      <div className="flex dark:bg-[#283B4D]">
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
          <CheckedRequestLoan />
        </div>
      </div>
    </div>
  );
}

export default CheckedLoanApplicationPage;
