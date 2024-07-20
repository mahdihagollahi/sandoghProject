// import Image from "next/image";

// import greenBackground from "./Image.png";

// import React from 'react'

// export default function Home() {
//   return (
//     <div className="relative h-[700px]">
//       <div>
//         <Image
//           sizes="100vw"
//           style={{
//             width: "100%",
//             height: "330px",
//           }}
//           src={greenBackground}
//           alt=""
//         />
//       </div>
//       <div className="bg-white flex justify-center content-center m-[80px] absolute top-[15px] left-[250px] rounded-[30px] shadow-md">
//         <div className="w-[626px] h-[488px] rounded-[30px] p-[40px] shadow-md">
//           <div className="flex flex-row-reverse gap-1 mr-[450px]">
//             <div>
//               <span>بازگشت</span>
//             </div>
//             <div>
//               <span>
//                 <svg
//                   width="24"
//                   height="24"
//                   viewBox="0 0 24 24"
//                   fill="none"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path
//                     d="M4.25 11.7256L19.25 11.7256"
//                     stroke="black"
//                     strokeWidth="1.5"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                   />
//                   <path
//                     d="M10.2988 5.701L4.24883 11.725L10.2988 17.75"
//                     stroke="black"
//                     strokeWidth="1.5"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                   />
//                 </svg>
//               </span>
//             </div>
//           </div>

//           <div className="mt-[50px] flex flex-col gap-4 mr-[40px]">
//             <span className="text-[#4FD1C5] text-lg text-right">
//               ورود به صندوق قرض الحسنه مهر
//             </span>
//             <p className="text-sm text-right opacity-55">
//               به صندوق قرض الحسنه مهر خوش آمدید، لطفا برای ورود روی دکمه مورد
//               نظر خود کلیک نمایید
//             </p>
//             <p className="text-sm text-right mt-[50px] opacity-55">
//               اگر کاربر هستید روی این گزینه کلیک کنید
//             </p>

//               <button className="bg-[#4FD1C5] w-[420px] h-[56px] text-white rounded-[5px] ml-[87px] mt-4">
//                 ورود کاربران

//               </button>

//            </div>
//          </div>
//        </div>

//     </div>
//   );
// }

import React from "react";



import Requestbox from "./component/Requestbox"
import Supportbox from "./component/Supportbox";
export default function Home() {
  return (
    <>
    <div className="flex flex-row-reverse gap-[21px]">
      <Supportbox/>
      <Requestbox/>
      </div>
    </>
  );
}
