import React from "react";
import AdminHeader from "../components/AdminPage/AdminHeader";
import NumberOfMebers from "../components/AdminPage/NumberOfMebers";
import LoanApplication from "../components/AdminPage/LoanApplication";
import AdminNavbarHeader from "../components/AdminPage/AdminNavbarHeader";
import AdminPageNavbar from "../components/AdminPage/AdminPageNavbar";
import CardAdmin from "../components/AdminPage/CardAdmin";
import NewDepositSlip from "../components/AdminPage/NewDepositSlip";
import SupportMassgeDashboard from "../components/AdminPage/SupportMassgeDashboard";
import ChartAdminDashboard from "../components/AdminPage/ChartAdminDashboard";

function AdminFristPage() {
  return (
    <div className="overflow-y-hidden dark:bg-[#283B4D] bg-[#F8F9FA]  pb-[2%] font-custom">
      <div className="flex ml-40">
        <div>
          <div>
            <AdminNavbarHeader />
          </div>
          <AdminPageNavbar />
        </div>
        <div>
          <div className="">
            <AdminHeader />
          </div>
          <div className="flex xl: mt-4 xl:mr-14">
            <div>
              <NumberOfMebers />
            </div>
            <div>
              <LoanApplication />
            </div>
            <div>
              <CardAdmin />
            </div>
          </div>
          <div>
            <NewDepositSlip />
          </div>
        </div>
      </div>
      <div className="flex gap-1">
        <div className="-mt-[34.8%] mr-[28.4%]">
          <ChartAdminDashboard />
        </div>
        <div className="-mt-[36.5%] -mr-[5%] ">
          <SupportMassgeDashboard />
        </div>
      </div>
    </div>
  );
}

export default AdminFristPage;
