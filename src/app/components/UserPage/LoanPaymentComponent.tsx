import React from "react";
import Dragfish from "./dragfish";
import Tablesum from "./Tablesum";
import CardUserLoan from "./CardUserLoan";
import ButtonSended from "./ButtonSended";
const LoanPaymentComponent: React.FC = () => {
  return (
    <div>
      <div className="flex gap-[79%] items-center mb-2 mt-10   ">
        <div className="mr-2 ">
          <p className="font-bold text-lg">پرداخت قسط</p>
        </div>
      </div>
      <div className="flex mt-10 gap-5">
        <div>
          <div>
            <Dragfish />
          </div>
          <div></div>
        </div>

        <div className="flex flex-col gap-5">
          <div className="">
          <Tablesum />
          </div>
          <div>
            <CardUserLoan />
          </div>
        </div>
      </div>
      <div className="mt-10">
        <ButtonSended />
      </div>
    </div>
  );
};

export default LoanPaymentComponent;
