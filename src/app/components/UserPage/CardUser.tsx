


import React from 'react'
import Image from 'next/image'
import CardImage from '@/src/app/assent/Img/adminPanel/Credit Card.png'

function CardUser() {
  return (
    <div className='flex flex-col items-center'>
      <div className='w-full mt-2'>
        <div className='bg-white rounded-md p-2 shadow-lg md:items-center xl:w-96 mx-auto'>
          <div className='flex justify-center'>
            <Image
              className='mr-10'
              src={CardImage}
              width={300}
              height={70}
              alt='Card'
            />
          </div>
        </div>

        <div className='mt-8 mx-auto pb-3 pt-2 px-3 w-full md:w-80 h-10 border border-[#394860] cursor-pointer'>
          <button className='flex justify-between items-center  bg-[#394860] w-full '>
          شماره کارت را کپی کنید
          </button>
        </div>
      </div>
    </div>
  )
}

export default CardUser
