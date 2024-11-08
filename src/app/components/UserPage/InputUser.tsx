// import React, { useState } from "react";
// import axios from "axios";
// import DragPhoto from "@/app/components/UserPage/dragphoto";
// import DragCart from "@/app/components/UserPage/dragcart";

// export default function InputUser() {
//   const [formData, setFormData] = useState({
//     first_name: "",
//     last_name: "",
//     // national_id: "",
//     // phone_number: "",
//     home_number: "",
//     emergency_number: "",
//     // street: "",
//     // alley: "",
//     // city: "",
//     // plaque: "",
//     // additional_info: "",
//     sheba_number: "",
//     card_number: "",
//     father_name: "",
//     profile: null,
//     cart: null,
//     address: "",
//   });

//   const handleChange = (e: any) => {
//     const { name, value } = e.target;
//     setFormData((prevState) => ({
//       ...prevState,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async () => {
//     const token = localStorage.getItem("authToken");

//     if (!token) {
//       alert("توکن یافت نشد. لطفا وارد حساب کاربری شوید.");
//       return;
//     }

//     try {
//       const response = await axios.post(
//         "https://fundcharitynet.com/api/auth/edit",
//         formData,
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );
//       alert("اطلاعات با موفقیت ارسال شد!");
//     } catch (error) {
//       console.error("خطا در ارسال اطلاعات:", error);
//       alert("خطا در ارسال اطلاعات. لطفا دوباره تلاش کنید.");
//     }
//   };

//   return (
//     <div className="p-4">
//       <div className="flex justify-between items-center mb-2 mt-5">
//         <div className="mr-2">
//           <p className="font-bold text-lg">حساب کاربری</p>
//         </div>
//       </div>

//       <div className="mx-auto w-[1021px]">
//         <div className="bg-white shadow-lg mt-5 p-6">
//           <div className="flex flex-wrap justify-center items-center md:flex-wrap">
//             <div className="relative">
//               <label className="absolute z-10 left-[73%] px-3 bg-white">
//                 * نام
//               </label>
//               <input
//                 type="text"
//                 name="first_name"
//                 value={formData.first_name}
//                 onChange={handleChange}
//                 className="border w-72 h-[32px] text-[#050505] border-[#B0E4DD] rounded-md relative m-3 py-5 px-5"
//               />
//             </div>
//             <div className="relative w-full md:w-auto">
//               <label className="absolute z-10 left-[59%] px-1 bg-white">
//                 * نام خانوادگی
//               </label>
//               <input
//                 type="text"
//                 name="last_name"
//                 value={formData.last_name}
//                 onChange={handleChange}
//                 className="border w-72 h-[32px] text-[#050505] border-[#B0E4DD] rounded-md relative m-3 py-5 px-5"
//               />
//             </div>
//             {/* <div className="relative w-full md:w-auto">
//               <label className="absolute z-10 left-[66%] px-3 bg-white">
//                 * کد ملی
//               </label>
//               <input
//                 type="text"
//                 name="national_id"
//                 value={formData.national_id}
//                 onChange={handleChange}
//                 className="border w-72 h-[32px] text-[#050505] border-[#B0E4DD] rounded-md relative m-3 py-5 px-5"
//               />
//             </div> */}
//           </div>

          // <div className="flex flex-row gap-3 w-[60%]">
          //   <div className="relative">
          //     <label className="absolute z-10 left-[68%] px-3 bg-white">
          //       * نام پدر
          //     </label>
          //     <input
          //       type="text"
          //       name="father_name"
          //       value={formData.father_name}
          //       onChange={handleChange}
          //       className="border w-72 h-[32px] text-[#050505] border-[#B0E4DD] rounded-md relative m-3 py-5 px-5"
          //     />
          //   </div>
//             {/* <div className="relative w-full md:w-auto">
//               <label className="absolute  z-10 left-[62%] px-1 bg-white ">
//                 *شماره موبایل
//               </label>
//               <input
//                 type="text"
//                 name="phone_number"
//                 value={formData.phone_number}
//                 onChange={handleChange}
//                 className="border w-72 h-[55px] text-[#050505] border-[#B0E4DD] rounded-md relative m-3 py-5 px-5"
//               />
//             </div> */}
            // <div className="relative w-full md:w-auto">
            //   <label className="absolute z-10 left-[43%] px-1 bg-white">
            //     * شماره تماس ضروری
            //   </label>
            //   <input
            //     type="text"
            //     name="emergency_number"
            //     value={formData.emergency_number}
            //     onChange={handleChange}
            //     className="border w-72 h-[40px] text-[#050505] border-[#B0E4DD] rounded-md relative m-3 px-5 py-5"
            //   />
            // </div>
//           </div>

//           <div className="flex flex-row gap-3 w-[60%]">
            // <div className="relative w-full md:w-auto">
            //   <label className="absolute -top-2 z-10 left-[65%] px-1 bg-white py-2">
            //     * تلفن منزل
            //   </label>
            //   <input
            //     type="text"
            //     name="home_number"
            //     value={formData.home_number}
            //     onChange={handleChange}
            //     className="border w-72 h-[32px] text-[#050505] border-[#B0E4DD] rounded-md relative m-3 py-5 px-5"
            //   />
            // </div>
//           </div>

          // <div className="flex flex-row gap-20 w-[60%]">
          //   <div className="relative w-full md:w-auto">
          //     <label className="absolute z-10 left-[78%] px-1 bg-white ">
          //       *شماره شبا{" "}
          //     </label>
          //     <input
          //       type="text"
          //       name="sheba_number"
          //       value={formData.sheba_number}
          //       onChange={handleChange}
          //       className="border w-[417px] h-[35px] text-[#050505] border-[#B0E4DD] rounded-md relative m-3 py-5 px-5"
          //     />
          //   </div>

          //   <div className="relative w-full md:w-auto">
          //     <label className="absolute -top-2 z-10 left-[75%] px-1 bg-white py-2">
          //       * شماره کارت
          //     </label>
          //     <input
          //       type="text"
          //       name="card_number"
          //       value={formData.card_number}
          //       onChange={handleChange}
          //       className="border w-[417px] h-[35px] text-[#050505] border-[#B0E4DD] rounded-md relative m-3 py-5 px-5"
          //     />
          //   </div>
          // </div>

          // <div className="relative w-full md:w-auto">
          //   <label className="absolute -top-2 z-10 left-[92%] px-1 bg-white py-2">
          //     *آدرس
          //   </label>
          //   <input
          //     type="text"
          //     name="address"
          //     value={formData.address}
          //     onChange={handleChange}
          //     className="border w-[417px] h-[35px] text-[#050505] border-[#B0E4DD] rounded-md relative m-3 py-5 px-5"
          //   />
          // </div>

//           <div className="flex justify-end mt-4 gap-20">
//             <DragCart />
//             <DragPhoto  formData={formData} handleChange={handleChange} />
//           </div>

//           <div className="flex justify-center mt-8">
//             <button
//               onClick={handleSubmit}
//               className="bg-[#4FD1C5] text-white w-96 px-4 py-2 rounded-md"
//             >
//               ارسال اطلاعات
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }




import React, { useState } from "react";
import axios from "axios";
import DragPhoto from "@/app/components/UserPage/dragphoto";
import DragCart from "@/app/components/UserPage/dragcart";

export default function InputUser() {
  // استفاده از useState برای مدیریت فرم و داده‌های انتخاب‌شده
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    home_number: "",
    emergency_number: "",
    sheba_number: "",
    card_number: "",
    father_name: "",
    profile: null as File | null, // فیلد عکس پروفایل
    cart: null as File | null, // فیلد کارت
    address: "",
  });

  // تابع handleChange برای بروزرسانی فیلدهای متنی
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // تابع برای بروزرسانی فایل انتخابی (پروفایل یا کارت)
  const handleFileChange = (name: "profile" | "cart", file: File | null) => {
    setFormData((prevState) => ({
      ...prevState,
      [name]: file,
    }));
  };

  // تابع برای ارسال اطلاعات فرم به سرور
  const handleSubmit = async () => {
    const token = localStorage.getItem("authToken");

    if (!token) {
      alert("توکن یافت نشد. لطفا وارد حساب کاربری شوید.");
      return;
    }

    // ایجاد فرم دیتا برای ارسال فایل‌ها به‌همراه سایر داده‌ها
    const data = new FormData();
    data.append("first_name", formData.first_name);
    data.append("last_name", formData.last_name);
    data.append("home_number", formData.home_number);
    data.append("emergency_number", formData.emergency_number);
    data.append("sheba_number", formData.sheba_number);
    data.append("card_number", formData.card_number);
    data.append("father_name", formData.father_name);
    data.append("address", formData.address);

    if (formData.profile) data.append("profile", formData.profile);
    if (formData.cart) data.append("cart", formData.cart);

    try {
      const response = await axios.post(
        "https://fundcharitynet.com/api/auth/edit",
        data,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
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

      <div className="mx-auto w-[1021px]">
        <div className="bg-white shadow-lg mt-5 p-6">
          <div className="flex flex-wrap justify-center items-center md:flex-wrap">
            <div className="relative">
              <label className="absolute z-10 left-[73%] px-3 bg-white">
                * نام
              </label>
              <input
                type="text"
                name="first_name"
                value={formData.first_name}
                onChange={handleChange}
                className="border w-72 h-[32px] text-[#050505] border-[#B0E4DD] rounded-md relative m-3 py-5 px-5"
              />
            </div>
            <div className="relative w-full md:w-auto">
              <label className="absolute z-10 left-[59%] px-1 bg-white">
                * نام خانوادگی
              </label>
              <input
                type="text"
                name="last_name"
                value={formData.last_name}
                onChange={handleChange}
                className="border w-72 h-[32px] text-[#050505] border-[#B0E4DD] rounded-md relative m-3 py-5 px-5"
              />
            </div>
            <div className="flex flex-row gap-3 w-[60%]">
            <div className="relative">
              <label className="absolute z-10 left-[68%] px-3 bg-white">
                * نام پدر
              </label>
              <input
                type="text"
                name="father_name"
                value={formData.father_name}
                onChange={handleChange}
                className="border w-72 h-[32px] text-[#050505] border-[#B0E4DD] rounded-md relative m-3 py-5 px-5"
              />
            </div>
            <div className="relative w-full md:w-auto">
              <label className="absolute z-10 left-[43%] px-1 bg-white">
                * شماره تماس ضروری
              </label>
              <input
                type="text"
                name="emergency_number"
                value={formData.emergency_number}
                onChange={handleChange}
                className="border w-72 h-[40px] text-[#050505] border-[#B0E4DD] rounded-md relative m-3 px-5 py-5"
              />
            </div>

            <div className="relative w-full md:w-auto">
              <label className="absolute -top-2 z-10 left-[65%] px-1 bg-white py-2">
                * تلفن منزل
              </label>
              <input
                type="text"
                name="home_number"
                value={formData.home_number}
                onChange={handleChange}
                className="border w-72 h-[32px] text-[#050505] border-[#B0E4DD] rounded-md relative m-3 py-5 px-5"
              />
            </div>
          </div>

          <div className="flex flex-row gap-20 w-[60%]">
            <div className="relative w-full md:w-auto">
              <label className="absolute z-10 left-[78%] px-1 bg-white ">
                *شماره شبا{" "}
              </label>
              <input
                type="text"
                name="sheba_number"
                value={formData.sheba_number}
                onChange={handleChange}
                className="border w-[417px] h-[35px] text-[#050505] border-[#B0E4DD] rounded-md relative m-3 py-5 px-5"
              />
            </div>

            <div className="relative w-full md:w-auto">
              <label className="absolute -top-2 z-10 left-[75%] px-1 bg-white py-2">
                * شماره کارت
              </label>
              <input
                type="text"
                name="card_number"
                value={formData.card_number}
                onChange={handleChange}
                className="border w-[417px] h-[35px] text-[#050505] border-[#B0E4DD] rounded-md relative m-3 py-5 px-5"
              />
            </div>
          </div>

          <div className="relative w-full md:w-auto">
            <label className="absolute -top-2 z-10 left-[92%] px-1 bg-white py-2">
              *آدرس
            </label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="border w-[417px] h-[35px] text-[#050505] border-[#B0E4DD] rounded-md relative m-3 py-5 px-5"
            />
          </div>
            <DragPhoto
              formData={formData.profile}
              handleChange={(file) => handleFileChange("profile", file)}
            />
            <DragCart
              formData={formData.cart}
              handleChange={(file) => handleFileChange("cart", file)}
            />
          </div>

          <button
            onClick={handleSubmit}
            className="bg-[#4FD1C5] hover:bg-[#38B2AC] text-white font-bold py-2 px-4 rounded mt-4"
          >
            ارسال اطلاعات
          </button>
        </div>
      </div>
    </div>
  );
}

