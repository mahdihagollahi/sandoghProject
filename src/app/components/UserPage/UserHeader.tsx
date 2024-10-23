// // // import React from 'react'
// // // import Image from 'next/image'
// // // import useImage from '@/src/app/assent/Img/adminPanel/40px.png'
// // // function UserHeader() {
// // //   const User =[
// // //     {id:1 , name:'امیر محمد قنبری' , image:useImage}
// // //   ]
// // //   return (
// // //     <div  className='w-full    '>
// // //         <div className=' flex gap-4 flex-col md:flex-row justify-between bg-[#FFFFFF] w-[72%] mt-4  ml-3 md:mr-20 md:ml-3   lg:mr-20 lg:ml-3  xl:mr-96  rounded-md shadow-lg  py-3 px-6 h-auto md:h-16 '>
// // //         <div className='flex items-center mb-4 md:mb-0 '>
// // //             <p className='mt-1 text-[#2D3748] font-light text-lg  '>
// // //                 سلام ،  وقت شما بخیر  به بخش داشبورد خوش آمدید ، گزارشات مورد نیاز شما در اختیار شماست !
// // //             </p>
// // //         </div>
// // //         <div className='flex justify-between gap-4'>

// // //             <div>
// // //             <Image className='bg-[#FFFFFF] rounded-full ' src={User[0].image} alt='user' width={40} height={40}/>

// // //             </div>
// // //             <div className='hidden lg:inline lg:h-auto md:mb-4 '>
// // //                <p className=' text-[#2D3748] mt-2 flex items-center  font-medium text-base  '>
// // //               {User[0].name}
// // //                </p>
// // //             </div>
// // //         </div>
// // //         </div>
       
      
// // //     </div>
// // //   )
// // // }

// // // export default UserHeader
// // import React, { useEffect, useState } from 'react';
// // import axios from 'axios';
// // import Image from 'next/image';

// // function UserHeader() {
// //   const [user, setUser] = useState(null);

// //   useEffect(() => {
// //     const fetchUserData = async () => {
// //       try {
// //         const response = await axios.post('https://mohammadelia30.ir/shabab/api/auth/me');
// //         const { first_name, last_name, media } = response.data.user;
// //         const imageUrl = media.length > 0 ? media[0].url : '/default-image.png'; // Use default image if none exists
// //          console.log(response)
// //         setUser({
// //           name: `${first_name} ${last_name}`,
// //           image: imageUrl,
// //         });
// //       } catch (error) {
// //         console.error('Error fetching user data:', error);
// //       }
// //     };

// //     fetchUserData();
// //   }, []);

// //   if (!user) {
// //     return <div>Loading...</div>; // Show loading state until data is fetched
// //   }

// //   return (
// //     <div className='w-full'>
// //       <div className='flex gap-4 flex-col md:flex-row justify-between bg-[#FFFFFF] w-[72%] mt-4 ml-3 md:mr-20 md:ml-3 lg:mr-20 lg:ml-3 xl:mr-96 rounded-md shadow-lg py-3 px-6 h-auto md:h-16'>
// //         <div className='flex items-center mb-4 md:mb-0'>
// //           <p className='mt-1 text-[#2D3748] font-light text-lg'>
// //             سلام ، وقت شما بخیر به بخش داشبورد خوش آمدید ، گزارشات مورد نیاز شما در اختیار شماست!
// //           </p>
// //         </div>
// //         <div className='flex justify-between gap-4'>
// //           <div>
// //             <Image
// //               className='bg-[#FFFFFF] rounded-full'
// //               src={user.image}
// //               alt='user'
// //               width={40}
// //               height={40}
// //             />
// //           </div>
// //           <div className='hidden lg:inline lg:h-auto md:mb-4'>
// //             <p className='text-[#2D3748] mt-2 flex items-center font-medium text-base'>
// //               {user.name}
// //             </p>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // export default UserHeader;
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import Image from 'next/image';

// interface User {
//   name: string;
//   image: string;
// }

// function UserHeader() {
//   const [user, setUser] = useState<User | null>(null);

//   useEffect(() => {
//     const fetchUserData = async () => {
//       try {
//         const response = await axios.post('https://mohammadelia30.ir/shabab/api/auth/me');
//         const { first_name, last_name, media } = response.data.user;
//         const imageUrl = media.length > 0 ? media[0].url : '/default-image.png'; // Use default image if none exists

//         setUser({
//           name: `${first_name} ${last_name}`,
//           image: imageUrl,
//         });
//       } catch (error) {
//         console.error('Error fetching user data:', error);
//       }
//     };

//     fetchUserData();
//   }, []);

//   if (!user) {
//     return <div>Loading...</div>; // Show loading state until data is fetched
//   }

//   return (
//     <div className='w-full'>
//       <div className='flex gap-4 flex-col md:flex-row justify-between bg-[#FFFFFF] w-[72%] mt-4 ml-3 md:mr-20 md:ml-3 lg:mr-20 lg:ml-3 xl:mr-96 rounded-md shadow-lg py-3 px-6 h-auto md:h-16'>
//         <div className='flex items-center mb-4 md:mb-0'>
//           <p className='mt-1 text-[#2D3748] font-light text-lg'>
//             سلام ، وقت شما بخیر به بخش داشبورد خوش آمدید ، گزارشات مورد نیاز شما در اختیار شماست!
//           </p>
//         </div>
//         <div className='flex justify-between gap-4'>
//           <div>
//             <Image
//               className='bg-[#FFFFFF] rounded-full'
//               src={user.image}
//               alt='user'
//               width={40}
//               height={40}
//             />
//           </div>
//           <div className='hidden lg:inline lg:h-auto md:mb-4'>
//             <p className='text-[#2D3748] mt-2 flex items-center font-medium text-base'>
//               {user.name}
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default UserHeader;
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Image from 'next/image';
import IconImage from '@/app/assent/Img/adminPanel/defultUser.png';

interface User {
  name: string;
  image: string;
}

function UserHeader() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
      
        const authToken = localStorage.getItem('authToken');

        if (!authToken) {
          console.error('No auth token found');
          return;
        }

       
        const response = await axios.post(
          'https://mohammadelia30.ir/shabab/api/auth/me',
          {},
          {
            headers: {
              Authorization: `Bearer ${authToken}`,
            },
          }
        );

        const { first_name, last_name, media } = response.data.user;
        const imageUrl = media.length > 0 ? media[0].url : IconImage.src;

        setUser({
          name: `${first_name} ${last_name}`,
          image: imageUrl,
        });
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, []);

  if (!user) {
    return <div>Loading...</div>; 
  }

  return (
    <div className=''>
      <div className='flex gap-4 flex-col md:flex-row justify-between bg-[#FFFFFF] w-[118%] mt-4 ml-3   rounded-md shadow-lg py-3 px-6 h-auto md:h-16'>
        <div className='flex items-center mb-4 md:mb-0'>
          <p className='mt-1 text-[#2D3748] whitespace-nowrap font-light text-lg'>
            سلام ، وقت شما بخیر به بخش داشبورد خوش آمدید ، گزارشات مورد نیاز شما در اختیار شماست!
          </p>
        </div>
        <div className='flex justify-between gap-4'>
          <div>
            <Image
              className='bg-[#FFFFFF] rounded-full'
              src={user.image}
              alt='user'
              width={40}
              height={40}
            />
          </div>
          <div className='hidden lg:inline lg:h-auto md:mb-4'>
            <p className='text-[#2D3748] mt-2 flex items-center font-medium text-base'>
              {user.name}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserHeader;