import React from "react";
import AdminNavbarHeader from "@/app/components/AdminPage/AdminNavbarHeader";
import InptUser from "@/app/components/UserPage/InputUser";
import UserPageNavbar from "../components/UserPage/UserPageNavbar";

function UserAccount() {
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
          <InptUser />
        </div>
      </div>
    </div>
  );
}

export default UserAccount;
