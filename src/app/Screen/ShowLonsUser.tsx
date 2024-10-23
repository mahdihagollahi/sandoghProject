"use client";
import React from "react";
import UserNavbarHeader from "@/app/components/UserPage/UserNavbarHeader";
import UserPageNavbar from "../components/UserPage/UserPageNavbar";
import Tableeshterak from "../components/UserPage/Tableeshterak";

function ShowLonsUser() {
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
          <Tableeshterak />
        </div>
      </div>
    </div>
  );
}

export default ShowLonsUser;
