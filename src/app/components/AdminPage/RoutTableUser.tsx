import React, { useState } from 'react';
import Image from 'next/image';
import IconlyImage from '@/app/assent/Img/adminPanel/3UserOutline.svg';
import IconlyHoverImage from '@/app/assent/Img/adminPanel/Iconly.svg';
import DeletedImage from '@/app/assent/Img/adminPanel/deleted.svg';
import DeletedHoverImage from '@/app/assent/Img/adminPanel/crossActive.svg';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const RoutTableUser: React.FC = () => {
 const pathName = usePathname()

  return (
    <div>
      <div className='flex w-[40%] shadow-md justify-between px-10 mt-8 mr-4 dark:bg-[#4F5D74] bg-white h-16 rounded-md'>
        <div
          className={`flex items-center hover:border-b-2 hover:border-[#4FD1C5] gap-2 ${ pathName == '/everyuser'? 'border-b-2 border-[#4FD1C5]' : ''}`}
          
        >
          <Link href='/everyuser' className='flex items-center gap-2' >
            <Image
              src={pathName === '/everyuser' ? IconlyHoverImage : IconlyImage}
              width={25}
              height={25}
              alt='every user'
            />
            <p className='font-bold text-sm dark:text-white text-[#2D3748]'>
              کاربران فعال
            </p>
          </Link>
        </div>

        <div
          className={`flex items-center hover:border-b-2 hover:border-[#4FD1C5] gap-2 ${ pathName == '/deleteduser'? 'border-b-2 border-[#4FD1C5]' : ''}`}
          
        >
          <Link href='/deleteduser' className='flex items-center gap-2'>
            <Image
              src={pathName === '/deleteduser' ? IconlyHoverImage : IconlyImage}
              width={25}
              height={25}
              alt='deleted user'
            />
            <p className='font-bold text-sm dark:text-white text-[#2D3748]'>
              مسدود شده ها
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default RoutTableUser;
