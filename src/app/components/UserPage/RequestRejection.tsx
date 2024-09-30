import React from "react";

const rejections = [
  {
    requestNumber: "درخواست 1",
    amount: "50.000.000 تومان",
    date: "1403/03/17",
    reason: "درخواست شما به دلیل اینکه در پرداخت اشتراک ماهانه واریز های منظمی نداشتید تایید نشد",
  },
  {
    requestNumber: "درخواست 1",
    amount: "50.000.000 تومان",
    date: "1403/03/17",
    reason: "درخواست شما به دلیل قبول نکردن ضامن انتخاب شده رد شد",
  },
  {
    requestNumber: "درخواست 1",
    amount: "50.000.000 تومان",
    date: "1403/03/17",
    reason: "درخواست شما به دلیل قبول نکردن ضامن انتخاب شده رد شد",
  },
];

function RequestRejection() {
  return (
    <>
      <div className="w-[95%] bg-white rounded-md shadow-md p-10 overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b">
              <th className="p-4 whitespace-nowrap ">شماره درخواست</th>
              <th className="p-4 ">مبلغ وام</th>
              <th className="p-4 whitespace-nowrap">تاریخ درخواست</th>
              <th className="p-4 ">توضیحات</th>
            </tr>
          </thead>
          <tbody>
            {rejections.map((rejection, index) => (
              <tr key={index} className="border-b">
                <td className="p-4 ">{rejection.requestNumber}</td>
                <td className="p-4 whitespace-nowrap">{rejection.amount}</td>
                <td className="p-4 ">{rejection.date}</td>
                <td className="p-4 ">{rejection.reason}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default RequestRejection;
