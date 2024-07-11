import React from 'react'
import Image from 'next/image'
import useImage from '../favicon.ico'
function AdminHeader() {
  return (
    <div>
        <div className='flex justify-between bg-[#FFFFFF] mt-4 mr-[31.9%] rounded-md shadow-2xl  w-2/3 py-3 px-6 h-16'>
        <div className='flex items-center'>
            <p className='mt-2 text-[#2D3748] font-light text-lg '>
                سلام ،  وقت شما بخیر  به بخش داشبورد خوش آمدید ، گزارشات مورد نیاز شما در اختیار شماست !
            </p>
        </div>
        <div className='flex justify-between'>
            <div>
            <Image src={useImage} alt='user' width={40} height={40}/>\

            </div>
            <div>
                
            </div>
        </div>
        </div>
       
      
    </div>
  )
}

export default AdminHeader