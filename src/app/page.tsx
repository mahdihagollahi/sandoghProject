"use client";
import React from "react";
import Landing from "./components/UserPage/landing";

import Inputvam from "./components/UserPage/InputVam";

function page() {
  return (
    <>
      {/* <div className="flex flex-col justify-center items-center ">
        <h4>خروج</h4>
        <p>آیا ازخروج خود اطمینان دارید؟</p>
        <div>
          <button>خروج</button>
          <button>بازگشت</button>
        </div>
      </div> */}
      <Landing/>
   <Inputvam/>
    </>
  );
}

export default page;
