import React from "react";
import AdminNavbarHeader from "@/src/app/components/AdminPage/AdminNavbarHeader";
import AdminPageNavbar from "@/src/app/components/AdminPage/AdminPageNavbar";
import DepositReceiptComponent from "../components/AdminPage/DepositReceiptComponent";
function DepositReceiptPage() {
  return (
    <div>
      <div className="flex ">
        <div className="bg-[#F8F9FA]">
          <div>
            <div>
              <AdminNavbarHeader />
            </div>
            <div>
              <AdminPageNavbar />
            </div>
          </div>
        </div>
        <div className="bg-[#F8F9FA]">
          <DepositReceiptComponent />
        </div>
      </div>
    </div>
  );
}

export default DepositReceiptPage;
