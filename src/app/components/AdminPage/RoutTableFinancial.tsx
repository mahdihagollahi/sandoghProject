// import React,{useState , useEffect} from 'react'
// import Link from 'next/link'
// import Image from 'next/image'
// import UserOutlineImage from '@/src/app/assent/Img/adminPanel/3UserOutline.svg'
// import UserHoverImage from '@/src/app/assent/Img/adminPanel/Iconly.svg';
// import crossOutline from '@/src/app/assent/Img/adminPanel/crossOutline.svg'
// import crossActiveImage from '@/src/app/assent/Img/adminPanel/crossActive.svg'; 


// function RoutTableUser() {
//   const [selectedTab, setSelectedTab] = useState('');

//   useEffect(() => {
//     const storedTab = localStorage.getItem('selectedTab');
//     if (storedTab) {
//       setSelectedTab(storedTab);
//     }
//   }, []);

//   const handleTabClick = (tab) => {
//     setSelectedTab(tab);
//     localStorage.setItem('selectedTab', tab);
//   };

  
//   return (
//     <div>
//         <div>
//             <div className='flex w-[400px] shadow-md justify-between px-10 mt-8 mr-5 bg-white h-16 rounded-md '>
//             <div className={`flex items-center gap-2 ${selectedTab === 'deposited' ? 'border-b-2 border-[#4FD1C5]' : ''}`}>
//             <Link href='/deposited' className='flex items-center gap-2' onClick={() => handleTabClick('deposited')}>
//                  <Image
//                  src={selectedTab === 'deposited' ? UserHoverImage : UserOutlineImage}
//                  width={25}
//                  height={25}
//                  alt='men'
//                  />
//                  <p className='font-bold text-sm text-[#2D3748]'> 
//                  واریز کرده ها                
//                   </p>
//                   </Link>
//               </div>

//               <div className={`flex items-center gap-2 ${selectedTab === 'notdeposited' ? 'border-b-2 border-[#4FD1C5]' : ''}`}>
//             <Link href='/notdeposited' className='flex items-center gap-2' onClick={() => handleTabClick('notdeposited')}>
//                  <Image
//                  src={selectedTab === 'notdeposited' ? crossActiveImage : crossOutline}
//                  width={25}
//                  height={25}
//                  alt='men'
//                  />
//                  <p className='font-bold text-sm text-[#2D3748]'> 
//                  واریز نکرده ها                 
//                  </p>
//                  </Link>
//               </div>
//             </div>
//         </div>
//     </div>
//   )
// }

// export default RoutTableUser


import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/image';
import UserOutlineImage from '@/src/app/assent/Img/adminPanel/3UserOutline.svg';
import UserHoverImage from '@/src/app/assent/Img/adminPanel/Iconly.svg';
import crossOutline from '@/src/app/assent/Img/adminPanel/crossOutline.svg';
import crossActiveImage from '@/src/app/assent/Img/adminPanel/crossActive.svg';

function RoutTableUser() {
  const [selectedTab, setSelectedTab] = useState('');
  const router = useRouter();

  useEffect(() => {
    const storedTab = localStorage.getItem('selectedTab');
    if (storedTab) {
      setSelectedTab(storedTab);
    } else {
      // Set selectedTab based on current route
      if (router.pathname === '/deposited') {
        setSelectedTab('deposited');
      } else if (router.pathname === '/notdeposited') {
        setSelectedTab('notdeposited');
      }
    }
  }, [router.pathname]);

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
    localStorage.setItem('selectedTab', tab);
  };

  return (
    <div>
      <div className='flex w-[400px] shadow-md justify-between px-10 mt-8 mr-5 bg-white h-16 rounded-md '>
        <div className={`flex items-center gap-2 ${selectedTab === 'deposited' ? 'border-b-2 border-[#4FD1C5]' : ''}`}>
          <Link href='/deposited' onClick={() => handleTabClick('deposited')} className='flex items-center gap-2'>
            <Image
              src={selectedTab === 'deposited' ? UserHoverImage : UserOutlineImage}
              width={25}
              height={25}
              alt='deposited'
            />
            <p className='font-bold text-sm text-[#2D3748]'>
              واریز کرده ها
            </p>
          </Link>
        </div>

        <div className={`flex items-center gap-2 ${selectedTab === 'notdeposited' ? 'border-b-2 border-[#4FD1C5]' : ''}`}>
          <Link href='/notdeposited' onClick={() => handleTabClick('notdeposited')} className='flex items-center gap-2'>
            <Image
              src={selectedTab === 'notdeposited' ? crossActiveImage : crossOutline}
              width={25}
              height={25}
              alt='notdeposited'
            />
            <p className='font-bold text-sm text-[#2D3748]'>
              واریز نکرده ها
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default RoutTableUser;


