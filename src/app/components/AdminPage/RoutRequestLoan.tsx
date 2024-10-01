import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import UserOutlineImage from "@/app/assent/Img/adminPanel/Wallet.svg";
import UserHoverImage from "@/app/assent/Img/adminPanel/WaletHover.svg";
import crossOutline from "@/app/assent/Img/adminPanel/checked.svg";
import crossActiveImage from "@/app/assent/Img/adminPanel/checkedHover.svg";

const RoutRequestLoan: React.FC = () => {
  const pathname = usePathname();

  return (
    <div>
      <div>
        <div className="flex w-[400px] justify-between px-10 mt-9 dark:text-white dark:bg-[#4F5D74] bg-white h-16 rounded-md shadow-md">
          <div
            className={`flex items-center gap-2 hover:border-b-2 hover:border-[#4FD1C5] ${
              pathname == "/allloanaplication"
                ? "border-b-2 border-[#4FD1C5]"
                : ""
            }`}
          >
            <Link href="/allloanaplication" className="flex items-center gap-2">
              <Image
                src={
                  pathname === "/allloanaplication"
                    ? UserHoverImage
                    : UserOutlineImage
                } 
                width={25}
                height={25}
                alt="all loan applications"
              />
              <p className="font-bold text-sm dark:text-white text-[#2D3748]">
                درحال انتظار
              </p>
            </Link>
          </div>

          <div
            className={`flex items-center gap-2 hover:border-b-2 hover:border-[#4FD1C5] ${
              pathname == "/checkedrequestloan"
                ? "border-b-2 border-[#4FD1C5]"
                : ""
            }`}
          >
            <Link
              href="/checkedrequestloan"
              className="flex items-center gap-2"
            >
              <Image
                src={
                  pathname === "/checkedrequestloan"
                    ? crossActiveImage
                    : crossOutline
                }
                width={25}
                height={25}
                alt="checked requests"
              />
              <p className="font-bold text-sm dark:text-white text-[#2D3748]">
                تعیین وضعیت
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoutRequestLoan;
