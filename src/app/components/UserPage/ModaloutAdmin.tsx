// "use client";
// import React from "react";
// import Link from "next/link";
// import axios from "axios";

// interface ModaloutProps{
//   handleCloseModal: () => void;
// }

// const Modalout:  React.FC<ModaloutProps>=({handleCloseModal}) =>{
//   const handleLogout = async (e: React.MouseEvent<HTMLButtonElement>) => {
//     e.preventDefault(); // جلوگیری از رفتار پیش‌فرض لینک
//     try {
//       const response = await axios.post("https://shabab.v1r.ir/api/auth/logout", {}, {
//         headers: {
//           "Content-Type": "application/json",
//         },
//       });

//       if (response.status === 200) {
//         // اگر خروج موفقیت‌آمیز بود، لینک مخفی را به صورت برنامه‌ریزی شده کلیک کنید
//         const hiddenLogoutLink = document.getElementById("hidden-logout-link") as HTMLAnchorElement;
//         if (hiddenLogoutLink) {
//           hiddenLogoutLink.click();
//         }
//       } else {
//         console.error("خروج ناموفق بود");
//       }
//     } catch (error) {
//       console.error("خطا در خروج:", error);
//     }
//   };
//   return (
//     <>
//       <div className="flex flex-col justify-center items-center gap-3 w-96 shadow-md p-8 rounded-md ">
//         <h4 className="font-bold">خروج</h4>
//         <p>آیا ازخروج خود اطمینان دارید؟</p>
//         <div className="flex flex-row-reverse gap-2">
//           <Link href='/loginuser'>
          
//           <button className="text-red-500  py-2 px-10 hover:bg-[#FFF2F2] hover:rounded-md">خروج</button>
//           </Link>
//           <Link href='/dashboarduser'>
//           <button className="text-[#1D91CC] py-2 px-10 hover:bg-blue-100 hover:rounded-md " onClick={handleCloseModal}>بازگشت</button>
//           </Link>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Modalout;






// interface ModaloutProps {
//   handleCloseModal: () => void;
// }

"use client";
import React from "react";
import Link from "next/link";

interface ModaloutProps {
  handleCloseModal: () => void;
}

const Modalout: React.FC<ModaloutProps> = ({ handleCloseModal }) => {
  return (
    <div className="flex flex-col justify-center items-center gap-3 w-96 dark:bg-black bg-white shadow-md p-8 rounded-md">
      <h4 className="font-bold dark:text-white">خروج</h4>
      <p className="dark:text-white">آیا از خروج خود اطمینان دارید؟</p>
      <div className="flex flex-row-reverse gap-2">
        <Link href='/loginadmin'>
          <button className="text-red-500 py-2 px-10 hover:bg-[#FFF2F2] hover:rounded-md">
            خروج
          </button>
        </Link>
        <Link href='/dashboard'>
        <button
          className="text-[#1D91CC] py-2 px-10 hover:bg-blue-100 hover:rounded-md"
          onClick={handleCloseModal}
        >
          بازگشت
        </button>
        </Link>
      </div>
    </div>
  );
};

export default Modalout;
