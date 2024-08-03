

import React from "react";
import AdminHeader from "../components/AdminPage/AdminHeader";
import NumberOfMebers from "../components/AdminPage/LoanApplication";
import LoanApplication from "../components/AdminPage/LoanApplication";
import AdminNavbarHeader from "../components/AdminPage/AdminNavbarHeader";
import AdminPageNavbar from "../components/AdminPage/AdminPageNavbar";
import CardAdmin from "../components/AdminPage/CardAdmin";
import NewDepositSlip from "../components/AdminPage/NewDepositSlip";
import SupportMassgeDashboard from "../components/AdminPage/SupportMassgeDashboard";
import ChartAdminDashboard from '../components/AdminPage/ChartAdminDashboard'

function AdminFirstPage() {
  return (
    <div className="overflow-y-hidden bg-[#F8F9FA] font-custom">
      <div className=" flex flex-col ">
        <div >
          <div>
            <AdminNavbarHeader />
          </div>
          <div>
            <AdminPageNavbar />
          </div>
        </div>

        <div className="block xl:-mt-[68%]  md:-mt-[46%]">
          <div className="flex  w-full   ">
            <AdminHeader />
          </div>

          <div className="flex flex-col mr-[30rem]  xl:ml-32 xl:flex-row xl:justify-center lg:items-center sm:items-center md:items-center gap-6  mx-4">
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
        <ChartAdminDashboard/>
       </div>
      </div>
    </div>
  );
}

export default AdminFirstPage;
