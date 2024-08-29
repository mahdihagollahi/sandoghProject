import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import UserTable from '@/src/app/components/AdminPage/UserTable';
import Image from 'next/image';
import backImage from '@/src/app/assent/Img/adminPanel/back.svg';
import ImageSearch from '@/src/app/assent/Img/adminPanel/Search.svg';
import RoutTableUser from './RoutTableUser';
import DetailUser from './DetailUserComponnent';

interface User {
  id: number;
  src: string;
  name: string;
  joinDate: string;
  loans: string;
}

const fetchUsers = async (): Promise<User[]> => {
  const token = localStorage.getItem('authToken');
  if (!token) {
    throw new Error("No auth token found");
  }

  try {
    const response = await axios.put(
      "https://mohammadelia30.ir/shabab/api/users/index",
      {},
      {
        headers: {
          'Accept': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
      }
    );

    // لاگ کردن داده‌های API
    console.log('Fetched data:', response.data);

    const usersData = response.data?.users || [];

    if (!Array.isArray(usersData)) {
      throw new Error("Invalid data format received from API");
    }

    return usersData.map((user: any) => ({
      id: user.id,
      src: user.avatar_url || "/default-avatar.png",
      name: `${user.first_name} ${user.last_name}`,
      joinDate: new Date(user.created_at).toLocaleDateString("fa-IR"),
      loans: "0 وام",
    }));
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
};


const EveryUser: React.FC = () => {
  const [selectedUserId, setSelectedUserId] = useState<number | null>(null);

  const { data: users, error, isLoading } = useQuery<User[], Error>({
    queryKey: ['users'],
    queryFn: fetchUsers,
  });

  if (isLoading) return (
    <div className='dark:bg-black'>
      <div className="flex gap-24 items-center mb-2 mt-10 mr-3">
        <div className="mr-2">
          <p className="font-bold text-lg">مشاهده کاربران</p>
        </div>
        <div className="flex items-center gap-2">
          <label className="input flex items-center border border-[#E2E8F0] gap-4">
            <Image src={ImageSearch} width={20} height={20} alt="search" />
            <input
              className="w-[32rem] h-[32rem] "
              type="search"
              placeholder="جستجو نام کاربری یا شماره تلفن"
            />
          </label>
        </div>
        <div className="flex justify-end mr-2">
          <a href="" className="flex items-center">
            بازگشت
            <Image src={backImage} width={38} height={38} alt="arrow" />
          </a>
        </div>
      </div>
      <div>
        <RoutTableUser />
      </div>
      <div>
      <UserTable users={[]} onUserSelect={setSelectedUserId} />
      <div className='flex justify-center items-center -mt-5'>
      <span className="loading loading-dots text-accent loading-lg"></span>
      </div>
      </div>
    </div>
  );

  if (error) return <p>{error.message}</p>;

  return (
    <div className='dark:bg-black'>
      <div className="flex gap-24 items-center mb-2 mt-5 mr-3">
        <div className="mr-2">
          <p className="font-bold text-lg">مشاهده کاربران</p>
        </div>
        <div className="flex items-center gap-2">
          <label className="input flex items-center border border-[#E2E8F0] gap-4">
            <Image src={ImageSearch} width={20} height={20} alt="search" />
            <input
              className="w-[32rem] h-[32rem]"
              type="search"
              placeholder="جستجو نام کاربری یا شماره تلفن"
            />
          </label>
        </div>
        <div className="flex justify-end mr-2">
          <a href="" className="flex items-center">
            بازگشت
            <Image src={backImage} width={38} height={38} alt="arrow" />
          </a>
        </div>
      </div>
      <div>
        <RoutTableUser />
      </div>
      {selectedUserId ? (
        <DetailUser userId={selectedUserId} />
      ) : (
        <UserTable users={users || []} onUserSelect={setSelectedUserId} />
      )}
    </div>
  );
};

export default EveryUser;



// import React, { useState } from 'react';
// import { useQuery } from '@tanstack/react-query';
// import axios from 'axios';
// import UserTable from '@/src/app/components/AdminPage/UserTable';
// import Image from 'next/image';
// import backImage from '@/src/app/assent/Img/adminPanel/back.svg';
// import ImageSearch from '@/src/app/assent/Img/adminPanel/Search.svg';
// import RoutTableUser from './RoutTableUser';
// import DetailUser from './DetailUserComponnent';

// interface User {
//   id: number;
//   src: string;
//   name: string;
//   joinDate: string;
//   loans: string;
// }

// const fetchUsers = async (): Promise<User[]> => {
//   const token = localStorage.getItem('authToken');
  
//   if (!token) {
//     throw new Error("No auth token found");
//   }

//   try {
//     const response = await axios.put(
//       "https://mohammadelia30.ir/shabab/api/users/index",
//       {},
//       {
//         headers: {
//           'Accept': 'application/json',
//           'Authorization': `Bearer ${token}`,
//         },
//       }
//     );

//     console.log("Fetched users data:", response.data);

//     // Check if the response contains the expected structure
//     if (!response.data || !Array.isArray(response.data.data)) {
//       throw new Error("Unexpected response structure: Missing 'data' property or 'data' is not an array");
//     }

    
//     return response.data.data.map((user: any) => ({
//       id: user.id,
//       src: user.avatar_url || "/default-avatar.png", 
//       name: `${user.first_name} ${user.last_name}`,
//       joinDate: new Date(user.created_at).toLocaleDateString("fa-IR"),
//       loans: "0 وام",
//     }));
//   } catch (error) {
//     // Log the error for debugging
//     console.error("Error fetching users:", error);
//     throw new Error("Failed to fetch users");
//   }
// };

// const EveryUser: React.FC = () => {
//   const [selectedUserId, setSelectedUserId] = useState<number | null>(null);

//   const { data: users, error, isLoading } = useQuery<User[], Error>({
//     queryKey: ['users'],
//     queryFn: fetchUsers,
//     retry: 1, // Retry once on failure
//   });

//   if (isLoading) return (
//     <div className='dark:bg-black'>
//       <div className="flex gap-24 items-center mb-2 mt-10 mr-3">
//         <div className="mr-2">
//           <p className="font-bold text-lg">مشاهده کاربران</p>
//         </div>
//         <div className="flex items-center gap-2">
//           <label className="input flex items-center border border-[#E2E8F0] gap-4">
//             <Image src={ImageSearch} width={20} height={20} alt="search" />
//             <input
//               className="w-[32rem] h-[32rem]"
//               type="search"
//               placeholder="جستجو نام کاربری یا شماره تلفن"
//             />
//           </label>
//         </div>
//         <div className="flex justify-end mr-2">
//           <a href="" className="flex items-center">
//             بازگشت
//             <Image src={backImage} width={38} height={38} alt="arrow" />
//           </a>
//         </div>
//       </div>
//       <div>
//         <RoutTableUser />
//       </div>
//       <div>
//         <UserTable users={[]} onUserSelect={setSelectedUserId} />
//         <div className='flex justify-center items-center -mt-5'>
//           <span className="loading loading-dots text-accent loading-lg"></span>
//         </div>
//       </div>
//     </div>
//   );

//   if (error) return (
//     <div className='dark:bg-black'>
//       <div className="flex gap-24 items-center mb-2 mt-10 mr-3">
//         <div className="mr-2">
//           <p className="font-bold text-lg">مشاهده کاربران</p>
//         </div>
//         <div className="flex items-center gap-2">
//           <label className="input flex items-center border border-[#E2E8F0] gap-4">
//             <Image src={ImageSearch} width={20} height={20} alt="search" />
//             <input
//               className="w-[32rem] h-[32rem]"
//               type="search"
//               placeholder="جستجو نام کاربری یا شماره تلفن"
//             />
//           </label>
//         </div>
//         <div className="flex justify-end mr-2">
//           <a href="" className="flex items-center">
//             بازگشت
//             <Image src={backImage} width={38} height={38} alt="arrow" />
//           </a>
//         </div>
//       </div>
//       <div>
//         <RoutTableUser />
//       </div>
//       <p className='text-red-500 font-bold'>{error.message}</p>
//     </div>
//   );

//   return (
//     <div className='dark:bg-black'>
//       <div className="flex gap-24 items-center mb-2 mt-5 mr-3">
//         <div className="mr-2">
//           <p className="font-bold text-lg">مشاهده کاربران</p>
//         </div>
//         <div className="flex items-center gap-2">
//           <label className="input flex items-center border border-[#E2E8F0] gap-4">
//             <Image src={ImageSearch} width={20} height={20} alt="search" />
//             <input
//               className="w-[32rem] h-[32rem]"
//               type="search"
//               placeholder="جستجو نام کاربری یا شماره تلفن"
//             />
//           </label>
//         </div>
//         <div className="flex justify-end mr-2">
//           <a href="" className="flex items-center">
//             بازگشت
//             <Image src={backImage} width={38} height={38} alt="arrow" />
//           </a>
//         </div>
//       </div>
//       <div>
//         <RoutTableUser />
//       </div>
//       {selectedUserId ? (
//         <DetailUser userId={selectedUserId} />
//       ) : (
//         <UserTable users={users || []} onUserSelect={setSelectedUserId} />
//       )}
//     </div>
//   );
// };

// export default EveryUser;

