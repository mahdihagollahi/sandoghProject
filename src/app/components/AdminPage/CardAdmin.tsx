import React from 'react'
import Image from 'next/image'
import CardImage from '@/src/app/assent/Img/adminPanel/Credit Card.png'
import EditIcon from '@/src/app/assent/Img/adminPanel/Edit.svg'

function CardAdmin() {
  return (
    <div className='flex flex-col items-center'>
      <div className='w-full '>
        <div className='bg-white dark:bg-black rounded-md py-[16%] shadow-lg md:items-center xl:w-96 mx-auto'>
          <div className='flex justify-center'>
            <Image
              className=' flex justify-center'
              src={CardImage}
              width={300}
              height={70}
              alt='Card'
            />
          </div>
          <div className='mt-8 mx-auto pb-3 pt-2 px-8 w-full md:w-80 h-10 border border-[#4FD1C5] cursor-pointer'>
          <button className='flex justify-between items-center  dark:bg-black dark:text-white bg-white w-full '>
          <Image
              src={EditIcon}
              width={20}
              height={20}
              alt='edit'
            />
            آیا شماره کارت صندوق را تغییر میدهید ؟ 
         
          </button>
        </div>
        </div>

        
      </div>
    </div>
  )
}

export default CardAdmin





