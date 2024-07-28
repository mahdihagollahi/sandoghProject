import React from 'react'
import Image from 'next/image'
import Money from '@/src/app/assent/Img/adminPanel/3D money card.svg'
import Link from 'next/link';
function ViewDeposit() {
  return (
    <div>
       <div className="flex items-center justify-center min-h-screen ">
        <div className='w-[442px] h-[402px] bg-white shadow-md rounded-md p-6 relative'>
           <div>
            <p className='font-medium text-base text-[#394860] mb-6 items-start'>
            مشاهده واریزی های این ماه
            </p>
           </div>
          

          

           <div className=' mt-20 '>
           <div className='flex justify-between items-center mb-4 '>
            <div className='font-normal text-sm text-[#1C1C1C]'>
                <p>
                کاربرانی که واریز کرده اند
                </p>
            </div>
            <div>
               <Link href='/deposited' passHref>
               <button className='bg-[#4FD1C5] rounded-md py-2 px-4 text-white'>
                مشاهده
               </button>
               </Link>
             
            </div>
           </div>

           <div className='flex justify-between items-center mb-4'>
            <div className='font-normal text-sm text-[#1C1C1C]'>
                <p>
                کاربرانی که هنوز واریز نکرده اند          
                </p>
            </div>
            <div>
            <Link href='/notdeposited' passHref>
               <button className='bg-[#4FD1C5] rounded-md py-2 px-4 text-white'>
                مشاهده
               </button>
               </Link>
               </div>
               </div>
               <div className="absolute bottom-4 left-4 right-4 flex justify-center">
          <Image src={Money} alt="Money illustration" />
        </div>
          
           </div>
        </div>
    </div>
    </div>
  )
}

export default ViewDeposit