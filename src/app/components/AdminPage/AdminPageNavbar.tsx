// "use client";
// import React, { useState, useEffect } from "react";
// import Link from "next/link";
// import { FaBars, FaTimes } from "react-icons/fa";
// import { useMediaQuery } from "react-responsive";
// import Image from "next/image";
// import ImageDashboard from "@/src/app/assent/Img/adminPanel/dasboard.svg";
// import ImageDashboardHover from "@/src/app/assent/Img/adminPanel/dashboardHover.svg";
// import ImageMangment from "@/src/app/assent/Img/adminPanel/ProfileManger.svg";
// import ImageMangmentHover from "@/src/app/assent/Img/adminPanel/profileMangerOn.svg";
// import ImageUser from "@/src/app/assent/Img/adminPanel/User.svg";
// import ImageUserHover from "@/src/app/assent/Img/adminPanel/UserHover.svg";
// import ImageVam from "@/src/app/assent/Img/adminPanel/Vam.svg";
// import ImageVamHover from "@/src/app/assent/Img/adminPanel/VamHover.svg";
// import ImagePassword from "@/src/app/assent/Img/adminPanel/createUser.svg";
// import ImagePasswordHover from "@/src/app/assent/Img/adminPanel/createUserOn.svg";
// import ImageEconomi from "@/src/app/assent/Img/adminPanel/Economi.svg";
// import ImageEconomiHover from "@/src/app/assent/Img/adminPanel/EconomiHover.svg";
// import ImagePoshtibani from "@/src/app/assent/Img/adminPanel/Poshtibani.svg";
// import ImagePoshtibaniHover from "@/src/app/assent/Img/adminPanel/PoshtibaniHover.svg";
// import ImageMassege from "@/src/app/assent/Img/adminPanel/massege.svg";
// import ImageMassegeHover from "@/src/app/assent/Img/adminPanel/massegeHover.svg";
// import ImageSetting from "@/src/app/assent/Img/adminPanel/setting.svg";
// import ImageSettingHover from "@/src/app/assent/Img/adminPanel/settingHover.svg";
// import deleteUser from "@/src/app/assent/Img/adminPanel/DeletedUserNotHover.svg";
// import deleteUserHover from "@/src/app/assent/Img/adminPanel/DeleteUser.svg";
// import ImageExport from "@/src/app/assent/Img/adminPanel/Exit.svg";

// import DashboardDark from "@/src/app/assent/Img/adminPanel/DashboardDark.svg";
// import DashboardDarkHover from "@/src/app/assent/Img/adminPanel/DashboardDarkHover.svg";
// import DarkImageUse from "@/src/app/assent/Img/adminPanel/DarkImageUser.svg";
// import DarkImageUseHover from "@/src/app/assent/Img/adminPanel/DarkImageUseHover.svg";
// import darkImageVam from "@/src/app/assent/Img/adminPanel/darkImageVam.svg";
// import darkImageVamHover from "@/src/app/assent/Img/adminPanel/darkImageVamHover.svg";
// import darkImagePassword from "@/src/app/assent/Img/adminPanel/darkImagePassword.svg";
// import darkImagePasswordHover from "@/src/app/assent/Img/adminPanel/darkImagePasswordHover.svg";
// import darkImageEconomi from "@/src/app/assent/Img/adminPanel/darkImageEconomi.svg";
// import darkImageEconomiHover from "@/src/app/assent/Img/adminPanel/darkImageEconomiHover.svg";
// import darkImageSetting from "@/src/app/assent/Img/adminPanel/darkImageSetting.svg";
// import darkImageSettingHover from "@/src/app/assent/Img/adminPanel/darkImageSettingHover.svg";
// import darkImagePoshtibani from "@/src/app/assent/Img/adminPanel/darkImagePoshtibani.svg";
// import darkImagePoshtibaniHover from "@/src/app/assent/Img/adminPanel/darkImagePoshtibaniHover.svg";
// import darkImageMassege from "@/src/app/assent/Img/adminPanel/darkImageMassege.svg";
// import darkImageMassegeHover from "@/src/app/assent/Img/adminPanel/darkImageMassegeHover.svg";
// import darkImageMangment from "@/src/app/assent/Img/adminPanel/darkImageMangment.svg";
// import darkImageMangmentHover from "@/src/app/assent/Img/adminPanel/darkImageMangmentHover.svg";
// import darkdeleteUser from "@/src/app/assent/Img/adminPanel/darkdeleteUser.svg";
// import darkdeleteUserHover from "@/src/app/assent/Img/adminPanel/darkdeleteUserHover.svg";

// interface NavbarItem {
//   id: number;
//   src: StaticImageData;
//   hoverSrc: StaticImageData;
//   darkSrc: StaticImageData;
//   darkhoverSrc: StaticImageData;
//   link: string;
// }

// const Navbar: NavbarItem[] = [
//   {
//     id: 1,
//     src: ImageDashboard,
//     hoverSrc: ImageDashboardHover,
//     darkSrc: DashboardDark,
//     darkhoverSrc: DashboardDarkHover,
//     link: "/dashboard",
//   },
//   {
//     id: 2,
//     src: ImageUser,
//     hoverSrc: ImageUserHover,
//     darkSrc: DarkImageUse,
//     darkhoverSrc: DarkImageUseHover,
//     link: "/everyuser",
//   },
//   {
//     id: 3,
//     src: ImageVam,
//     hoverSrc: ImageVamHover,
//     darkSrc: darkImageVam,
//     darkhoverSrc: darkImageVamHover,
//     link: "/allloanaplication",
//   },
//   {
//     id: 4,
//     src: ImagePassword,
//     hoverSrc: ImagePasswordHover,
//     darkSrc: darkImagePassword,
//     darkhoverSrc: darkImagePasswordHover,
//     link: "/userpass",
//   },
//   {
//     id: 5,
//     src: ImageEconomi,
//     hoverSrc: ImageEconomiHover,
//     darkSrc: darkImageEconomi,
//     darkhoverSrc: darkImageEconomiHover,
//     link: "/showuserdetail",
//   },
//   {
//     id: 6,
//     src: ImageSetting,
//     hoverSrc: ImageSettingHover,
//     darkSrc: darkImageSetting,
//     darkhoverSrc: darkImageSettingHover,
//     link: "/ruleadmin",
//   },
//   {
//     id: 7,
//     src: ImagePoshtibani,
//     hoverSrc: ImagePoshtibaniHover,
//     darkSrc: darkImagePoshtibani,
//     darkhoverSrc: darkImagePoshtibaniHover,
//     link: "/support",
//   },
//   {
//     id: 8,
//     src: ImageMassege,
//     hoverSrc: ImageMassegeHover,
//     darkSrc: darkImageMassege,
//     darkhoverSrc: darkImageMassegeHover,
//     link: "/sentmessageadmin",
//   },
//   {
//     id: 9,
//     src: ImageMangment,
//     hoverSrc: ImageMangmentHover,
//     darkSrc: darkImageMangment,
//     darkhoverSrc: darkImageMangmentHover,
//     link: "/management",
//   },
//   {
//     id: 10,
//     src: deleteUser,
//     hoverSrc: deleteUserHover,
//     darkSrc: darkdeleteUser,
//     darkhoverSrc: darkdeleteUserHover,
//     link: "/userdeleteadmin",
//   },
// ];

// function AdminPageNavbar() {
//   const [hoverImage, setHoverImage] = useState<{ [key: number]: boolean }>({});
//   const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
//   const [clickedImage, setClickedImage] = useState<number | null>(null);
//   const [isDarkMode, setIsDarkMode] = useState<boolean>(true);
//   const isMobile = useMediaQuery({ maxWidth: 800 });

//   useEffect(() => {
//     const storedClickedImage = localStorage.getItem("clickedImage");
//     if (storedClickedImage) {
//       const imageId = parseInt(storedClickedImage, 10);
//       setClickedImage(imageId);
//       setHoverImage((prev) => ({ ...prev, [imageId]: true }));
//     }

//     const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
//     setIsDarkMode(mediaQuery.matches);
//     const handleChange = (e: MediaQueryListEventInit) =>
//       setIsDarkMode(e.matches);
//     mediaQuery.addEventListener("change", handleChange);
//     return () => mediaQuery.removeEventListener('change' , handleChange)
//   }, []);


//   useEffect(() => {
//     const htmlElement = document.documentElement; // دسترسی به تگ <html>
//     if (isDarkMode) {
//       htmlElement.classList.add('dark');
//     } else {
//       htmlElement.classList.remove('dark');
//     }
//   }, [isDarkMode]);

//   const handleMouseEnter = (id: number) => {
//     setHoverImage((prev) => ({ ...prev, [id]: true }));
//   };

//   const handleMouseLeave = (id: number) => {
//     setHoverImage((prev) => ({ ...prev, [id]: false }));
//   };

//   const handleMenuToggle = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   const handleClick = (id: number) => {
//     setClickedImage(id);
//     setHoverImage((prev) => ({ ...prev, [id]: true }));
//     localStorage.setItem("clickedImage", id.toString());
//   };

//   console.log(isDarkMode)

//   return (
//     <div className="bg-[#F8F9FA]  dark:bg-[#283B4D]">
//       {isMobile ? (
//         <div className="flex justify-between items-center p-4 bg-gray-800 text-white">
//           <span>Admin Panel</span>
//           <button onClick={handleMenuToggle}>
//             {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
//           </button>
//         </div>
//       ) : null}
//       <div
//         className={`flex w-80 flex-col mt-5 mr-10 bg-[#F8F9FA] dark:bg-[#283B4D] gap-9 ${
//           isMobile && !isMenuOpen ? "hidden" : ""
//         }`}
//       >
//         {Navbar.map((image) => (
//           <Link key={image.id} href={image.link} passHref>
//             <div
//               className="relative -mt-2"
//               onMouseEnter={() => handleMouseEnter(image.id)}
//               onMouseLeave={() => handleMouseLeave(image.id)}
//               onClick={() => handleClick(image.id)}
//             >
//               <Image
//                 src={
//                   isDarkMode
//                 ?  hoverImage[image.id] || clickedImage === image.id
//                   ? image.darkhoverSrc
//                   : image.darkSrc

//                   :hoverImage[image.id] || clickedImage === image.id
//                     ? image.hoverSrc
//                     : image.src
//                 }
//                 alt={`Image ${image.id}`}
//                 width={200}
//                 height={200}
//                 className="transition-opacity duration-300 cursor-pointer ease-in-out "
//                 style={{ position: "relative" }}
//               />
//             </div>
//           </Link>
//         ))}
//         <Link href="/exitadmin">
//           <button className="mr-[1%] mt-[2%] ">
//             <Image
//               src={ImageExport}
//               width={60}
//               alt="Exit"
//               className="cursor-pointer"
//             />
//           </button>
//         </Link>
//       </div>
//     </div>
//   );
// }

// export default AdminPageNavbar;




"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";
import { useMediaQuery } from "react-responsive";
import Image from "next/image";
import ImageDashboard from "@/src/app/assent/Img/adminPanel/dasboard.svg";
import ImageDashboardHover from "@/src/app/assent/Img/adminPanel/dashboardHover.svg";
import ImageMangment from "@/src/app/assent/Img/adminPanel/ProfileManger.svg";
import ImageMangmentHover from "@/src/app/assent/Img/adminPanel/profileMangerOn.svg";
import ImageUser from "@/src/app/assent/Img/adminPanel/User.svg";
import ImageUserHover from "@/src/app/assent/Img/adminPanel/UserHover.svg";
import ImageVam from "@/src/app/assent/Img/adminPanel/Vam.svg";
import ImageVamHover from "@/src/app/assent/Img/adminPanel/VamHover.svg";
import ImagePassword from "@/src/app/assent/Img/adminPanel/createUser.svg";
import ImagePasswordHover from "@/src/app/assent/Img/adminPanel/createUserOn.svg";
import ImageEconomi from "@/src/app/assent/Img/adminPanel/Economi.svg";
import ImageEconomiHover from "@/src/app/assent/Img/adminPanel/EconomiHover.svg";
import ImagePoshtibani from "@/src/app/assent/Img/adminPanel/Poshtibani.svg";
import ImagePoshtibaniHover from "@/src/app/assent/Img/adminPanel/PoshtibaniHover.svg";
import ImageMassege from "@/src/app/assent/Img/adminPanel/massege.svg";
import ImageMassegeHover from "@/src/app/assent/Img/adminPanel/massegeHover.svg";
import ImageSetting from "@/src/app/assent/Img/adminPanel/setting.svg";
import ImageSettingHover from "@/src/app/assent/Img/adminPanel/settingHover.svg";
import deleteUser from "@/src/app/assent/Img/adminPanel/DeletedUserNotHover.svg";
import deleteUserHover from "@/src/app/assent/Img/adminPanel/DeleteUser.svg";
import ImageExport from "@/src/app/assent/Img/adminPanel/Exit.svg";

import DashboardDark from "@/src/app/assent/Img/adminPanel/DashboardDark.svg";
import DashboardDarkHover from "@/src/app/assent/Img/adminPanel/DashboardDarkHover.svg";
import DarkImageUse from "@/src/app/assent/Img/adminPanel/DarkImageUser.svg";
import DarkImageUseHover from "@/src/app/assent/Img/adminPanel/DarkImageUseHover.svg";
import darkImageVam from "@/src/app/assent/Img/adminPanel/darkImageVam.svg";
import darkImageVamHover from "@/src/app/assent/Img/adminPanel/darkImageVamHover.svg";
import darkImagePassword from "@/src/app/assent/Img/adminPanel/darkImagePassword.svg";
import darkImagePasswordHover from "@/src/app/assent/Img/adminPanel/darkImagePasswordHover.svg";
import darkImageEconomi from "@/src/app/assent/Img/adminPanel/darkImageEconomi.svg";
import darkImageEconomiHover from "@/src/app/assent/Img/adminPanel/darkImageEconomiHover.svg";
import darkImageSetting from "@/src/app/assent/Img/adminPanel/darkImageSetting.svg";
import darkImageSettingHover from "@/src/app/assent/Img/adminPanel/darkImageSettingHover.svg";
import darkImagePoshtibani from "@/src/app/assent/Img/adminPanel/darkImagePoshtibani.svg";
import darkImagePoshtibaniHover from "@/src/app/assent/Img/adminPanel/darkImagePoshtibaniHover.svg";
import darkImageMassege from "@/src/app/assent/Img/adminPanel/darkImageMassege.svg";
import darkImageMassegeHover from "@/src/app/assent/Img/adminPanel/darkImageMassegeHover.svg";
import darkImageMangment from "@/src/app/assent/Img/adminPanel/darkImageMangment.svg";
import darkImageMangmentHover from "@/src/app/assent/Img/adminPanel/darkImageMangmentHover.svg";
import darkdeleteUser from "@/src/app/assent/Img/adminPanel/darkdeleteUser.svg";
import darkdeleteUserHover from "@/src/app/assent/Img/adminPanel/darkdeleteUserHover.svg";

// interface NavbarItem {
//   id: number;
//   src: StaticImageData;
//   hoverSrc: StaticImageData;
//   darkSrc: StaticImageData;
//   darkhoverSrc: StaticImageData;
//   link: string;
// }
interface NavbarItem {
  id: number;
  src: string;
  hoverSrc: string;
  darkSrc: string;
  darkhoverSrc: string;
  link: string;
}

const Navbar: NavbarItem[] = [
  {
    id: 1,
    src: ImageDashboard,
    hoverSrc: ImageDashboardHover,
    darkSrc: DashboardDark,
    darkhoverSrc: DashboardDarkHover,
    link: "/dashboard",
  },
  {
    id: 2,
    src: ImageUser,
    hoverSrc: ImageUserHover,
    darkSrc: DarkImageUse,
    darkhoverSrc: DarkImageUseHover,
    link: "/everyuser",
  },
  {
    id: 3,
    src: ImageVam,
    hoverSrc: ImageVamHover,
    darkSrc: darkImageVam,
    darkhoverSrc: darkImageVamHover,
    link: "/allloanaplication",
  },
  {
    id: 4,
    src: ImagePassword,
    hoverSrc: ImagePasswordHover,
    darkSrc: darkImagePassword,
    darkhoverSrc: darkImagePasswordHover,
    link: "/userpass",
  },
  {
    id: 5,
    src: ImageEconomi,
    hoverSrc: ImageEconomiHover,
    darkSrc: darkImageEconomi,
    darkhoverSrc: darkImageEconomiHover,
    link: "/showuserdetail",
  },
  {
    id: 6,
    src: ImageSetting,
    hoverSrc: ImageSettingHover,
    darkSrc: darkImageSetting,
    darkhoverSrc: darkImageSettingHover,
    link: "/ruleadmin",
  },
  {
    id: 7,
    src: ImagePoshtibani,
    hoverSrc: ImagePoshtibaniHover,
    darkSrc: darkImagePoshtibani,
    darkhoverSrc: darkImagePoshtibaniHover,
    link: "/support",
  },
  {
    id: 8,
    src: ImageMassege,
    hoverSrc: ImageMassegeHover,
    darkSrc: darkImageMassege,
    darkhoverSrc: darkImageMassegeHover,
    link: "/sentmessageadmin",
  },
  {
    id: 9,
    src: ImageMangment,
    hoverSrc: ImageMangmentHover,
    darkSrc: darkImageMangment,
    darkhoverSrc: darkImageMangmentHover,
    link: "/management",
  },
  {
    id: 10,
    src: deleteUser,
    hoverSrc: deleteUserHover,
    darkSrc: darkdeleteUser,
    darkhoverSrc: darkdeleteUserHover,
    link: "/userdeleteadmin",
  },
];

// function AdminPageNavbar({ isDarkMode, toggleTheme }: AdminPageNavbarProps) {
function AdminPageNavbar() {
  const [hoverImage, setHoverImage] = useState<{ [key: number]: boolean }>({});
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [clickedImage, setClickedImage] = useState<number | null>(null);

  const isMobile = useMediaQuery({ maxWidth: 800 });

  const handleMouseEnter = (id: number) => {
    setHoverImage((prev) => ({ ...prev, [id]: true }));
  };

  const handleMouseLeave = (id: number) => {
    setHoverImage((prev) => ({ ...prev, [id]: false }));
  };

  const handleClick = (id: number) => {
    setClickedImage(id);
    setHoverImage((prev) => ({ ...prev, [id]: true }));
    localStorage.setItem("clickedImage", id.toString());
  };

  return (
    <div className="bg-[#F8F9FA] dark:bg-[#283B4D]">
     
      <div
        className={`flex w-80 flex-col mt-5 mr-10 bg-[#F8F9FA] dark:bg-[#283B4D] gap-9 ${
          isMobile && !isMenuOpen ? "hidden" : ""
        }`}
      >
        {/* رندر کردن تصاویر بر اساس حالت دارک مود */}
        {Navbar.map((image) => (
          <Link key={image.id} href={image.link} passHref>
            <div
              className="relative -mt-2"
              onMouseEnter={() => handleMouseEnter(image.id)}
              onMouseLeave={() => handleMouseLeave(image.id)}
              onClick={() => handleClick(image.id)}
            >
              <Image
                src={
                  // isDarkMode
                  //   ? hoverImage[image.id] || clickedImage === image.id
                  //     ? image.darkhoverSrc
                  //     : image.darkSrc
                    hoverImage[image.id] || clickedImage === image.id
                    ? image.hoverSrc
                    : image.src
                }
                alt={`Image ${image.id}`}
                width={200}
                height={200}
                className="transition-opacity duration-300 cursor-pointer ease-in-out"
                style={{ position: "relative" }}
              />
            </div>
          </Link>
        ))}
        <Link href="/exitadmin">
          <button className="mr-[1%] mt-[2%] ">
            <Image
              src={ImageExport}
              width={60}
              alt="Exit"
              className="cursor-pointer"
            />
          </button>
        </Link>
      </div>
    </div>
  );
}

export default AdminPageNavbar;