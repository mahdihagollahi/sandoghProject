import React from 'react'
import Image from 'next/image';
import backImage from '@/src/app/assent/Img/adminPanel/back.svg'
import BoxCondition from './Boxcondition';
import InputVam from './InputVam';
import ButtonSended from './ButtonSended';
import Filter from './Filter';
import Link from 'next/link';
function RequestLoanAplicationComponent() {
  return (
    <div>
 <div className='flex justify-between items-center mb-2 mt-12   '>
            <div className='mr-2 '>
                <p className='font-bold text-lg'>
                درخواست وام                
                </p>
            </div>
          


            <div className='flex justify-end  '>
              <Link href="/dashboarduser" className='flex items-center'>
              بازگشت
              <Image
                src={backImage}
                width={38}
                height={38}
                alt='arrow'

                />
              </Link>
              
            </div>
        </div>
       
        <div>
            <Filter/>
        </div>

        <div className='mt-10'>
            <BoxCondition/>
        </div>
        <div className='mt-10'>
            <InputVam/>
        </div>
        <div className='mt-10'>
            <ButtonSended/>
        </div>
    </div>
  )
}

export default RequestLoanAplicationComponent