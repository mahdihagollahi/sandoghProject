
import React from "react";
import AdminHeader from "../components/AdminPage/AdminHeader";
import AdminNavbarHeader from "../components/AdminPage/AdminNavbarHeader";
import UserPageNavbar from "../components/UserPage/UserPageNavbar"; 
import CardUser from "../components/UserPage/CardUser";
import ChartPament from "../components/UserPage/ChartPament";
import RequestBox from "../components/UserPage/RequestBox";
import Supportbox from "../components/AdminPage/Supportbox";

function UserFirstPage() {
  return (
    <div className="">
      <div className="w-full flex flex-col ">
        <div>
          <div>
            <AdminNavbarHeader />
          </div>
          <div>
            <UserPageNavbar />
          </div>
        </div>

        <div className="block xl:-mt-[61%]  md:-mt-[46%]">
          <div className="flex  w-full   ">
            <AdminHeader />
          </div>

          <div className="flex flex-col mr-[30rem] mt-4 xl:ml-32 xl:flex-row xl:justify-center lg:items-center sm:items-center md:items-center gap-6  mx-4">
            <div>
              <ChartPament />
            </div>
            <div className="">
              <CardUser />
            </div>
          </div>
        </div>

        <div className="flex justify-end gap-5">
          <div>
            <RequestBox />
          </div>

          <div>
            <Supportbox />
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserFirstPage;

