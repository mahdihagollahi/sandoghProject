import React from 'react'
import Image from 'next/image'
import IconlyImage from '@/app/assent/Img/adminPanel/Iconly.svg'
import DeletedImage from '@/app/assent/Img/adminPanel/deleted.svg'

function RoutTableUser() {
  return (
    <div>
        <div>
            <div className='flex w-[400px] shadow-md justify-between px-10 mt-8 mr-5 bg-white h-16 rounded-md '>
              <div className='flex  items-center gap-2 active:border-b-2 active:border-[#4FD1C5]'>
                 <Image
                 src={IconlyImage}
                 width={25}
                 height={25}
                 alt='men'
                 />
                 <p className='font-bold text-sm text-[#2D3748]'> 
                 همه کاربران
                 </p>
              </div>

              <div className='flex items-center gap-2 active:border-b-2 active:border-[#4FD1C5]'>
                 <Image
                 src={DeletedImage}
                 width={25}
                 height={25}
                 alt='men'
                 />
                 <p className='font-bold text-sm text-[#2D3748]'> 
                 حذف شده ها           
                 </p>
              </div>
            </div>
        </div>
    </div>
  )
}

export default RoutTableUser