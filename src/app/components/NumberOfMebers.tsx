import React from 'react'
import Image from 'next/image'
import groupImage from '../assent/Img/Iconly.png'
function NumberOfMebers() {
  return (
    <div>
        <div className='w-72 h-36 mr-96 '>
          <div className='bg-[#ffff]  my-6 rounded-md  p-9 shadow-lg flex flex-col gap-9'>
            <div className='flex justify-between gap-12'>
            <div>
             <p className='text-[#2D3748] font-bold text-sm leading-5'>
             تعداد اعضای عضو
             </p>
            </div>
            <div>
            <Image src={groupImage} width={24} height={24} alt='group'/>
            </div>
            </div>
            <div className='flex justify-between'>
               <div>
                  <p className='font-bold text-[#A0AEC0] text-xs leading-8'>
                  تعداد : 
                  </p>
               </div>
               <div>
               <p className='font-bold text-[#A0AEC0] text-xs leading-8'>
               60 نفر عضو 
                  </p>
               </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default NumberOfMebers