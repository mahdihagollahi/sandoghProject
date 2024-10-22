// import React from "react";
// import BankGuarantor from "./BankGuarantor";
// import NotGuarantor from "./NotGuarantor";

// function SentedMassege() {
//   const massege = [
//     {
//       id: 1,
//       date: "1403/02/01",
//       subject: "قسط وام",
//       text: "با سلام لطفا حق عضویت خود را واریز کنید",
//     },
//     {
//       id: 2,
//       date: "1403/02/01",
//       subject: "یاد آوری حق عضویت",
//       text: "با سلام لطفا حق عضویت خود را واریز کنید",
//     },
//   ];

  

//   return (
//     <div >
//       <div className="flex justify-between   items-center mb-2 mt-10">
//         <div className="mr-2">
//           <p className="font-bold dark:text-white text-lg">پیام ها</p>
//         </div>
//       </div>
//       <div>{massege.length > 0 ? <BankGuarantor /> : <NotGuarantor />}</div>

//       <div className="flex  flex-col gap-[5px] mt-1">
//         {massege.map((msg, index) => (
//           <div
//             key={index}
//             className={`p-[10px] w-[1025px] h-[100px]  ${
//               index % 2 === 0
//                 ? "bg-[#d7ebe8] border-r-[3px] border-[#4FD1C5]"
//                 : "bg-[#d4d4d4] border-r-[3px] border-[#394860]"
//             }`}
//           >
//             <div className="flex flex-row justify-between w-[961px] h-[27px]">
//               <h4 className="text-sm text-[#5B5B5B] dark:text-white font-bold">
//                 {msg.subject}
//               </h4>
//               <span className="text-sm dark:text-white text-[#5B5B5B]">{msg.date}</span>
//             </div>
//             <div className="mt-[10px]">
//               <p className="text-xs dark:text-white text-[#5B5B5B]">{msg.text}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default SentedMassege;




import React, { useEffect, useState } from "react";
import axios from "axios";
import BankGuarantor from "./BankGuarantor";
import NotGuarantor from "./NotGuarantor";

function SentedMassege() {
  const [messages, setMessages] = useState([]); // مقدار اولیه آرایه
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMessages = async () => {
      const authToken = localStorage.getItem("authToken");
      
      if (!authToken) {
        setError("توکن یافت نشد");
        setLoading(false);
        return;
      }

      try {
        const response = await axios.get(
          "https://mohammadelia30.ir/shabab/api/messages/show/systemic",
          {
            headers: {
              Authorization: `Bearer ${authToken}`,
            },
          }
        );

        if (response.data && Array.isArray(response.data.messages)) {
          setMessages(response.data.messages); // مطمئن شوید که messages یک آرایه است
        } else {
          setMessages([]); // اگر داده‌ای وجود ندارد، یک آرایه خالی قرار دهید
        }
      } catch (err) {
        setError("خطا در دریافت اطلاعات");
      } finally {
        setLoading(false);
      }
    };

    fetchMessages();
  }, []);

  if (loading) return <p>در حال بارگذاری...</p>; 
  if (error) return <p>{error}</p>; 

  return (
    <div>
      <div className="flex justify-between items-center mb-2 mt-10">
        <div className="mr-2">
          <p className="font-bold dark:text-white text-lg">پیام ها</p>
        </div>
      </div>
      <div>{messages.length > 0 ? <BankGuarantor /> : <NotGuarantor />}</div>

      <div className="flex flex-col gap-[5px] mt-1">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`p-[10px] w-[1025px] h-[100px]  ${
              index % 2 === 0
                ? "bg-[#d7ebe8] border-r-[3px] border-[#4FD1C5]"
                : "bg-[#d4d4d4] border-r-[3px] border-[#394860]"
            }`}
          >
            <div className="flex flex-row justify-between w-[961px] h-[27px]">
              <h4 className="text-sm text-[#5B5B5B] dark:text-white font-bold">
                {msg.subject}
              </h4>
              <span className="text-sm dark:text-white text-[#5B5B5B]">
                {msg.date}
              </span>
            </div>
            <div className="mt-[10px]">
              <p className="text-xs dark:text-white text-[#5B5B5B]">
                {msg.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SentedMassege;
