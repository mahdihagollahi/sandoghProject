import React from 'react'
import Image from 'next/image'
import groupImage from '../assent/Img/adminPanel/Group 39513.png'

function AdminPageNavbar() {
  return (
    <div>
        <div className='flex items-center mt-10 mr-10  '>
            <div className='flex gap-6 border-b-2 pb-9 w-52'>
                <div className=''>
                <Image src={groupImage} width={24} height={24} alt='group'/>

                </div>
                <div className='flex items-center'>
                  <p className='w-[163px]'>
                  صندوق قرض الحسنه مهر
                  </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AdminPageNavbar