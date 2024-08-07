import React from 'react';
import Image from 'next/image';
import MoneyImage from '@/src/app/assent/Img/adminPanel/3D money card.svg';

function NewDepositSlip() {
  const aplication = [
    {id: 1, numberLoan: 20}
  ];

  return (
    <div>
      <div className='mr-96 ml-8 -mt-[12%]'>
        <div className='flex justify-between gap-12 shadow-lg w-[59%] h-[20%] rounded-md p-6 bg-[#ffff]'>
          <div className='flex flex-col gap-9'>
            <div>
              <p className='font-bold text-sm leading-8 text-[#2D3748]'>
                {aplication[0].numberLoan} فیش واریزی جدید
              </p>
            </div>
            <div>
              <button className='bg-[#4FD1C5] border border-[#4FD1C5] w-64 h-10 rounded-xl text-white'>
                دیدن همه
              </button>
            </div>
          </div>
          <div>
            <Image
              src={MoneyImage}
              width={132}
              height={121}
              alt='money'
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewDepositSlip;
