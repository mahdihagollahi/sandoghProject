import React from "react";
import Image from 'next/image'
import Link from "next/link";

import computerpepole from "@/app/assent/Img/userPanel/camputerpepole.svg";

export default function Supportbox() {
    return (
        <div className="w-[43%] bg-white h-[95%] p-5 text-right rounded-md shadow-md">
            <h2 className="font-bold">نیاز به پشتیبانی دارید ؟</h2>
            <p className="mt-8 text-slate-600">
                اگر مشکلی برایتان بوجود آمده همین حالا به مدیر صندوق پیام دهید یا
                میتوانید بصورت مستقیم تماس بگیرید
            </p>
            <div className="flex flex-row gap-3 mt-8">
                <div className="flex flex-col items-center mt-10 gap-3">
                    <Link href='/supportticket'>
                   
                    <button className="w-72 h-12 px-4 flex items-center justify-center border text-[#394860] border-[#394860] rounded-lg">
                        پیام به مدیر صندوق
                    </button>
                    </Link>
                </div>
                <div className="flex items-center justify-center ">
                    <Image className="xl:-mt-8" src={computerpepole} alt="computer people" />
                </div>
            </div>
        </div>
    );
}
