import React, { useState } from 'react';
import Image from 'next/image';
import FillImage from '@/src/app/assent/Img/adminPanel/Fill 396.svg';
import iconDeletImage from '@/src/app/assent/Img/adminPanel/Delete.svg';
import Paginate from './Paginate';
import Link from 'next/link';

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
        <div className="max-w-full bg-white shadow-md overflow-hidden p-10 dark:bg-inherit dark:text-white">
          <table className="w-full table-auto border-collapse">
            <thead className="">
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
          <div className=" ">
            <table className="w-full mt-[3%] table-auto border-collapse">
              <tbody className='divide-y divide-gray-200 space-y-4 ' >
                {currentPageData.map((user, index) => (
                  <tr key={index}  >
                    <td className="w-1/12 py-4 px-4 ">
                      <Image src={user.src} width={40} height={40} alt="" />
                    </td>
                    <td className="w-2/12 py-2 px-4 ">{user.name}</td>
                    <td className="w-2/12 py-2 px-4 ">{user.joinDate}</td>
                    <td className="w-2/12 py-2 px-4 ">{user.loans}</td>
                    <td className="w-3/12 py-2 px-4 ">
                    <Link href='/detailuser' passHref>
                    <button className="py-[2%] px-8 border flex items-center gap-2 border-teal-400 p-1 rounded-md">
                      <Image src={FillImage} width={24} height={24} alt="" />
                        <p className="font-normal text-sm text-teal-400">اطلاعات بیشتر</p>
                      </button>
                    </Link>
                      
                    </td>
                    <td className="w-1/12 py-2 px-4 ">
                      <button className="w-6 h-6 ">
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


