import React from "react";
import AdminNavbarHeader from "@/src/app/components/AdminPage/AdminNavbarHeader";
import UserPageNavbar from "../components/UserPage/UserPageNavbar";
import RulesUser from "../components/UserPage/RulesUser";

function RuleUserPage() {
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
          <RulesUser />
        </div>
      </div>
    </div>
  );
}

export default RuleUserPage;
