"use client";
import React from "react";

function Tablesum() {
  const list = [
    { id: 1, name: "قسط 1", payment: "500,000", date: "1402/11/12" },
    { id: 2, name: "قسط 2", payment: "500,000", date: "1402/01/22" },
    { id: 3, name: "قسط 3", payment: "500,000", date: "1402/07/23" },
    { id: 4, name: "قسط 4", payment: "500,000", date: "1402/12/10" },
    { id: 5, name: "قسط 5", payment: "500,000", date: "1402/02/12" },
    { id: 6, name: "قسط 6", payment: "500,000", date: "1402/03/30" },
  ];
  const sum = [{ id: 1, sum: "3,000,000" }];

  return (
    <>
      <div className="w-[100%] p-6 shadow-md rounded-md">
        <div>
          <span className="font-bold">صورت حساب پرداخت شما</span>
        </div>
        <div className="flex flex-row justify-between w-[500px] mt-10 mr-3">
          <div>
            <span className="font-bold">شماره</span>
            {list.map((item, index) => (
              <div key={index}>
                <div className="mt-3">
                  <span>{item.name}</span>
                </div>
              </div>
            ))}
          </div>
          <div>
            <span className="font-bold mr-2">مبلغ</span>
            {list.map((item, index) => (
              <div key={index}>
                <div className="mt-3">
                  <span>{item.payment}</span>
                </div>
              </div>
            ))}
          </div>
          <div>
            <span className="font-bold mr-5">تاریخ</span>
            {list.map((item, index) => (
              <div key={index}>
                <div className="mt-3">
                  <span>{item.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-row justify-between mt-5">
          <span className="font-bold">مجموع مبلغ واریزی : </span>
          {sum.map((task) => (
            <div key={task}>{task.sum}میلیون تومان</div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Tablesum;
