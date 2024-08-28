

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

interface User {
  id: number;
  name: string;
  requestNumber: number;
  amount: string;
  date: string;
  description: string;
  guarantors: string[];
  type: string;
}

interface UserTableProps {
  users: User[];
}

interface AcceptLoanRequestParams {
  id: number;
  status: 'accepted' | 'rejected';
}

const useAcceptLoanRequest = () => {
  const queryClient = useQueryClient();
  const token = localStorage.getItem('authToken');

  return useMutation(
    async ({ id, status }: AcceptLoanRequestParams) => {
      const response = await axios.post(
        'http://hosseinshabab.iapp.ir/api/loans/accept/admin',
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

const UserTable: React.FC<UserTableProps> = ({ users }) => {
  const [currentPage, setCurrentPage] = useState<number>(0);
  const itemsPerPage = 7;
  const { mutate: acceptLoanRequest } = useAcceptLoanRequest();

  const pageClick = (data: { selected: number }) => {
    setCurrentPage(data.selected);
  };

  const handleAccept = (id: number) => {
    acceptLoanRequest({ id, status: 'accepted' });
  };

  const handleReject = (id: number) => {
    acceptLoanRequest({ id, status: 'rejected' });
  };

  const offset = currentPage * itemsPerPage;
  const currentPageData = users.slice(offset, offset + itemsPerPage);
  const pageCount = Math.ceil(users.length / itemsPerPage);

  return (
    <div className="overflow-x-auto">
      <div className="pl-10">
        <div className="max-w-full bg-white shadow-md overflow-hidden p-10 dark:bg-inherit dark:text-white">
          <table className="min-w-full">
            <thead>
              <tr className="w-full">
                <th className="py-2 pb-4 pt-2 border-b border-opacity-80 border-[#0000001A]">نام کاربر</th>
                <th className="py-2 pb-4 pt-2 border-b xl:whitespace-nowrap border-opacity-80 border-[#0000001A]">شماره درخواست</th>
                <th className="py-2 pb-4 pt-2 border-b border-opacity-80 border-[#0000001A]">مبلغ وام</th>
                <th className="py-2 pb-4 pt-2 border-b xl:whitespace-nowrap border-opacity-80 border-[#0000001A]">تاریخ درخواست</th>
                <th className="py-2 pb-4 pt-2 border-b border-opacity-80 border-[#0000001A]">توضیحات</th>
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
                    <td colSpan={5} className="py-2 px-4 border-b border-opacity-80 border-[#0000001A]">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center">
                          <span className="font-bold">ضامن ها:</span>
                          <span className="border border-opacity-90 mr-2 border-[#4FD1C5] px-2 py-2 rounded-md">{row.guarantors.join(', ')}</span>
                        </div>
                        <div>
                          <span className="font-bold">نوع درخواست: {row.type}</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <button
                            onClick={() => handleReject(row.id)}
                            className="flex gap-3 items-center border-2 border-opacity-80 border-[#000000] text-black font-bold rounded-md px-5 py-2">
                            <Image src={RejectIcon} width={24} height={24} alt="RejectIcon" />
                            رد
                          </button>
                          <button
                            onClick={() => handleAccept(row.id)}
                            className="flex gap-3 items-center border-2 border-opacity-80 border-[#4FD1C5] text-[#4FD1C5] rounded-md px-3 py-2">
                            <Image src={AcceptIcon} width={24} height={24} alt="AcceptIcon" />
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

const App: React.FC<{ users: User[] }> = ({ users }) => (
  <QueryClientProvider client={queryClient}>
    <UserTable users={users} />
  </QueryClientProvider>
);

export default App;
