"use client";
import React from "react";
import AdminNavbarHeader from "@/src/app/components/AdminPage/AdminNavbarHeader";
import UserPageNavbar from "../components/UserPage/UserPageNavbar";
import Tableeshterak from "../components/UserPage/Tableeshterak";

function ShowLonsUser() {
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
          <Tableeshterak />
        </div>
      </div>
    </div>
  );
}

export default ShowLonsUser;
