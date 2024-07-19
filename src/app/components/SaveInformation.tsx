import React from 'react'
import Image from 'next/image';
import arrowImage from '../assent/Img/adminPanel/arrow.svg'

function SaveInformation() {
  return (
    <div>
        <div className='flex  mr-7'>
            <div className='mt-10'>
                <p className='font-bold text-lg'>
                حساب مدیریت
                </p>
            </div>
            <div>
                <Image
                src={arrowImage}
                width={38}
                height={38}
                alt='arrow'
                />
            </div>
        </div>
      
        <div className='w-[60%] h-96    '>

            <div className='bg-white shadow-lg mt-20 px-96 py-10'>


            <div className='flex justify-center items-center  '>
              
                   
              <div className='relative '>
              
                  
               <label className='absolute -top-2 z-10 left-[83%] px-3 bg-white py-2'>
                   نام
                 </label>
                 <input type="text" className="border w-96 h-14 border-[#CACACA] rounded-md relative  m-3	"  />

             
               

              </div>
         

              <div className='relative '>
              
                  
              <label className='absolute -top-2 z-10 left-[68%] px-3 bg-white py-2'>
              نام خانوادگی
                </label>
                <input type="text" className="border w-96 h-14 border-[#CACACA] rounded-md relative  m-3	"  />

            
              

             </div>
        
      
            </div>



             <div className='flex justify-center items-center  '>
     
          
     <div className='relative '>
     
         
      <label className='absolute -top-2 z-10 left-[67%] px-3 bg-white py-2'>
      شماره موبایل
        </label>
        <input type="text" className="border w-96 h-14 border-[#CACACA] rounded-md relative  m-3	"  />

    
      

     </div>


     <div className='relative '>
     
         
     <label className='absolute -top-2 z-10 left-[76%] px-3 bg-white  py-2 whitespace-nowrap'>
     کد ملی
       </label>
       <input type="text" className="border w-96 h-14 border-[#CACACA] rounded-md relative  m-3	"  />

   
     

    </div>


            </div>

            <div className=' flex justify-center mt-20'>
               <button className='w-[30vw]  flex items-center justify-center h-14 rounded-md px-64 bg-[#4FD1C5] text-white font-bold text-base whitespace-nowrap '>
               ذخیره اطلاعات
               </button>
            </div>

            </div>
          
        </div>
    </div>
  )
}

export default SaveInformation







