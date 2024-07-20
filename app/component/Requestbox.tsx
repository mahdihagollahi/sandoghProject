
import React from "react";

import Image from 'next/image'
import vam from "../vam.svg"
export default function Requestbox(){
    return(
        <>
         <div className="w-[417px] h-[350px] p-[24px] text-right rounded-md shadow-lg ">
          <h2 className="font-bold mr-4">اگه به وام نیاز داری همین حالا درخواست بده </h2>
          <Image style={{width:"90%" , marginTop:"10px",marginRight:"10px" }} src={vam} alt=""/>
          <button className="mr-4 w-[320px] h-12 border-[1px] text-[#394860]	border-[#394860] rounded-lg	">
            درخواست وام
            </button>
        </div>
        </>
    );
}