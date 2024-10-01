import React from "react";
import Link from "next/link";
import Image from "next/image";
import UserOutlineImage from "@/app/assent/Img/adminPanel/3UserOutline.svg";
import UserHoverImage from "@/app/assent/Img/adminPanel/Iconly.svg";
import crossOutline from "@/app/assent/Img/adminPanel/crossOutline.svg";
import crossActiveImage from "@/app/assent/Img/adminPanel/crossActive.svg";
import { usePathname } from "next/navigation";

function RoutTableUser() {
  const pathName = usePathname();

  return (
    <div>
      <div>
        <div className="flex w-[400px] shadow-md justify-between px-10 mt-14 mr-[18px] bg-white dark:bg-[#4F5D74] h-16 rounded-md">
          <div
            className={`flex items-center gap-2 hover:border-b-2 hover:border-[#4FD1C5] ${
              pathName == "/deposited" ? "border-b-2 border-[#4FD1C5]" : ""
            }`}
          >
            <Link href="/deposited" className="flex items-center gap-2">
              <Image
                src={
                  pathName === "/deposited"
                    ? UserHoverImage
                    : UserOutlineImage
                }
                width={25}
                height={25}
                alt="deposited"
              />
              <p className="font-bold text-sm text-[#2D3748] dark:text-white">
                واریز کرده ها
              </p>
            </Link>
          </div>

          <div
            className={`flex items-center gap-2 hover:border-b-2 hover:border-[#4FD1C5] ${
              pathName == "/notdeposited" ? "border-b-2 border-[#4FD1C5]" : ""
            }`}
          >
            <Link href="/notdeposited" className="flex items-center gap-2">
              <Image
                src={
                  pathName === "/notdeposited"
                    ? crossActiveImage
                    : crossOutline
                }
                width={25}
                height={25}
                alt="not deposited"
              />
              <p className="font-bold text-sm text-[#2D3748] dark:text-white">
                واریز نکرده ها
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RoutTableUser;
