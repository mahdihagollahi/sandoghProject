import React from 'react'
import Image from 'next/image'
import Image1 from '@/src/app/assent/Img/adminPanel/Avatar.svg';
import Image2 from '@/src/app/assent/Img/adminPanel/Avatar-2.svg';
import Image3 from '@/src/app/assent/Img/adminPanel/avatar online copy.svg';
import Image4 from '@/src/app/assent/Img/adminPanel/avatar online.svg';
import arrowImage from '@/src/app/assent/Img/adminPanel/back.svg'

const message = [
    {id:1 ,src:Image1, name:'امیر قنبری' , message:'سلام من هرکاری میکنم نمیتونم رسید پرداختمو بارگداری کنم و خطا میده باید چیکار کنم ؟؟؟'},
    {id:2 ,src:Image2, name:'جمال رستمی' , message:'سلام من هرکاری میکنم نمیتونم رسید پرداختمو بارگداری کنم و خطا میده باید چیکار کنم ؟؟؟'},
    {id:3 ,src:Image3, name:'مریم زنگنه' , message:'سلام من هرکاری میکنم نمیتونم رسید پرداختمو بارگداری کنم و خطا میده باید چیکار کنم ؟؟؟'},
    {id:4 ,src:Image4, name:'امین حیایی ' , message:'سلام من هرکاری میکنم نمیتونم رسید پرداختمو بارگداری کنم و خطا میده باید چیکار کنم ؟؟؟'},
    {id:5 ,src:Image4, name:'زهرا غلامی' , message:'سلام من هرکاری میکنم نمیتونم رسید پرداختمو بارگداری کنم و خطا میده باید چیکار کنم ؟؟؟'},
    {id:6 ,src:Image4, name:'امیر قنبری' , message:'سلام من هرکاری میکنم نمیتونم رسید پرداختمو بارگداری کنم و خطا میده باید چیکار کنم ؟؟؟'},
]

function SupportMessage() {
  return (
    <div>

<div className='flex gap-[500px] justify-between items-center mb-2 mt-10  '>
            <div className='mr-4  '>
                <p className='font-bold text-lg'>
                پشتیبانی
                </p>
            </div>
            <div className=' absolute flex mr-[60.5%]   '>
              <a href=""className='flex items-center'>
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


        <div>
        
            <div className='py-2 mt-5' >
                <p className='font-bold'>
                پیام های در انتظار پاسخگویی
                </p>
            </div>
            <div className='bg-white w-[145%] h-[100%] shadow-lg mt-5 px-2 py-2 pb-4 cursor-pointer rounded-sm'>

                {message.map((user,index )=>(
                  <div key={index} className={`flex w-[100%] mt-10 py-4 gap-4  items-start rounded-md ${
                    index %2 === 0 ? 'bg-[#4FD1C50D] border-r-4 border-[#00A991]'  : 'bg-[#2D37480D] border-r-4 border-[#2D3748]'
                    
                     }`}>
                 
                     <Image src={user.src} width={40} height={40} alt='user' className='rounded-full'/>
                     <div className='text-right'>
                       <p className='font-bold text-[#003B33]'>
                        {user.name}
                       </p>
                       <p className='text-[#003B33] font-normal'>
                        {user.message}
                       </p>
                     </div>
                  </div>
                 


                ))}

            </div>
        </div>
    </div>
  )
}

export default SupportMessage

