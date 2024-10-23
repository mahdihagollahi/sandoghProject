// import React from "react";
// const ManagerManoy = () => {
//   const loans = [
//     {
//       name: "قسط 1",
//       money: "100تومان",
//       data: "1403/12/05",
//       status: "در حال انتظار",
//     },
//   ];
//   return (
//     <>
//       <div className="w-[593px] h-[350px] bg-white  p-7 shadow-md flex flex-col gap-6  ">
//         <div className="flex flex-row justify-between ">
//           <p>مدیریت مالی</p>
//           <div className="text-[#4FD1C5]">
//             <span>موجودی:</span>
//             <span>100.000.000</span>
//           </div>
//         </div>
//         <div>
//           <table className="shadow p-4">
//             <thead>
//               <tr className="flex flex-row w-[515px]  gap-14 justify-center items-center mr-10 border-black border-b-2 border-solid">
//                 <th>عنوان</th>
//                 <th>مبلغ بدهی</th>
//                 <th>تاریخ سر رسید </th>
//                 <th>وضعیت</th>
//               </tr>
//             </thead>
//             <tbody>
//               {loans.map((item) => (
//                 <tr className="flex flex-row text-[#4FD1C5] mt-3 gap-12 justify-center items-center mr-10 ">
//                   <th>{item.name}</th>
//                   <th>{item.money}</th>
//                   <th>{item.data}</th>
//                   <th>{item.status}</th>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//         <div>
//           <button className="text-[#4FD1C5] border-[#4FD1C5] rounded-[6px] mr-28  border-solid border-2  px-16 py-1">
//             مشاهده بیشتر
//           </button>
//         </div>
//       </div>
//     </>
//   );
// };
// export default ManagerManoy;


import React, { useState, useEffect } from "react";
import axios from "axios";

const ManagerManoy = () => {
  const [loans, setLoans] = useState([]); 
  const [balance, setBalance] = useState(0); 

  
  const fetchLoans = async () => {
    try {
      const token = 'your-auth-token'; 
      const response = await axios.get('https://mohammadelia30.ir/shabab/api/installments/last', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      
      setLoans(response.data.loans);
      setBalance(response.data.balance);
    } catch (error) {
      console.error("خطا در دریافت اطلاعات:", error);
    }
  };

  useEffect(() => {
    fetchLoans();
  }, []);

  return (
    <>
      <div className="w-[593px] h-[350px] bg-white p-7 shadow-md flex flex-col gap-6">
        <div className="flex flex-row justify-between ">
          <p>مدیریت مالی</p>
          <div className="text-[#4FD1C5]">
            <span>موجودی:</span>
            <span>{balance.toLocaleString()} تومان</span> 
          </div>
        </div>
        <div>
          <table className="shadow p-4">
            <thead>
              <tr className="flex flex-row w-[515px] gap-14 justify-center items-center mr-10 border-black border-b-2 border-solid">
                <th>عنوان</th>
                <th>مبلغ بدهی</th>
                <th>تاریخ سر رسید</th>
                <th>وضعیت</th>
              </tr>
            </thead>
            <tbody>
              {loans.map((item, index) => (
                <tr key={index} className="flex flex-row text-[#4FD1C5] mt-3 gap-12 justify-center items-center mr-10">
                  <td>{item.name}</td>
                  <td>{item.money}</td>
                  <td>{item.data}</td>
                  <td>{item.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div>
          <button className="text-[#4FD1C5] border-[#4FD1C5] rounded-[6px] mr-28 border-solid border-2 px-16 py-1">
            مشاهده بیشتر
          </button>
        </div>
      </div>
    </>
  );
};

export default ManagerManoy;