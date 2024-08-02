import React from "react";
import Image from 'next/image'

import computerpepole from "@/src/app/assent/Img/userPanel/camputerpepole.svg";

export default function Supportbox() {
    return (
        <div className="w-[43%] h-[95%] p-5 text-right rounded-md shadow-md">
            <h2 className="font-bold">نیاز به پشتیبانی دارید ؟</h2>
            <p className="mt-8 text-slate-600">
                اگر مشکلی برایتان بوجود آمده همین حالا به مدیر صندوق پیام دهید یا
                میتوانید بصورت مستقیم تماس بگیرید
            </p>
            <div className="flex flex-row gap-3 mt-8">
                <div className="flex flex-col gap-3">
                    <button className="w-72 h-12 px-4 flex items-center justify-center border text-[#394860] border-[#394860] rounded-lg">
                        پیام به مدیر صندوق
                    </button>
                    <button className="w-72 h-12 px-4 flex items-center justify-center border text-[#394860] border-[#394860] rounded-lg">
                        تماس با مدیر صندوق
                    </button>
                </div>
                <div className="flex items-center justify-center ">
                    <Image className="xl:-mt-8" src={computerpepole} alt="computer people" />
                </div>
            </div>
        </div>
    );
}
