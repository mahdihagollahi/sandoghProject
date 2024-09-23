// "use client";
// import React from "react";
// import Image from "next/image";
// import tik from "@/src/app/assent/Img/userPanel/tik.svg";
// function Tablevam() {
//   const listghest = [
//     {
//       id: 1,
//       text: "وام 6/قسط2",
//       pyment: "500,000تومان",
//       data: "1403/05/10",
//       img: "",
//       Condition: "پرداخت شده",
//       massge: "بدون توضیح",
//     },
//     {
//       id: 2,
//       text: "وام3/قسط2",
//       pyment: "500,000تومان",
//       data: "1403/12/30",
//       img: "",
//       Condition: "پرداخت شده",
//       massge: "بدون توضیح",
//     },
//     {
//       id: 3,
//       text: " وام 6/قسط2",
//       pyment: "500,000تومان",
//       data: "1403/02/09",
//       img: "",
//       Condition: "پرداخت شده",
//       massge: "بدون توضیح",
//     },
//     {
//       id: 4,
//       text: " وام 6/قسط2",
//       pyment: "500,000تومان",
//       data: "1403/10/11",
//       img: "",
//       Condition: "پرداخت شده",
//       massge: "بدون توضیح",
//     },
//     {
//       id: 5,
//       text: " وام 6/قسط2",
//       pyment: "500,000تومان",
//       data: "1403/04/06",
//       img: "",
//       Condition: "پرداخت شده",
//       massge: "بدون توضیح",
//     },
//     {
//       id: 6,
//       text: " وام 6/قسط2",
//       pyment: "500,000تومان",
//       data: "1403/11/07",
//       img: "",
//       Condition: "پرداخت شده",
//       massge: "بدون توضیح",
//     },
//     {
//       id: 7,
//       text: "وام 6/قسط2",
//       pyment: "500,000تومان",
//       data: "1403/12/18",
//       img: "",
//       Condition: "پرداخت شده",
//       massge: "بدون توضیح",
//     },
//     {
//       id: 8,
//       text: "وام 6/قسط2",
//       pyment: "500,000تومان",
//       data: "1403/09/30",
//       img: "",
//       Condition: "پرداخت شده",
//       massge: "بدون توضیح",
//     },

//   ];
//   return (
//     <>
//       <table className="w-[70%] p-10 shadow-md rounded-md" >
//         <tr className="border-b-2 mr-24 py-10 flex flex-row justify-around gap-20">
//           <th>شماره قسط</th>
//           <th>مبلغ واریز</th>
//           <th>تاریخ سر رسید</th>
//           <th>وضعیت</th>
//           <th>تایید مدیر</th>
//           <th className="w-[200px] -mr-16" >پیام مدیر</th>
//         </tr>

//         {listghest.map((item) => (
//           <div>
//             <tr className="flex flex-row py-5  mr-2 justify-around gap-20">
//               <td><input type="checkbox"/></td>
//               <td>{item.text}</td>
//               <td>{item.pyment}</td>
//               <td>{item.data}</td>
//               <td>{item.Condition}</td>
//               <td className="W-[20px] h-[20px]">
//                 <Image src={tik} alt="" />
//               </td>
//               <td className="w-[200px]" >{item.massge}</td>
//             </tr>
//           </div>
//         ))}
//       </table>
//     </>
//   );
// }

// export default Tablevam;
"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import tik from "@/src/app/assent/Img/userPanel/tik.svg";

function Tablevam() {
  const [listghest, setListghest] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  
  useEffect(() => {
    const fetchInstallments = async () => {
      const authToken = localStorage.getItem('authToken'); 

      if (!authToken) {
        setError('Token not found!');
        setLoading(false);
        return;
      }

      try {
        const response = await fetch("https://mohammadelia30.ir/shabab/api/installments/show", {
          headers: {
            Authorization: `Bearer ${authToken}`, // Add token to the headers
          },
        });

        if (!response.ok) {
          throw new Error('Failed to fetch installments');
        }

        const data = await response.json();
        const installments = data.installments.data.map(item => ({
          id: item.id,
          text: `وام ${item.type}/${item.count}`, // Use type and count for the description
          pyment: `${item.price.toLocaleString()} تومان`, // Convert price to a string with commas
          data: item.due_date, // Use due_date from API
          Condition: item.status === 'paid' ? 'پرداخت شده' : 'پرداخت نشده', // Translate status
          massge: item.admin_description || 'بدون توضیح', // Use admin_description or fallback
        }));

        setListghest(installments); // Update the state with API data
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchInstallments();
  }, []);

  if (loading) {
    return <p>در حال بارگذاری...</p>;
  }

  if (error) {
    return <p>خطا: {error}</p>;
  }

  return (
    <>
      <table className="w-[70%] p-10 shadow-md rounded-md">
        {/* <thead>
          <tr className="border-b-2 mr-24 py-10 flex flex-row justify-around gap-20">
            <th>شماره قسط</th>
            <th>مبلغ واریز</th>
            <th>تاریخ سر رسید</th>
            <th>وضعیت</th>
            <th>تایید مدیر</th>
            <th className="w-[200px] -mr-16">پیام مدیر</th>
          </tr>
        </thead>
        <tbody>
          {listghest.map((item) => (
            <tr key={item.id} className="flex flex-row py-5  mr-2 justify-around gap-20">
              <td><input type="checkbox" /></td>
              <td>{item.text}</td>
              <td>{item.pyment}</td>
              <td>{item.data}</td>
              <td>{item.Condition}</td>
              <td className="W-[20px] h-[20px]">
                <Image src={tik} alt="" />
              </td>
              <td className="w-[200px]">{item.massge}</td>
            </tr>
          ))}
        </tbody> */}
      </table>
    </>
  );
}

export default Tablevam;
