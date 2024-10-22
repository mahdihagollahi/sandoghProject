import React from "react";


export default function Filter() {
  return (
    <>
      <div className="flex flex-row  ">
       
        <div className="flex flex-row gap-4 items-center mt-4">
          <div className="mt-1 flex items-center gap-2">
            <div>
            <span>معمولی</span>

            </div>
            <div className="mt-2">

            
            <input
              type="radio"
              name="radio-5"
              className="radio  "
            />
            </div>
          </div>
          <div className="mt-1 flex items-center gap-2">
            <div>
            <span>ضروری</span>

            </div>
            <div className="mt-2">

            
            <input
              type="radio"
              name="radio-5"
              className="radio  "
            />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
