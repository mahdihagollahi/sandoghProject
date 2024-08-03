import React,{useState , useEffect} from 'react'
import Link from 'next/link'
import Image from 'next/image'
import UserOutlineImage from '@/src/app/assent/Img/adminPanel/Wallet.svg'
import UserHoverImage from '@/src/app/assent/Img/adminPanel/WaletHover.png';
import crossOutline from '@/src/app/assent/Img/adminPanel/checked.svg'
import crossActiveImage from '@/src/app/assent/Img/adminPanel/checkedHover.png'; 


function RoutRequestLoan() {
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
            <div className='flex w-[400px] shadow-md justify-between px-10 mt-8 mr-5 bg-white h-16 rounded-md '>
            <div className={`flex items-center gap-2 ${selectedTab === 'allloanaplication' ? 'border-b-2 border-[#4FD1C5]' : ''}`}>
            <Link href='/allloanaplication' className='flex items-center gap-2' onClick={() => handleTabClick('allloanaplication')}>
                 <Image
                 src={selectedTab === 'allloanaplication' ? UserHoverImage : UserOutlineImage}
                 width={25}
                 height={25}
                 alt='men'
                 />
                 <p className='font-bold text-sm text-[#2D3748]'> 
                    همه                 
                     </p>
                  </Link>
              </div>

              <div className={`flex items-center gap-2 ${selectedTab === 'checkedrequestloan' ? 'border-b-2 border-[#4FD1C5]' : ''}`}>
            <Link href='/checkedrequestloan' className='flex items-center gap-2' onClick={() => handleTabClick('checkedrequestloan')}>
                 <Image
                 src={selectedTab === 'checkedrequestloan' ? crossActiveImage : crossOutline}
                 width={25}
                 height={25}
                 alt='men'
                 />
                 <p className='font-bold text-sm text-[#2D3748]'> 
                    چک شده ها
                 </p>
                 </Link>
              </div>
            </div>
        </div>
    </div>
  )
}

export default RoutRequestLoan



