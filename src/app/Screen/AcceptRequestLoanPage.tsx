import React from "react";
import AdminNavbarHeader from "@/src/app/components/AdminPage/AdminNavbarHeader";
import UserPageNavbar from "../components/UserPage/UserPageNavbar";
import AcceptRequestComponent from "../components/UserPage/AcceptRequestComponent";

function AcceptRequestLoanPage() {
  return (
    <div>
      <div className="flex dark:bg-[#283B4D] ">
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
          <AcceptRequestComponent />
        </div>
      </div>
    </div>
  );
}

export default AcceptRequestLoanPage;
