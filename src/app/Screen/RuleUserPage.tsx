import React from "react";
import UserNavbarHeader from "@/app/components/UserPage/UserNavbarHeader";
import UserPageNavbar from "../components/UserPage/UserPageNavbar";
import RulesUser from "../components/UserPage/RulesUser";

function RuleUserPage() {
  return (
    <div>
      <div className="flex ">
        <div>
          <div>
            <div>
              <UserNavbarHeader />
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
