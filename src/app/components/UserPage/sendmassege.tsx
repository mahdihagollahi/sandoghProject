// import React from "react";
// import { text } from "stream/consumers";

// export default function sendmassege() {
//  const massege =[
//   {id : 1 , subject:'' , date:'' , text:''}
//  ]
//   return (
//     <>
//       <div className="flex flex-col gap-[5px]">
//         <div className="p-[10px] w-[1025px] h-[100px] bg-[#d7ebe8] border-r-[3px] border-[#4FD1C5] rounded-md">
//           <div className="flex flex-row justify-between w-[961px] h-[27px]">
//             <h4 className="text-sm text-[#5B5B5B] font-bold ">اقساط وام</h4>
//             <span className="text-sm text-[#5B5B5B]">1403/02/01</span>
//           </div>
//           <div className="mt-[10px]">
//             <p className="text-xs text-[#5B5B5B]">
//               با سلام
//               <br />
//               جناب آقای مسعود رمضانی زمان لطفا قسط تاریخ 1402/05/01 خود را
//               پرداخت کنید
//             </p>
//           </div>
//         </div>ظ

//         <div className="p-[10px] w-[1025px] h-[100px] bg-[#d4d4d4] border-r-[3px] border-[#394860] rounded-md">
//           <div className="flex flex-row justify-between w-[961px] h-[27px]">
//             <h4 className="text-sm text-[#5B5B5B] font-bold ">
//               یاد آوری حق عضویت صندوق
//             </h4>
//             <span className="text-sm text-[#5B5B5B]">1403/12/09</span>
//           </div>
//           <div className="mt-[10px]">
//             <p className="text-xs text-[#5B5B5B]">
//               با سلام
//               <br />
//               لطفا حق عضویت ماهانه صندوق را پرداخت کنید.
//             </p>
//           </div>
//         </div>

//         <div className="p-[10px] w-[1025px] h-[100px] bg-[#d7ebe8] border-r-[3px] border-[#4FD1C5] rounded-md">
//           <div className="flex flex-row justify-between w-[961px] h-[27px]">
//             <h4 className="text-sm text-[#5B5B5B] font-bold ">اقساط وام</h4>
//             <span className="text-sm text-[#5B5B5B]">1403/05/27</span>
//           </div>
//           <div className="mt-[10px]">
//             <p className="text-xs text-[#5B5B5B]">
//               با سلام
//               <br />
//               جناب آقای مسعود رمضانی زمان لطفا قسط تاریخ 1402/05/01 خود را
//               پرداخت کنید
//             </p>
//           </div>
//         </div>

//         <div className="p-[10px] w-[1025px] h-[100px] bg-[#d4d4d4] border-r-[3px] border-[#394860] rounded-md">
//           <div className="flex flex-row justify-between w-[961px] h-[27px]">
//             <h4 className="text-sm text-[#5B5B5B] font-bold ">
//               یاد آوری حق عضویت صندوق
//             </h4>
//             <span className="text-sm text-[#5B5B5B]">1403/12/09</span>
//           </div>
//           <div className="mt-[10px]">
//             <p className="text-xs text-[#5B5B5B]">
//               با سلام
//               <br />
//               لطفا حق عضویت ماهانه صندوق را پرداخت کنید.
//             </p>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }


import React from 'react'
import Image from "next/image";
import arrowImage from '@/src/app/assent/Img/adminPanel/back.svg'


function SentedMassege() {

  const massege =[
    {id : 1 , date:'1403/02/01',subject:'قسط وام', text :'با سلام لطفا حق عضویت خود را واریز کنید'},
    {id : 2 , date:'1403/02/01',subject:'یاد آوری حق عضویت', text :'با سلام لطفا حق عضویت خود را واریز کنید'},
  ]
  return (
    <div>
        <div className='flex  justify-between items-center mb-2 mt-5  '>
            <div className='mr-2 '>
                <p className='font-bold text-lg'>
                حساب مدیریت
                </p>
            </div>
            <div className='flex justify-end mr-2  '>
              <a href="" className='flex items-center'>
              بازگشت
              <Image
                src={arrowImage}
                width={38}
                height={38}
                alt='arrow'

                />
              </a>
              
            </div>
        </div>
      <div className="flex flex-col gap-[5px]">
        {massege.map((user , index)=>(

        <div key={index} className={`p-[10px] w-[1025px] h-[100px] ${
           index %2 === 0 ? 'bg-[#d7ebe8] border-r-[3px] border-[#4FD1C5]'  : 'bg-[#d4d4d4] border-r-[3px] border-[#394860]' }`}>
          <div className="flex flex-row justify-between w-[961px] h-[27px]">
          <h4 className="text-sm text-[#5B5B5B] font-bold ">{user.subject}</h4>
          <span className="text-sm text-[#5B5B5B]">{user.date}</span>
         </div>
         <div className="mt-[10px]">
         <p className="text-xs text-[#5B5B5B]">
          {user.text}
          </p>
          </div>
         </div>

        ))}
      
      </div>

    </div>
  )
}

export default SentedMassege