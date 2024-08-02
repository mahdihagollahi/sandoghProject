import React from 'react'
import Image from 'next/image'
import useImage from '@/src/app/assent/Img/adminPanel/40px.png'
function AdminHeader() {
  const User =[
    {id:1 , name:'امیر محمد قنبری' , image:useImage}
  ]
  return (
    <div  className='w-full    '>
        <div className=' flex gap-4 flex-col md:flex-row justify-between bg-[#FFFFFF] w-[72%] mt-4  ml-3 md:mr-20 md:ml-3   lg:mr-20 lg:ml-3  xl:mr-96  rounded-md shadow-lg  py-3 px-6 h-auto md:h-16 '>
        <div className='flex items-center mb-4 md:mb-0 '>
            <p className='mt-1 text-[#2D3748] font-light text-lg  '>
                سلام ،  وقت شما بخیر  به بخش داشبورد خوش آمدید ، گزارشات مورد نیاز شما در اختیار شماست !
            </p>
        </div>
        <div className='flex justify-between gap-4'>

            <div>
            <Image className='bg-[#FFFFFF] rounded-full ' src={User[0].image} alt='user' width={40} height={40}/>

            </div>
            <div className='hidden lg:inline lg:h-auto md:mb-4 '>
               <p className=' text-[#2D3748] mt-2 flex items-center  font-medium text-base  '>
              {User[0].name}
               </p>
            </div>
        </div>
        </div>
       
      
    </div>
  )
}

export default AdminHeader