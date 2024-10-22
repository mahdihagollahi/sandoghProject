


import React from 'react'
import Image from 'next/image'
import CardImage from '@/app/assent/Img/adminPanel/Credit Card.png'
import CopyIcon from '@/app/assent/Img/userPanel/copy.svg'

function CardUserLoan() {
    const cardNumber = { number: '6037998323457865' }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(cardNumber.number)
      .then(() => {
        alert('شماره کارت کپی شد!')
      })
      .catch(err => {
        console.error('Error copying text: ', err)
      })
  }
  return (
    <div className='flex flex-col items-center'>
      <div className='w-[90%] ml-10'>
        <div className='bg-white rounded-md py-20  shadow-md md:items-center xl:w-full '>
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
          <button className='flex  items-center justify-center gap-3 text-[#394860] w-full '
           onClick={copyToClipboard}
          >
            <Image src={CopyIcon} width={20} height={20} alt='copy'/>

           
          شماره کارت را کپی کنید
          </button>
        </div>
        </div>

        
      </div>
    </div>
  )
}

export default CardUserLoan
