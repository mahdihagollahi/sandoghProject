import React from 'react'
import Image from 'next/image'
import groupImage from '@/src/app/assent/Img/adminPanel/Iconly copy.svg'

function LoanApplication() {
  return (
    <div>
        <div className='w-full flex -mt-[54%]   '>
          <div className='bg-[#ffff]     rounded-md  px-4 py-5 shadow-lg flex flex-col  gap-12 md:items-center xl:w-72 '>
            <div className='flex justify-between gap-20'>
            <p className='text-[#2D3748] font-bold text-sm leading-5'>
            درخواست های وام 

                         </p>
            <Image src={groupImage} width={24} height={24} alt='group'/>
           
            </div>
            <div className='flex justify-between gap-[117px] '>
               <div>
                  <p className='font-bold text-[#A0AEC0] text-xs leading-8'>
                  تعداد : 
                  </p>
               </div>
               <div>
               <p className='font-bold text-[#A0AEC0] text-xs leading-8'>
24 نفر در صف 
                  </p>
               </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default LoanApplication