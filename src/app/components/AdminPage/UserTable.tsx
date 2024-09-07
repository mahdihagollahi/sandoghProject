
import React, { useState } from 'react';
import Image from 'next/image';
import FillImage from '@/src/app/assent/Img/adminPanel/Fill 396.svg';
import iconDeletImage from '@/src/app/assent/Img/adminPanel/Delete.svg';
import Paginate from './Paginate';
import Link from 'next/link';
import moment from 'moment-jalaali';
import IconImage from '@/src/app/assent/Img/adminPanel/defultUser.png';
import axios from 'axios';
import { useMutation, useQueryClient, QueryClient, QueryClientProvider } from 'react-query';

interface User {
  id: number;
  src: string;
  first_name: string;
  last_name: string;
  phone_number: string;
  emergency_number: string;
  home_number: string;
  national_code: string;
  card_number: string;
  sheba_number: string;
  address: string;
  debt: number;
  created_at: string;
}

interface UserTableProps {
  users: User[];  
  onUserSelect: (userId: number | null) => void;
}

const convertToPersianNumber = (number: number | string): string => {
  const persianDigits = '۰۱۲۳۴۵۶۷۸۹';
  const numberString = number.toString();
  return numberString.replace(/\d/g, (digit) => persianDigits[parseInt(digit, 10)]);
};

const convertToPersianDate = (date: string): string => {
  const jalaaliDate = moment(date).format('jYYYY/jM/jD');
  return convertToPersianNumber(jalaaliDate);
};

const UserTable: React.FC<UserTableProps> = ({ users, onUserSelect }) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 7;
  
  const queryClient = useQueryClient();

  const deleteUser = useMutation(
    (userId: number) => axios.get(`https://mohammadelia30.ir/shabab/api/users/delete?id=${userId}`),
    {
      onSuccess: () => {
        queryClient.invalidateQueries('users'); 
      },
      onError: (error) => {
        console.error('Error deleting user:', error);
      },
    }
  );

  const handleDelete = (userId: number) => {
    if (confirm('آیا مطمئن هستید که می‌خواهید این کاربر را حذف کنید؟')) {
      deleteUser.mutate(userId);
    }
  };

  const pageClick = (data: { selected: number }) => {
    setCurrentPage(data.selected + 1); 
  };

  const offset = (currentPage - 1) * itemsPerPage;
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
                <th className="w-[20%] px-4 py-2">وام‌های دریافتی</th>
                <th className="w-[25%] px-[15%] py-2">جزئیات</th>
                <th className="w-[13%] px-4 py-2">حذف کردن</th>
              </tr>
            </thead>
          </table>
          <div className="mt-4">
            <table className="w-full table-auto border-collapse">
              <tbody className="divide-y divide-gray-200 space-y-4">
                {currentPageData.map((user) => (
                  <tr key={user.id} onClick={() => onUserSelect(user.id)}>
                    <td className="w-1/12 py-4 px-4">
                      <Image   src={user.src || IconImage} width={40} height={40} alt={user.first_name} />
                    </td>
                    <td className="w-2/12 py-2 px-4">{`${user.first_name} ${user.last_name}`}</td>
                    <td className="w-2/12 py-2 px-4">
                      {convertToPersianDate(user.created_at)} 
                    </td>
                    <td className="w-2/12 py-2 px-4">
                      {convertToPersianNumber(user.debt.toLocaleString())}  
                    </td>
                    <td className="w-3/12 py-2 px-4">
                      <Link href={`/detailuser/${user.id}`} passHref>
                        <button className="py-[2%] px-8 border flex items-center gap-2 border-teal-400 p-1 rounded-md">
                          <Image src={FillImage} width={24} height={24} alt="" />
                          <p className="font-normal text-sm text-teal-400">اطلاعات بیشتر</p>
                        </button>
                      </Link>
                    </td>
                    <td className="w-1/12 py-2 px-4">
                      <button className="w-6 h-6" onClick={(e) => {
                        e.stopPropagation(); 
                        handleDelete(user.id);
                      }}>
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

const QueryWrapper: React.FC<UserTableProps> = (props) => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <UserTable {...props} />
    </QueryClientProvider>
  );
};

export default QueryWrapper;

