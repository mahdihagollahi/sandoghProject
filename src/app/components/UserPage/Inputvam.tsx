// import React from "react";
// import Image from "next/image";
// import search from "@/app/assent/Img/userPanel/Search.png";
// import Exclamation from "@/app/assent/Img/userPanel/Exclamation.svg";
// import DatePicker from "react-multi-date-picker";
// import "react-multi-date-picker/styles/colors/green.css";
// import persian from "react-date-object/calendars/persian";
// import persian_fa from "react-date-object/locales/persian_fa";

// const user = [
//   { id: 1, name: "حامد رحمانی" },
//   { id: 2, name: "موسی مقدم" },
// ];

// function InputVam() {
//   return (
//     <div className="w-[100%] bg-white shadow-md rounded-md pb-10 px-4 py-5">
//       <div className="flex flex-grow justify-around p-5 w-[100%] border-b-2">
//         <span>شماره درخواست</span>
//         <span>مبلغ وام</span>
//         <span>تاریخ درخواست</span>
//         <span>توضیحات</span>
//       </div>
//       <div className="flex flex-grow justify-between mt-10 mb-10  w-[900px] mr-5">
//         <input
//           className="border w-[148px] h-[56px] rounded-md p-2 border-[#92A9BD]"
//           type="text"
//           placeholder="شماره"
//         />
//         <input
//           className="border w-[148px] h-[56px] rounded-md p-2 border-[#92A9BD]"
//           type="text"
//           placeholder="مبلغ"
//         />
//         <div style={{ direction: "rtl" }}>
//           <DatePicker
//             style={{
//               border: "1px",
//               width: "148px",
//               height: "56px",
//               borderRadius: "8px",
//               padding: "4px",
//               borderColor: "#92A9BD",
//               borderStyle: "solid",
//             }}
//             placeholder="تاریخ"
//             className="green"
//             calendar={persian}
//             locale={persian_fa}
//             calendarPosition="bottom-right"
//           />
//         </div>
//         <input
//           className="border w-[248px] h-[56px] rounded-md p-2 border-[#92A9BD]"
//           type="text"
//           placeholder="توضیحات"
//         />
//       </div>
//       <div className="flex flex-col  gap-4">
//         <div className="flex flex-row gap-20 items-center mb-4">
//           <div className="relative w-[402px] mr-5 h-[56px]">
//             <input
//               className="p-2 w-full h-full pr-12 rounded-md border border-[#92A9BD]"
//               type="text"
//               placeholder="جستجو نام کاربری یا شماره تلفن ضامن"
//             />
//             <Image
//               className="w-5 h-5 absolute top-1/2 transform -translate-y-1/2 right-3"
//               src={search}
//               alt="search"
//             />
//           </div>
//           <div className="flex flex-row gap-3">
//             {user.map((items, index) => (
//               <div key={index}>
//                 <button className="border-2 rounded-md border-[#4FD1C5] p-2">
//                   {items.name}
//                 </button>
//               </div>
//             ))}
//           </div>
//         </div>
//         <div className="flex flex-col gap-4">
//           <div className="flex flex-row gap-2 opacity-[70%]">
//             <Image className="w-5 h-5" src={Exclamation} alt="exclamation" />
//             <span>شما تا به حال مجموعا 6 درخواست وام ثبت کرده‌اید</span>
//           </div>
//           <div className="flex flex-row gap-2 opacity-[70%]">
//             <Image className="w-5 h-5" src={Exclamation} alt="exclamation" />
//             <span>لطفا توضیحات شما برای درخواست وام بیش از 100 کاراکتر نشود</span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default InputVam;

import React, { useState, useEffect } from "react";
import Image from "next/image";
import DatePicker from "react-multi-date-picker";
import "react-multi-date-picker/styles/colors/green.css";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import search from "@/app/assent/Img/userPanel/Search.png";
import Exclamation from "@/app/assent/Img/userPanel/Exclamation.svg";
import {
  fetchLoanDetails,
  searchGuarantor,
  submitLoanRequest,
} from "@/app/components/UserPage/LoansServis"; 
import Buttonsend from "@/app/components/UserPage/ButtonSended";

const InputVam = () => {
  const [loanRequest, setLoanRequest] = useState({
    requestNumber: "",
    date: null,
    price: "",
    user_description: "",
    type: "normal",
    guarantors_id: [],
  });
  const [nationalCode, setNationalCode] = useState("");
  const [searchResults, setSearchResults] = useState([]);


  const getLoanDetails = async () => {
    const token = localStorage.getItem("authToken");
    if (!token) {
      alert("توکن احراز هویت موجود نیست.");
      return;
    }
    try {
      const data = await fetchLoanDetails(token);
      setLoanRequest((prev) => ({
        ...prev,
        requestNumber: data.count,
        date: new Date(data.date),
      }));
    } catch (error) {
      console.error("خطا در دریافت جزئیات وام:", error);
    }
  };

 
  const handleSearchGuarantor = async () => {
    const token = localStorage.getItem("authToken");
    if (!token) {
      alert("توکن احراز هویت موجود نیست.");
      return;
    }
    try {
      const guarantors = await searchGuarantor(token, nationalCode);
      setSearchResults(guarantors);
    } catch (error) {
      console.error("خطا در جستجوی ضامن:", error);
    }
  };

  const handleSubmitLoanRequest = async () => {
    const token = localStorage.getItem("authToken");
    if (!token) {
      alert("توکن احراز هویت موجود نیست.");
      return;
    }
    try {
      await submitLoanRequest(token, loanRequest);
      alert("درخواست وام با موفقیت ثبت شد!");
    } catch (error) {
      console.error("خطا در ثبت درخواست وام:", error);
    }
  };

  useEffect(() => {
    getLoanDetails(); 
  }, []);

  return (
    <div className="w-[100%] bg-white shadow-md rounded-md pb-10 px-4 py-5">
      <div className="flex flex-grow justify-around p-5 w-[100%] border-b-2">
        <span>شماره درخواست</span>
        <span>مبلغ وام</span>
        <span>تاریخ درخواست</span>
        <span>توضیحات</span>
      </div>
      <div className="flex flex-grow justify-between mt-10 mb-10  w-[900px] mr-5">
        <input
          className="border w-[148px] h-[56px] rounded-md p-2 border-[#92A9BD]"
          type="text"
          placeholder="شماره درخواست"
          value={loanRequest.requestNumber}
          readOnly
        />
        <input
          className="border w-[148px] h-[56px] rounded-md p-2 border-[#92A9BD]"
          type="text"
          placeholder="مبلغ وام"
          value={loanRequest.price}
          onChange={(e) =>
            setLoanRequest((prev) => ({ ...prev, price: e.target.value }))
          }
        />
        <div style={{ direction: "rtl" }}>
          <DatePicker
            style={{
              border: "1px",
              width: "148px",
              height: "56px",
              borderRadius: "8px",
              padding: "4px",
              borderColor: "#92A9BD",
              borderStyle: "solid",
            }}
            placeholder="تاریخ"
            className="green"
            calendar={persian}
            locale={persian_fa}
            calendarPosition="bottom-right"
            value={loanRequest.date}
            onChange={(date) => setLoanRequest((prev) => ({ ...prev, date }))}
            readOnly
          />
        </div>
        <input
          className="border w-[248px] h-[56px] rounded-md p-2 border-[#92A9BD]"
          type="text"
          placeholder="توضیحات"
          value={loanRequest.user_description}
          onChange={(e) =>
            setLoanRequest((prev) => ({
              ...prev,
              user_description: e.target.value,
            }))
          }
        />
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex flex-row gap-20 items-center mb-4">
          <div className="relative w-[402px] mr-5 h-[56px]">
            <input
              className="p-2 w-full h-full pr-12 rounded-md border border-[#92A9BD]"
              type="text"
              placeholder="جستجو نام کاربری یا شماره تلفن ضامن"
              value={nationalCode}
              onChange={(e) => setNationalCode(e.target.value)}
            />
            <Image
              className="w-5 h-5 absolute top-1/2 transform -translate-y-1/2 right-3 cursor-pointer"
              src={search}
              alt="search"
              onClick={handleSearchGuarantor}
            />
          </div>
        </div>
        <div className="flex flex-row gap-3">
          {searchResults.length > 0 ? (
            searchResults.map((guarantor, index) => (
              <div key={index}>
                <button
                  className={`border-2 rounded-md p-2 ${
                    loanRequest.guarantors_id.includes(guarantor.id)
                      ? "bg-[#4FD1C5] text-white"
                      : "border-[#4FD1C5]"
                  }`}
                  onClick={() =>
                    setLoanRequest((prev) => ({
                      ...prev,
                      guarantors_id: prev.guarantors_id.includes(guarantor.id)
                        ? prev.guarantors_id.filter((id) => id !== guarantor.id)
                        : [...prev.guarantors_id, guarantor.id],
                    }))
                  }
                >
                  {guarantor.name}
                </button>
              </div>
            ))
          ) : (
            <span>نتیجه‌ای یافت نشد</span>
          )}
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex flex-row gap-2 opacity-[70%]">
            <Image className="w-5 h-5" src={Exclamation} alt="exclamation" />
            <span>شما تا به حال مجموعا 6 درخواست وام ثبت کرده‌اید</span>
          </div>
          <div className="flex flex-row gap-2 opacity-[70%]">
            <Image className="w-5 h-5" src={Exclamation} alt="exclamation" />
            <span>
              لطفا توضیحات شما برای درخواست وام بیش از 100 کاراکتر نشود
            </span>
          </div>
        </div>
        {/* <div className="flex flex-row justify-center mt-10">
          <button
            className="bg-[#4FD1C5] text-white p-4 rounded-md"
            onClick={handleSubmitLoanRequest}
          >
            ثبت درخواست وام
          </button>
        </div> */}
        <Buttonsend onClick={handleSubmitLoanRequest}/>
      </div>
    </div>
  );
};

export default InputVam;
