// import React from 'react';
// import UserTableDespositors from '@/src/app/components/AdminPage/UserTableDespositors';
// import Image from 'next/image';
// import backImage from '@/src/app/assent/Img/adminPanel/back.svg'
// import RoutTableFiancial from './RoutTableFinancial';
// import Link from 'next/link';

// interface User {
//   id: number;
//   name: string;
//   joinDate: string;
//   loans: string;
//   depositAmount:string
// }

// const users: User[] = [
//   { id: 1 , name: 'امیر قنبری', joinDate: '1404/01/16', depositAmount:'5,000,000' , loans: '1 وام' },
//   { id: 2,  name: 'مینا قنبری', joinDate: '1404/01/16', depositAmount:'5,000,000' , loans: '0 وام' },
//   { id: 3,  name: 'فاطمه طالبیان', joinDate: '1404/01/16', depositAmount:'5,000,000' , loans: '2 وام' },
//   { id: 4,  name: 'نگین سعیدی', joinDate: '1404/01/16', depositAmount:'5,000,000' , loans: '0 وام' },
//   { id: 5,  name: 'کنی سپهری', joinDate: '1404/01/16', depositAmount:'5,000,000' , loans: '2 وام' },
//   { id: 6,  name: 'نگین سعیدی', joinDate: '1404/01/16', depositAmount:'5,000,000' , loans: '0 وام' },
//   { id: 8,  name: 'سکینه داوودی', joinDate: '1404/01/16', depositAmount:'5,000,000' , loans: '0 وام' },
//   { id: 9,  name: 'سکینه داوودی', joinDate: '1404/01/16', depositAmount:'5,000,000' , loans: '0 وام' },
//   { id: 10,  name: 'سکینه داوودی', joinDate: '1404/01/16', depositAmount:'5,000,000' , loans: '0 وام' },
//   { id: 12,  name: 'سکینه داوودی', joinDate: '1404/01/16', depositAmount:'5,000,000' , loans: '0 وام' },
//   { id: 13,  name: 'سکینه داوودی', joinDate: '1404/01/16', depositAmount:'5,000,000' , loans: '0 وام' },
//   { id: 14,  name: 'سکینه داوودی', joinDate: '1404/01/16', depositAmount:'5,000,000' , loans: '0 وام' },
//   { id: 15,  name: 'سکینه داوودی', joinDate: '1404/01/16', depositAmount:'5,000,000' , loans: '0 وام' },
// ];

// const DepositorsUserFinancial: React.FC = () => {
//   return (
//     <div >
//          <div className='flex gap-[74%]  items-center mb-2 mt-5 mr-3  '>
//             <div className='mr-2 '>
//                 <p className='font-bold text-lg'>
//                 مدیریت مالی               
//                  </p>
//             </div>
           


//             <div className='flex justify-end mr-2  '>
//               <Link href="/showuserdetail">
             
//               <div  className='flex items-center'>
//               بازگشت
//               <Image
//                 src={backImage}
//                 width={38}
//                 height={38}
//                 alt='arrow'

//                 />
//               </div>
//               </Link>
//             </div>
//         </div>
//       <div>
//         <RoutTableFiancial/>
//       </div>
//       <UserTableDespositors users={users} />
//     </div>
   
//   );
// };

// export default DepositorsUserFinancial;




import React from 'react';
import UserTableDespositors from '@/src/app/components/AdminPage/UserTableDespositors';
import Image from 'next/image';
import backImage from '@/src/app/assent/Img/adminPanel/back.svg';
import RoutTableFiancial from './RoutTableFinancial';
import Link from 'next/link';
import axios from 'axios';
import { useMutation, useQueryClient } from '@tanstack/react-query';

interface User {
  id: number;
  name: string;
  joinDate: string;
  loans: string;
  depositAmount: string;
}

const users: User[] = [
  // داده‌های فیک
];

const DepositorsUserFinancial: React.FC = () => {
  const queryClient = useQueryClient();

  // تابع برای ارسال درخواست PUT
  const updateUser = async (id: number, data: any) => {
    const response = await axios.put(`https://shabab.v1r.ir/api/factors/index/${id}`, data, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  };

  // استفاده از useMutation برای آپدیت کردن داده‌ها
  const mutation = useMutation({
    mutationFn: (updatedUser: User) => updateUser(updatedUser.id, updatedUser),
    onSuccess: () => {
      queryClient.invalidateQueries(['users']);
    },
  });

  const handleUpdate = (user: User) => {
    mutation.mutate(user);
  };

  return (
    <div>
      <div className='flex gap-[74%] items-center mb-2 mt-5 mr-3'>
        <div className='mr-2'>
          <p className='font-bold text-lg'>مدیریت مالی</p>
        </div>
        <div className='flex justify-end mr-2'>
          <Link href="/showuserdetail">
            <div className='flex items-center'>
              بازگشت
              <Image src={backImage} width={38} height={38} alt='arrow' />
            </div>
          </Link>
        </div>
      </div>
      <div>
        <RoutTableFiancial />
      </div>
      <UserTableDespositors users={users}  />
    </div>
  );
};

export default DepositorsUserFinancial;
