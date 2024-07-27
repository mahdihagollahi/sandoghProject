
import React, { useState } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useMediaQuery } from 'react-responsive';
import Image from 'next/image';
import ImageDashboard from '../assent/Img/adminPanel/dasboard.svg';
import ImageDashboardHover from '../assent/Img/adminPanel/dashboardHover.svg';
import ImageMangment from '../assent/Img/adminPanel/mangment.svg';
import ImageMangmentHover from '../assent/Img/adminPanel/mangmentHover.svg';
import ImageUser from '../assent/Img/adminPanel/User.svg';
import ImageUserHover from '../assent/Img/adminPanel/UserHover.svg';
import ImageVam from '../assent/Img/adminPanel/Vam.svg';
import ImageVamHover from '../assent/Img/adminPanel/VamHover.svg';
import ImagePassword from '../assent/Img/adminPanel/Password.svg';
import ImagePasswordHover from '../assent/Img/adminPanel/PasswordHover.svg';
import ImageEconomi from '../assent/Img/adminPanel/Economi.svg';
import ImageEconomiHover from '../assent/Img/adminPanel/EconomiHover.svg';
import ImagePoshtibani from '../assent/Img/adminPanel/Poshtibani.svg';
import ImagePoshtibaniHover from '../assent/Img/adminPanel/PoshtibaniHover.svg';
import ImageExport from '../assent/Img/adminPanel/Exit.svg';

const images = [
  { id: 1, src: ImageDashboard, hoverSrc: ImageDashboardHover, link: '/dashboard' },
  { id: 2, src: ImageMangment, hoverSrc: ImageMangmentHover, link: '/management' },
  { id: 3, src: ImageUser, hoverSrc: ImageUserHover, link: '/everyuser' },
  { id: 4, src: ImageVam, hoverSrc: ImageVamHover, link: '/allloanaplication' },
  { id: 5, src: ImagePassword, hoverSrc: ImagePasswordHover, link: '/userpass' },
  { id: 6, src: ImageEconomi, hoverSrc: ImageEconomiHover, link: '/showuserdetail' },
  { id: 7, src: ImagePoshtibani, hoverSrc: ImagePoshtibaniHover, link: '/support' },
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
