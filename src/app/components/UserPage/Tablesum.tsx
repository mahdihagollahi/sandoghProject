// import React from "react";
// import { useSelector } from "react-redux";

// function Tablesum() {
//   const selectedPayments = useSelector((state) => state.payment.selectPayment);

//   return (
//     <div className="w-11/12 px-3 py-7 shadow-md rounded-md bg-white">
//       <div>
//         <span className="font-bold mr-12">صورت حساب پرداخت شما</span>
//       </div>
//       <div className="flex flex-row justify-around w-[500px] mt-10">
//         <div>
//           <span className="font-bold">شماره</span>
//           {selectedPayments.map((item, index) => (
//             <div key={index} className="mt-3">
//               <span>{item.text}</span>
//             </div>
//           ))}
//         </div>
//         <div>
//           <span className="font-bold mr-1">مبلغ</span>
//           {selectedPayments.map((item, index) => (
//             <div key={index} className="mt-3">
//               <input type="text" value={item.payment} readOnly />
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Tablesum;

import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

function Tablesum() {
  const selectedPayments = useSelector((state) => state.payment.selectPayment);
  const [data, setData] = useState([]);
  const [total, setTotal] = useState(0);
  
  useEffect(() => {
    const fetchPayments = async () => {
      try {
        const response = await axios.post("https://mohammadelia30.ir/shabab/api/installments/show", {
          
          payments: selectedPayments 
        }, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('authToken')}`
          }
        });

        const fetchedData = response.data; 
        setData(fetchedData);

        
        const totalAmount = fetchedData.reduce((acc, item) => acc + item.pyment, 0);
        setTotal(totalAmount);
      } catch (error) {
        console.error("Error fetching payments:", error);
      }
    };

    fetchPayments();
  }, [selectedPayments]);

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
              <span>{item.id}</span> 
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
      <div className="mt-5">
        <span className="font-bold">مجموع: {total}</span>
      </div>
    </div>
  );
}

export default Tablesum;
