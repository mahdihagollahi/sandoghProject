import React from 'react'
import Image from 'next/image';
import arrowImage from '@/src/app/assent/Img/adminPanel/back.svg'
import DragPhoto from './DragPhoto';
import DragCart from './DragCart';

function InptUser() {
  return (
    <div className='p-4  '>
        <div className='flex  justify-between items-center mb-2 mt-5  '>
            <div className='mr-2 '>
                <p className='font-bold text-lg'>
                حساب کاربری                
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

            <div className='bg-white shadow-lg mt-5 p-6 '>



         



            <div className='flex flex-wrap justify-center items-center md:flex-wrap    '>
              
                   
            
        <div className="relative ">
          <label className="absolute -top-2 z-10 left-[73%] px-3 bg-white py-2">
            * نام
          </label>
          <input
            type="text"
            className="border w-[282px]  h-[32px]  text-[#050505]	border-[#B0E4DD] rounded-md relative  m-3  py-5"
          />
        </div>

        <div className="relative w-full md:w-auto ">
          <label className="absolute -top-2 z-10 left-[59%] px-1 bg-white py-2">
            * نام خانوادگی
          </label>
          <input
            type="text"
            className="border  w-[282px]  h-[32px]  text-[#050505]	border-[#B0E4DD] rounded-md relative  m-3 py-5 "
          />
        </div>

        <div className="relative w-full md:w-auto ">
          <label className="absolute -top-2 z-10 left-[66%] px-3 bg-white py-2">
            * کد ملی
          </label>
          <input
            type="text"
            className="border  w-[282px]  h-[32px]  text-[#050505]	border-[#B0E4DD] rounded-md relative  m-3 py-5 "
          />
        </div>
      </div>

      <div className="flex flex-row gap-3 w-[60%]">
        <div className="relative ">
          <label className="absolute -top-2 z-10 left-[54%] px-3 bg-white py-2">
            *شماره موبایل
          </label>
          <input
            type="text"
            className="border w-[282px]  h-[32px]  text-[#050505]	border-[#B0E4DD] rounded-md relative  m-3  py-5"
          />
        </div>

        <div className="relative w-full md:w-auto ">
          <label className="absolute -top-2 z-10 left-[64%] px-1 bg-white py-2">
            * تلفن منزل
          </label>
          <input
            type="text"
            className="border  w-[282px]  h-[32px]  text-[#050505]	border-[#B0E4DD] rounded-md relative  m-3 py-5 "
          />
        </div>

        <div className="relative w-full md:w-auto ">
          <label className="absolute -top-2 z-10 left-[43%] px-1 bg-white py-2">
            * شماره تماس ضروری
          </label>
          <input
            type="text"
            className="border  w-[282px]  h-[32px]  text-[#050505]	border-[#B0E4DD] rounded-md relative  m-3  py-5"
          />
        </div>
      </div>

      <div className="flex flex-row gap-3 w-[60%] mt-10">
        <div className="relative w-full md:w-auto ">
          <label className="absolute -top-2 z-10 left-[71%] px-1 bg-white py-2">
            * خیابان
          </label>
          <input
            type="text"
            className="border  w-[282px]  h-[32px]  text-[#050505]	border-[#B0E4DD] rounded-md relative  m-3 py-5 "
          />
        </div>

        <div className="relative w-full md:w-auto ">
          <label className="absolute -top-2 z-10 left-[75%] px-1 bg-white py-2">
            * کوچه
          </label>
          <input
            type="text"
            className="border  w-[282px]  h-[32px]  text-[#050505]	border-[#B0E4DD] rounded-md relative  m-3 py-5 "
          />
        </div>

        <div className="relative w-full md:w-auto ">
          <label className="absolute -top-2 z-10 left-[77%] px-1 bg-white py-2">
            * شهر
          </label>
          <input
            type="text"
            className="border  w-[282px]  h-[32px]  text-[#050505]	border-[#B0E4DD] rounded-md relative  m-3 py-5 "
          />
        </div>
      </div>

      <div className="flex flex-row gap-3 w-[60%]">
        <div className="relative w-full md:w-auto ">
          <label className="absolute -top-2 z-10 left-[76%] px-1 bg-white py-2">
            * پلاک
          </label>
          <input
            type="text"
            className="border  w-[282px]  h-[32px]  text-[#050505]	border-[#B0E4DD] rounded-md relative  m-3 py-5 "
          />
        </div>

        <div className="relative w-full md:w-auto ">
          <label className="absolute -top-2 z-10 left-[78%] px-1 bg-white py-2">
            توضیحات بیشتر
          </label>
          <input
            type="text"
            className="border  w-[600px]  h-[32px]  text-[#050505]	border-[#B0E4DD] rounded-md relative  m-3 py-5 "
          />
        </div>
      </div>

      <div className="flex flex-row gap-3 w-[60%] mt-10">
        <div className="relative w-full md:w-auto ">
          <label className="absolute -top-2 z-10 left-[76%] px-1 bg-white py-2">
            * شماره شبا
          </label>
          <input
            type="text"
            className="border  w-[440px]  h-[32px]  text-[#050505]	border-[#B0E4DD] rounded-md relative  m-3 py-5 "
          />
        </div>

        <div className="relative w-full md:w-auto ">
          <label className="absolute -top-2 z-10 left-[75%] px-1 bg-white py-2">
            * شماره کارت
          </label>
          <input
            type="text"
            className="border  w-[440px]  h-[32px]  text-[#050505]	border-[#B0E4DD] rounded-md relative  m-3 py-5 "
          />
        </div>
       
        </div>
        <div className='flex justify-end mt-4 gap-20'>
        <DragCart/>
        <DragPhoto/>
        

        </div>
            </div>
          
        </div>
    </div>
   
  )
}

export default InptUser










