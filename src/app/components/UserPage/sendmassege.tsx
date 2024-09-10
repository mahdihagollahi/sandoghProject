import React from "react";
import Image from "next/image";
import arrowImage from "@/src/app/assent/Img/adminPanel/back.svg";
import BankGuarantor from "./BankGuarantor";
import NotGuarantor from "./NotGuarantor";

function SentedMassege() {
  const massege = [
    {
      id: 1,
      date: "1403/02/01",
      subject: "قسط وام",
      text: "با سلام لطفا حق عضویت خود را واریز کنید",
    },
    {
      id: 2,
      date: "1403/02/01",
      subject: "یاد آوری حق عضویت",
      text: "با سلام لطفا حق عضویت خود را واریز کنید",
    },
  ];

  

  return (
    <div >
      <div className="flex justify-between   items-center mb-2 mt-10">
        <div className="mr-2">
          <p className="font-bold dark:text-white text-lg">پیام ها</p>
        </div>
      </div>
      <div>{massege.length > 0 ? <BankGuarantor /> : <NotGuarantor />}</div>

      <div className="flex  flex-col gap-[5px] mt-1">
        {massege.map((msg, index) => (
          <div
            key={index}
            className={`p-[10px] w-[1025px] h-[100px]  ${
              index % 2 === 0
                ? "bg-[#d7ebe8] border-r-[3px] border-[#4FD1C5]"
                : "bg-[#d4d4d4] border-r-[3px] border-[#394860]"
            }`}
          >
            <div className="flex flex-row justify-between w-[961px] h-[27px]">
              <h4 className="text-sm text-[#5B5B5B] font-bold">
                {msg.subject}
              </h4>
              <span className="text-sm text-[#5B5B5B]">{msg.date}</span>
            </div>
            <div className="mt-[10px]">
              <p className="text-xs text-[#5B5B5B]">{msg.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SentedMassege;
