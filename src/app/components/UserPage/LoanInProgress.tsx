
import React from "react";

const loans = [
  {
    requestNumber: "درخواست 1",
    amount: "50.000.000 تومان",
    date: "1403/03/17",
    description: "برای خرج عروسی و مراسم ازدواج نیاز دارم و حتما باید چک های تالارو پاس کنم بد گیرم اقای قنبری اگه میشه تایید کنید",
    grade: "معمولی",
    guarantors: ["رحمان مقدم", "موسی مقدم"]
  },
];

function LoanInProgress() {
  return (
    <>
      <div className="w-[95%] bg-white mt-7 rounded-md shadow-md p-10">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b">
                <th className="p-4  font-bold whitespace-nowrap ">شماره درخواست</th>
                <th className="p-4 ">مبلغ وام</th>
                <th className="p-4 whitespace-nowrap">تاریخ درخواست</th>
                <th className="p-4 ">توضیحات</th>
              </tr>
            </thead>
            <tbody>
              {loans.map((loan, index) => (
                <tr key={index} className="border-b">
                  <td className="p-4 py-10 ">{loan.requestNumber}</td>
                  <td className="p-4 whitespace-nowrap py-10 ">{loan.amount}</td>
                  <td className="p-4 py-10 ">{loan.date}</td>
                  <td className="p-4 py-10 ">{loan.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {loans.map((loan, index) => (
          <div key={index} className="flex flex-col gap-4 ml-[61%]  mt-10">
            <div className="flex flex-row gap-3 ml-52 justify-end">
              <span>درجه وام:</span>
              <div className="flex flex-row gap-2 items-center">
                <span>{loan.grade}</span>
                <input
                  type="radio"
                  name={`radio-${index}`}
                  className="radio radio-success"
                  checked="checked"
                  readOnly
                />
              </div>
            </div>
            <div className="flex flex-row gap-6 justify-end  mt-2">
              <span className="whitespace-nowrap flex items-center mr-20">ضامن درخواستی:</span>
              <div className="flex flex-row gap-4 -mt-1">
                {loan.guarantors.map((guarantor, gIndex) => (
                  <button
                    key={gIndex}
                    className="border-[#4FD1C5] border-2 whitespace-nowrap rounded-md px-4 py-3"
                  >
                    {guarantor}
                  </button>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default LoanInProgress;



