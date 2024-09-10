import React, { useState } from 'react';
import Image from 'next/image';
import IconlyImage from '@/src/app/assent/Img/adminPanel/3UserOutline.svg';
import IconlyHoverImage from '@/src/app/assent/Img/adminPanel/Iconly.svg';
import DeletedImage from '@/src/app/assent/Img/adminPanel/deleted.svg';
import DeletedHoverImage from '@/src/app/assent/Img/adminPanel/crossActive.svg';
import Link from 'next/link';

const RoutTableUser: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState<string>('everyuser');
  const [hoveredTab, setHoveredTab] = useState<string>('');

  const handleTabClick = (tab: string) => {
    setSelectedTab(tab);
  };

  return (
    <div>
      <div className='flex w-[40%] shadow-md justify-between px-10 mt-8 mr-4 dark:bg-[#4F5D74] bg-white h-16 rounded-md'>
        <div
          className={`flex items-center gap-2 ${selectedTab === 'everyuser' || hoveredTab === 'everyuser' ? 'border-b-2 border-[#4FD1C5]' : ''}`}
          onMouseEnter={() => setHoveredTab('everyuser')}
          onMouseLeave={() => setHoveredTab('')}
        >
          <Link href='/everyuser' className='flex items-center gap-2' onClick={() => handleTabClick('everyuser')}>
            <Image
              src={selectedTab === 'everyuser' || hoveredTab === 'everyuser' ? IconlyHoverImage : IconlyImage}
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
          className={`flex items-center gap-2 ${selectedTab === 'deleteduser' || hoveredTab === 'deleteduser' ? 'border-b-2 border-[#4FD1C5]' : ''}`}
          onMouseEnter={() => setHoveredTab('deleteduser')}
          onMouseLeave={() => setHoveredTab('')}
        >
          <Link href='/deleteduser' className='flex items-center gap-2' onClick={() => handleTabClick('deleteduser')}>
            <Image
              src={selectedTab === 'deleteduser' || hoveredTab === 'deleteduser' ? DeletedHoverImage : DeletedImage}
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
