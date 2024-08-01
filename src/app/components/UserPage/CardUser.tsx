


import React from 'react'
import Image from 'next/image'
import CardImage from '@/src/app/assent/Img/adminPanel/Credit Card.png'

function CardUser() {
  return (
    <div className='flex flex-col items-center'>
      <div className='w-full '>
        <div className='bg-white rounded-md py-20 shadow-md md:items-center xl:w-96 '>
          <div className='flex justify-center '>
            <Image
              className=''
              src={CardImage}
              width={300}
              height={70}
              alt='Card'
            />
          </div>
          <div className='mt-8 mx-auto pb-3 pt-2  w-full md:w-80 rounded-md h-10 border border-opacity-50 border-[#394860] cursor-pointer'>
          <button className='flex justify-between items-center pr-20 text-[#394860] w-full '>
          شماره کارت را کپی کنید
          </button>
        </div>
        </div>

        
      </div>
    </div>
  )
}

export default CardUser
