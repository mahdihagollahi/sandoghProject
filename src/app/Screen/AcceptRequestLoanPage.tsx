import React from "react";
import UserNavbarHeader from "@/app/components/UserPage/UserNavbarHeader";
import UserPageNavbar from "../components/UserPage/UserPageNavbar";
import AcceptRequestComponent from "../components/UserPage/AcceptRequestComponent";

function AcceptRequestLoanPage() {
  return (
    <div>
      <div className="flex dark:bg-[#283B4D] ">
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
          <AcceptRequestComponent />
        </div>
      </div>
    </div>
  );
}

export default AcceptRequestLoanPage;
