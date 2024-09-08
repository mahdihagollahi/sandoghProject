import React from "react";
import AdminNavbarHeader from "@/src/app/components/AdminPage/AdminNavbarHeader";
import AdminPageNavbar from "@/src/app/components/AdminPage/AdminPageNavbar";
import EveryRequestLoan from "../components/AdminPage/EveryRequestLoan";

function EveryLoanApplicationPage() {
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
          <EveryRequestLoan />
        </div>
      </div>
    </div>
  );
}

export default EveryLoanApplicationPage;
