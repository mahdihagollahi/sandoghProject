
// import React from "react";
// import { useSelector } from "react-redux";
// import { selectPayment } from "@/src/app/peymentSlice"; 

// function Tablesum() {
//   const selectedPayments = useSelector(selectPayment);

//   return (
//     <div className="w-11/12 px-3 py-7 shadow-md rounded-md bg-white">
//       <div>
//         <span className="font-bold mr-12">صورت حساب پرداخت شما</span>
//       </div>
//       <div className="flex flex-row justify-around w-[500px] mt-10 ">
//         <div>
//           <span className="font-bold">شماره</span>
//           {selectedPayments.map((item, index) => (
//             <div key={index}>
//               <div className="mt-3">
//                 <span>{item.payment}</span>
//               </div>
//             </div>
//           ))}
//         </div>
//         <div>
//           <span className="font-bold mr-1">مبلغ</span>
//           {selectedPayments.map((item, index) => (
//             <div key={index} className="bg-white">
//               <div className="mt-3">
//                 <input type="text" value={item.payment} readOnly />
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Tablesum;



import React from "react";
import { useSelector } from "react-redux";

function Tablesum() {
  const selectedPayments = useSelector((state) => state.payment.selectPayment);

  return (
    <div className="w-11/12 px-3 py-7 shadow-md rounded-md bg-white">
      <div>
        <span className="font-bold mr-12">صورت حساب پرداخت شما</span>
      </div>
      <div className="flex flex-row justify-around w-[500px] mt-10">
        <div>
          <span className="font-bold">شماره</span>
          {selectedPayments.map((item, index) => (
            <div key={index} className="mt-3">
              <span>{item.text}</span>
            </div>
          ))}
        </div>
        <div>
          <span className="font-bold mr-1">مبلغ</span>
          {selectedPayments.map((item, index) => (
            <div key={index} className="mt-3">
              <input type="text" value={item.payment} readOnly />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Tablesum;

