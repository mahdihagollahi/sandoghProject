// import React, { useState } from 'react';
// import Image from 'next/image';
// import FillImage from '@/src/app/assent/Img/adminPanel/Fill 396.svg';
// import iconDeletImage from '@/src/app/assent/Img/adminPanel/Delete.svg';
// import Paginate from './Paginate';
// import Link from 'next/link';

// interface User {
//   src: string;
//   name: string;
//   joinDate: string;
//   loans: number | string;
// }

// interface UserTableProps {
//   users: User[];
// }

// const UserTable: React.FC<UserTableProps> = ({ users }) => {
//   const [currentPage, setCurrentPage] = useState<number>(0);
//   const itemsPerPage = 7;

//   const pageClick = (data: { selected: number }) => {
//     setCurrentPage(data.selected);
//   };

//   const offset = currentPage * itemsPerPage;
//   const currentPageData = users.slice(offset, offset + itemsPerPage);
//   const pageCount = Math.ceil(users.length / itemsPerPage);
// console.log(users)
//   return (
//     <div>
//       <div className="p-4 pl-20 ">
//         <div className="max-w-full bg-white shadow-md overflow-hidden p-10 dark:bg-inherit dark:text-white">
//           <table className="w-full table-auto border-collapse">
//             <thead className="">
//               <tr>
//                 <th className="w-[1%] px-5 py-2"></th>
//                 <th className="w-[20%] px-4 py-2">نام کاربران</th>
//                 <th className="w-[16%] px-4 py-2">تاریخ عضویت</th>
//                 <th className="w-[20%] px-4 py-2">وام های دریافتی</th>
//                 <th className="w-[25%] px-[15%] py-2">جزئیات</th>
//                 <th className="w-[13%] px-4 py-2">حذف کردن</th>
//               </tr>
//             </thead>
//           </table>
//           <div className=" ">
//             <table className="w-full mt-[3%] table-auto border-collapse">
//               <tbody className='divide-y divide-gray-200 space-y-4 ' >
//                 {users.map((user, index) => (
//                   <tr key={index}  >
//                     <td className="w-1/12 py-4 px-4 ">
//                       <Image src={user.src} width={40} height={40} alt="" />
//                     </td>
//                     <td className="w-2/12 py-2 px-4 ">{user.name}</td>
//                     <td className="w-2/12 py-2 px-4 ">{user.joinDate}</td>
//                     <td className="w-2/12 py-2 px-4 ">{user.loans}</td>
//                     <td className="w-3/12 py-2 px-4 ">
//                     <Link href='/detailuser' passHref>
//                     <button className="py-[2%] px-8 border flex items-center gap-2 border-teal-400 p-1 rounded-md">
//                       <Image src={FillImage} width={24} height={24} alt="" />
//                         <p className="font-normal text-sm text-teal-400">اطلاعات بیشتر</p>
//                       </button>
//                     </Link>
                      
//                     </td>
//                     <td className="w-1/12 py-2 px-4 ">
//                       <button className="w-6 h-6 ">
//                         <Image src={iconDeletImage} width={34} height={34} alt="حذف" />
//                       </button>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
        
//         </div>
      
//       </div>
//       <Paginate
          
//           currentPageData={currentPageData}
//           pageCount={pageCount}
//           pageClick={pageClick}
//         />
//     </div>
//   );
// };

// export default UserTable;



import React, { useState } from 'react';
import Image from 'next/image';
import FillImage from '@/src/app/assent/Img/adminPanel/Fill 396.svg';
import iconDeletImage from '@/src/app/assent/Img/adminPanel/Delete.svg';
import Paginate from './Paginate';
import Link from 'next/link';

interface User {
  id: number;
  src: string;
  name: string;
  joinDate: string;
  loans: number | string;
  permission: string; 
}

interface UserTableProps {
  users: User[];
  onUserSelect: (userId: number | null) => void;
}

const UserTable: React.FC<UserTableProps> = ({ users, onUserSelect }) => {
  const [currentPage, setCurrentPage] = useState<number>(0);
  const itemsPerPage = 7;

  const pageClick = (data: { selected: number }) => {
    setCurrentPage(data.selected);
  };

  const offset = currentPage * itemsPerPage;
  const currentPageData = users.slice(offset, offset + itemsPerPage);
  const pageCount = Math.ceil(users.length / itemsPerPage);

  
  return (
    <div>
      <div className="p-4 pl-20">
        <div className="max-w-full bg-white shadow-md overflow-hidden p-10 dark:bg-inherit dark:text-white">
          <table className="w-full table-auto border-collapse">
            <thead>
              <tr>
                <th className="w-[1%] px-5 py-2"></th>
                <th className="w-[20%] px-4 py-2">نام کاربران</th>
                <th className="w-[16%] px-4 py-2">تاریخ عضویت</th>
                <th className="w-[20%] px-4 py-2">وام های دریافتی</th>
                <th className="w-[25%] px-[15%] py-2">جزئیات</th>
                <th className="w-[13%] px-4 py-2">حذف کردن</th>
              </tr>
            </thead>
          </table>
          <div className="mt-4">
            <table className="w-full table-auto border-collapse">
              <tbody className="divide-y divide-gray-200 space-y-4">
                {currentPageData.map((user) => (
                  <tr key={user.id} onClick={() => onUserSelect(user.id)}>
                    <td className="w-1/12 py-4 px-4">
                      <Image src={user.src} width={40} height={40} alt={user.name} />
                    </td>
                    <td className="w-2/12 py-2 px-4">{user.name}</td>
                    <td className="w-2/12 py-2 px-4">{user.joinDate}</td>
                    <td className="w-2/12 py-2 px-4">{user.loans}</td>
                    <td className="w-3/12 py-2 px-4">
                      <Link href='/detailuser' passHref>
                        <button className="py-[2%] px-8 border flex items-center gap-2 border-teal-400 p-1 rounded-md">
                          <Image src={FillImage} width={24} height={24} alt="" />
                          <p className="font-normal text-sm text-teal-400">اطلاعات بیشتر</p>
                        </button>
                      </Link>
                    </td>
                    <td className="w-1/12 py-2 px-4">
                      <button className="w-6 h-6">
                        <Image src={iconDeletImage} width={34} height={34} alt="حذف" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Paginate
        currentPageData={currentPageData}
        pageCount={pageCount}
        pageClick={pageClick}
      />
    </div>
  );
};

export default UserTable;


// import React, { useState } from 'react';
// import Image from 'next/image';
// import FillImage from '@/src/app/assent/Img/adminPanel/Fill 396.svg';
// import iconDeletImage from '@/src/app/assent/Img/adminPanel/Delete.svg';
// import Paginate from './Paginate';
// import Link from 'next/link';
// import { useMutation, QueryClient, QueryClientProvider } from 'react-query';
// import axios from 'axios';

// const queryClient = new QueryClient();

// interface User {
//   src: string;
//   name: string;
//   joinDate: string;
//   loans: number | string;
// }

// interface UserTableProps {
//   users: User[];
// }

// const UserTable: React.FC<UserTableProps> = ({ users , onUserSelect }) => {
//   const [currentPage, setCurrentPage] = useState<number>(0);
//   const itemsPerPage = 7;

//   const authToken = typeof window !== 'undefined' ? localStorage.getItem('authToken') : null;

//   const axiosInstance = axios.create({
//     baseURL: 'https://mohammadelia30.ir/shabab/api',
//     headers: {
//       'Content-Type': 'application/json',
//        'Authorization': `Bearer ${authToken}`,
//     },
//   });

//   const deleteUser = async (userId: string) => {
//     const response = await axiosInstance.get(`/users/delete?user_id=${userId}`);
//     return response.data;
//   };

//   const mutation = useMutation(deleteUser, {
//     onSuccess: () => {
 
//       queryClient.invalidateQueries('users');
//     },
//   });

//   const handleDelete = (userId: string) => {
//     mutation.mutate(userId);
//   };

//   const pageClick = (data: { selected: number }) => {
//     setCurrentPage(data.selected);
//   };

//   const offset = currentPage * itemsPerPage;
//   const currentPageData = users.slice(offset, offset + itemsPerPage);
//   const pageCount = Math.ceil(users.length / itemsPerPage);

//   return (
//     <div>
//       <div className="p-4 pl-20 ">
//         <div className="max-w-full bg-white shadow-md overflow-hidden p-10 dark:bg-inherit dark:text-white">
//           <table className="w-full table-auto border-collapse">
//             <thead className="">
//               <tr>
//                 <th className="w-[1%] px-5 py-2"></th>
//                 <th className="w-[20%] px-4 py-2">نام کاربران</th>
//                 <th className="w-[16%] px-4 py-2">تاریخ عضویت</th>
//                 <th className="w-[20%] px-4 py-2">وام های دریافتی</th>
//                 <th className="w-[25%] px-[15%] py-2">جزئیات</th>
//                 <th className="w-[13%] px-4 py-2">حذف کردن</th>
//               </tr>
//             </thead>
//           </table>
//           <div className=" ">
//             <table className="w-full mt-[3%] table-auto border-collapse">
//               <tbody className='divide-y divide-gray-200 space-y-4 ' >
//                 {currentPageData.map((user, index) => (
//                    <tr key={user.id} onClick={() => onUserSelect(user.id)}>
//                     <td className="w-1/12 py-4 px-4 ">
//                       <Image src={user.src} width={40} height={40} alt="" />
//                     </td>
//                     <td className="w-2/12 py-2 px-4 ">{user.name}</td>
//                     <td className="w-2/12 py-2 px-4 ">{user.joinDate}</td>
//                     <td className="w-2/12 py-2 px-4 ">{user.loans}</td>
//                     <td className="w-3/12 py-2 px-4 ">
//                       <Link href='/detailuser' passHref>
//                         <button className="py-[2%] px-8 border flex items-center gap-2 border-teal-400 p-1 rounded-md">
//                           <Image src={FillImage} width={24} height={24} alt="" />
//                           <p className="font-normal text-sm text-teal-400">اطلاعات بیشتر</p>
//                         </button>
//                       </Link>
//                     </td>
//                     <td className="w-1/12 py-2 px-4 ">
//                       <button className="w-6 h-6 " onClick={() => handleDelete(user.name)}>
//                         <Image src={iconDeletImage} width={34} height={34} alt="حذف" />
//                       </button>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>
//       <Paginate
//         currentPageData={currentPageData}
//         pageCount={pageCount}
//         pageClick={pageClick}
//       />
//     </div>
//   );
// };


// const WrappedUserTable: React.FC<UserTableProps> = ({ users }) => {
//   return (
//     <QueryClientProvider client={queryClient}>
//       <UserTable users={users} />
//     </QueryClientProvider>
//   );
// };

// export default WrappedUserTable;






