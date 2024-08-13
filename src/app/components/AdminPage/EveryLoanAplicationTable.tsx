// // import React, { useState } from 'react';
// // import Paginate from './Paginate';

// // const UserTable = ({ users }) => {
//   // const [currentPage, setCurrentPage] = useState(0);
//   // const itemsPerPage = 7;

//   // const pageClick = (data) => {
//   //   setCurrentPage(data.selected);
//   // };

//   // const offset = currentPage * itemsPerPage;
//   // const currentPageData = users.slice(offset, offset + itemsPerPage);
//   // const pageCount = Math.ceil(users.length / itemsPerPage);

// //   return (
// //     <div>
// //       <div className="p-4 pl-20 ">
// //         <div className="max-w-full bg-white shadow-md overflow-hidden  p-10 dark:bg-inherit dark:text-white">
// //           <table className="w-full table-auto border-collapse">
// //             <thead className="">
// //               <tr>
// //                 <th className="w-[1%] px-4 py-2"></th>

// //                 <th className="w-[20%] px-4 py-2">
// //                     نام کاربر
// //                      </th>

                


               
// //                 <th className="w-[16%] px-4 py-2">
// //                     شماره درخواست
// //                      </th>
// //                 <th className="w-[20%] px-4 py-2">
// //                 مبلغ وام
// //                 </th>
// //                 <th className="w-[25%] px-[18%] py-2">
// //                 تاریخ درخواست
// //                 </th>
// //                 <th className="w-[13%] px-4 py-2">
// //                 توضیحات
// //                 </th>
// //               </tr>
// //             </thead>
// //           </table>
// //           <div className=" ">
// //             <table className="w-full mt-[3%]  table-auto border-collapse">
// //               <tbody className='divide-y divide-gray-200 space-y-4 ' >
// //                 {currentPageData.map((user, index) => (
// //                   <tr key={index} className=''   >
                   
// //                    <div className='flex flex-row w-[100%]' >
// //                    <td className=" w-[100%] py-28 px-4 ">
// //                     {user.name}

// //                     <div className=''>
// //                         نوع درخواست: {user.modelRequest}
// //                       </div>
                    
                    
// //                     </td>
// //                    </div>
                    
// //                     <td className="w-2/12 py-2 px-4 ">
// //                     درخواست
// //                     {user.id}
                  
// //                     </td>
                    
                 
// //                     <td className="w-2/12 py-2 px-4 ">{user.cash}
// //                     تومان
// //                     </td>
// //                     <td className="w-3/12 py-2 px-4 ">
// //                 {user.date}
// //                     </td>
// //                     <td className="w-[80%] py-2 px-4 ">
// //                     <p className='font-semibold '>
// //                     {user.explain}
// //                     </p>
// //                     </td>
                  
                 
                     
                   
// //                   </tr>

                  
// //                 ))}
                
// //               </tbody>
// //             </table>
// //           </div>
        
// //         </div>
      
// //       </div>
// //       <Paginate
          
// //           currentPageData={currentPageData}
// //           pageCount={pageCount}
// //           pageClick={pageClick}
// //         />
// //     </div>
// //   );
// // };

// // export default UserTable;


// // import React, { useState } from 'react';
// // import Paginate from './Paginate';

// // interface User {
// //   id: number;
// //   name: string;
// //   modelRequest: string;
// //   cash: string;
// //   date: string;
// //   explain: string;
// // }

// // interface LoanApplicationTableProps {
// //   users: User[];
// // }


// // const LoanAplicationTable: React.FC<LoanApplicationTableProps>  = ({ users }) => {
// //   const [currentPage, setCurrentPage] = useState<number>(0);
// //   const itemsPerPage = 7;

// //   const pageClick = (data: { selected: number }) => {
// //     setCurrentPage(data.selected);
// //   };

// //   const offset = currentPage * itemsPerPage;
// //   const currentPageData = users.slice(offset, offset + itemsPerPage);
// //   const pageCount = Math.ceil(users.length / itemsPerPage);

// //   return (
// //     <div>
// //       <div className="p-4 pl-20 ">
// //         <div className="max-w-full bg-white shadow-md overflow-hidden p-10 dark:bg-inherit dark:text-white">
// //           <table className="w-full table-auto border-collapse">
// //             <thead className="">
// //               <tr>
// //                 <th className="w-[1%] px-4 py-2"></th>
// //                 <th className="w-[20%] px-4 py-2">نام کاربر</th>
// //                 <th className="w-[16%] px-4 py-2">شماره درخواست</th>
// //                 <th className="w-[20%] px-4 py-2">مبلغ وام</th>
// //                 <th className="w-[25%] px-[18%] py-2">تاریخ درخواست</th>
// //                 <th className="w-[13%] px-4 py-2">توضیحات</th>
// //               </tr>
// //             </thead>
// //           </table>
// //           <div className="">
// //             <table className="w-full mt-[3%] table-auto border-collapse">
// //               <tbody className='divide-y divide-gray-200 space-y-4'>
// //                 {currentPageData.map((user, index) => (
// //                   <tr key={index} className=''>
// //                     <td className="w-2/12 py-28 px-4 ">
// //                     <div >

// //                     {user.name}

// //                     </div>

// //                     <div className=''> {/* Add spacing here */}
                       
// //                       </div>
                    
// //                     </td>
// //                     <td className="w-2/12 py-2 px-4 ">
// //                       درخواست {user.id}
                      
// //                     </td>
// //                     <td className="w-2/12 py-2 px-4 ">
// //                       {user.cash} تومان
// //                     </td>
// //                     <td className="w-3/12 py-2 px-4 ">
// //                       {user.date}
// //                     </td>
// //                     <td className="w-[80%] py-2 px-4 ">
// //                       <p className='font-semibold'>
// //                         {user.explain}
// //                       </p>
// //                     </td>
// //                   </tr>
// //                 ))}
// //               </tbody>
// //             </table>
// //           </div>
// //         </div>
// //       </div>
//       // <Paginate
//       //   currentPageData={currentPageData}
//       //   pageCount={pageCount}
//       //   pageClick={pageClick}
//       // />
// //     </div>
// //   );
// // };

// // export default LoanAplicationTable;














// import React, { useState } from 'react';
// import Image from 'next/image';
// import RejectIcon from '@/src/app/assent/Img/adminPanel/RejectCross.svg'
// import AcceptIcon from '@/src/app/assent/Img/adminPanel/AcceptTik.svg'
// import Paginate from './Paginate';

// const UserTable = ({ users }) => {

//   const [currentPage, setCurrentPage] = useState(0);
//   const itemsPerPage = 7;

//   const pageClick = (data) => {
//     setCurrentPage(data.selected);
//   };

//   const offset = currentPage * itemsPerPage;
//   const currentPageData = users.slice(offset, offset + itemsPerPage);
//   const pageCount = Math.ceil(users.length / itemsPerPage);

 

//   return (
//     <div className="overflow-x-auto">
//       <div className="pl-10 ">
//         <div className="max-w-full bg-white shadow-md overflow-hidden p-10 dark:bg-inherit dark:text-white">
//       <table className="min-w-full ">
//         <thead>
//           <tr className="w-full  ">
//             <th className="py-2 pb-4 pt-2  border-b border-opacity-80 border-[#0000001A]">نام کاربر</th>
//             <th className="py-2 pb-4 pt-2  border-b xl:whitespace-nowrap border-opacity-80 border-[#0000001A]">شماره درخواست</th>
//             <th className="py-2 pb-4 pt-2  border-b border-opacity-80 border-[#0000001A]">مبلغ وام</th>
//             <th className="py-2 pb-4 pt-2  border-b xl:whitespace-nowrap border-opacity-80 border-[#0000001A]">تاریخ درخواست</th>
//             <th className="py-2 pb-4 pt-2  border-b border-opacity-80 border-[#0000001A]">توضیحات</th>
//           </tr>
//         </thead>
//         <tbody>
//           {users.map((row, index) => (
//             <React.Fragment key={index}>
//               <tr className="text-center ">
//                 <td className="py-2 px-10 xl:whitespace-nowrap">{row.name}</td>
//                 <td className="py-2 px-10 xl:whitespace-nowrap ">درخواست{row.requestNumber}</td>
//                 <td className="py-2 px-10 xl:whitespace-nowrap">{row.amount}</td>
//                 <td className="py-2 px-10 ">{row.date}</td>
//                 <td className="py-2 px-10 xl:whitespace-break-spaces">{row.description}</td>
//               </tr>
//               <tr className="text-center ">
//                 <td colSpan="5" className="py-2 px-4 border-b border-opacity-80 border-[#0000001A]">
//                   <div className="flex justify-between  items-center">
//                     <div className='flex items-center '>
//                       <span className='font-bold'>
//                         ضامن ها:
//                       </span>
//                       <span className='border border-opacity-90 mr-2 border-[#4FD1C5] px-2 py-2 rounded-md'>{row.guarantors.join(', ')}</span>
//                     </div>
//                     <div>
//                       <span className='font-bold'>نوع درخواست: {row.type}</span>
//                     </div>
//                     <div className='flex items-center gap-3 '>
//                     <button className="flex gap-3 items-center border-2 border-opacity-80 border-[#000000]  text-black font-bold  rounded-md px-5 py-2">
//                       <Image src={RejectIcon} width={24} height={24} alt='AcceptIcon'/>
//                         رد
//                       </button>
//                       <button className=" flex gap-3 items-center  border-2 border-opacity-80 border-[#4FD1C5] text-[#4FD1C5] rounded-md  px-3 py-2">
//                         <Image src={AcceptIcon} width={24} height={24} alt='AcceptIcon'/>
//                         <span>
//                          تایید
//                         </span>
//                       </button>
                     
//                     </div>
//                   </div>
//                 </td>
//               </tr>
//             </React.Fragment>
//           ))}
//         </tbody>
//       </table>
//     </div>
//     </div>
//     <Paginate
//         currentPageData={currentPageData}
//         pageCount={pageCount}
//         pageClick={pageClick}
//       />
//     </div>
//   );
// };

// export default UserTable;



import React, { useState } from 'react';
import axios from 'axios';
import Image from 'next/image';
import { useMutation, useQueryClient, QueryClientProvider, QueryClient } from 'react-query';
import RejectIcon from '@/src/app/assent/Img/adminPanel/RejectCross.svg';
import AcceptIcon from '@/src/app/assent/Img/adminPanel/AcceptTik.svg';
import Paginate from './Paginate';

// ایجاد یک hook برای ارسال درخواست به API
const useAcceptLoanRequest = () => {
  const queryClient = useQueryClient();
  const token = localStorage.getItem('authToken'); 

  return useMutation(
    async ({ id, status }) => {
      const response = await axios.post(
        'https://shabab.v1r.ir/api/loans/accept/admin',
        {
          id,
          admin_accept: status,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`, 
          },
        }
      );
      return response.data;
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries('loans'); 
      },
    }
  );
};

const UserTable = ({ users }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 7;
  const { mutate: acceptLoanRequest } = useAcceptLoanRequest();

  const pageClick = (data) => {
    setCurrentPage(data.selected);
  };

  const handleAccept = (id) => {
    acceptLoanRequest({ id, status: 'accepted' });
  };

  const handleReject = (id) => {
    acceptLoanRequest({ id, status: 'rejected' });
  };

  const offset = currentPage * itemsPerPage;
  const currentPageData = users.slice(offset, offset + itemsPerPage);
  const pageCount = Math.ceil(users.length / itemsPerPage);

  return (
    <div className="overflow-x-auto">
      <div className="pl-10 ">
        <div className="max-w-full bg-white shadow-md overflow-hidden p-10 dark:bg-inherit dark:text-white">
          <table className="min-w-full ">
            <thead>
              <tr className="w-full">
                <th className="py-2 pb-4 pt-2  border-b border-opacity-80 border-[#0000001A]">نام کاربر</th>
                <th className="py-2 pb-4 pt-2  border-b xl:whitespace-nowrap border-opacity-80 border-[#0000001A]">شماره درخواست</th>
                <th className="py-2 pb-4 pt-2  border-b border-opacity-80 border-[#0000001A]">مبلغ وام</th>
                <th className="py-2 pb-4 pt-2  border-b xl:whitespace-nowrap border-opacity-80 border-[#0000001A]">تاریخ درخواست</th>
                <th className="py-2 pb-4 pt-2  border-b border-opacity-80 border-[#0000001A]">توضیحات</th>
              </tr>
            </thead>
            <tbody>
              {currentPageData.map((row, index) => (
                <React.Fragment key={index}>
                  <tr className="text-center">
                    <td className="py-2 px-10 xl:whitespace-nowrap">{row.name}</td>
                    <td className="py-2 px-10 xl:whitespace-nowrap">درخواست {row.requestNumber}</td>
                    <td className="py-2 px-10 xl:whitespace-nowrap">{row.amount} تومان</td>
                    <td className="py-2 px-10">{row.date}</td>
                    <td className="py-2 px-10 xl:whitespace-break-spaces">{row.description}</td>
                  </tr>
                  <tr className="text-center">
                    <td colSpan="5" className="py-2 px-4 border-b border-opacity-80 border-[#0000001A]">
                      <div className="flex justify-between items-center">
                        <div className='flex items-center'>
                          <span className='font-bold'>ضامن ها:</span>
                          <span className='border border-opacity-90 mr-2 border-[#4FD1C5] px-2 py-2 rounded-md'>{row.guarantors.join(', ')}</span>
                        </div>
                        <div>
                          <span className='font-bold'>نوع درخواست: {row.type}</span>
                        </div>
                        <div className='flex items-center gap-3'>
                          <button
                            onClick={() => handleReject(row.id)}
                            className="flex gap-3 items-center border-2 border-opacity-80 border-[#000000]  text-black font-bold  rounded-md px-5 py-2">
                            <Image src={RejectIcon} width={24} height={24} alt='RejectIcon' />
                            رد
                          </button>
                          <button
                            onClick={() => handleAccept(row.id)}
                            className="flex gap-3 items-center border-2 border-opacity-80 border-[#4FD1C5] text-[#4FD1C5] rounded-md  px-3 py-2">
                            <Image src={AcceptIcon} width={24} height={24} alt='AcceptIcon' />
                            <span>تایید</span>
                          </button>
                        </div>
                      </div>
                    </td>
                  </tr>
                </React.Fragment>
              ))}
            </tbody>
          </table>
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

const queryClient = new QueryClient();

const App = ({ users }) => (
  <QueryClientProvider client={queryClient}>
    <UserTable users={users} />
  </QueryClientProvider>
);

export default App;

