// // import React from 'react'
// // import Image from 'next/image'
// // import ImageDashboard from '../assent/Img/adminPanel/dashboard.png'
// // import ImageDashboardHover from '../assent/Img/adminPanel/dashboardHover.png'

// // function AdminPageNavbar() {
// //   return (
// //     <div >
// //       <div className='mt-5  mr-10 w-full'>
// //         <Image width={200} height={200} src={ImageDashboard} alt=""  />
// //       </div>

// //       <div className='mt-5  mr-10 w-full'>
// //         <Image width={200} height={200} src={ImageDashboardHover} alt=""  />
// //       </div>

      
// //     </div>
// //   )
// // }

// // export default AdminPageNavbar

// import React,{useState } from 'react'

// import Image from 'next/image';
// import ImageDashboard from '../assent/Img/adminPanel/dashboard.png';
// import ImageDashboardHover from '../assent/Img/adminPanel/dashboardHover.png';
// import ImageMangment from '../assent/Img/adminPanel/mangment.png';
// import ImageMangmentHover from '../assent/Img/adminPanel/mangmentHover.png';
// import ImageUser from '../assent/Img/adminPanel/use.png';
// import ImageUserHover from '../assent/Img/adminPanel/userHover.png';
// import ImageVam from '../assent/Img/adminPanel/request.png';
// import ImageVamHover from '../assent/Img/adminPanel/vamHover.png';
// import ImagePassword from '../assent/Img/adminPanel/password.png';
// import ImagePasswordHover from '../assent/Img/adminPanel/passwordHover.png';
// import ImageEconomi from '../assent/Img/adminPanel/economy.png';
// import ImageEconomiHover from '../assent/Img/adminPanel/economiHover.png';
// import ImagePoshtibani from '../assent/Img/adminPanel/poshtibani.png';
// import ImagePoshtibaniHover from '../assent/Img/adminPanel/poshtibaniHover.png';
// import ImageExport from '../assent/Img/adminPanel/Exit.jpg';


// const images = [

//   {
//     id: 1,
//     src:ImageDashboard,
//     hoverSrc:ImageDashboardHover
//   },

//   {
//     id: 2,
//     src:ImageMangment,
//     hoverSrc:ImageMangmentHover
//   },

//   {
//     id: 3,
//     src:ImageUser,
//     hoverSrc:ImageUserHover
//   },

//   {
//     id: 4,
//     src:ImageVam,
//     hoverSrc:ImageVamHover
//   },

//   {
//     id: 5,
//     src:ImagePassword,
//     hoverSrc:ImagePasswordHover
//   },


//   {
//     id:6,
//     src:ImageEconomi,
//     hoverSrc:ImageEconomiHover
//   },

//   {
//     id:7,
//     src:ImagePoshtibani,
//     hoverSrc:ImagePoshtibaniHover
//   },

 
// ]



// function AdminPageNavbar() {

//   const [hoverImage , setHoverImage]=useState<{ [key: number]: boolean }>({});

//   const handleMouseEnter = (id:number) => {
//       setHoverImage((pre) => ({...pre, [id]: true}))
//   }

//   const handleMouseLeave = (id:number) => {
//     setHoverImage((pre) => ({...pre, [id]: false}))
// }

// const handleClick = (id:number ) => {
//   setHoverImage((pre) => ({...pre, [id]: !pre[id]}))
// }
//   return (
//     <div>
//       <div className="flex flex-col mt-5 mr-10  gap-4">
//       {images.map((image) => (
//         <div
//           key={image.id}
//           className="relative "
         
//         >
//           <Image
//             src={hoverImage[image.id] ? image.hoverSrc : image.src}
//             alt={`Image ${image.id}`}
//             width={200}
//             onMouseEnter={() => handleMouseEnter(image.id)}
//             onMouseLeave={() => handleMouseLeave(image.id)}
//             onClick={() => handleClick(image.id)}
//             className="transition-opacity duration-300 ease-in-out"
//           />
//         </div>
//       ))}
//       <div className='mr-[1%]'>
//       <Image
//       src={ImageExport}
//       width={60}
//       alt='Exit'
//       />
//       </div>
    
//       </div>
//     </div>
//   )
// }

// export default AdminPageNavbar


import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useMediaQuery } from 'react-responsive';
import Image from 'next/image';
import ImageDashboard from '../assent/Img/adminPanel/dashboard.png';
import ImageDashboardHover from '../assent/Img/adminPanel/dashboardHover.png';
import ImageMangment from '../assent/Img/adminPanel/mangment.png';
import ImageMangmentHover from '../assent/Img/adminPanel/mangmentHover.png';
import ImageUser from '../assent/Img/adminPanel/use.png';
import ImageUserHover from '../assent/Img/adminPanel/userHover.png';
import ImageVam from '../assent/Img/adminPanel/request.png';
import ImageVamHover from '../assent/Img/adminPanel/vamHover.png';
import ImagePassword from '../assent/Img/adminPanel/password.png';
import ImagePasswordHover from '../assent/Img/adminPanel/passwordHover.png';
import ImageEconomi from '../assent/Img/adminPanel/economy.png';
import ImageEconomiHover from '../assent/Img/adminPanel/economiHover.png';
import ImagePoshtibani from '../assent/Img/adminPanel/poshtibani.png';
import ImagePoshtibaniHover from '../assent/Img/adminPanel/poshtibaniHover.png';
import ImageExport from '../assent/Img/adminPanel/Exit.jpg';

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
      <div className={`flex flex-col mt-5 mr-10 gap-4 ${isMobile && !isMenuOpen ? 'hidden' : ''}`}>
        {images.map((image) => (
          <div key={image.id} className="relative">
            <Image
              src={hoverImage[image.id] ? image.hoverSrc : image.src}
              alt={`Image ${image.id}`}
              width={200}
              onMouseEnter={() => handleMouseEnter(image.id)}
              onMouseLeave={() => handleMouseLeave(image.id)}
              className="transition-opacity duration-300 ease-in-out"
            />
          </div>
        ))}
        <div className='mr-[1%]'>
          <Image src={ImageExport} width={60} alt='Exit' />
        </div>
      </div>
    </div>
  );
}

export default AdminPageNavbar;
