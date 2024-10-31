import React, { useEffect, useState } from "react";
import axios from "axios";
import BankGuarantor from "./BankGuarantor";
import NotGuarantor from "./NotGuarantor";

function Sentmassegesystematic() {
  const [messages, setMessages] = useState([]); 
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
          "https://fundcharitynet.com/api/messages/show/systemic", // پیام‌های سیستماتیک
          {
            headers: {
              Authorization: `Bearer ${authToken}`,
            },
          }
        );

        if (response.data && Array.isArray(response.data.messages)) {
          setMessages(response.data.messages); 
        } else {
          setMessages([]); 
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

export default Sentmassegesystematic;