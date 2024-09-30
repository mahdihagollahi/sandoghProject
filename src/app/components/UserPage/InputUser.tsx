// import React from "react";
// import DragPhoto from "@/src/app/components/UserPage/dragphoto";
// import DragCart from "@/src/app/components/UserPage/dragcart";
// export default function inputuser() {
//   return (
//     <div className="p-4  ">
//       <div className="flex  justify-between items-center mb-2 mt-5  ">
//         <div className="mr-2 ">
//           <p className="font-bold text-lg">حساب کاربری</p>
//         </div>
//       </div>

//       <div className=" mx-auto  w-[125vh]     ">
//         <div className="bg-white shadow-lg mt-5 p-6 ">
//           <div className="flex flex-wrap justify-center items-center md:flex-wrap    ">
//             <div className="relative ">
//               <label className="absolute  z-10 left-[73%] px-3 bg-white ">
//                 * نام
//               </label>
//               <input
//                 type="text"
//                 className="border w-72  h-[32px]  text-[#050505]	border-[#B0E4DD] rounded-md relative  m-3  py-5   px-5    "
//               />
//             </div>

//             <div className="relative w-full md:w-auto ">
//               <label className="absolute  z-10 left-[59%] px-1 bg-white ">
//                 * نام خانوادگی
//               </label>
//               <input
//                 type="text"
//                 className="border w-72  h-[32px]  text-[#050505]	border-[#B0E4DD] rounded-md relative  m-3 py-5      px-5   "
//               />
//             </div>

//             <div className="relative w-full md:w-auto ">
//               <label className="absolute  z-10 left-[66%] px-3 bg-white ">
//                 * کد ملی
//               </label>
//               <input
//                 type="text"
//                 className="border w-72   h-[32px]  text-[#050505]	border-[#B0E4DD] rounded-md relative  m-3 py-5      px-5   "
//               />
//             </div>
//           </div>

//           <div className="flex flex-row gap-3 w-[60%]">
//             <div className="relative ">
//               <label className="absolute  z-10 left-[54%] px-3 bg-white ">
//                 *شماره موبایل
//               </label>
//               <input
//                 type="text"
//                 className="border w-72   h-[32px]  text-[#050505]	border-[#B0E4DD] rounded-md relative  m-3  py-5   px-5   "
//               />
//             </div>

//             <div className="relative w-full md:w-auto ">
//               <label className="absolute -top-2 z-10 left-[64%] px-1 bg-white py-2">
//                 * تلفن منزل
//               </label>
//               <input
//                 type="text"
//                 className="border  w-72   h-[32px]  text-[#050505]	border-[#B0E4DD] rounded-md relative  m-3 py-5      px-5   "
//               />
//             </div>

//             <div className="relative w-full md:w-auto ">
//               <label className="absolute  z-10 left-[43%] px-1 bg-white ">
//                 * شماره تماس ضروری
//               </label>
//               <input
//                 type="text"
//                 className="border  w-72   h-[32px]  text-[#050505]	border-[#B0E4DD] rounded-md relative  m-3  py-5  "
//                 px-5
//               />
//             </div>
//           </div>

//           <div className="flex flex-row gap-3 w-[60%] mt-10">
//             <div className="relative w-full md:w-auto ">
//               <label className="absolute  z-10 left-[71%] px-1 bg-white ">
//                 * خیابان
//               </label>
//               <input
//                 type="text"
//                 className="border  w-72   h-[32px]  text-[#050505]	border-[#B0E4DD] rounded-md relative  m-3 py-5      px-5   "
//               />
//             </div>

//             <div className="relative w-full md:w-auto ">
//               <label className="absolute  z-10 left-[75%] px-1 bg-white ">
//                 * کوچه
//               </label>
//               <input
//                 type="text"
//                 className="border  w-72   h-[32px]  text-[#050505]	border-[#B0E4DD] rounded-md relative  m-3 py-5      px-5   "
//               />
//             </div>

//             <div className="relative w-full md:w-auto ">
//               <label className="absolute  z-10 left-[77%] px-1 bg-white ">
//                 * شهر
//               </label>
//               <input
//                 type="text"
//                 className="border  w-72  h-[32px]  text-[#050505]	border-[#B0E4DD] rounded-md relative  m-3 py-5      px-5   "
//               />
//             </div>
//           </div>

//           <div className="flex flex-row gap-3 w-[60%]">
//             <div className="relative w-full md:w-auto ">
//               <label className="absolute  z-10 left-[76%] px-1 bg-white ">
//                 * پلاک
//               </label>
//               <input
//                 type="text"
//                 className="border  w-72 h-[32px]  text-[#050505]	border-[#B0E4DD] rounded-md relative  m-3 py-5      px-5   "
//               />
//             </div>

//             <div className="relative w-full md:w-auto ">
//               <label className="absolute  z-10 left-[78%] px-1 bg-white ">
//                 توضیحات بیشتر
//               </label>
//               <input
//                 type="text"
//                 className="border  w-[600px]  h-[32px]  text-[#050505]	border-[#B0E4DD] rounded-md   m-3 py-5      px-5   "
//               />
//             </div>
//           </div>

//           <div className="flex flex-row gap-3 w-[60%] mt-10">
//             <div className="relative w-full md:w-auto ">
//               <label className="absolute  z-10 left-[76%] px-1 bg-white ">
//                 * شماره شبا
//               </label>
//               <input
//                 type="text"
//                 className="border  w-[440px]  h-[32px]  text-[#050505]	border-[#B0E4DD] rounded-md relative  m-3 py-5      px-5   "
//               />
//             </div>

//             <div className="relative w-full md:w-auto ">
//               <label className="absolute  z-10 left-[75%] px-1 bg-white ">
//                 * شماره کارت
//               </label>
//               <input
//                 type="text"
//                 className="border  w-[440px]  h-[32px]  text-[#050505]	border-[#B0E4DD] rounded-md relative  m-3 py-5      px-5   "
//               />
//             </div>
//           </div>
//           <div className="flex justify-end mt-4 gap-20">
//             <DragCart />
//             <DragPhoto />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
// import React, { useState } from "react";
// import axios from "axios";
// import DragPhoto from "@/src/app/components/UserPage/dragphoto";
// import DragCart from "@/src/app/components/UserPage/dragcart";

// export default function InputUser() {
//   const [formData, setFormData] = useState({
    // first_name: "",
    // last_name: "",
    // national_id: "",
    // phone_number: "",
    // home_number: "",
    // emergency_number: "",
    // street: "",
    // alley: "",
    // city: "",
    // plaque: "",
    // additional_info: "",
    // sheba_number: "",
    // card_number: "",
    // profile: null,
    // cart: null,
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleFileChange = (name, file) => {
//     setFormData({
//       ...formData,
//       [name]: file,
//     });
//   };

//   const handleSubmit = async () => {
//     const formDataToSend = new FormData();
//     for (const key in formData) {
//       formDataToSend.append(key, formData[key]);
//     }

//     try {
//       const response = await axios.post("/api/user", formDataToSend, {
//         headers: {
//           "Content-Type": "multipart/form-data",
//         },
//       });
//       console.log("Data sent successfully:", response.data);
//     } catch (error) {
//       console.error("Error sending data:", error);
//     }
//   };

//   return (
//     <div className="p-4">
//       <div className="flex justify-between items-center mb-2 mt-5">
//         <div className="mr-2">
//           <p className="font-bold text-lg">حساب کاربری</p>
//         </div>
//       </div>

//       <div className="mx-auto w-[125vh]">
//         <div className="bg-white shadow-lg mt-5 p-6">
//           <div className="flex flex-wrap justify-center items-center md:flex-wrap">
//             <div className="relative">
//               <label className="absolute z-10 left-[73%] px-3 bg-white">* نام</label>
//               <input
//                 type="text"
//                 name="first_name"
//                 value={formData.first_name}
//                 onChange={handleInputChange}
//                 className="border w-72 h-[32px] text-[#050505] border-[#B0E4DD] rounded-md relative m-3 py-5 px-5"
//               />
//             </div>

//             <div className="relative">
//               <label className="absolute z-10 left-[59%] px-1 bg-white">* نام خانوادگی</label>
//               <input
//                 type="text"
//                 name="last_name"
//                 value={formData.last_name}
//                 onChange={handleInputChange}
//                 className="border w-72 h-[32px] text-[#050505] border-[#B0E4DD] rounded-md relative m-3 py-5 px-5"
//               />
//             </div>

//             <div className="relative">
//               <label className="absolute z-10 left-[66%] px-3 bg-white">* کد ملی</label>
//               <input
//                 type="text"
//                 name="national_id"
//                 value={formData.national_id}
//                 onChange={handleInputChange}
//                 className="border w-72 h-[32px] text-[#050505] border-[#B0E4DD] rounded-md relative m-3 py-5 px-5"
//               />
//             </div>
//           </div>

//           <div className="flex flex-row gap-3 w-[60%]">
//             <div className="relative ">
//               <label className="absolute  z-10 left-[54%] px-3 bg-white ">
//                *شماره موبایل
//               </label>
//              <input
//                 type="text"
//                 value={formData.phone_number}
//                 onChange={handleInputChange}
//                 className="border w-72   h-[32px]  text-[#050505]	border-[#B0E4DD] rounded-md relative  m-3  py-5   px-5   "
//               />
//             </div>

//             <div className="relative w-full md:w-auto ">
//               <label className="absolute -top-2 z-10 left-[64%] px-1 bg-white py-2">
//                 * تلفن منزل
//               </label>
//               <input
//                 type="text"
//                 value={formData.home_number}
//                 onChange={handleInputChange}
//                 className="border  w-72   h-[32px]  text-[#050505]	border-[#B0E4DD] rounded-md relative  m-3 py-5      px-5   "
//               />
//             </div>

//             <div className="relative w-full md:w-auto ">
//               <label className="absolute  z-10 left-[43%] px-1 bg-white ">
//                 * شماره تماس ضروری
//               </label>
//               <input
//                 type="text"
//                 value={formData.emergency_number}
//                 onChange={handleInputChange}
//                 className="border  w-72   h-[32px]  text-[#050505]	border-[#B0E4DD] rounded-md relative  m-3  py-5  "
//                 px-5
//               />
//             </div>
//           </div>

//           <div className="flex flex-row gap-3 w-[60%] mt-10">
//             <div className="relative w-full md:w-auto ">
//               <label className="absolute  z-10 left-[71%] px-1 bg-white ">
//                 * خیابان
//               </label>
//               <input
//                 type="text"
//                 value={formData.street}
//                 onChange={handleInputChange}
//                 className="border  w-72   h-[32px]  text-[#050505]	border-[#B0E4DD] rounded-md relative  m-3 py-5      px-5   "
//               />
//             </div>

//             <div className="relative w-full md:w-auto ">
//               <label className="absolute  z-10 left-[75%] px-1 bg-white ">
//                 * کوچه
//               </label>
//               <input
//                 type="text"
//                 value={formData.alley}
//                 onChange={handleInputChange}
//                 className="border  w-72   h-[32px]  text-[#050505]	border-[#B0E4DD] rounded-md relative  m-3 py-5      px-5   "
//               />
//             </div>

//             <div className="relative w-full md:w-auto ">
//               <label className="absolute  z-10 left-[77%] px-1 bg-white ">
//                 * شهر
//               </label>
//               <input
//                 type="text"
//                 value={formData.city}
//                 onChange={handleInputChange}
//                 className="border  w-72  h-[32px]  text-[#050505]	border-[#B0E4DD] rounded-md relative  m-3 py-5      px-5   "
//               />
//             </div>
//           </div>

//           <div className="flex flex-row gap-3 w-[60%]">
//             <div className="relative w-full md:w-auto ">
//               <label className="absolute  z-10 left-[76%] px-1 bg-white ">
//                 * پلاک
//               </label>
//               <input
//                 type="text"
//                 value={formData.plaque}
//                 onChange={handleInputChange}
//                 className="border  w-72 h-[32px]  text-[#050505]	border-[#B0E4DD] rounded-md relative  m-3 py-5      px-5   "
//               />
//             </div>

//             <div className="relative w-full md:w-auto ">
//               <label className="absolute  z-10 left-[78%] px-1 bg-white ">
//                 توضیحات بیشتر
//               </label>
//               <input
//                 type="text"
//                 value={formData.additional_info}
//                 onChange={handleInputChange}
//                 className="border  w-[600px]  h-[32px]  text-[#050505]	border-[#B0E4DD] rounded-md   m-3 py-5      px-5   "
//               />
//             </div>
//           </div>

//           <div className="flex flex-row gap-3 w-[60%] mt-10">
//             <div className="relative w-full md:w-auto ">
//               <label className="absolute  z-10 left-[76%] px-1 bg-white ">
//                 * شماره شبا
//               </label>
//               <input
//                 type="text"
//                 value={formData. sheba_number}
//                 onChange={handleInputChange}
//                 className="border  w-[440px]  h-[32px]  text-[#050505]	border-[#B0E4DD] rounded-md relative  m-3 py-5      px-5   "
//               />
//             </div>

//             <div className="relative w-full md:w-auto ">
//               <label className="absolute  z-10 left-[75%] px-1 bg-white ">
//                 * شماره کارت
//               </label>
//               <input
//                 type="text"
//                 value={formData. card_number}
//                 onChange={handleInputChange}
//                 className="border  w-[440px]  h-[32px]  text-[#050505]	border-[#B0E4DD] rounded-md relative  m-3 py-5      px-5   "
//               />
//             </div>
//           <div className="flex justify-end mt-4 gap-20">
//             <DragCart onChange={(file) => handleFileChange("cart", file)} />
//             <DragPhoto onChange={(file) => handleFileChange("profile", file)} />
//           </div>

//           <button
//             onClick={handleSubmit}
//             className="mt-5 bg-blue-500 text-white px-6 py-2 rounded"
//           >
//             ارسال
//           </button>
//         </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import React, { useState } from "react";
import axios from "axios";
import DragPhoto from "@/src/app/components/UserPage/dragphoto";
import DragCart from "@/src/app/components/UserPage/dragcart";

export default function InputUser() {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    national_id: "",
    phone_number: "",
    home_number: "",
    emergency_number: "",
    street: "",
    alley: "",
    city: "",
    plaque: "",
    additional_info: "",
    sheba_number: "",
    card_number: "",
    profile: null,
    cart: null,
  });

  const handleChange = (e:any) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    const token = localStorage.getItem("authToken");

    if (!token) {
      alert("توکن یافت نشد. لطفا وارد حساب کاربری شوید.");
      return;
    }

    try {
      const response = await axios.post(
        "https://mohammadelia30.ir/shabab/api/auth/edit",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      alert("اطلاعات با موفقیت ارسال شد!");
    } catch (error) {
      console.error("خطا در ارسال اطلاعات:", error);
      alert("خطا در ارسال اطلاعات. لطفا دوباره تلاش کنید.");
    }
  };

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-2 mt-5">
        <div className="mr-2">
          <p className="font-bold text-lg">حساب کاربری</p>
        </div>
      </div>

      <div className="mx-auto w-[125vh]">
        <div className="bg-white shadow-lg mt-5 p-6">
          <div className="flex flex-wrap justify-center items-center md:flex-wrap">
            <div className="relative">
              <label className="absolute z-10 left-[73%] px-3 bg-white">* نام</label>
              <input
                type="text"
                name="first_name"
                value={formData.first_name}
                onChange={handleChange}
                className="border w-72 h-[32px] text-[#050505] border-[#B0E4DD] rounded-md relative m-3 py-5 px-5"
              />
            </div>
            <div className="relative w-full md:w-auto">
              <label className="absolute z-10 left-[59%] px-1 bg-white">* نام خانوادگی</label>
              <input
                type="text"
                name="last_name"
                value={formData.last_name}
                onChange={handleChange}
                className="border w-72 h-[32px] text-[#050505] border-[#B0E4DD] rounded-md relative m-3 py-5 px-5"
              />
            </div>
            <div className="relative w-full md:w-auto">
              <label className="absolute z-10 left-[66%] px-3 bg-white">* کد ملی</label>
              <input
                type="text"
                name="national_id"
                value={formData.national_id}
                onChange={handleChange}
                className="border w-72 h-[32px] text-[#050505] border-[#B0E4DD] rounded-md relative m-3 py-5 px-5"
              />
            </div>
          </div>

          <div className="flex flex-row gap-3 w-[60%]">
            <div className="relative">
              <label className="absolute z-10 left-[54%] px-3 bg-white">*شماره موبایل</label>
              <input
                type="text"
                name="phone_number"
                value={formData.phone_number}
                onChange={handleChange}
                className="border w-72 h-[32px] text-[#050505] border-[#B0E4DD] rounded-md relative m-3 py-5 px-5"
              />
            </div>
            <div className="relative w-full md:w-auto">
              <label className="absolute -top-2 z-10 left-[64%] px-1 bg-white py-2">* تلفن منزل</label>
              <input
                type="text"
                name="home_number"
                value={formData.home_number}
                onChange={handleChange}
                className="border w-72 h-[32px] text-[#050505] border-[#B0E4DD] rounded-md relative m-3 py-5 px-5"
              />
            </div>
            <div className="relative w-full md:w-auto">
              <label className="absolute z-10 left-[43%] px-1 bg-white">* شماره تماس ضروری</label>
              <input
                type="text"
                name="emergency_number"
                value={formData.emergency_number}
                onChange={handleChange}
                className="border w-72 h-[32px] text-[#050505] border-[#B0E4DD] rounded-md relative m-3 py-5"
              />
            </div>
          </div>

          {/* بقیه input ها به همین ترتیب */}
          
          <div className="flex justify-end mt-4 gap-20">
            <DragCart />
            <DragPhoto />
          </div>

          <div className="flex justify-center mt-8">
            <button
              onClick={handleSubmit}
              className="bg-blue-500 text-white px-4 py-2 rounded-md"
            >
              ارسال اطلاعات
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
