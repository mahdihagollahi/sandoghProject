import React, { useState } from 'react';
import Image from 'next/image';
import EyeIconImage from '@/app/assent/Img/adminPanel/eye.svg';
import IconlytikImage from '@/app/assent/Img/adminPanel/tik.svg';
import IconlycrossImage from '@/app/assent/Img/adminPanel/cross.svg';

import Paginate from '@/app/components/AdminPage/Paginate';

interface User {
  id: number; 
  name: string;
  depositAmount: number; 
  joinDate: string; 
}

interface UserTableProps {
  users: User[];
}

const UserTable: React.FC<UserTableProps> = ({ users }) => {
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const itemsPerPage = 7;

  const pageClick = (data: { selected: number }) => {
    setCurrentPage(data.selected);
  };

  const offset = currentPage * itemsPerPage;
  const currentPageData = users.slice(offset, offset + itemsPerPage);
  const pageCount = Math.ceil(users.length / itemsPerPage);

  const handleOpenModal = () => {
    setIsModalVisible(true);
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
  };

  return (
    <div>
      <div className="p-4 pl-20 ">
        <div className="max-w-full bg-white shadow-md overflow-hidden p-10 dark:bg-inherit dark:text-white">
          <table className="w-full table-auto border-collapse">
            <thead>
              <tr>
                <th className="w-[15%] pl-8  py-2">شماره قسط</th>
                <th className="w-[10%]  py-2">نام کاربر</th>
                <th className="w-[29%] pl-10  py-2">مبلغ واریز</th>
                <th className="w-[23%] pl-24 py-2">تاریخ</th>
                <th className="w-[12%]  pl-32 py-2">رسید</th>
                <th className="w-[12%]  py-2 whitespace-nowrap ">تعیین وضعیت</th>
              </tr>
            </thead>
          </table>
          <div>
            <table className="w-full mt-[3%] table-auto border-collapse">
              <tbody className='divide-y divide-gray-200 space-y-4'>
                {currentPageData.map((user, index) => (
                  <tr key={index}>
                    <td className="w-2/12 py-8 px-4 flex gap-20">قسط {user.id}</td>
                    <td className="w-2/12 py-8 pr-12">{user.name}</td>
                    <td className="w-[25%] py-8 pr-10 text-[#718096]">
                      <p>{user.depositAmount} تومان</p>
                    </td>
                    <td className="w-2/12 py-2 px-4">{user.joinDate}</td>
                    <td className="w-3/12 py-2 px-4">
                      <button className="py-2 px-6 border flex items-center gap-2 border-teal-400 p-1 rounded-md"
                        onClick={handleOpenModal}
                      >
                        <Image src={EyeIconImage} width={24} height={24} alt="" />
                        <p className="font-normal text-sm text-teal-400">فیش واریزی</p>
                      </button>
                    </td>
                    <td className="w-1/12 py-2 px-4">
                      <div className='flex gap-5'>
                        <button className="w-6 h-6">
                          <Image src={IconlytikImage} width={1020} height={1020} alt="وضعیت" />
                        </button>
                        <button className="w-6 h-6">
                          <Image src={IconlycrossImage} width={1020} height={1020} alt="وضعیت" />
                        </button>
                      </div>
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
