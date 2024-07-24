

import React from "react";
import AdminHeader from "../components/AdminHeader";
import NumberOfMebers from "../components/NumberOfMebers";
import LoanApplication from "../components/LoanApplication";
import AdminNavbarHeader from "../components/AdminNavbarHeader";
import AdminPageNavbar from "../components/AdminPageNavbar";
import CardAdmin from "../components/CardAdmin";
import NewDepositSlip from "../components/NewDepositSlip";
import SupportMassgeDashboard from "../components/SupportMassgeDashboard";
import CharAdminDashboard from '../components/CharAdminDashboard'

function AdminFirstPage() {
  return (
    <div className="">
      <div className="w-full flex flex-col ">
        <div >
          <div>
            <AdminNavbarHeader />
          </div>
          <div>
            <AdminPageNavbar />
          </div>
        </div>

        <div className="block xl:-mt-[61%]  md:-mt-[46%]">
          <div className="flex  w-full   ">
            <AdminHeader />
          </div>

          <div className="flex flex-col mr-[30rem] mt-4 xl:ml-32 xl:flex-row xl:justify-center lg:items-center sm:items-center md:items-center gap-6  mx-4">
            <div>
            <NumberOfMebers />

            </div>
            <div>
            <LoanApplication />

            </div>
            <div className="">
            <CardAdmin/>

            </div>
          </div>
        </div>

        <div>
          <NewDepositSlip/>
        </div>

       <div>
        <SupportMassgeDashboard/>
       </div>

       <div>
        <CharAdminDashboard/>
       </div>
      </div>
    </div>
  );
}

export default AdminFirstPage;
