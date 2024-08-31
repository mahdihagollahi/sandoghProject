import React from 'react'
import Image from 'next/image';
import backImage from '@/src/app/assent/Img/adminPanel/back.svg'
import BoxCondition from './Boxcondition';
import AcceptRequest from './AcceptRequst';
import Link from 'next/link';
function AcceptRequestComponent() {
  return (
    <div>
 <div className='flex gap-[77%] bg  items-center mb-2 mt-10   '>
            <div className='mr-2 '>
                <p className='font-bold text-lg'>
                درخواست وام                
                </p>
            </div>
          


            <div className='flex justify-end  '>
              <Link href="/Rout/dashboarduser" className='flex items-center'>
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
        </div>

        <div className='mt-10'>
            <BoxCondition/>
        </div>
       <div className='mt-10'>
        <AcceptRequest/>
       </div>
    </div>
  )
}

export default AcceptRequestComponent