import React from 'react';
import Image from 'next/image';
import Image1 from '@/app/assent/Img/adminPanel/Avatar.svg';

const userDetail = [
  {
    id: 1,
    src: Image1,
    user: 'الهه علی نیا',
    statuse: false,
    cardNumber: '6219 8619 111 5771',
    nationalNumber: '6219 8619 111 5771',
    name: 'الهه',
    lastname: 'علی نیا',
    phoneNumber: '09192803715',
    importantPhoneNumber: '02133168811',
    homeNumber: '012331007342',
    shaNumber: '52452435234523452345'
  }
];

function DetailUser() {
  return (
    <div>
      <div  className='flex justify-center'>
        <Image
          src={userDetail[0].src}
          width={98}
          height={98}
          alt='user'
          className='rounded-sm'
        />
      </div>

      <div className='mt-10'>

     
      <div className='flex'>
        <div className='relative w-full md:w-auto'>
          <label className='absolute -top-2 z-10 left-[83%] px-3 bg-white py-2 dark:bg-black'>
            نام
          </label>
          <input
            type='text'
            className='border w-96 md:w-96 h-14 border-[#CACACA] rounded-md relative m-3'
          />
        </div>
        <div className='relative w-full md:w-auto'>
          <label className='absolute -top-2 z-10 left-[68%] px-3 bg-white py-2'>
            نام خانوادگی
          </label>
          <input
            type='text'
            className='border w-96 md:w-96 h-14 border-[#CACACA] rounded-md relative m-3'
          />
        </div>
      </div>
      <div className='flex'>
        <div className='relative w-full md:w-auto'>
          <label className='absolute -top-2 z-10 left-[67%] px-3 bg-white py-2'>
            شماره موبایل
          </label>
          <input
            type='text'
            className='border w-96 md:w-96 h-14 border-[#CACACA] rounded-md relative m-3'
          />
        </div>
        <div className='relative w-full md:w-auto'>
          <label className='absolute -top-2 z-10 left-[58%] px-3 bg-white py-2'>
            شماره تلفن ضروری
          </label>
          <input
            type='text'
            className='border w-96 md:w-96 h-14 border-[#CACACA] rounded-md relative m-3'
          />
        </div>
      </div>

      <div className='flex'>
        <div className='relative w-full md:w-auto'>
          <label className='absolute -top-2 z-10 left-[72%] px-3 bg-white py-2'>
            تلفن منزل
          </label>
          <input
            type='text'
            className='border w-96 md:w-96 h-14 border-[#CACACA] rounded-md relative m-3'
          />
        </div>
        <div className='relative w-full md:w-auto'>
          <label className='absolute -top-2 z-10 left-[76%] px-3 bg-white py-2'>
          کد ملی
          </label>
          <input
            type='text'
            className='border w-96 md:w-96 h-14 border-[#CACACA] rounded-md relative m-3'
          />
        </div>
      </div>

      <div className='flex'>
        <div className='relative w-full md:w-auto'>
          <label className='absolute -top-2 z-10 left-[71%] px-3 bg-white py-2'>
            شماره کارت
          </label>
          <input
            type='text'
            className='border w-96 md:w-96 h-14 border-[#CACACA] rounded-md relative m-3'
          />
        </div>
        <div className='relative w-full md:w-auto'>
          <label className='absolute -top-2 z-10 left-[72%] px-3 bg-white py-2'>
            شماره شبا
          </label>
          <input
            type='text'
            className='border w-96 md:w-96 h-14 border-[#CACACA] rounded-md relative m-3'
          />
        </div>
      </div>
      </div>

    </div>
  );
}

export default DetailUser;
