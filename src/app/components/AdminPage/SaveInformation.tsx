import React, { useState } from "react";
import Image from "next/image";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import MangmentPicture from '@/app/assent/Img/adminPanel/profilemangment.svg'

interface UserData {
  first_name: string;
  last_name: string;
  phone_number: string;
  national_code: string;
}

function SaveInformation() {
  const [name, setName] = useState<string>("");
  const [lastname, setLastname] = useState<string>("");
  const [national, setNational] = useState<string>("");
  const [phonenumber, setPhonenumber] = useState<string>("");

  const mutation = useMutation<any, Error, UserData>({
    mutationFn: async (userData: UserData) => {
      const response = await axios.post(
        "https://mohammadelia30.ir/shabab/api/users/edit",
        userData
      );
      return response.data;
    },
    onSuccess: (data) => {
      console.log("Data saved successfully:", data);
    },
    onError: (error) => {
      console.error("Error saving data:", error);
    }
  });
  

  const handleSubmit = () => {
    mutation.mutate({
      first_name: name,
      last_name: lastname,
      phone_number: phonenumber,
      national_code: national,
    });
  };

  return (
    <div className="p-4">
      <div className="flex gap-[81.5%] items-center mb-2 mt-[3.5%]">
        <div className="mr-1">
          <p className="font-bold dark:text-white text-lg whitespace-nowrap">
            پروفایل مدیریت
          </p>
        </div>
      </div>

      <div className="mx-auto w-[125vh]">
        <div className="bg-white dark:bg-[#4F5D74] shadow-md rounded-md mt-12 p-6 md:p-10 ">
          <div className="flex flex-wrap justify-center items-center gap-4 md:flex-wrap">
            <div className="relative w-full md:w-auto">
              <label className="absolute -top-2 z-10 left-[83%] px-3 dark:bg-[#4F5D74] dark:text-white bg-white py-2">
                نام
              </label>
              <input
                type="text"
                className="border pr-4 w-96 md:w-96 h-14 border-[#CACACA] dark:bg-[#4F5D74] rounded-md relative m-3"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="relative w-full md:w-auto">
              <label className="absolute -top-2 z-10 left-[68%] px-3 dark:bg-[#4F5D74] dark:text-white bg-white py-2">
                نام خانوادگی
              </label>
              <input
                type="text"
                className="border w-96 pr-4 md:w-96 h-14 border-[#CACACA dark:bg-[#4F5D74] rounded-md relative m-3"
                value={lastname}
                onChange={(e) => setLastname(e.target.value)}
              />
            </div>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-4 md:flex-wrap">
            <div className="relative w-full md:w-auto">
              <label className="absolute -top-2 z-10 left-[67%] px-3 dark:bg-[#4F5D74] dark:text-white bg-white py-2">
                شماره موبایل
              </label>
              <input
                type="text"
                className="border pr-4 md:w-96 w-96 h-14 border-[#CACACA] dark:bg-[#4F5D74] rounded-md relative m-3"
                value={phonenumber}
                onChange={(e) => setPhonenumber(e.target.value)}
              />
            </div>

            <div className="relative w-full md:w-auto">
              <label className="absolute -top-2 z-10 left-[76%] px-3 bg-white dark:bg-[#4F5D74] dark:text-white py-2 whitespace-nowrap">
                کد ملی
              </label>
              <input
                type="text"
                className="border pr-4 w-96 md:w-96 h-14 border-[#CACACA] dark:bg-[#4F5D74] rounded-md relative m-3"
                value={national}
                onChange={(e) => setNational(e.target.value)}
              />
            </div>
          </div>

          <div className="flex justify-center mt-20">
            <button
              onClick={handleSubmit}
              className="w-[30vw] md:w-2/3 xl:mb-10 lg:w-3/4 flex items-center justify-center h-14 rounded-md bg-[#4FD1C5] text-white font-bold text-base whitespace-nowrap"
            >
              ذخیره اطلاعات
            </button>
          </div>
          <div className="flex justify-center mt-2 ">
        <Image
          src={MangmentPicture}
          width={520}
          height={467}
          alt=""
          />
        </div> 
        </div>
        
       
      </div>
    </div>
  );
}

export default SaveInformation;

// import React, { useState } from "react";
// import Image from "next/image";
// import { useMutation } from "@tanstack/react-query";
// import axios from "axios";
// import MangmentPicture from '@/src/app/assent/Img/adminPanel/profilemangment.svg'

// interface UserData {
//   first_name: string;
//   last_name: string;
//   phone_number: string;
//   national_code: string;
// }

// function SaveInformation() {
//   const [name, setName] = useState<string>("");
//   const [lastname, setLastname] = useState<string>("");
//   const [national, setNational] = useState<string>("");
//   const [phonenumber, setPhonenumber] = useState<string>("");

//   const mutation = useMutation<any, Error, UserData>({
//     mutationFn: async (userData: UserData) => {
//       const response = await axios.post(
//         "https://mohammadelia30.ir/shabab/api/users/edit",
//         userData
//       );
//       return response.data;
//     },
//     onSuccess: (data) => {
//       console.log("Data saved successfully:", data);
//     },
//     onError: (error) => {
//       console.error("Error saving data:", error);
//     }
//   });

//   const handleSubmit = () => {
//     mutation.mutate({
//       first_name: name,
//       last_name: lastname,
//       phone_number: phonenumber,
//       national_code: national,
//     });
//   };

//   return (
//     <div className="p-4">
//       <div className="flex gap-[81.5%] items-center mb-2 mt-[3.5%]">
//         <div className="mr-1">
//           <p className="font-bold dark:text-white text-lg whitespace-nowrap">
//             پروفایل مدیریت
//           </p>
//         </div>
//       </div>

//       <div className="mx-auto w-[125vh]">
//         <div className="bg-white dark:bg-[#4F5D74] shadow-md rounded-md mt-12 p-6 md:p-10 ">
//           <div className="flex flex-wrap justify-center items-center gap-4 md:flex-wrap">
//             <div className="relative w-full md:w-auto">
//               <label className="absolute -top-2 z-10 left-[83%] px-3 dark:bg-[#4F5D74] dark:text-white bg-white py-2">
//                 نام
//               </label>
//               <input
//                 type="text"
//                 className="border pr-4 w-96 md:w-96 h-14 border-[#CACACA] dark:bg-[#4F5D74] rounded-md relative m-3"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//               />
//             </div>

//             <div className="relative w-full md:w-auto">
//               <label className="absolute -top-2 z-10 left-[68%] px-3 dark:bg-[#4F5D74] dark:text-white bg-white py-2">
//                 نام خانوادگی
//               </label>
//               <input
//                 type="text"
//                 className="border w-96 pr-4 md:w-96 h-14 border-[#CACACA dark:bg-[#4F5D74] rounded-md relative m-3"
//                 value={lastname}
//                 onChange={(e) => setLastname(e.target.value)}
//               />
//             </div>
//           </div>

//           <div className="flex flex-wrap justify-center items-center gap-4 md:flex-wrap">
//             <div className="relative w-full md:w-auto">
//               <label className="absolute -top-2 z-10 left-[67%] px-3 dark:bg-[#4F5D74] dark:text-white bg-white py-2">
//                 شماره موبایل
//               </label>
//               <input
//                 type="text"
//                 className="border pr-4 md:w-96 w-96 h-14 border-[#CACACA] dark:bg-[#4F5D74] rounded-md relative m-3"
//                 value={phonenumber}
//                 onChange={(e) => setPhonenumber(e.target.value)}
//               />
//             </div>

//             <div className="relative w-full md:w-auto">
//               <label className="absolute -top-2 z-10 left-[76%] px-3 bg-white dark:bg-[#4F5D74] dark:text-white py-2 whitespace-nowrap">
//                 کد ملی
//               </label>
//               <input
//                 type="text"
//                 className="border pr-4 w-96 md:w-96 h-14 border-[#CACACA] dark:bg-[#4F5D74] rounded-md relative m-3"
//                 value={national}
//                 onChange={(e) => setNational(e.target.value)}
//               />
//             </div>
//           </div>

//           <div className="flex justify-center mt-20">
//             <button
//               onClick={handleSubmit}
//               className="w-[30vw] md:w-2/3 xl:mb-10 lg:w-3/4 flex items-center justify-center h-14 rounded-md bg-[#4FD1C5] text-white font-bold text-base whitespace-nowrap"
//               disabled={mutation.isLoading} 
//             >
//               {mutation.isLoading ? "در حال ارسال..." : "ذخیره اطلاعات"} {/* نمایش پیغام در حال ارسال */}
//             </button>
//           </div>
          
//           <div className="flex justify-center mt-2 ">
//             <Image
//               src={MangmentPicture}
//               width={520}
//               height={467}
//               alt=""
//             />
//           </div> 
//         </div>
//       </div>
//     </div>
//   );
// }

// export default SaveInformation;


