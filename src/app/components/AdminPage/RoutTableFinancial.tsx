import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import UserOutlineImage from '@/src/app/assent/Img/adminPanel/3UserOutline.svg';
import UserHoverImage from '@/src/app/assent/Img/adminPanel/Iconly.svg';
import crossOutline from '@/src/app/assent/Img/adminPanel/crossOutline.svg';
import crossActiveImage from '@/src/app/assent/Img/adminPanel/crossActive.svg';

function RoutTableUser() {
  const [selectedTab, setSelectedTab] = useState<string>('');
  const [hoveredTab, setHoveredTab] = useState<string>('');

  useEffect(() => {
    const storedTab = localStorage.getItem('selectedTab');
    if (storedTab) {
      setSelectedTab(storedTab);
    }
  }, []);

  const handleTabClick = (tab : string) => {
    setSelectedTab(tab);
    localStorage.setItem('selectedTab', tab);
  };

  return (
    <div>
      <div>
        <div className='flex w-[400px] shadow-md justify-between px-10 mt-8 mr-5 bg-white dark:bg-[#4F5D74] h-16 rounded-md'>
          <div
            className={`flex items-center gap-2 ${selectedTab === 'deposited' || hoveredTab === 'deposited' ? 'border-b-2 border-[#4FD1C5]' : ''}`}
            onMouseEnter={() => setHoveredTab('deposited')}
            onMouseLeave={() => setHoveredTab('')}
          >
            <Link href='/Rout/deposited' className='flex items-center gap-2' onClick={() => handleTabClick('deposited')}>
              <Image
                src={selectedTab === 'deposited' || hoveredTab === 'deposited' ? UserHoverImage : UserOutlineImage}
                width={25}
                height={25}
                alt='deposited'
              />
              <p className='font-bold text-sm text-[#2D3748] dark:text-white'> 
                واریز کرده ها                
              </p>
            </Link>
          </div>

          <div
            className={`flex items-center gap-2 ${selectedTab === 'notdeposited' || hoveredTab === 'notdeposited' ? 'border-b-2 border-[#4FD1C5]' : ''}`}
            onMouseEnter={() => setHoveredTab('notdeposited')}
            onMouseLeave={() => setHoveredTab('')}
          >
            <Link href='/Rout/notdeposited' className='flex items-center gap-2' onClick={() => handleTabClick('notdeposited')}>
              <Image
                src={selectedTab === 'notdeposited' || hoveredTab === 'notdeposited' ? crossActiveImage : crossOutline}
                width={25}
                height={25}
                alt='not deposited'
              />
              <p className='font-bold text-sm text-[#2D3748] dark:text-white'> 
                واریز نکرده ها                 
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RoutTableUser;
