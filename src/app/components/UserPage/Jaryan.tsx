import React from "react";


function Jaryan() {
  return (
    <>
      <div className="w-[100%] h-[450px] bg-white mt-7 rounded-md shadow-md">
        <div className="flex flex-row justify-around p-[40px]  w-[90%]  border-b-2 ">
          <span>شماره درخواست</span>
          <span>مبلغ وام</span>
          <span>تاریخ درخواست</span>
          <span>توضیحات</span>
        </div>
        <div className="flex flex-row gap-8 p-[40px] w-[900px] mr-[70px] text-base">
          <span className="w-28">درخواست 1</span>
          <span className="mr-12 opacity-[70%]">50.000.000 تومان</span>
          <span className="mr-12 opacity-[70%]">1403/03/17</span>
          <span className="w-[250px] mr-8 opacity-[70%]">
            برای خرج عروسی و مراسم ازدواج نیاز دارم و حتما باید چک های تالارو
            پاس کنم بد گیرم اقای قنبری اگه میشه تایید کنید
          </span>
        </div>
        <div className="flex flex-row gap-3 pr-28">
          <span>درجه وام:</span>
          <div className="flex flex-row gap-2">
            <span>معمولی</span>
            <input
              type="radio"
              name="radio-5"
              className="radio radio-success"
              checked="checked"
            />
          </div>
        </div>
        <div className="flex flex-row gap-6 pr-28 mt-6">
          <span>ضامن درخواستی:</span>
          <div className="flex flex-row gap-4 -mt-1">
            <button className="border-[#4FD1C5] border-2 rounded-md p-2">
              رحمان مقدم
            </button>
            <button className="border-[#4FD1C5] border-2 rounded-md p-2">
              موسی مقدم
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Jaryan;
// import React from "react";

// function Jaryan() {
//   const user = [
//     { id: 1, cash: '۵۰.۰۰۰.۰۰۰', date: '۱۴۰۳/۰۳/۱۷' , 
//       Description:'برای خرج عروسی و مراسم ازدواج ارو پاس کنم بد گیرم اقای قنبری اگه میشه تایید ' ,
//       dgree:'معمولی',
//       guarantor1:'حامد رحمانی',
//       guarantor2:'موسی مقدم'
//     }
//   ];
  
//   return (
//     <div>
//       <div className="w-[100%] h-[450px] bg-white rounded-md mt-10 shadow-md">
//         <div className="flex flex-row justify-around p-[40px] w-[100%] border-b-2 ">
//           <span>شماره درخواست</span>
//           <span>مبلغ وام</span>
//           <span>تاریخ درخواست</span>
//           <span>توضیحات</span>
//         </div>
//         <div className="flex flex-row gap-8 p-10 w-[100%] mr-[70px] text-base">
//           {user.map((item, index) => (
//             <div key={index}>
//               <div>
//                 <span className="w-28">درخواست </span>
//                 <span className="mr-12 font-normal text-[#718096]">{item.cash} تومان</span>
//                 <span className="mr-12 font-normal text-[#718096]">{item.date}</span>
//                 <span className="w-[100px] text-[#718096]  font-normal ">
//                   {item.Description}
//                 </span>
//               </div>
//               <div className="flex flex-row gap-3 pr-28">
//                 <span>درجه وام:</span>
//                 <div className="flex flex-row gap-2">
//                   <span>{item.dgree}</span>
//                   <input
//                     type="radio"
//                     name="radio-5"
//                     className="radio radio-success"
//                     checked="checked"
//                   />
//                 </div>
//               </div>
//               <div className="flex flex-row gap-6 pr-28 mt-6">
//                 <span>ضامن درخواستی:</span>
//                 <div className="flex flex-row gap-4 -mt-1">
//                   <button className="border-[#4FD1C5] border-2 rounded-md p-2">
//                     {item.guarantor1}
//                   </button>
//                   <button className="border-[#4FD1C5] border-2 rounded-md p-2">
//                     {item.guarantor2}
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Jaryan;

