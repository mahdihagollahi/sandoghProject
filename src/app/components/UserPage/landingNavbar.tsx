"use client"
import React from 'react'
import { Link } from "react-router-dom"

function landingNavbar() {
  return (
    <div className='flex justify-between px-10'>
      <div className='flex gap-8 mt-10'>
        <button className='w-[120px] h-12 text-xl cursor-pointer  rounded bg-[#4FD1C5] text-white'>
            ثبت نام
        </button>
        <button className='w-[120px] h-12 text-xl cursor-pointer rounded border border-[#5CACD6]  text-black' >
            ورود
        </button>
      </div>
      <div className='pr-1 '>
       <ul className='flex mt-10 gap-12 '>
        <li >
            <Link rel="stylesheet" href="#"  className='w-16 font-normal text-2xl hover:border-b-2 hover:border-[#4475F2] hover:text-[#4475F2] active:border-b-2 active:border-[#4475F2]  active:text-[#4475F2] '>خانه</Link>
        </li>
        <li >
            <Link rel="stylesheet" to='/service' className='w-16 font-normal text-2xl hover:border-b-2 hover:border-[#4475F2] hover:text-[#4475F2] active:border-b-2 active:border-[#4475F2]  active:text-[#4475F2] ' >خدمات</Link>
        </li>
        <li >
            <Link rel="stylesheet" href="#" className='w-16 font-normal text-2xl hover:border-b-2 hover:border-[#4475F2] hover:text-[#4475F2] active:border-b-2 active:border-[#4475F2]  active:text-[#4475F2] ' >درباره ما</Link>
        </li>
        <li >
            <Link rel="stylesheet" href="#" className='w-16 font-normal text-2xl hover:border-b-2 hover:border-[#4475F2] hover:text-[#4475F2] active:border-b-2 active:border-[#4475F2]  active:text-[#4475F2] '>تماس با ما</Link>
        </li>
        <li >
            <Link rel="stylesheet" href="#" className='w-16 font-normal text-2xl hover:border-b-2 hover:border-[#4475F2] hover:text-[#4475F2] active:border-b-2 active:border-[#4475F2]  active:text-[#4475F2] '>پشتیبانی</Link>
        </li>
           
       </ul>
      
      </div>
      <div className='flex mt-9 gap-12 '>
        <div >
       <p className='w-40 h-7 font-bold leading-7 text-xl text-[#303E43]'>
       صندوق قرض الحسنه

        </p> 
        </div>
       </div>
    </div>
  )
}

export default landingNavbar