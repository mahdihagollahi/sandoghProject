import React from "react";
import UserNavbarHeader from "@/app/components/UserPage/UserNavbarHeader";
import UserPageNavbar from "../components/UserPage/UserPageNavbar";
import LoanPaymentComponent from "../components/UserPage/LoanPaymentComponent";

function LoanPayment() {
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
        <div className="w-full ">
          <LoanPaymentComponent />
        </div>
      </div>
    </div>
  );
}

export default LoanPayment;
