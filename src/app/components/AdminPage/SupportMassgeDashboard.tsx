import React from 'react'
import Image from 'next/image';
import Image1 from '@/src/app/assent/Img/adminPanel/Avatar.svg';
import Image2 from '@/src/app/assent/Img/adminPanel/Avatar-2.svg';
import Image3 from '@/src/app/assent/Img/adminPanel/avatar online copy.svg';
import Image4 from '@/src/app/assent/Img/adminPanel/avatar online.svg';
import Link from 'next/link';


const User =[
    {id: 1 , src:Image1 , name:'الهه علی نیا' , massage:'سلام چرا وام من واریز نمیشه؟' , time: '7:00' },
    {id: 1 , src:Image2 , name:'کتی کتایونی' , massage:'سلام نمیتونم درخواست واممو ثبت کنم' , time: '7:00' },
    {id: 1 , src:Image3 , name:'سهیلا آمری' , massage:'سلام چرا پیام های یادآوری برای من نمیاد؟' , time: '7:00' },
    {id: 1 , src:Image4 , name:'ابراهیم علی نیا' , massage:'سلام چرا فیش رسیدمو آپلود میکنم ثبت نمیشه؟' , time: '7:00' },
];
function SupportMassgeDashboard() {
  return (
    <div className='flex justify-center mt-4 items-center   md:justify-center  xl:justify-end xl:ml-10 xl:mt-6'>
        <div className='w-96 max-w-md bg-white shadow-xl rounded-lg px-4 '>
            <div className='py-4 '>
             
                <p className='font-bold text-sm px-7 text-[#2D3748]'>
                پیام های پشتیبانی
                </p>
               </div>
               <div>

             <div className='px-4'>
               {User.map((items) =>(
                <div key={items.id} className='flex items-center py-4 gap-3  '>
                    <div className='flex-shrink-0'>
                
                       <Image src={items.src} width={40} height={40} alt='' className='rounded-full'
                       />
                        </div>   
                       
                            <div className='ml-4 flex-grow'>
                               <p className='font-medium text-sm leading-6 text-[#2D3748]'>
                                {items.name}
                               </p>

                               <p className='font-normal text-xs  text-[#A0AEC0]'>
                                {items.massage}
                               </p>
                            </div>

                          
                       
                        <div className='text-xs text-[#A0AEC0]'>
                         
                            {items.time}
                         
                        </div>
                    </div>

              
               ))}
            </div>

            <div className='flex justify-center py-8' >
              <Link href='/support' passHref>
              <button className='bg-[#4FD1C5] text-white py-2 px-24 rounded-lg'  >
            دیدن همه
          </button>
              </Link>
        
        </div>

        </div>
        </div>
        </div>
   
  )
}

export default SupportMassgeDashboard

