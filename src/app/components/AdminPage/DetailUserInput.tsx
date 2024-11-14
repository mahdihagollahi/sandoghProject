

// import React, { Fragment, useState } from "react";
// import { FaEdit } from "react-icons/fa";
// import { useMutation } from "react-query";
// import axios from "axios";

// const DetailUserInput = ({ userDetail, userId }) => {
//   const [firstName, setFirstName] = useState(
//     `${userDetail.first_name || ""} ${userDetail.last_name || ""}`.trim()
//   );
//   const [cardNumber, setCardNumber] = useState(userDetail.card_number || "");
//   const [phoneNumber, setPhoneNumber] = useState(userDetail.phone_number || "");
//   const [emergencyNumber, setEmergencyNumber] = useState(
//     userDetail.emergency_number || ""
//   );
//   const [homeNumber, setHomeNumber] = useState(userDetail.home_number || "");
//   const [nationalCode, setNationalCode] = useState(
//     userDetail.national_code || ""
//   );
//   const [address, setAddress] = useState(userDetail.address || "");
//   const [shebaNumber, setShebaNumber] = useState( "");

 
//   const [isEditableFirstName, setIsEditableFirstName] = useState(false);
//   const [isEditableCardNumber, setIsEditableCardNumber] = useState(false);
//   const [isEditablePhoneNumber, setIsEditablePhoneNumber] = useState(false);
//   const [isEditableEmergencyNumber, setIsEditableEmergencyNumber] = useState(false);
//   const [isEditableHomeNumber, setIsEditableHomeNumber] = useState(false);
//   const [isEditableNationalCode, setIsEditableNationalCode] = useState(false);
//   const [isEditableAddress, setIsEditableAddress] = useState(false);
//   const [isEditableShebaNumber, setIsEditableShebaNumber] = useState(false);

//   // تابع ارسال داده‌ها
//   const handleSubmit = async () => {
//     const authToken = localStorage.getItem("authToken");

//     const data = {
//       // first_name: firstName,
//       // last_name: firstName.split(" ")[1] || "",
//       // card_number: cardNumber,
//       // phone_number: phoneNumber,
//       // emergency_number: emergencyNumber,
//       // home_number: homeNumber,
//       // national_code: nationalCode,
//       // address: address,
//       // sheba_number: shebaNumber,
 
//       // first_name: setFirstName,
//       // last_name: setFirstName.split(" ")[1] || "",
//       card_number: setCardNumber,
//       phone_number: setPhoneNumber,
//       emergency_number: setEmergencyNumber,
//       home_number: setHomeNumber,
//       national_code: setNationalCode,
//       address: setAddress,
//       sheba_number: setShebaNumber,
//     };

//     return axios.post(`https://fundcharitynet.com/api/users/edit`, data, {
//       headers: {
        
//         Authorization: `Bearer ${authToken}`,
//         id:userId,
//         "Content-Type": "application/json",
//       },
//     });
//   };
//   console.log(setIsEditableFirstName)

//   // استفاده از mutation برای ارسال داده و نمایش پیام موفقیت یا خطا
//   const mutation = useMutation(handleSubmit, {
//     onSuccess: () => alert("اطلاعات با موفقیت ثبت شد!"),
//     onError: (error) => alert(`خطا در ثبت اطلاعات: ${error.message}`),
//   });


//   return (
//     <Fragment>
//       <div className="mt-10">
//         <div className="flex">
//           <div className="relative">
//             <label className="absolute -top-2 z-10 left-[59%] px-3 bg-white dark:bg-[#4F5D74] dark:text-white py-2 ">
//               نام و نام خانوادگی
//             </label>
//             <input
//               type="text"
//               value={firstName}
//               onChange={(e) => setFirstName(e.target.value)}
//               className="border w-[100%] md:w-96 h-14 text-black pr-40 dark:bg-[#4F5D74] border-[#CACACA] dark:text-white rounded-md relative m-3"
//               disabled={!isEditableFirstName}
//             />
//             <FaEdit
//               onClick={() => setIsEditableFirstName(!isEditableFirstName)}
//               className="cursor-pointer absolute top-1/2 right-4 transform -translate-y-1/2 text-[#4FD1C5]"
//             />
//           </div>
//           <div className="relative w-full md:w-auto">
//             <label className="absolute -top-2 z-10 left-[70%] px-3 bg-white dark:bg-[#4F5D74] dark:text-white py-2">
//               شماره کارت
//             </label>
//             <input
//               type="text"
//               value={cardNumber}
//               onChange={(e) => setCardNumber(e.target.value)}
//               className="border w-96 md:w-96 h-14 border-[#CACACA] dark:bg-[#4F5D74] dark:text-white pr-32 rounded-md relative m-3"
//               disabled={!isEditableCardNumber}
//             />
//             <FaEdit
//               onClick={() => setIsEditableCardNumber(!isEditableCardNumber)}
//               className="cursor-pointer absolute top-1/2 right-4 transform -translate-y-1/2 text-[#4FD1C5]"
//             />
//           </div>
//         </div>
//         <div className="flex">
//           <div className="relative w-full md:w-auto">
//             <label className="absolute -top-2 z-10 left-[68%] px-3 bg-white dark:bg-[#4F5D74] dark:text-white py-2">
//               شماره موبایل
//             </label>
//             <input
//               type="text"
//               value={phoneNumber}
//               onChange={(e) => setPhoneNumber(e.target.value)}
//               className="border w-96 md:w-96 h-14 border-[#CACACA] dark:bg-[#4F5D74] dark:text-white pr-32 rounded-md relative m-3"
//               disabled={!isEditablePhoneNumber}
//             />
//             <FaEdit
//               onClick={() => setIsEditablePhoneNumber(!isEditablePhoneNumber)}
//               className="cursor-pointer absolute top-1/2 right-4 transform -translate-y-1/2 text-[#4FD1C5]"
//             />
//           </div>
//           <div className="relative w-full md:w-auto">
//             <label className="absolute -top-2 z-10 left-[65%] px-3 bg-white dark:bg-[#4F5D74] dark:text-white py-2">
//               شماره اضطراری
//             </label>
//             <input
//               type="text"
//               value={emergencyNumber}
//               onChange={(e) => setEmergencyNumber(e.target.value)}
//               className="border w-96 h-14 border-[#CACACA] dark:bg-[#4F5D74] dark:text-white pr-32 rounded-md relative m-3"
//               disabled={!isEditableEmergencyNumber}
//             />
//             <FaEdit
//               onClick={() =>
//                 setIsEditableEmergencyNumber(!isEditableEmergencyNumber)
//               }
//               className="cursor-pointer absolute top-1/2 right-4 transform -translate-y-1/2 text-[#4FD1C5]"
//             />
//           </div>
//         </div>
//         <div className="flex">
//           <div className="relative w-full md:w-auto">
//             <label className="absolute -top-2 z-10 left-[71%] px-3 bg-white dark:bg-[#4F5D74] dark:text-white py-2">
//               تلفن منزل
//             </label>
//             <input
//               type="text"
//               value={homeNumber}
//               onChange={(e) => setHomeNumber(e.target.value)}
//               className="border w-96 h-14 border-[#CACACA] dark:bg-[#4F5D74] dark:text-white pr-32 rounded-md relative m-3"
//               disabled={!isEditableHomeNumber}
//             />
//             <FaEdit
//               onClick={() => setIsEditableHomeNumber(!isEditableHomeNumber)}
//               className="cursor-pointer absolute top-1/2 right-4 transform -translate-y-1/2 text-[#4FD1C5]"
//             />
//           </div>
//           <div className="relative w-full md:w-auto">
//             <label className="absolute -top-2 z-10 left-[77%] px-3 bg-white dark:bg-[#4F5D74] dark:text-white py-2">
//               کد ملی
//             </label>
//             <input
//               type="text"
//               value={nationalCode}
//               onChange={(e) => setNationalCode(e.target.value)}
//               className="border w-96 h-14 border-[#CACACA] dark:bg-[#4F5D74] dark:text-white pr-32 rounded-md relative m-3"
//               disabled={!isEditableNationalCode}
//             />
//             <FaEdit
//               onClick={() => setIsEditableNationalCode(!isEditableNationalCode)}
//               className="cursor-pointer absolute top-1/2 right-4 transform -translate-y-1/2 text-[#4FD1C5]"
//             />
//           </div>
//         </div>
//         <div className="flex items-center">
//           <div className="relative w-full md:w-auto">
//             <label className="absolute -top-2 z-10 left-[79%] px-3 bg-white dark:bg-[#4F5D74] dark:text-white py-2">
//               آدرس
//             </label>
//             <textarea
//               value={address}
//               onChange={(e) => setAddress(e.target.value)}
//               className="border w-96 h-14 border-[#CACACA] dark:bg-[#4F5D74] dark:text-white pr-32 px-2 rounded-md relative m-3"
//               disabled={!isEditableAddress}
//             />
//             <FaEdit
//               onClick={() => setIsEditableAddress(!isEditableAddress)}
//               className="cursor-pointer absolute top-1/2 right-4 transform -translate-y-1/2 text-[#4FD1C5]"
//             />
//           </div>

//           <div className="relative w-full md:w-auto">
//             <label className="absolute -top-2 z-10 left-[72%] px-3 bg-white dark:bg-[#4F5D74] dark:text-white py-2">
//               شماره شبا
//             </label>
//             <input
//               type="text"
//               value={shebaNumber}
//               onChange={(e) => setShebaNumber(e.target.value)}
//               className="border w-96 h-14 border-[#CACACA] dark:bg-[#4F5D74] dark:text-white pr-32 rounded-md relative m-3"
//               disabled={!isEditableShebaNumber}
//             />
//             <FaEdit
//               onClick={() => setIsEditableShebaNumber(!isEditableShebaNumber)}
//               className="cursor-pointer absolute top-1/2 right-4 transform -translate-y-1/2 text-[#4FD1C5]"
//             />
//           </div>
//         </div>
//       </div>
//       <button
//         className="mr-48 mt-10 bg-[#4FD1C5] text-white w-96 h-12 rounded-xl px-4 py-2"
//         onClick={() => mutation.mutate()}
//       >
//         ثبت اطلاعات
//       </button>
//     </Fragment>
//   );
// };

// export default DetailUserInput;








import React, { Fragment, useState } from "react";
import { FaEdit } from "react-icons/fa";
import { useMutation } from "react-query";
import axios from "axios";

const DetailUserInput = ({ userDetail, userId }) => {
  const [firstName, setFirstName] = useState(`${userDetail.first_name || ""} ${userDetail.last_name || ""}`.trim());
  const [cardNumber, setCardNumber] = useState(userDetail.card_number || "");
  const [phoneNumber, setPhoneNumber] = useState(userDetail.phone_number || "");
  const [emergencyNumber, setEmergencyNumber] = useState(userDetail.emergency_number || "");
  const [homeNumber, setHomeNumber] = useState(userDetail.home_number || "");
  const [nationalCode, setNationalCode] = useState(userDetail.national_code || "");
  const [address, setAddress] = useState(userDetail.address || "");
  const [shebaNumber, setShebaNumber] = useState(userDetail.sheba_number || "");

  
  const [isEditableFirstName, setIsEditableFirstName] = useState(false);
  const [isEditableCardNumber, setIsEditableCardNumber] = useState(false);
  const [isEditablePhoneNumber, setIsEditablePhoneNumber] = useState(false);
  const [isEditableEmergencyNumber, setIsEditableEmergencyNumber] = useState(false);
  const [isEditableHomeNumber, setIsEditableHomeNumber] = useState(false);
  const [isEditableNationalCode, setIsEditableNationalCode] = useState(false);
  const [isEditableAddress, setIsEditableAddress] = useState(false);
  const [isEditableShebaNumber, setIsEditableShebaNumber] = useState(false);

  
  const handleSubmit = async () => {
    const authToken = localStorage.getItem("authToken");

    
    const data = {
      ...(isEditableFirstName && { first_name: firstName.split(" ")[0], last_name: firstName.split(" ")[1] || "" }),
      ...(isEditableCardNumber && { card_number: cardNumber }),
      ...(isEditablePhoneNumber && { phone_number: phoneNumber }),
      ...(isEditableEmergencyNumber && { emergency_number: emergencyNumber }),
      ...(isEditableHomeNumber && { home_number: homeNumber }),
      ...(isEditableNationalCode && { national_code: nationalCode }),
      ...(isEditableAddress && { address: address }),
      ...(isEditableShebaNumber && { sheba_number: shebaNumber })
    };

    return axios.post("https://fundcharitynet.com/api/users/edit", data, {
      headers: {
        Authorization: `Bearer ${authToken}`,
        id: userId,
        "Content-Type": "application/json",
      },
    });
  };


  const mutation = useMutation(handleSubmit, {
    onSuccess: () => alert("اطلاعات با موفقیت ثبت شد!"),
    onError: (error) => alert(`خطا در ثبت اطلاعات: ${error.message}`),
  });


  return (
    <Fragment>
      <div className="mt-10">
        <div className="flex">
          <div className="relative">
            <label className="absolute -top-2 z-10 left-[59%] px-3 bg-white dark:bg-[#4F5D74] dark:text-white py-2 ">
              نام و نام خانوادگی
            </label>
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="border w-[100%] md:w-96 h-14 text-black pr-40 dark:bg-[#4F5D74] border-[#CACACA] dark:text-white rounded-md relative m-3"
              disabled={!isEditableFirstName}
            />
            <FaEdit
              onClick={() => setIsEditableFirstName(!isEditableFirstName)}
              className="cursor-pointer absolute top-1/2 right-4 transform -translate-y-1/2 text-[#4FD1C5]"
            />
          </div>
          <div className="relative w-full md:w-auto">
            <label className="absolute -top-2 z-10 left-[70%] px-3 bg-white dark:bg-[#4F5D74] dark:text-white py-2">
              شماره کارت
            </label>
            <input
              type="text"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
              className="border w-96 md:w-96 h-14 border-[#CACACA] dark:bg-[#4F5D74] dark:text-white pr-32 rounded-md relative m-3"
              disabled={!isEditableCardNumber}
            />
            <FaEdit
              onClick={() => setIsEditableCardNumber(!isEditableCardNumber)}
              className="cursor-pointer absolute top-1/2 right-4 transform -translate-y-1/2 text-[#4FD1C5]"
            />
          </div>
        </div>
        <div className="flex">
          <div className="relative w-full md:w-auto">
            <label className="absolute -top-2 z-10 left-[68%] px-3 bg-white dark:bg-[#4F5D74] dark:text-white py-2">
              شماره موبایل
            </label>
            <input
              type="text"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="border w-96 md:w-96 h-14 border-[#CACACA] dark:bg-[#4F5D74] dark:text-white pr-32 rounded-md relative m-3"
              disabled={!isEditablePhoneNumber}
            />
            <FaEdit
              onClick={() => setIsEditablePhoneNumber(!isEditablePhoneNumber)}
              className="cursor-pointer absolute top-1/2 right-4 transform -translate-y-1/2 text-[#4FD1C5]"
            />
          </div>
          <div className="relative w-full md:w-auto">
            <label className="absolute -top-2 z-10 left-[65%] px-3 bg-white dark:bg-[#4F5D74] dark:text-white py-2">
              شماره اضطراری
            </label>
            <input
              type="text"
              value={emergencyNumber}
              onChange={(e) => setEmergencyNumber(e.target.value)}
              className="border w-96 h-14 border-[#CACACA] dark:bg-[#4F5D74] dark:text-white pr-32 rounded-md relative m-3"
              disabled={!isEditableEmergencyNumber}
            />
            <FaEdit
              onClick={() =>
                setIsEditableEmergencyNumber(!isEditableEmergencyNumber)
              }
              className="cursor-pointer absolute top-1/2 right-4 transform -translate-y-1/2 text-[#4FD1C5]"
            />
          </div>
        </div>
        <div className="flex">
          <div className="relative w-full md:w-auto">
            <label className="absolute -top-2 z-10 left-[71%] px-3 bg-white dark:bg-[#4F5D74] dark:text-white py-2">
              تلفن منزل
            </label>
            <input
              type="text"
              value={homeNumber}
              onChange={(e) => setHomeNumber(e.target.value)}
              className="border w-96 h-14 border-[#CACACA] dark:bg-[#4F5D74] dark:text-white pr-32 rounded-md relative m-3"
              disabled={!isEditableHomeNumber}
            />
            <FaEdit
              onClick={() => setIsEditableHomeNumber(!isEditableHomeNumber)}
              className="cursor-pointer absolute top-1/2 right-4 transform -translate-y-1/2 text-[#4FD1C5]"
            />
          </div>
          <div className="relative w-full md:w-auto">
            <label className="absolute -top-2 z-10 left-[77%] px-3 bg-white dark:bg-[#4F5D74] dark:text-white py-2">
              کد ملی
            </label>
            <input
              type="text"
              value={nationalCode}
              onChange={(e) => setNationalCode(e.target.value)}
              className="border w-96 h-14 border-[#CACACA] dark:bg-[#4F5D74] dark:text-white pr-32 rounded-md relative m-3"
              disabled={!isEditableNationalCode}
            />
            <FaEdit
              onClick={() => setIsEditableNationalCode(!isEditableNationalCode)}
              className="cursor-pointer absolute top-1/2 right-4 transform -translate-y-1/2 text-[#4FD1C5]"
            />
          </div>
        </div>
        <div className="flex items-center">
          <div className="relative w-full md:w-auto">
            <label className="absolute -top-2 z-10 left-[79%] px-3 bg-white dark:bg-[#4F5D74] dark:text-white py-2">
              آدرس
            </label>
            <textarea
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="border w-96 h-14 border-[#CACACA] dark:bg-[#4F5D74] dark:text-white pr-32 px-2 rounded-md relative m-3"
              disabled={!isEditableAddress}
            />
            <FaEdit
              onClick={() => setIsEditableAddress(!isEditableAddress)}
              className="cursor-pointer absolute top-1/2 right-4 transform -translate-y-1/2 text-[#4FD1C5]"
            />
          </div>

          <div className="relative w-full md:w-auto">
            <label className="absolute -top-2 z-10 left-[72%] px-3 bg-white dark:bg-[#4F5D74] dark:text-white py-2">
              شماره شبا
            </label>
            <input
              type="text"
              value={shebaNumber}
              onChange={(e) => setShebaNumber(e.target.value)}
              className="border w-96 h-14 border-[#CACACA] dark:bg-[#4F5D74] dark:text-white pr-32 rounded-md relative m-3"
              disabled={!isEditableShebaNumber}
            />
            <FaEdit
              onClick={() => setIsEditableShebaNumber(!isEditableShebaNumber)}
              className="cursor-pointer absolute top-1/2 right-4 transform -translate-y-1/2 text-[#4FD1C5]"
            />
          </div>
        </div>
      </div>
      <button
        className="mr-48 mt-10 bg-[#4FD1C5] text-white w-96 h-12 rounded-xl px-4 py-2"
        onClick={() => mutation.mutate()}
      >
        ثبت اطلاعات
      </button>
    </Fragment>
  );
};

export default DetailUserInput;

