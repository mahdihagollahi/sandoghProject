import React from 'react';
import Image from 'next/image';
import backImage from '@/src/app/assent/Img/adminPanel/back.svg'
import Dragfish from './dragfish';
import Tablesum from './TableSum';
import CardUserLoan from './CardUserLoan';
const LoanPaymentComponent: React.FC = () => {
  return (
    <div >
         <div className='flex gap-[79%] items-center mb-2 mt-10   '>
            <div className='mr-2 '>
                <p className='font-bold text-lg'>
                پرداخت قسط                
                </p>
            </div>
          


            <div className='flex justify-end  '>
              <a href="" className='flex items-center'>
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
      <div className='flex mt-10 gap-5'>
       <div>
        <div>
        <Dragfish/>

        </div>
        <div>

        </div>
       </div>

       <div  className='flex flex-col gap-5'>
        <div className=''>
        <CardUserLoan/>

        </div>
        <div>
            <Tablesum/>
        </div>
       </div>
      </div>
    
    </div>
   
  );
};

export default LoanPaymentComponent;

