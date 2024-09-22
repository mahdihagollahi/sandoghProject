import React from "react";
import AdminNavbarHeader from "@/src/app/components/AdminPage/AdminNavbarHeader";
import DeleteUserComponent from "@/src/app/components/AdminPage/DeleteUserComponent";
import AdminPageNavbar from "../components/AdminPage/AdminPageNavbar";

function UserDeletePage() {
  return (
    <div>
      <div className="flex dark:bg-[#283B4D] bg-[#F8F9FA] ">
        <div >
          <div className="bg-[#F8F9FA] dark:bg-[#283B4D]">
            <div>
              <AdminNavbarHeader />
            </div>
            <div>
              <AdminPageNavbar />
            </div>
          </div>
        </div>
        <div className="bg-[#F8F9FA] dark:bg-[#283B4D]">
          <DeleteUserComponent />
        </div>
      </div>
    </div>
  );
}

export default UserDeletePage;
