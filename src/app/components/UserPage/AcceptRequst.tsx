

import React from "react";

const acceptedRequests = [
  {
    requestNumber: "درخواست 1",
    amount: "50.000.000 تومان",
    date: "1403/03/17",
    managerComment: "با درخواست شما موفقت گردید و در نوبت وام قرار گرفتید و در تاریخ ",
    paymentDate: "1403/04/10",
    additionalComment: "به شماره حساب ثبت شده شما واریز میگردد و اقساط ماهانه تا یک سال به مبلغ 2000 واریز کنید."
  },
  {
    requestNumber: "درخواست 5",
    amount: "120.000.000 تومان",
    date: "1403/10/27",
    managerComment: "با درخواست شما موفقت گردید و در نوبت وام قرار گرفتید و در تاریخ ",
    paymentDate: "1401/09/10",
    additionalComment: "به شماره حساب ثبت شده شما واریز میگردد و اقساط ماهانه تا یک سال به مبلغ 2000 واریز کنید."
  },
  {
    requestNumber: "درخواست 8",
    amount: "90.000.000 تومان",
    date: "1403/11/20",
    managerComment: "با درخواست شما موفقت گردید و در نوبت وام قرار گرفتید و در تاریخ ",
    paymentDate: "1402/09/30",
    additionalComment: "به شماره حساب ثبت شده شما واریز میگردد و اقساط ماهانه تا یک سال به مبلغ 2000 واریز کنید."
  },
];

function AcceptRequest() {
  return (
    <>
      <div className="w-[95%] bg-white rounded-md shadow-md p-10 overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b">
              <th className="p-4 whitespace-nowrap">شماره درخواست</th>
              <th className="p-4 ">مبلغ وام</th>
              <th className="p-4 whitespace-nowrap">تاریخ درخواست</th>
              <th className="p-4 ">توضیحات مدیر صندوق</th>
            </tr>
          </thead>
          <tbody>
            {acceptedRequests.map((request, index) => (
              <tr key={index} className="border-b">
                <td className="p-4 ">{request.requestNumber}</td>
                <td className="p-4 whitespace-nowrap">{request.amount}</td>
                <td className="p-4 ">{request.date}</td>
                <td className="p-4 ">
                  {request.managerComment}
                  <span className="text-[#F83030]">{request.paymentDate}</span>
                  {request.additionalComment}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default AcceptRequest;

