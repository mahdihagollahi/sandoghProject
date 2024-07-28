
import React, { useState } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useMediaQuery } from 'react-responsive';
import Image from 'next/image';
import dashboardUser from '@/src/app/assent/Img/userPanel/dashboardUser.svg';
import ImageDashboardHover from '@/src/app/assent/Img/userPanel/UserDashboardHover.svg';
import mangmentUser from '@/src/app/assent/Img/userPanel/mangmentUser.svg';
import mangmentUserHover from '@/src/app/assent/Img/userPanel/mangmentUserHover.svg';
import ShowInstallments from '@/src/app/assent/Img/userPanel/ShowInstallments.svg';
import ShowInstallmentsHover from '@/src/app/assent/Img/userPanel/ShowInstallmentsHover.svg';
import payInstallments from '@/src/app/assent/Img/userPanel/payInstallments.svg';
import payInstallmentsHover from '@/src/app/assent/Img/userPanel/payInstallmentsHover.svg';
import RequestInstallments from '@/src/app/assent/Img/userPanel/RequestInstallments.svg';
import RequestnstallmentsHover from '@/src/app/assent/Img/userPanel/RequestnstallmentsHover.svg';
import SupportUser from '@/src/app/assent/Img/userPanel/SupportUser.svg';
import SupportUserHover from '@/src/app/assent/Img/userPanel/SupportUserHover.svg';
import ImageRule from '@/src/app/assent/Img/userPanel/Rule.svg';
import ImageRuleHover from '@/src/app/assent/Img/userPanel/RuleHover.svg';
import ImageMessage from '@/src/app/assent/Img/userPanel/message.svg'
import ImageMessageHover from '@/src/app/assent/Img/userPanel/MessageHover.svg'
import ImageExport from '@/src/app/assent/Img/adminPanel/Exit.svg';

const images = [
  { id: 1, src: dashboardUser, hoverSrc: ImageDashboardHover, link: '/dashboarduser' },
  { id: 2, src: mangmentUser, hoverSrc: mangmentUserHover, link: '/useraccount' },
  { id: 3, src: ShowInstallments, hoverSrc: ShowInstallmentsHover, link: '/everyuser' },
  { id: 4, src: payInstallments, hoverSrc: payInstallmentsHover, link: '/allloanaplication' },
  { id: 5, src: RequestInstallments, hoverSrc: RequestnstallmentsHover, link: '/userpass' },
  { id: 6, src: SupportUser, hoverSrc: SupportUserHover, link: '/showuserdetail' },
  { id: 7, src: ImageRule, hoverSrc: ImageRuleHover, link: '/support' },
  { id: 7, src: ImageRule, hoverSrc: ImageRuleHover, link: '/support' },
  { id: 8, src: ImageMessage, hoverSrc: ImageMessageHover, link: '/support' },
];

function AdminPageNavbar() {
  const [hoverImage, setHoverImage] = useState<{ [key: number]: boolean }>({});
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 800 });

  const handleMouseEnter = (id: number) => {
    setHoverImage((prev) => ({ ...prev, [id]: true }));
  };

  const handleMouseLeave = (id: number) => {
    setHoverImage((prev) => ({ ...prev, [id]: false }));
  };

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      {isMobile ? (
        <div className="flex justify-between items-center p-4 bg-gray-800 text-white">
          <span>Admin Panel</span>
          <button onClick={handleMenuToggle}>
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      ) : null}
      <div className={`flex w-80 flex-col mt-5 mr-10 gap-9 ${isMobile && !isMenuOpen ? 'hidden' : ''}`}>
        {images.map((image) => (
          <Link key={image.id} href={image.link} passHref>
            <div className="relative mt-4" onMouseEnter={() => handleMouseEnter(image.id)} onMouseLeave={() => handleMouseLeave(image.id)}>
              <Image
                src={hoverImage[image.id] ? image.hoverSrc : image.src}
                alt={`Image ${image.id}`}
                width={200}
                height={200}
                className={`transition-opacity duration-300 cursor-pointer ease-in-out`}
                style={{ position: 'relative' }}
              />
              
            </div>
          </Link>
        ))}
        <div className='mr-[1%] mt-[10%]'>
          <Image src={ImageExport} width={60} alt='Exit' className='cursor-pointer' />
        </div>
      </div>
    </div>
  );
}

export default AdminPageNavbar;
