// "use client";
// import React, { useState } from "react";
// import Image from 'next/image';
// import tik from "@/src/app/assent/Img/userPanel/tik.svg";
// import { useDispatch } from "react-redux";
// import { selectPayment } from "@/src/app/peymentSlice"; 

// function Tableeshterak() {

//   const dispatch = useDispatch();

//   const listghest = [
//     {
//       id: 1,
//       text: "قسط 1",
//       pyment: "500,000تومان",
//       data: "1403/05/10",
//       img: "",
//       Condition: "پرداخت شده",
//       massge: "بدون توضیح",
//     },
//     {
//       id: 2,
//       text: "قسط 2",
//       pyment: "500,000تومان",
//       data: "1403/12/30",
//       img: "",
//       Condition: "پرداخت شده",
//       massge: "بدون توضیح",
//     },
//     {
//       id: 3,
//       text: "قسط 3",
//       pyment: "500,000تومان",
//       data: "1403/02/09",
//       img: "",
//       Condition: "پرداخت شده",
//       massge: "بدون توضیح",
//     },
//     {
//       id: 4,
//       text: "قسط 4",
//       pyment: "500,000تومان",
//       data: "1403/10/11",
//       img: "",
//       Condition: "پرداخت شده",
//       massge: "بدون توضیح",
//     },
//     {
//       id: 5,
//       text: "قسط 5",
//       pyment: "500,000تومان",
//       data: "1403/04/06",
//       img: "",
//       Condition: "پرداخت شده",
//       massge: "بدون توضیح",
//     },
//     {
//       id: 6,
//       text: "قسط 6",
//       pyment: "500,000تومان",
//       data: "1403/11/07",
//       img: "",
//       Condition: "پرداخت شده",
//       massge: "بدون توضیح",
//     },
//     {
//       id: 7,
//       text: "قسط 7",
//       pyment: "500,000تومان",
//       data: "1403/12/18",
//       img: "",
//       Condition: "پرداخت شده",
//       massge: "بدون توضیح",
//     },
//     {
//       id: 8,
//       text: "قسط 8",
//       pyment: "500,000تومان",
//       data: "1403/09/30",
//       img: "",
//       Condition: "پرداخت شده",
//       massge: "بدون توضیح",
//     },
  
//   ];

//   const handleCheckboxClick = (item) => {
//     console.log(item);
//     dispatch(selectPayment({ id: item.id, payment: item.pyment, text: item.text }));
//   };


//   return (
//     <>
//     <div className='flex gap-[77%] items-center mb-2 mt-12   '>
//             <div className='mr-2 '>
//                 <p className='font-bold text-lg'>
//                 درخواست وام                
//                 </p>
//             </div>
          


            
//         </div>
//       <table className="w-[70%] p-10 mt-5 shadow-md rounded-md" >
//         <tr className="border-b-2 mr-24 py-10 flex flex-row justify-around gap-20">
//           <th className="whitespace-nowrap">شماره قسط</th>
//           <th className="whitespace-nowrap">مبلغ واریز</th>
//           <th className="whitespace-nowrap">تاریخ سر رسید</th>
//           <th className="whitespace-nowrap">وضعیت</th>
//           <th className="whitespace-nowrap">تایید مدیر</th>
//           <th className="w-[200px] -mr-16 whitespace-nowrap" >پیام مدیر</th>
//         </tr>
//         {listghest.map((item) => (
//           <div>
//             <tr className="flex flex-row py-5  mr-2 justify-around gap-20">
//               <td><input type="checkbox" onClick={() => handleCheckboxClick(item)} className="checkbox checkbox-md" /></td>
//               <td className="whitespace-nowrap">{item.text}</td>
//               <td className="whitespace-nowrap">{item.pyment}</td>
//               <td className="whitespace-nowrap">{item.data}</td>
//               <td className="whitespace-nowrap">{item.Condition}</td>
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

// export default Tableeshterak;



"use client";
import React from "react";
import Image from 'next/image';
import tik from "@/app/assent/Img/userPanel/tik.svg";
import { useDispatch } from "react-redux";
import { selectPayment } from "@/app/peymentSlice"; 

function Tableeshterak() {

  const dispatch = useDispatch();

  const listghest = [
    { id: 1, text: "قسط 1", pyment: "500,000تومان", data: "1403/05/10", Condition: "پرداخت شده", massge: "بدون توضیح" },
    { id: 2, text: "قسط 2", pyment: "500,000تومان", data: "1403/12/30", Condition: "پرداخت شده", massge: "بدون توضیح" },
    { id: 3, text: "قسط 3", pyment: "500,000تومان", data: "1403/02/09", Condition: "پرداخت شده", massge: "بدون توضیح" },
    { id: 4, text: "قسط 4", pyment: "500,000تومان", data: "1403/10/11", Condition: "پرداخت شده", massge: "بدون توضیح" },
    { id: 5, text: "قسط 5", pyment: "500,000تومان", data: "1403/04/06", Condition: "پرداخت شده", massge: "بدون توضیح" },
    { id: 6, text: "قسط 6", pyment: "500,000تومان", data: "1403/11/07", Condition: "پرداخت شده", massge: "بدون توضیح" },
    { id: 7, text: "قسط 7", pyment: "500,000تومان", data: "1403/12/18", Condition: "پرداخت شده", massge: "بدون توضیح" },
    { id: 8, text: "قسط 8", pyment: "500,000تومان", data: "1403/09/30", Condition: "پرداخت شده", massge: "بدون توضیح" },
  ];

  const handleCheckboxClick = (item:any) => {
    dispatch(selectPayment({ id: item.id, payment: item.pyment, text: item.text }));
  };

  return (
    <>
      <div className='flex gap-[77%] items-center mb-2 mt-12'>
        <div className='mr-2 '>
          <p className='font-bold text-lg'>درخواست وام</p>
        </div>
      </div>
      <table className="w-[70%] p-10 mt-5 shadow-md rounded-md">
        <thead>
          <tr className="border-b-2 flex flex-row justify-around gap-20">
            <th>شماره قسط</th>
            <th>مبلغ واریز</th>
            <th>تاریخ سر رسید</th>
            <th>وضعیت</th>
            <th>تایید مدیر</th>
            <th>پیام مدیر</th>
          </tr>
        </thead>
        <tbody>
          {listghest.map((item) => (
            <tr key={item.id} className="flex flex-row justify-around gap-20 py-5">
              <td><input type="checkbox" onClick={() => handleCheckboxClick(item)} className="checkbox checkbox-md" /></td>
              <td>{item.text}</td>
              <td>{item.pyment}</td>
              <td>{item.data}</td>
              <td>{item.Condition}</td>
              <td><Image src={tik} alt="" /></td>
              <td>{item.massge}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Tableeshterak;






 
