// import { useQuery } from '@tanstack/react-query';
// import axios from 'axios';
// import { FC } from 'react';

// interface UserData {
//   first_name: string | null;
//   last_name: string | null;
// }

// const fetchUserData = async () => {
//   const authToken = localStorage.getItem("authToken");
//   if (!authToken) {
//     throw new Error("توکن موجود نیست.");
//   }

//   const response = await axios.put<UserData>("https://fundcharitynet.com/api/users/index", {}, {
//     headers: {
//       Authorization: `Bearer ${authToken}`
//     },
//   });

//   return response.data;
// };

// const SetedPassword: FC = () => {
//   const { data, error, isLoading } = useQuery({
//     queryKey: ['userData'], 
//     queryFn: fetchUserData, 
//   });

//   const completions = data ? [
//     {
//       name: `${data.first_name || ""} ${data.last_name || ""}`.trim()
//     }
//   ] : [];

//   if (isLoading) {
//     return (
//       <div>
//          <div className="">
//         <div className="flex justify-center">
//         <div className="bg-white dark:bg-[#4F5D74] shadow-md mt-5 p-6  md:p-10  w-[97%] rounded-md">
//         <div className='flex justify-center items-center'>
//            <span className="loading loading-dots text-[#4FD1C5] loading-lg"></span>
//            </div>
//           </div>
//         </div>
//       </div>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div>
//          <div className="">
//         <div className="flex justify-center">
//         <div className="bg-white dark:bg-[#4F5D74] shadow-md mt-5 p-6  md:p-10  w-[97%] rounded-md">
//         <div>
//            <p className="dark:text-white">خطا در دریافت داده‌ها: {(error as Error).message}</p>           </div>
//           </div>
//         </div>
//       </div>
//       </div>
//     );
//   }

//   if (!data || completions[0].name === "") {
//     return(
//       <div>
//       <div className="">
//      <div className="flex justify-center">
//        <div className="bg-white dark:bg-[#4F5D74] shadow-md mt-5 p-6  md:p-10  w-[97%] rounded-md">
//         <div className='flex justify-center items-center'>
//         <p className="dark:text-white">کاربری یافت نشد</p>
//         </div>
//        </div>
//      </div>
//    </div>
//    </div>
//     )
//   }

//   return (
//     <div>
//       <div className="">
//         <div className="flex justify-center">
//         <div className="bg-white dark:bg-[#4F5D74] shadow-md mt-5 p-6  md:p-10  w-[97%] rounded-md">
//         {completions.map((item, index) => (
//                 <div
//                   key={index}
//                   className="flex justify-between border-b last:border-b-0 py-9"
//                 >
//                   <span className="font-bold dark:text-white">{item.name}</span>
//                   <span className="dark:text-white">تکمیل شده</span>
//                 </div>
//               ))
//             }
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default SetedPassword;

import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { FC } from 'react';

interface UserData {
  id: number;
  first_name: string;
  last_name: string;
  full_name: string;
  media: { original_url: string }[];
}

const fetchUserData = async () => {
  const authToken = localStorage.getItem("authToken");
  if (!authToken) {
    throw new Error("توکن موجود نیست.");
  }

  const response = await axios.put<{ user: { data: UserData[] } }>(
    "https://fundcharitynet.com/api/users/index",
    
    {   permission: "active"},
    {
      headers: {
        Authorization: `Bearer ${authToken}`
      },
    }
  );

  return response.data.user.data;
};

const SetedPassword: FC = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ['userData'], 
    queryFn: fetchUserData, 
  });

  if (isLoading) {
    return (
      <div className="flex justify-center mt-5">
        <div className="bg-white dark:bg-[#4F5D74] shadow-md p-6 md:p-10 w-[97%] rounded-md flex justify-center items-center">
          <span className="loading loading-dots text-[#4FD1C5] loading-lg"></span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center mt-5">
        <div className="bg-white dark:bg-[#4F5D74] shadow-md p-6 md:p-10 w-[97%] rounded-md">
          <p className="dark:text-white">خطا در دریافت داده‌ها: {(error as Error).message}</p>
        </div>
      </div>
    );
  }

  if (!data || data.length === 0) {
    return (
      <div className="flex justify-center mt-5">
        <div className="bg-white dark:bg-[#4F5D74] shadow-md p-6 md:p-10 w-[97%] rounded-md flex justify-center items-center">
          <p className="dark:text-white">کاربری یافت نشد</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex justify-center mt-5">
      <div className="bg-white dark:bg-[#4F5D74] shadow-md p-6 md:p-10 w-[97%] rounded-md">
        {data.map((user) => (
          <div key={user.id} className="flex justify-between border-b last:border-b-0 py-9">
            <span className="font-bold dark:text-white">{user.full_name || `${user.first_name} ${user.last_name}`}</span>
            <span className="dark:text-white">تکمیل شده</span>
           
          </div>
        ))}
      </div>
    </div>
  );
}

export default SetedPassword;



