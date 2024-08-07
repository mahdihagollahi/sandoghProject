

import React from 'react'
import Image from 'next/image'
import groupImage from '@/src/app/assent/Img/adminPanel/Iconly.svg'
function NumberOfMebers() {
  const loanAplication =[
    {id:1 , number:'24'}
  ]
  return (
    <div>
        <div className='w-full flex -mt-[50%] '>
          <div className='bg-[#ffff]     rounded-md  px-4 py-5 shadow-lg flex flex-col  gap-12 md:items-center md:ml-5 xl:w-72 '>
            <div className='flex justify-between gap-20'>
            <p className='text-[#2D3748] font-bold text-sm leading-5'>
             تعداد اعضای عضو
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
              {loanAplication.number}
               نفر عضو 
                  </p>
               </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default NumberOfMebers

