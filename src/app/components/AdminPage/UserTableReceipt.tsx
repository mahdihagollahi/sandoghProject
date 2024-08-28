import React from 'react';
import Image from 'next/image';
import IconlytikImage from '@/src/app/assent/Img/adminPanel/tik.svg';
import IconlycrossImage from '@/src/app/assent/Img/adminPanel/cross.svg';

interface User {
  name: string;
  depositAmount: string;
  joinDate: string;
  Description: string;
}


const UserTableReceipt : React.FC<User>  = ({ users }) => {
  return (
    <div>
      <div className="p-4 pl-20">
        <div className="bg-white w-[120%] shadow-md overflow-hidden py-5 px-5 dark:bg-inherit dark:text-white">
          <table className="w-full table-auto">
            <thead className="border-b-2 border-gray-300 mb-2"> 
              <tr>
                <th className="w-[10%] pb-6">نام کاربر</th> 
                <th className="w-[29%] pl-10 pb-6">مبلغ واریز</th> 
                <th className="w-[23%] pl-32 pb-6">تاریخ</th> 
                <th className="w-[12%] whitespace-nowrap pl-32 pb-6">توضیحات کاربر</th> 
                <th className="w-[12%] whitespace-nowrap pb-6">تعیین وضعیت</th> 
              </tr>
            </thead>
          </table>
          <div>
            <table className="w-full mt-[3%] table-auto border-collapse">
              <tbody className="divide-y divide-gray-200 space-y-4">
            
                  <tr>
                    <td className="w-2/12 py-8 pr-12">{users.name}</td>
                    <td className="w-[25%] py-8 pr-10 text-[#718096]">
                      <p>
                        {users.depositAmount} تومان
                      </p>
                    </td>
                    <td className="w-2/12 py-2 px-4">{users.joinDate}</td>
                    <td className="w-3/12 py-2 px-4  whitespace-nowrap">{users.Description}</td>
                    <td className="w-1/12 py-2 px-4">
                      <div className="flex gap-5">
                        <button className="w-6 h-6">
                          <Image src={IconlytikImage} width={1020} height={1020} alt="وضعیت" />
                        </button>
                        <button className="w-6 h-6">
                          <Image src={IconlycrossImage} width={1020} height={1020} alt="وضعیت" />
                        </button>
                      </div>
                    </td>
                  </tr>
               
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserTableReceipt;
