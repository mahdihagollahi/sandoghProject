import React from 'react';
import Image from 'next/image';
import backImage from '@/src/app/assent/Img/adminPanel/back.svg'
import CardUser from './CardUser';
import Dragfish from './dragfish';
import Tablesum from './Tablesum';






const LoanPaymentComponent: React.FC = () => {
  return (
    <div >
         <div className='flex gap-24  items-center mb-2 mt-10 mr-3  '>
            <div className='mr-2 '>
                <p className='font-bold text-lg'>
                پرداخت قسط                
                </p>
            </div>
          


            <div className='flex justify-end mr-2  '>
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
      <div className='flex '>
       <div>
        <div>
        <Dragfish/>

        </div>
        <div>

        </div>
       </div>

       <div  className='flex flex-col'>
        <div className='p-8'>
        <CardUser/>

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

