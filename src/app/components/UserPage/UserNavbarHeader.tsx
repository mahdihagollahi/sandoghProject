
import React from 'react'
import Image from 'next/image'
import groupImage from '@/src/app/assent/Img/adminPanel/Group 39513.svg'

function UserPageNavbar() {
  return (
    <div className="bg-[#F8F9FA]">
        <div className='flex items-center mt-10 mr-10  '>
            <div className='flex gap-6 border-b-2 pb-9 w-[260px]'>
                <div className=''>
                <Image src={groupImage} width={48} height={48} alt='group'/>
                </div>
                <div className='flex items-center'>
                  <p className='font-light text-lg whitespace-nowrap'>
                  صندوق قرض الحسنه مهر
                  </p>
                </div>
                <div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default UserPageNavbar
