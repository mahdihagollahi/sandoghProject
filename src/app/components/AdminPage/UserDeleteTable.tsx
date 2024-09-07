import React, { useState } from 'react';
import Image from 'next/image';
import FillImage from '@/src/app/assent/Img/adminPanel/Fill 396.svg';
import iconBackImage from '@/src/app/assent/Img/adminPanel/getBack.svg';
import Paginate from './Paginate'; 
import Link from 'next/link';
import IconImage from '@/src/app/assent/Img/adminPanel/defultUser.png';
interface User {
  src: string;
  name: string;
  joinDate: string;
  loans: number | string;
}

interface UserTableProps {
  users: User[];
}


const UserTable: React.FC<UserTableProps> = ({ users }) => {
  const [currentPage, setCurrentPage] = useState<number>(0);
  const itemsPerPage = 7;
  console.log(users)
  const pageClick = (data: { selected: number }) => {
    setCurrentPage(data.selected);
  };

  const offset = currentPage * itemsPerPage;
  const currentPageData = users.slice(offset, offset + itemsPerPage);
  const pageCount = Math.ceil(users.length / itemsPerPage);

  return (
    <div>
      <div className="p-4 pl-20">
        <div className="w-[104%] bg-white shadow-md overflow-hidden rounded-md p-10 dark:bg-[#4F5D74] dark:text-white">
          <table className="w-full table-auto border-collapse">
            <thead>
              <tr>
                <th className="w-[1%] px-5 py-2"></th>
                <th className="w-[20%] px-4 py-2">نام کاربران</th>
                <th className="w-[16%] px-4 py-2">تاریخ عضویت</th>
                <th className="w-[20%] px-4 py-2">وام های دریافتی</th>
                <th className="w-[25%] px-[15%] py-2">جزئیات</th>
                <th className="w-[13%] px-4 py-2">برگرداندن</th>
              </tr>
            </thead>
          </table>
          <div>
            <table className="w-full mt-[3%] table-auto border-collapse">
              <tbody className='divide-y divide-gray-200 space-y-4'>
                {currentPageData.map((user, index) => (
                  <tr key={index}>
                    <td className="w-1/12 py-4 px-4">
                      <Image src={user.src || IconImage} width={40} height={40} alt="" />
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
                        <Image src={iconBackImage} width={34} height={34} alt="حذف" />
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


