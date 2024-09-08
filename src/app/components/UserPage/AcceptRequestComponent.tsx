import React from "react";
import BoxCondition from "./Boxcondition";
import AcceptRequest from "./AcceptRequst";
function AcceptRequestComponent() {
  return (
    <div>
      <div className="flex gap-[77%] bg  items-center mb-2 mt-10   ">
        <div className="mr-2 ">
          <p className="font-bold text-lg">درخواست وام</p>
        </div>
      </div>

      <div className="mt-10">
        <BoxCondition />
      </div>
      <div className="mt-10">
        <AcceptRequest />
      </div>
    </div>
  );
}

export default AcceptRequestComponent;
