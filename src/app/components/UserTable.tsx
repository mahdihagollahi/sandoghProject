// import React,{useState} from 'react'
// import Image from 'next/image'
// import FillImage from '@/app/assent/Img/adminPanel/Fill 396.svg'
// import DeleteImage from '@/app/assent/Img/adminPanel/Delete.svg'
// import Paginate from './Paginate'



// const UserTable =({users})=> {

//     const [currentPage , setCurrentPage]= useState(0)
//     const itemsPerPage =7;

//     const pageClick = (data) =>{
//         setCurrentPage(data.selected)
//     }

//     const offset = currentPage * itemsPerPage;
//     const currentPageData = users.slice(offset, offset + itemsPerPage);
//     const pageCount = Math.ceil(users.length / itemsPerPage);
  
//   return (
//     <div>
//         <div className='p-4'>
//             <div className='max-w-full bg-white shadow-md overflow-hidden'>
//                 <table className='w-full table-auto  border-collapse '>
//                     <thead className='table-header-group'>
//                         <tr className=' ' >
                        
//                         <th className='w-1/12 px-4 py-2 font-bold  text-sm text-[#2D3748]'>
                                
//                             </th>

//                             <th className='w-1/12 px-4 py-2 font-bold  text-sm text-[#2D3748]'>
//                                 نام کاربران 
//                             </th>

//                             <th className='w-1/12 px-4 py-2 font-bold text-sm text-[#2D3748]'>
//                             تاریخ عضویت
//                           </th>

//                           <th className='w-1/12 px-4 py-2 font-bold text-sm text-[#2D3748]'>
//                           وام های دریافتی
//                           </th>

//                           <th className='w-1/12 px-4 py-2 font-bold text-sm text-[#2D3748]'>
//                           جزئیات 
//                           </th>

//                           <th className='w-1/12 px-4 py-2 font-bold text-sm text-[#2D3748]'>
//                           حذف کردن
//                           </th>
//                         </tr>
//                     </thead>
//                     <div className="max-h-96 ">
//                     <tbody className='w-full table-auto border-collapse'>
//                     {currentPageData.map((user, index) => (
//                             <tr key={index}>
                                
//                               <td className='py-2 px-4 w-1/12 border-b '>
//                     <Image src={user.src} width={40} height={40} alt='' />
//                   </td>
                  
//                                <td className='py-2 px-4 w-2/12   border-b'>{user.name}</td>
//                                <td className='py-2 px-4 w-2/12  border-b'>{user.joinDate}</td>
//                                <td className='py-2 px-4 w-2/12  border-b'>{user.loans}</td>
//                                <td className=' border-b w-2/12 '>
//                                 <button className='py-2 px-11 border flex items-center gap-3 border-[#4FD1C5] p-1 rounded-md'>
//                                     <p className='  font-normal text-sm text-[#4FD1C5]'>
//                                     اطلاعات بیشتر

//                                     </p>
//                                     <Image
//                                     src={FillImage}
//                                     width={24}
//                                     height={24}
//                                     alt=''
//                                     />
//                                 </button>
//                                </td>

//                                <td className='py-2 w-1/12 px-4 border-b'>
//                                 <button className='w-6 h-6 '>
//                                 <Image src={DeleteImage} width={34} height={34} alt='حذف' />                                </button>
//                                </td>
//                             </tr>
//                         ))}
                        
//                     </tbody>
//                     </div>
//                 </table>
                 
                
              
//             </div>
//             <Paginate
//                  currentPageData={currentPageData}
//                  pageCount={pageCount}
//                  pageClick={pageClick}
//                  />
//         </div>
//     </div>
//   )
// }

// export default UserTable



import React, { useState } from 'react';
import Image from 'next/image';
import FillImage from '@/app/assent/Img/adminPanel/Fill 396.svg';
import DeleteImage from '@/app/assent/Img/adminPanel/Delete.svg';
import Paginate from './Paginate';

const UserTable = ({ users }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 7;

  const pageClick = (data) => {
    setCurrentPage(data.selected);
  };

  const offset = currentPage * itemsPerPage;
  const currentPageData = users.slice(offset, offset + itemsPerPage);
  const pageCount = Math.ceil(users.length / itemsPerPage);

  return (
    <div>
      <div className="p-4">
        <div className="max-w-full bg-white shadow-md overflow-hidden">
          {/* جدول برای thead */}
          <table className="w-full table-auto border-collapse">
            <thead className="">
              <tr>
                <th className="w-[1%] px-4 py-2"></th>
                <th className="w-[20%] px-4 py-2">نام کاربران</th>
                <th className="w-[16%] px-4 py-2">تاریخ عضویت</th>
                <th className="w-[20%] px-4 py-2">وام های دریافتی</th>
                <th className="w-[25%] px-[18%] py-2">جزئیات</th>
                <th className="w-[13%] px-4 py-2">حذف کردن</th>
              </tr>
            </thead>
          </table>
          {/* جدول برای tbody */}
          <div className="max-h-96 ">
            <table className="w-full table-auto border-collapse">
              <tbody>
                {currentPageData.map((user, index) => (
                  <tr key={index}>
                    <td className="w-1/12 py-2 px-4 border-b">
                      <Image src={user.src} width={40} height={40} alt="" />
                    </td>
                    <td className="w-2/12 py-2 px-4 border-b">{user.name}</td>
                    <td className="w-2/12 py-2 px-4 border-b">{user.joinDate}</td>
                    <td className="w-2/12 py-2 px-4 border-b">{user.loans}</td>
                    <td className="w-3/12 py-2 px-4 border-b">
                      <button className="py-1 px-4 border flex items-center gap-2 border-teal-400 p-1 rounded-md">
                        <p className="font-normal text-sm text-teal-400">اطلاعات بیشتر</p>
                        <Image src={FillImage} width={24} height={24} alt="" />
                      </button>
                    </td>
                    <td className="w-1/12 py-2 px-4 border-b">
                      <button className="w-6 h-6">
                        <Image src={DeleteImage} width={34} height={34} alt="حذف" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <Paginate
            currentPageData={currentPageData}
            pageCount={pageCount}
            pageClick={pageClick}
          />
        </div>
      </div>
    </div>
  );
};

export default UserTable;
