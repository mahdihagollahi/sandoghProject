"use client";
import React from "react";
import AdminNavbarHeader from "@/app/components/AdminPage/AdminNavbarHeader";
import UserPageNavbar from "../components/UserPage/UserPageNavbar";
import RequestRejectionLoanComponent from "../components/UserPage/RequestRejectionLoanComponent";

function RequestRejectionLoanPage() {
  return (
    <div>
      <div className="flex ">
        <div>
          <div>
            <div>
              <AdminNavbarHeader />
            </div>
            <div>
              <UserPageNavbar />
            </div>
          </div>
        </div>
        <div>
          <RequestRejectionLoanComponent />
        </div>
      </div>
    </div>
  );
}

export default RequestRejectionLoanPage;
