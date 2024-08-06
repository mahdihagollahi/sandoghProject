import React from 'react'
import Image from 'next/image'
import FishImg from '@/src/app/assent/Img/adminPanel/Fish.svg'
import backImage from '@/src/app/assent/Img/adminPanel/back.svg'

function FishPage() {
  return (
    <div className='bg-white mt-4 '>
         <div className='flex overflow-y-hidden justify-end mr-20  '>
              <a href="/depositreceipt" className='flex items-center'>
              بازگشت
              <Image
                src={backImage}
                width={38}
                height={38}
                alt='arrow'

                />
              </a>
              
            </div>
        <div className='flex items-center justify-center'>
           <Image
           src={FishImg}
           width={500}
           height={900}
           alt='FishImage'
           />
        </div>
    </div>
  )
}

export default FishPage