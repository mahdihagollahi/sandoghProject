
// // // import React,{useState } from 'react'

// // // import Image from 'next/image';
// // // import ImageDashboard from '../assent/Img/adminPanel/dashboard.png';
// // // import ImageDashboardHover from '../assent/Img/adminPanel/dashboardHover.png';
// // // import ImageMangment from '../assent/Img/adminPanel/mangment.png';
// // // import ImageMangmentHover from '../assent/Img/adminPanel/mangmentHover.png';
// // // import ImageUser from '../assent/Img/adminPanel/use.png';
// // // import ImageUserHover from '../assent/Img/adminPanel/userHover.png';
// // // import ImageVam from '../assent/Img/adminPanel/request.png';
// // // import ImageVamHover from '../assent/Img/adminPanel/vamHover.png';
// // // import ImagePassword from '../assent/Img/adminPanel/password.png';
// // // import ImagePasswordHover from '../assent/Img/adminPanel/passwordHover.png';
// // // import ImageEconomi from '../assent/Img/adminPanel/economy.png';
// // // import ImageEconomiHover from '../assent/Img/adminPanel/economiHover.png';
// // // import ImagePoshtibani from '../assent/Img/adminPanel/poshtibani.png';
// // // import ImagePoshtibaniHover from '../assent/Img/adminPanel/poshtibaniHover.png';
// // // import ImageExport from '../assent/Img/adminPanel/Exit.jpg';


// // // const images = [

// // //   {
// // //     id: 1,
// // //     src:ImageDashboard,
// // //     hoverSrc:ImageDashboardHover
// // //   },

// // //   {
// // //     id: 2,
// // //     src:ImageMangment,
// // //     hoverSrc:ImageMangmentHover
// // //   },

// // //   {
// // //     id: 3,
// // //     src:ImageUser,
// // //     hoverSrc:ImageUserHover
// // //   },

// // //   {
// // //     id: 4,
// // //     src:ImageVam,
// // //     hoverSrc:ImageVamHover
// // //   },

// // //   {
// // //     id: 5,
// // //     src:ImagePassword,
// // //     hoverSrc:ImagePasswordHover
// // //   },


// // //   {
// // //     id:6,
// // //     src:ImageEconomi,
// // //     hoverSrc:ImageEconomiHover
// // //   },

// // //   {
// // //     id:7,
// // //     src:ImagePoshtibani,
// // //     hoverSrc:ImagePoshtibaniHover
// // //   },

 
// // // ]



// // // function AdminPageNavbar() {

// // //   const [hoverImage , setHoverImage]=useState<{ [key: number]: boolean }>({});

// // //   const handleMouseEnter = (id:number) => {
// // //       setHoverImage((pre) => ({...pre, [id]: true}))
// // //   }

// // //   const handleMouseLeave = (id:number) => {
// // //     setHoverImage((pre) => ({...pre, [id]: false}))
// // // }

// // // const handleClick = (id:number ) => {
// // //   setHoverImage((pre) => ({...pre, [id]: !pre[id]}))
// // // }
// // //   return (
// // //     <div>
// // //       <div className="flex flex-col mt-5 mr-10  gap-4">
// // //       {images.map((image) => (
// // //         <div
// // //           key={image.id}
// // //           className="relative "
         
// // //         >
// // //           <Image
// // //             src={hoverImage[image.id] ? image.hoverSrc : image.src}
// // //             alt={`Image ${image.id}`}
// // //             width={200}
// // //             onMouseEnter={() => handleMouseEnter(image.id)}
// // //             onMouseLeave={() => handleMouseLeave(image.id)}
// // //             onClick={() => handleClick(image.id)}
// // //             className="transition-opacity duration-300 ease-in-out"
// // //           />
// // //         </div>
// // //       ))}
// // //       <div className='mr-[1%]'>
// // //       <Image
// // //       src={ImageExport}
// // //       width={60}
// // //       alt='Exit'
// // //       />
// // //       </div>
    
// // //       </div>
// // //     </div>
// // //   )
// // // }

// // // export default AdminPageNavbar


import React, { useState } from 'react';
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
  { id: 1, src: ImageDashboard, hoverSrc: ImageDashboardHover },
  { id: 2, src: ImageMangment, hoverSrc: ImageMangmentHover },
  { id: 3, src: ImageUser, hoverSrc: ImageUserHover },
  { id: 4, src: ImageVam, hoverSrc: ImageVamHover },
  { id: 5, src: ImagePassword, hoverSrc: ImagePasswordHover },
  { id: 6, src: ImageEconomi, hoverSrc: ImageEconomiHover },
  { id: 7, src: ImagePoshtibani, hoverSrc: ImagePoshtibaniHover },
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
          <div key={image.id} className="relative mt-4  ">
              <div className="transition-container relative  "  onMouseEnter={() => handleMouseEnter(image.id)}
              onMouseLeave={() => handleMouseLeave(image.id)} >
            <Image
            
              src={hoverImage[image.id] ? image.hoverSrc : image.src}
              alt={`Image ${image.id}`}
              width={200}
             
              className={`transition-opacity duration-300 cursor-pointer ease-in-out ${hoverImage[image.id] ? 'opacity-0' : 'opacity-100'}`}            />
                <Image
                src={image.hoverSrc}
                alt={`Image ${image.id} Hover`}
                width={200}
                className={`absolute top-0 left-0 cursor-pointer transition-opacity duration-300 ease-in-out ${hoverImage[image.id] ? 'opacity-100' : 'opacity-0'}`}
              />
          </div>
          </div>
        ))}
        <div className='mr-[1%] mt-[10%] '>
          <Image src={ImageExport} width={60} alt='Exit' className='cursor-pointer' />
        </div>
      </div>
    </div>
  );
}

export default AdminPageNavbar;



// import React, { useState } from 'react';
// import { FaBars, FaTimes } from 'react-icons/fa';
// import { useMediaQuery } from 'react-responsive';
// import Image from 'next/image';
// import ImageDashboard from '../assent/Img/adminPanel/dasboard.svg';
// import ImageDashboardHover from '../assent/Img/adminPanel/dashboardHover.svg';
// import ImageMangment from '../assent/Img/adminPanel/mangment.svg';
// import ImageMangmentHover from '../assent/Img/adminPanel/mangmentHover.svg';
// import ImageUser from '../assent/Img/adminPanel/User.svg';
// import ImageUserHover from '../assent/Img/adminPanel/UserHover.svg';
// import ImageVam from '../assent/Img/adminPanel/Vam.svg';
// import ImageVamHover from '../assent/Img/adminPanel/VamHover.svg';
// import ImagePassword from '../assent/Img/adminPanel/Password.svg';
// import ImagePasswordHover from '../assent/Img/adminPanel/PasswordHover.svg';
// import ImageEconomi from '../assent/Img/adminPanel/Economi.svg';
// import ImageEconomiHover from '../assent/Img/adminPanel/EconomiHover.svg';
// import ImagePoshtibani from '../assent/Img/adminPanel/Poshtibani.svg';
// import ImagePoshtibaniHover from '../assent/Img/adminPanel/PasswordHover.svg';
// import ImageExport from '../assent/Img/adminPanel/Exit.svg';

// const images = [
//   { id: 1, src: ImageDashboard, hoverSrc: ImageDashboardHover },
//   { id: 2, src: ImageMangment, hoverSrc: ImageMangmentHover },
//   { id: 3, src: ImageUser, hoverSrc: ImageUserHover },
//   { id: 4, src: ImageVam, hoverSrc: ImageVamHover },
//   { id: 5, src: ImagePassword, hoverSrc: ImagePasswordHover },
//   { id: 6, src: ImageEconomi, hoverSrc: ImageEconomiHover },
//   { id: 7, src: ImagePoshtibani, hoverSrc: ImagePoshtibaniHover },
// ];

// function AdminPageNavbar() {
//   const [hoverImage, setHoverImage] = useState<{ [key: number]: boolean }>({});
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const isMobile = useMediaQuery({ maxWidth: 800 });

//   const handleMouseEnter = (id: number) => {
//     setHoverImage((prev) => ({ ...prev, [id]: true }));
//   };

//   const handleMouseLeave = (id: number) => {
//     setHoverImage((prev) => ({ ...prev, [id]: false }));
//   };

//   const handleMenuToggle = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   return (
//     <div>
//       {isMobile ? (
//         <div className="flex justify-between items-center p-4 bg-gray-800 text-white">
//           <span>Admin Panel</span>
//           <button onClick={handleMenuToggle}>
//             {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
//           </button>
//         </div>
//       ) : null}
//       <div className={`flex w-80 flex-col mt-5 mr-10 gap-9 ${isMobile && !isMenuOpen ? 'hidden' : ''}`}>
//         {images.map((image) => (
//           <div key={image.id} className="relative h-[170px] w-[100px] flex items-center justify-center">
//             <div
//               className="transition-container relative h-full w-full"
//               onMouseEnter={() => handleMouseEnter(image.id)}
//               onMouseLeave={() => handleMouseLeave(image.id)}
//             >
//               <Image
//                 src={image.src}
//                 alt={`Image ${image.id}`}
//                 layout="fill"
//                 objectFit="contain"
//                 className={`transition-opacity duration-300 ease-in-out ${hoverImage[image.id] ? 'opacity-0' : 'opacity-100'}`}
//               />
//               <Image
//                 src={image.hoverSrc}
//                 alt={`Image ${image.id} Hover`}
//                 layout="fill"
//                 objectFit="contain"
//                 className={`absolute top-0 left-0 transition-opacity duration-300 ease-in-out ${hoverImage[image.id] ? 'opacity-100' : 'opacity-0'}`}
//               />
//             </div>
//           </div>
//         ))}
//         <div className='mr-[1%]'>
//           <Image src={ImageExport} width={60} alt='Exit' />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default AdminPageNavbar;



