import React, { useState } from 'react';
import Image from 'next/image';
import iconEyeImage from '@/app/assent/Img/adminPanel/eye.svg';
import iconCrossImage from '@/app/assent/Img/adminPanel/cross.svg';
import iconTikImage from '@/app/assent/Img/adminPanel/tik.svg';
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
        <div className="max-w-full bg-white shadow-md overflow-hidden p-10 dark:bg-inherit dark:text-white">
          <table className="w-full table-auto border-collapse">
            <thead className="">
              <tr>
              
                <th className="w-[10%] px-4 py-2">نام کاربر</th>
                <th className="w-[33%] px-4 py-2">
                تاریخ سر رسید
                </th>
                <th className="w-[12%] px-4 pl-10 py-2">
                رسید ها
                </th>
                <th className="w-[12%]  py-2">
                تعیین وضعیت
                </th>
              </tr>
            </thead>
          </table>
          <div className=" ">
            <table className="w-full mt-[3%] table-auto border-collapse">
              <tbody className='divide-y divide-gray-200 space-y-4  ' >
                {currentPageData.map((user, index) => (
                  <tr key={index} className=''  >
                   
                    <td className="w-2/12 py-8 px-4 ">{user.name}</td>
                    <td className="w-2/12 py-2 px-4 ">{user.joinDate}</td>
                 
                    <td className="w-3/12 py-2 px-4 ">
                      <button className="py-2 px-6 border flex items-center gap-2 border-teal-400 p-1 rounded-md">
                      <Image src={iconEyeImage} width={24} height={24} alt="" />
                        <p className="font-normal text-sm text-teal-400">
                        فیش واریزی
                        </p>
                      </button>
                    </td>
                    <td className="w-1/12 py-2 px-4 ">
                    <div className='flex gap-8'>
                    <button className="w-6 h-6 ">
                        <Image src={iconCrossImage} width={820} height={820} alt="حذف" />
                      </button>

                      <button className="w-6 h-6 ">
                        <Image src={iconTikImage} width={60} height={60} alt="اضافه" />
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


