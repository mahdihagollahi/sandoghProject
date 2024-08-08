import React, { useState } from 'react'
import Image from 'next/image';
import arrowImage from '@/src/app/assent/Img/adminPanel/back.svg'

function SaveInformation() {
  const [name , setName]=useState<string>('')
  const [lastname , setLastname]=useState<string>('')
  const [national , setNational]=useState<string>('')
  const [phonenumber , setPhonenumber]=useState<string>('')
  return (
    <div className='p-4  '>
        <div className='flex  justify-between items-center mb-2 mt-5  '>
            <div className='mr-2 '>
                <p className='font-bold text-lg'>
                حساب مدیریت
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

            <div className='bg-white shadow-lg mt-5 p-6 md:p-10'>


            <div className='flex flex-wrap justify-center items-center gap-4 md:flex-wrap    '>
              
                   
              <div className='relative w-full md:w-auto'>
              
                  
               <label className='absolute -top-2 z-10 left-[83%] px-3 bg-white py-2'>
                   نام
                 </label>
                 <input type="text" className="border pr-4 w-96 md:w-96  h-14 border-[#CACACA] rounded-md relative  m-3	" 
                 value={name}
                 onChange={(e)=>setName(e.target.value)}
                 
                 />

             
               

              </div>
         

              <div className='relative w-full md:w-auto '>
              
                  
              <label className='absolute -top-2 z-10 left-[68%] px-3 bg-white py-2'>
              نام خانوادگی
                </label>
                <input type="text" className="border w-96 pr-4 md:w-96 h-14 border-[#CACACA] rounded-md relative  m-3	"  
                  value={lastname}
                  onChange={(e)=>setLastname(e.target.value)}
                />

            
              

             </div>
        
      
            </div>



             <div className='flex flex-wrap justify-center items-center gap-4 md:flex-wrap    '>
     
          
     <div className='relative w-full md:w-auto '>
     
         
      <label className='absolute -top-2 z-10 left-[67%] px-3 bg-white py-2'>
      شماره موبایل
        </label>
        <input type="text" className="border pr-4 md:w-96 w-96 h-14 border-[#CACACA] rounded-md relative  m-3	" 
          value={phonenumber}
          onChange={(e)=>setPhonenumber(e.target.value)}
        
        />

    
      

     </div>


     <div className='relative  w-full md:w-auto '>
     
         
     <label className='absolute -top-2 z-10 left-[76%] px-3 bg-white  py-2 whitespace-nowrap'>
     کد ملی
       </label>
       <input type="text" className="border pr-4 w-96 md:w-96 h-14 border-[#CACACA] rounded-md relative  m-3	"  
       
       value={national}
          onChange={(e)=>setNational(e.target.value)}
       />

   
     

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

export default SaveInformation









