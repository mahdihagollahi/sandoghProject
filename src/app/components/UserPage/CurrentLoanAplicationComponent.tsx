import React from "react";
import BoxCondition from "./Boxcondition";

import Jaryan from "./LoanInProgress";
function CurrentLoanAplicationComponent() {
  return (
    <div>
      <div className="flex gap-[77%] items-center mb-2 mt-10  ">
        <div className="mr-2 ">
          <p className="font-bold text-lg">درخواست وام</p>
        </div>
      </div>
      <div className="mt-10">
        <BoxCondition />
      </div>
      <div>
        <Jaryan />
      </div>
    </div>
  );
}

export default CurrentLoanAplicationComponent;
