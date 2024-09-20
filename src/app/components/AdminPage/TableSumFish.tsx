"use client";
import React from "react";

function TableSumFish() {
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
    <div className="">
      <div className="w-[120%] py-7 shadow-md rounded-md bg-white dark:bg-[#4F5D74] dark:text-white">
        <div>
          <span className="font-bold mr-12">صورت حساب پرداخت شما</span>
        </div>
        <div className="flex flex-row justify-between mr-5 w-[500px] mt-10 ">
          <div>
            <span className="font-bold dark:text-white">شماره</span>
            {list.map((item, index) => (
              <div key={index}>
                <div className="mt-3">
                  <span>{item.name}</span>
                </div>
              </div>
            ))}
          </div>
          <div>
            <span className="font-bold mr-1 dark:text-white">مبلغ</span>
            {list.map((item, index) => (
              <div key={index} className="bg-white dark:bg-[#4F5D74]">
                <div className="mt-3">
                  <span>{item.payment}</span>
                </div>
              </div>
            ))}
          </div>
          <div>
            <span className="font-bold mr-1">تاریخ</span>
            {list.map((item, index) => (
              <div key={index}>
                <div className="mt-3">
                  <span>{item.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-row gap-28 mt-5">
          <span className="font-bold mr-10">مجموع مبلغ واریزی : </span>
          {sum.map((task) => (
            <div key={task} className="flex items-center gap-1" >
              <p className="text-[#4FD1C5]">
              {task.sum}
              </p>
              <p>
                میلیون تومان
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TableSumFish;
