
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import IconlyImage from '@/src/app/assent/Img/adminPanel/3UserOutline.svg';
import IconlyHoverImage from '@/src/app/assent/Img/adminPanel/Iconly.svg';
import DeletedImage from '@/src/app/assent/Img/adminPanel/deleted.svg';
import DeletedHoverImage from '@/src/app/assent/Img/adminPanel/crossActive.svg';
import Link from 'next/link';

function RoutTableUser() {
  const [selectedTab, setSelectedTab] = useState('');
  const [hoveredTab, setHoveredTab] = useState('');

  useEffect(() => {
    const storedTab = localStorage.getItem('selectedTab');
    if (storedTab) {
      setSelectedTab(storedTab);
    }
  }, []);

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
    localStorage.setItem('selectedTab', tab);
  };

  return (
    <div>
      <div className='flex w-[400px] shadow-md justify-between px-10 mt-8 mr-5 dark:bg-black bg-white h-16 rounded-md'>
        <div
          className={`flex items-center gap-2 ${selectedTab === 'everyuser' || hoveredTab === 'everyuser' ? 'border-b-2 border-[#4FD1C5]' : ''}`}
          onMouseEnter={() => setHoveredTab('everyuser')}
          onMouseLeave={() => setHoveredTab('')}
        >
          <Link href='/Rout/everyuser' className='flex items-center gap-2' onClick={() => handleTabClick('everyuser')}>
            <Image
              src={selectedTab === 'everyuser' || hoveredTab === 'everyuser' ? IconlyHoverImage : IconlyImage}
              width={25}
              height={25}
              alt='every user'
            />
            <p className='font-bold text-sm dark:text-white text-[#2D3748]'>
              همه کاربران
            </p>
          </Link>
        </div>

        <div
          className={`flex items-center gap-2 ${selectedTab === 'deleteduser' || hoveredTab === 'deleteduser' ? 'border-b-2 border-[#4FD1C5]' : ''}`}
          onMouseEnter={() => setHoveredTab('deleteduser')}
          onMouseLeave={() => setHoveredTab('')}
        >
          <Link href='/Rout/deleteduser' className='flex items-center gap-2' onClick={() => handleTabClick('deleteduser')}>
            <Image
              src={selectedTab === 'deleteduser' || hoveredTab === 'deleteduser' ? DeletedHoverImage : DeletedImage}
              width={25}
              height={25}
              alt='deleted user'
            />
            <p className='font-bold text-sm  dark:text-white text-[#2D3748]'>
              حذف شده ها
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default RoutTableUser;

