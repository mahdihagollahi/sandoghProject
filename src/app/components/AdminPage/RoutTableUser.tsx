import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import IconlyImage from '@/src/app/assent/Img/adminPanel/3UserOutline.svg';
import IconlyHoverImage from '@/src/app/assent/Img/adminPanel/Iconly.svg';
import DeletedImage from '@/src/app/assent/Img/adminPanel/deleted.svg';
import DeletedHoverImage from '@/src/app/assent/Img/adminPanel/crossActive.svg';
import Link from 'next/link';

function RoutTableUser() {
  const [selectedTab, setSelectedTab] = useState('');

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
      <div>
        <div className='flex w-[400px] shadow-md justify-between px-10 mt-8 mr-5 bg-white h-16 rounded-md'>
          <div className={`flex items-center gap-2 ${selectedTab === 'everyuser' ? 'border-b-2 border-[#4FD1C5]' : ''}`}>
            <Link href='/everyuser' className='flex items-center gap-2' onClick={() => handleTabClick('everyuser')}>
              <Image
                src={selectedTab === 'everyuser' ? IconlyHoverImage : IconlyImage}
                width={25}
                height={25}
                alt='men'
              />
              <p className='font-bold text-sm text-[#2D3748]'> 
                همه کاربران
              </p>
            </Link>
          </div>

          <div className={`flex items-center gap-2 ${selectedTab === 'deleteduser' ? 'border-b-2 border-[#4FD1C5]' : ''}`}>
            <Link href='/deleteduser' className='flex items-center gap-2' onClick={() => handleTabClick('deleteduser')}>
              <Image
                src={selectedTab === 'deleteduser' ? DeletedHoverImage : DeletedImage}
                width={25}
                height={25}
                alt='men'
              />
              <p className='font-bold text-sm text-[#2D3748]'> 
                حذف شده ها           
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RoutTableUser;
