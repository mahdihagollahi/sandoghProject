import React from "react";
import BoxCondition from "./Boxcondition";
import InputVam from "@/app/components/UserPage/Inputvam";
import ButtonSended from "./ButtonSended";
import Filter from "./Filter";
function RequestLoanAplicationComponent() {
  return (
    <div>
      <div className="flex justify-between items-center mb-2 mt-12   ">
        <div className="mr-2 ">
          <p className="font-bold text-lg">درخواست وام</p>
        </div>
      </div>

      <div>
        <Filter />
      </div>

      <div className="mt-10">
        <BoxCondition />
      </div>
      <div className="mt-10">
        <InputVam />
      </div>
      <div className="mt-10">
        <ButtonSended />
      </div>
    </div>
  );
}

export default RequestLoanAplicationComponent;
