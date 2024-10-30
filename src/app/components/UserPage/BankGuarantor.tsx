// "use client"
// import React from "react";


// function BankGuarantor() {
//   const list = [{  id: 1,name: "الهه علی نیا", date: "1403/09/23" }];

//   return (
//     <>
//       <div>
//       {list.map((item , index) => (
//         <div key={index} className="w-[95%]  shadow-md rounded-md p-6">
//           <div className="flex flex-row justify-between mb-4">
//             <p className=" text-[#394860] font-bold">
//               درخواست ضامن از سمت <span>{item.name}</span>
//             </p>
//             <p className=" font-normal">{item.date}</p>
//           </div>
//           <div className="text-[#5B5B5B] font-normal  mb-3">
//             <p>
//               طبق قوانین صندوق در صورتی که شما ضامن کسی باشید و وی نتواند اقساط
//               خود را پرداخت کند شما موظف به پرداخت اقساط وی هستنید بنابراین آیا
//               تایید میکنید که ضامن ایشان باشید ؟
//             </p>
//           </div>
//           <div style={{direction:"ltr"}} className="flex flex-row gap-2">
//             <div>
//               <button className="px-4 py-2 bg-[#4FD1C5] font-light text-white rounded-md">
//                 تایید میکنم
//               </button>
//             </div>
//             <div>
//               <button className="px-6 py-2 bg-[#B3261E] text-white font-light rounded-md ">
//                 رد میکنم
//               </button>
//             </div>
//           </div>
//         </div>
//       ))}
      
//       </div>
//     </>
//   );
// }

    
  

// export default BankGuarantor;



"use client";
import React, { useEffect, useState } from "react";

function BankGuarantor() {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const authToken = "YOUR_AUTH_TOKEN";

    fetch("https://fundcharitynet.com/api/loans/requestCnt", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${authToken}`, 
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("خطا در دریافت اطلاعات");
        }
        return response.json();
      })
      .then((data) => {
        setList(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>در حال بارگذاری...</p>;
  }

  if (error) {
    return <p>خطا: {error}</p>;
  }

  return (
    <>
      <div>
        {list.map((item, index) => (
          <div key={index} className="w-[95%]  shadow-md rounded-md p-6">
            <div className="flex flex-row justify-between mb-4">
              <p className=" text-[#394860] font-bold">
                درخواست ضامن از سمت <span>{item.name}</span>
              </p>
              <p className=" font-normal">{item.date}</p>
            </div>
            <div className="text-[#5B5B5B] font-normal  mb-3">
              <p>
                طبق قوانین صندوق در صورتی که شما ضامن کسی باشید و وی نتواند اقساط
                خود را پرداخت کند شما موظف به پرداخت اقساط وی هستنید بنابراین آیا
                تایید میکنید که ضامن ایشان باشید ؟
              </p>
            </div>
            <div style={{ direction: "ltr" }} className="flex flex-row gap-2">
              <div>
                <button className="px-4 py-2 bg-[#4FD1C5] font-light text-white rounded-md">
                  تایید میکنم
                </button>
              </div>
              <div>
                <button className="px-6 py-2 bg-[#B3261E] text-white font-light rounded-md ">
                  رد میکنم
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default BankGuarantor;