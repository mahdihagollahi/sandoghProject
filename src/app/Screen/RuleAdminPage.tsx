import React from "react";
import AdminNavbarHeader from "../components/AdminPage/AdminNavbarHeader";
import AdminPageNavbar from "../components/AdminPage/AdminPageNavbar";
import RuleAdmin from "../components/UserPage/RuleAdmin";

function RuleAdminPage() {
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
          <RuleAdmin />
        </div>
      </div>
    </div>
  );
}

export default RuleAdminPage;
