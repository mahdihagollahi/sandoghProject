// import React, { useState } from 'react';
// import Image from 'next/image';
// import RejectIcon from '@/src/app/assent/Img/adminPanel/RejectCross.svg';
// import AcceptIcon from '@/src/app/assent/Img/adminPanel/AcceptTik.svg';
// import Paginate from './Paginate';

// interface User {
//   name: string;
//   requestNumber: number;
//   amount: number;
//   date: string;
//   description: string;
//   guarantors: string[];
//   type: string;
// }

// interface UserTableProps {
//   users?: User[];
// }

// const UserTable: React.FC<UserTableProps> = ({ users = [] }) => {
//   const [currentPage, setCurrentPage] = useState<number>(0);
//   const itemsPerPage = 7;

//   const pageClick = (data: { selected: number }) => {
//     setCurrentPage(data.selected);
//   };

//   const offset = currentPage * itemsPerPage;
//   const currentPageData = users.slice(offset, offset + itemsPerPage);
//   const pageCount = Math.ceil(users.length / itemsPerPage);

//   return (
//     <div className="overflow-x-auto">
//       <div className="pl-10">
//         <div className="max-w-full bg-white shadow-md overflow-hidden p-10 dark:bg-inherit dark:text-white">
//           <table className="min-w-full">
//             <thead>
//               <tr className="w-full">
//                 <th className="py-2 pb-4 pt-2 border-b border-opacity-80 border-[#0000001A]">
//                   نام کاربر
//                 </th>
//                 <th className="py-2 pb-4 pt-2 border-b xl:whitespace-nowrap border-opacity-80 border-[#0000001A]">
//                   شماره درخواست
//                 </th>
//                 <th className="py-2 pb-4 pt-2 border-b border-opacity-80 border-[#0000001A]">
//                   مبلغ وام
//                 </th>
//                 <th className="py-2 pb-4 pt-2 border-b xl:whitespace-nowrap border-opacity-80 border-[#0000001A]">
//                   تاریخ درخواست
//                 </th>
//                 <th className="py-2 pb-4 pt-2 border-b border-opacity-80 border-[#0000001A]">
//                   توضیحات
//                 </th>
//               </tr>
//             </thead>
//             <tbody>
//               {currentPageData.map((row, index) => (
//                 <React.Fragment key={index}>
//                   <tr className="text-center">
//                     <td className="py-2 px-10 xl:whitespace-nowrap">
//                       {row.name}
//                     </td>
//                     <td className="py-10 px-10 xl:whitespace-nowrap">
//                       درخواست {row.requestNumber}
//                     </td>
//                     <td className="py-2 px-10 xl:whitespace-nowrap">
//                       {row.amount}
//                     </td>
//                     <td className="py-2 px-10">
//                       {row.date}
//                     </td>
//                     <td className="py-2 px-10 xl:whitespace-break-spaces">
//                       {row.description}
//                     </td>
//                   </tr>
//                   <tr className="text-center">
//                     <td
//                       colSpan={5}
//                       className="py-2 px-4 border-b border-opacity-80 border-[#0000001A]"
//                     >
//                       <div className="flex justify-between items-center">
//                         <div className="flex items-center">
//                           <span className="font-bold">ضامن‌ها:</span>
//                           <span className="border border-opacity-90 mr-2 border-[#4FD1C5] px-2 py-2 rounded-md">
//                             {row.guarantors.length > 0
//                               ? row.guarantors.join(', ')
//                               : 'بدون ضامن'}
//                           </span>
//                         </div>
//                         <div>
//                           <span className="font-bold">
//                             نوع درخواست: {row.type}
//                           </span>
//                         </div>
//                         <div className="flex items-center gap-3">
//                           <button className="flex gap-3 items-center border-2 border-opacity-80 border-[#000000] text-black font-bold rounded-md px-5 py-2">
//                             <Image
//                               src={RejectIcon}
//                               width={24}
//                               height={24}
//                               alt="RejectIcon"
//                             />
//                             رد
//                           </button>
//                           <button className="flex gap-3 items-center border-2 border-opacity-80 border-[#4FD1C5] text-[#4FD1C5] rounded-md px-3 py-2">
//                             <Image
//                               src={AcceptIcon}
//                               width={24}
//                               height={24}
//                               alt="AcceptIcon"
//                             />
//                             <span>تایید</span>
//                           </button>
//                         </div>
//                       </div>
//                     </td>
//                   </tr>
//                 </React.Fragment>
//               ))}
//             </tbody>
//           </table>
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

// export default UserTable;




import React, { useState } from 'react';
import Image from 'next/image';
import axios from 'axios';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import RejectIcon from '@/src/app/assent/Img/adminPanel/RejectCross.svg';
import AcceptIcon from '@/src/app/assent/Img/adminPanel/AcceptTik.svg';
import Paginate from './Paginate';

interface User {
  id: number; // اضافه کردن id برای هر وام
  name: string;
  requestNumber: number;
  amount: number;
  date: string;
  description: string;
  guarantors: string[];
  type: string;
  installment_count: number; // تعداد اقساط
  loan_price: number; // مبلغ وام
}

interface UserTableProps {
  users?: User[];
}

const UserTable: React.FC<UserTableProps> = ({ users = [] }) => {
  const [currentPage, setCurrentPage] = useState<number>(0);
  const itemsPerPage = 7;
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: async ({ loanId, action }: { loanId: number, action: 'accepted' | 'faild' }) => {
      const authToken = localStorage.getItem('authToken'); // دریافت توکن از localStorage

      try {
        const response = await axios.post('https://mohammadelia30.ir/shabab/api/loans/accept/admin', {
          loan_id: loanId,
          admin_accept: action,
          installment_count: users.find(user => user.id === loanId)?.installment_count,
          loan_price: users.find(user => user.id === loanId)?.loan_price,
        }, {
          headers: {
            'Authorization': `Bearer ${authToken}`, // افزودن توکن به هدر
          }
        });
        return response.data;
      } catch (error) {
        throw new Error('Error submitting the request');
      }
    },
    onSuccess: () => {
      // پس از موفقیت‌آمیز بودن درخواست، می‌تونیم داده‌ها رو دوباره بروز کنیم
      queryClient.invalidateQueries(['loans']);
    },
    onError: (error) => {
      console.error('Error:', error);
      // می‌تونید ارور هندلینگ بیشتری انجام بدید
    }
  });

  const pageClick = (data: { selected: number }) => {
    setCurrentPage(data.selected);
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
                <th className="py-2 pb-4 pt-2 border-b border-opacity-80 border-[#0000001A]">
                  نام کاربر
                </th>
                <th className="py-2 pb-4 pt-2 border-b xl:whitespace-nowrap border-opacity-80 border-[#0000001A]">
                  شماره درخواست
                </th>
                <th className="py-2 pb-4 pt-2 border-b border-opacity-80 border-[#0000001A]">
                  مبلغ وام
                </th>
                <th className="py-2 pb-4 pt-2 border-b xl:whitespace-nowrap border-opacity-80 border-[#0000001A]">
                  تاریخ درخواست
                </th>
                <th className="py-2 pb-4 pt-2 border-b border-opacity-80 border-[#0000001A]">
                  توضیحات
                </th>
              </tr>
            </thead>
            <tbody>
              {currentPageData.map((row, index) => (
                <React.Fragment key={index}>
                  <tr className="text-center">
                    <td className="py-2 px-10 xl:whitespace-nowrap">
                      {row.name}
                    </td>
                    <td className="py-10 px-10 xl:whitespace-nowrap">
                      درخواست {row.requestNumber}
                    </td>
                    <td className="py-2 px-10 xl:whitespace-nowrap">
                      {row.amount}
                    </td>
                    <td className="py-2 px-10">
                      {row.date}
                    </td>
                    <td className="py-2 px-10 xl:whitespace-break-spaces">
                      {row.description}
                    </td>
                  </tr>
                  <tr className="text-center">
                    <td
                      colSpan={5}
                      className="py-2 px-4 border-b border-opacity-80 border-[#0000001A]"
                    >
                      <div className="flex justify-between items-center">
                        <div className="flex items-center">
                          <span className="font-bold">ضامن‌ها:</span>
                          <span className="border border-opacity-90 mr-2 border-[#4FD1C5] px-2 py-2 rounded-md">
                            {row.guarantors.length > 0
                              ? row.guarantors.join(', ')
                              : 'بدون ضامن'}
                          </span>
                        </div>
                        <div>
                          <span className="font-bold">
                            نوع درخواست: {row.type}
                          </span>
                        </div>
                        <div className="flex items-center gap-3">
                          <button
                            className="flex gap-3 items-center border-2 border-opacity-80 border-[#000000] text-black font-bold rounded-md px-5 py-2"
                            onClick={() => mutation.mutate({ loanId: row.id, action: 'faild' })}
                          >
                            <Image
                              src={RejectIcon}
                              width={24}
                              height={24}
                              alt="RejectIcon"
                            />
                            رد
                          </button>
                          <button
                            className="flex gap-3 items-center border-2 border-opacity-80 border-[#4FD1C5] text-[#4FD1C5] rounded-md px-3 py-2"
                            onClick={() => mutation.mutate({ loanId: row.id, action: 'accepted' })}
                          >
                            <Image
                              src={AcceptIcon}
                              width={24}
                              height={24}
                              alt="AcceptIcon"
                            />
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

export default UserTable;

