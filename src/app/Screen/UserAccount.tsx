import React from "react";
import UserNavbarHeader from "@/app/components/UserPage/UserNavbarHeader";
import InptUser from "@/app/components/UserPage/InputUser";
import UserPageNavbar from "../components/UserPage/UserPageNavbar";

function UserAccount() {
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
          <InptUser />
        </div>
      </div>
    </div>
  );
}

export default UserAccount;
