import React from "react";

import Image from "next/image";
import vam from "@/app/assent/Img/userPanel/vam.svg";
import Link from "next/link";
export default function Requestbox() {
  return (
    <>
      <div className="w-[386px] bg-white  h-[99%] p-6 text-right rounded-md shadow-md ">
        <h2 className="font-bold mr-4">
          اگه به وام نیاز داری همین حالا درخواست بده{" "}
        </h2>
        <Image className="w-[90%] mt-[1%] mr-3" src={vam} alt="" />
        <Link href='/requestloanaplication'>
          <button className="mr-4 w-80 h-12 border text-[#394860]	border-[#394860] rounded-lg	">
            درخواست وام
          </button>
        </Link>
      </div>
    </>
  );
}
