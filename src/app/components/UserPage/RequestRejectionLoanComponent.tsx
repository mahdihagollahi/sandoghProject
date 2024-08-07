import React from 'react'
import Image from 'next/image';
import backImage from '@/src/app/assent/Img/adminPanel/back.svg'
import BoxCondition from './Boxcondition';
import RequestRejection from './RequestRejection';
function RequestRejectionLoanComponent() {
  return (
    <div>
 <div className='flex gap-[77%] items-center mb-2 mt-10   '>
            <div className='mr-2 '>
                <p className='font-bold text-lg'>
                درخواست وام                
                </p>
            </div>
          


            <div className='flex justify-end  '>
              <a href="/requestloanaplication" className='flex items-center'>
              بازگشت
              <Image
                src={backImage}
                width={38}
                height={38}
                alt='arrow'

                />
              </a>
              
            </div>
        </div>
       
        <div>
        </div>

        <div className='mt-10'>
            <BoxCondition/>
        </div>
       <div className='mt-10'>
        <RequestRejection/>
       </div>
    </div>
  )
}

export default RequestRejectionLoanComponent