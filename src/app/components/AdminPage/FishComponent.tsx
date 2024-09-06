import React from "react";
import Image from "next/image";
import FishImg from "@/src/app/assent/Img/adminPanel/Fish.svg";
import EyeImage from "@/src/app/assent/Img/adminPanel/eyeWhite.svg";
import Link from "next/link";
function FishComponent() {
  return (
    <div>
      <div className="bg-white w-[100%] py-8 px-16 shadow-md mr-4 ">
        <div className="flex justify-center  ">
          <Image src={FishImg} width={198} height={299} alt="fish" />
        </div>
        <div className="flex justify-center mt-10">
          <Link href="/fish">
            <button className="bg-[#4FD1C5] border border-[#4FD1C5] rounded-md px-20 py-2 flex gap-2 items-center">
              <Image src={EyeImage} width={20} height={20} alt="eye" />
              <span className="text-[#FFFFFF] font-normal">بزرگنمایی</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default FishComponent;
