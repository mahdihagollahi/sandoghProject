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
      <div className="p-4 pl-20 ">
        <div className="max-w-full bg-white shadow-md overflow-hidden  p-10 dark:bg-inherit dark:text-white">
          <table className="w-full table-auto border-collapse">
            <thead className="">
              <tr>
                <th className="w-[1%] px-4 py-2"></th>
                <th className="w-[20%] px-4 py-2">
                    نام کاربر
                     </th>
                <th className="w-[16%] px-4 py-2">
                    شماره درخواست
                     </th>
                <th className="w-[20%] px-4 py-2">
                مبلغ وام
                </th>
                <th className="w-[25%] px-[18%] py-2">
                تاریخ درخواست
                </th>
                <th className="w-[13%] px-4 py-2">
                توضیحات
                </th>
              </tr>
            </thead>
          </table>
          <div className=" ">
            <table className="w-full mt-[3%] table-auto border-collapse">
              <tbody className='divide-y divide-gray-200 space-y-4 ' >
                {currentPageData.map((user, index) => (
                  <tr key={index}   >
                   
                    <td className="w-2/12 py-2 px-4 ">{user.name}</td>
                    <td className="w-2/12 py-2 px-4 ">
                    درخواست
                    {user.id}
                  
                    </td>
                    <td className="w-2/12 py-2 px-4 ">{user.cash}
                    تومان
                    </td>
                    <td className="w-3/12 py-2 px-4 ">
                {user.date}
                    </td>
                    <td className="w-[80%] py-2 px-4 ">
                     {user.explain}
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


