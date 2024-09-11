"use client"
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useMediaQuery } from 'react-responsive';
import Image from 'next/image';
import ImageDashboard from '@/src/app/assent/Img/adminPanel/dasboard.svg';
import ImageDashboardHover from '@/src/app/assent/Img/adminPanel/dashboardHover.svg';
import ImageMangment from '@/src/app/assent/Img/adminPanel/ProfileManger.svg';
import ImageMangmentHover from '@/src/app/assent/Img/adminPanel/profileMangerOn.svg';
import ImageUser from '@/src/app/assent/Img/adminPanel/User.svg';
import ImageUserHover from '@/src/app/assent/Img/adminPanel/UserHover.svg';
import ImageVam from '@/src/app/assent/Img/adminPanel/Vam.svg';
import ImageVamHover from '@/src/app/assent/Img/adminPanel/VamHover.svg';
import ImagePassword from '@/src/app/assent/Img/adminPanel/createUser.svg';
import ImagePasswordHover from '@/src/app/assent/Img/adminPanel/createUserOn.svg';
import ImageEconomi from '@/src/app/assent/Img/adminPanel/Economi.svg';
import ImageEconomiHover from '@/src/app/assent/Img/adminPanel/EconomiHover.svg';
import ImagePoshtibani from '@/src/app/assent/Img/adminPanel/Poshtibani.svg';
import ImagePoshtibaniHover from '@/src/app/assent/Img/adminPanel/PoshtibaniHover.svg';
import ImageMassege from '@/src/app/assent/Img/adminPanel/massege.svg';
import ImageMassegeHover from '@/src/app/assent/Img/adminPanel/massegeHover.svg';
import ImageSetting from '@/src/app/assent/Img/adminPanel/setting.svg';
import ImageSettingHover from '@/src/app/assent/Img/adminPanel/settingHover.svg';
import deleteUser from '@/src/app/assent/Img/adminPanel/DeletedUserNotHover.svg';
import deleteUserHover from '@/src/app/assent/Img/adminPanel/DeleteUser.svg';

import ImageExport from '@/src/app/assent/Img/adminPanel/Exit.svg';

interface NavbarItem {
  id: number;
  src: StaticImageData;
  hoverSrc: StaticImageData;
  link: string;
}

const Navbar: NavbarItem[] = [
  { id: 1, src: ImageDashboard, hoverSrc: ImageDashboardHover, link: '/dashboard' },
  { id: 2, src: ImageUser, hoverSrc: ImageUserHover, link: '/everyuser' },
  { id: 3, src: ImageVam, hoverSrc: ImageVamHover, link: '/allloanaplication' },
  { id: 4, src: ImagePassword, hoverSrc: ImagePasswordHover, link: '/userpass' },
  { id: 5, src: ImageEconomi, hoverSrc: ImageEconomiHover, link: '/showuserdetail' },
  { id: 6, src: ImageSetting, hoverSrc: ImageSettingHover, link: '/ruleadmin' },
  { id: 7, src: ImagePoshtibani, hoverSrc: ImagePoshtibaniHover, link: '/support' },
  { id: 8, src: ImageMassege, hoverSrc: ImageMassegeHover, link: '/sentmessageadmin' },
  { id: 9, src: ImageMangment, hoverSrc: ImageMangmentHover, link: '/management' },
  { id: 10, src: deleteUser, hoverSrc: deleteUserHover, link: '/userdeleteadmin' },
];

function AdminPageNavbar() {
  const [hoverImage, setHoverImage] = useState<{ [key: number]: boolean }>({});
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [clickedImage, setClickedImage] = useState<number | null>(null);
  const isMobile = useMediaQuery({ maxWidth: 800 });

  useEffect(() => {
    const storedClickedImage = localStorage.getItem('clickedImage');
    if (storedClickedImage) {
      const imageId = parseInt(storedClickedImage, 10);
      setClickedImage(imageId);
      setHoverImage((prev) => ({ ...prev, [imageId]: true }));
    }
  }, []);

  const handleMouseEnter = (id: number) => {
    setHoverImage((prev) => ({ ...prev, [id]: true }));
  };

  const handleMouseLeave = (id: number) => {
    setHoverImage((prev) => ({ ...prev, [id]: false }));
  };

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleClick = (id: number) => {
    setClickedImage(id);
    setHoverImage((prev) => ({ ...prev, [id]: true }));
    localStorage.setItem('clickedImage', id.toString());
  };

  return (
    <div className="bg-[#F8F9FA] dark:bg-[#283B4D]">
      {isMobile ? (
        <div className="flex justify-between items-center p-4 bg-gray-800 text-white">
          <span>Admin Panel</span>
          <button onClick={handleMenuToggle}>
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      ) : null}
      <div className={`flex w-80 flex-col mt-5 mr-10 bg-[#F8F9FA] gap-9 ${isMobile && !isMenuOpen ? 'hidden' : ''}`}>
        {Navbar.map((image) => (
          <Link key={image.id} href={image.link} passHref>
            <div
              className="relative -mt-2"
              onMouseEnter={() => handleMouseEnter(image.id)}
              onMouseLeave={() => handleMouseLeave(image.id)}
              onClick={() => handleClick(image.id)}
            >
              <Image
                src={hoverImage[image.id] || clickedImage === image.id ? image.hoverSrc : image.src}
                alt={`Image ${image.id}`}
                width={200}
                height={200}
                className="transition-opacity duration-300 cursor-pointer ease-in-out "
                style={{ position: 'relative' }}
              />
            </div>
          </Link>
        ))}
        <Link href="/exitadmin">
          <button className="mr-[1%] mt-[2%] ">
            <Image src={ImageExport} width={60} alt="Exit" className="cursor-pointer" />
          </button>
        </Link>
      </div>
    </div>
  );
}

export default AdminPageNavbar;

