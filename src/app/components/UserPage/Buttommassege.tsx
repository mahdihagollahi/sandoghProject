// import React from "react";
// import Image from "next/image";
// import masseg from "@/app/assent/Img/userPanel/Iconly (1).svg";
// import fedmassg from "@/app/assent/Img/userPanel/Iconly (2).png"

// export default function Buttommassege() {
//   return (
//     <>
//     <div className="flex flex-row w-[268px] h-[56px] gap-2 bg-white rounded-md ">
//       <div className="flex flex-row gap-[3px] hover:border-b-2 hover:border-green-600 hover:border-solid    ">
//         <Image className="w-[18px] h-[16px] mt-[18px] " src={fedmassg} alt="" />
//         <button className="text-[#9F9F9F] ">تیکت ها</button>
//       </div>
//       <div className="flex flex-row gap-[3px] hover:border-b-2 hover:border-green-600 hover:border-solid ">
//         <Image className="w-[20px] h-[20px] mt-[18px]"  src={fedmassg} alt="" />
//         <button className="text-[#9F9F9F]">پیام های سیستم</button>
//       </div>
//     </div>
//     </>
//   );
// }


import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import UserOutlineImage from "@/app/assent/Img/userPanel/Iconly (2).png";
import UserHoverImage from "@/app/assent/Img/userPanel/MassegeHoverSupport.svg";
import crossOutline from "@/app/assent/Img/userPanel/Iconly (2).png";
import crossActiveImage from "@/app/assent/Img/userPanel/MassegeHoverSupport.svg";

const RoutRequestLoan: React.FC = () => {
  const pathname = usePathname();

  return (
    <div>
      <div>
        <div className="flex w-[400px] justify-between px-10 mt-9 dark:text-white dark:bg-[#4F5D74] bg-white h-16 rounded-md shadow-md">
          <div
            className={`flex items-center gap-2 hover:border-b-2 hover:border-[#4FD1C5] ${
              pathname == "/sentedmassageuser"
                ? "border-b-2 border-[#4FD1C5]"
                : ""
            }`}
          >
            <Link href="/sentedmassageuser" className="flex items-center gap-2">
              <Image
                src={
                  pathname === "/sentedmassageuser"
                    ? UserHoverImage
                    : UserOutlineImage
                } 
                width={25}
                height={25}
                alt="all loan applications"
              />
              <p className="font-bold text-sm dark:text-white text-[#2D3748]">
         تیکت ها
              </p>
            </Link>
          </div>

          <div
            className={`flex items-center gap-2 hover:border-b-2 hover:border-[#4FD1C5] ${
              pathname == "/sentmassegesystematic"
                ? "border-b-2 border-[#4FD1C5]"
                : ""
            }`}
          >
            <Link
              href="/sentmassegesystematic"
              className="flex items-center gap-2"
            >
              <Image
                src={
                  pathname === "/sentmassegesystematic"
                    ? crossActiveImage
                    : crossOutline
                }
                width={25}
                height={25}
                alt="checked requests"
              />
              <p className="font-bold text-sm dark:text-white text-[#2D3748]">پیام های سیستم
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoutRequestLoan;
