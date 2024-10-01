import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import groupImage from '@/app/assent/Img/adminPanel/Group 39513.svg';



function AdminNavbarHeader() {
  return (
    <div>
      <div className='flex items-center mt-10 mr-10'>
        <Link href='/dashboard'>
          <div className='flex cursor-pointer gap-6 border-b-2 dark:border-[#0000001A] pb-9 w-[260px]'>
            <div className=''>
              <Image src={groupImage} width={48} height={48} alt='group' />
            </div>
            <div className='flex items-center'>
              <p className='font-light text-lg dark:text-[#F5F5F5] whitespace-nowrap'>
                صندوق قرض الحسنه مهر
              </p>
            </div>
          </div>
        </Link>
      </div>
     
    </div>
  );
}

export default AdminNavbarHeader;

