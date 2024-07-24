import React from 'react'
import Image from 'next/image';
import arrowImage from '../assent/Img/adminPanel/back.svg'

function inputPassword() {
  return (
    <div className='p-4  '>
        <div className='flex  justify-between items-center mb-2 mt-5  '>
            <div className='mr-2 '>
                <p className='font-bold text-lg'>
                تعیین رمز کاربران      
                </p>
            </div>
            <div className='flex justify-end mr-2  '>
              <a href="" className='flex items-center'>
              بازگشت
              <Image
                src={arrowImage}
                width={38}
                height={38}
                alt='arrow'

                />
              </a>
              
            </div>
        </div>
      
        <div className=' mx-auto  w-[125vh]     '>

            <div className='bg-white shadow-lg mt-5 p-6 md:p-10 rounded-sm'>


            <div className='flex flex-wrap justify-center items-center gap-4 md:flex-wrap    '>
              
                   
              <div className='relative w-full md:w-auto'>
              
                  
               <label className='absolute -top-2 z-10 left-[73%] px-3 bg-white py-2'>
                   نام کاربری
                 </label>
                 <input type="text" className="border w-96 md:w-96  h-14 border-[#CACACA] rounded-md relative  m-3	"  />

             
               

              </div>
         

              <div className='relative w-full md:w-auto '>
              
                  
              <label className='absolute -top-2 z-10 left-[68%] px-3 bg-white py-2'>
              شماره موبایل

                </label>
                <input type="text" className="border w-96 md:w-96 h-14 border-[#CACACA] rounded-md relative  m-3	"  />

            
              

             </div>
        
      
            </div>



          

            <div className=' flex justify-center mt-20'>
               <button className='w-[30vw] md:w-2/3 lg:w-3/4  flex items-center justify-center h-14 rounded-md  bg-[#4FD1C5] text-white font-bold text-base whitespace-nowrap '>
               ذخیره اطلاعات
               </button>
            </div>

            </div>
          
        </div>
    </div>
  )
}

export default inputPassword









