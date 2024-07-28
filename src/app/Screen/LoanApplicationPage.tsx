// import React from 'react';
// import Image from 'next/image';
// import backImage from '../assent/Img/adminPanel/back.svg'
// import ImageSearch from '../assent/Img/adminPanel/Search.svg';
// import LoanAplicationTable from '@/src/app/components/AdminPage/LoanAplicationTable';

// interface User {
//   id: number;
//   name: string;
//   cash: string;
//   date: string;
//   explain:string;
//   modelRequest:string

// }

// const users: User[] = [
//   { id: 1,  name: 'کتی سپهری', cash: '5,000,000', date: '1403/03/17' ,  explain:'برای خرج عروسی و مراسم ازدواج  نیاز دارم و حتما باید چک های تالارو پاس کنم بد گیرم اقای قنبری اگه میشه تایید کنید' , modelRequest:'ضروری' },
//   { id: 2,  name: 'مینا قنبری', cash: '5,000,000', date: '1403/03/17' ,  explain:'برای خرج عروسی و مراسم ازدواج  نیاز دارم و حتما باید چک های تالارو پاس کنم بد گیرم اقای قنبری اگه میشه تایید کنید' , modelRequest:'ضروری' },
//   { id: 3,  name: 'فاطمه طالبیان', cash: '5,000,000', date: ' 1403/03/17',  explain:'برای خرج عروسی و مراسم ازدواج  نیاز دارم و حتما باید چک های تالارو پاس کنم بد گیرم اقای قنبری اگه میشه تایید کنید' , modelRequest:'ضروری' },
//   { id: 4,  name: 'نگین سعیدی', cash: '5,000,000', date: '1403/03/17' ,  explain:'برای خرج عروسی و مراسم ازدواج  نیاز دارم و حتما باید چک های تالارو پاس کنم بد گیرم اقای قنبری اگه میشه تایید کنید' , modelRequest:'ضروری' },
//   { id: 5,  name: 'کنی سپهری', cash: '5,000,000', date: '1403/03/17' ,  explain:'برای خرج عروسی و مراسم ازدواج  نیاز دارم و حتما باید چک های تالارو پاس کنم بد گیرم اقای قنبری اگه میشه تایید کنید' , modelRequest:'ضروری' },
//   { id: 6,  name: 'نگین سعیدی', cash: '5,000,000', date: '1403/03/17' ,  explain:'برای خرج عروسی و مراسم ازدواج  نیاز دارم و حتما باید چک های تالارو پاس کنم بد گیرم اقای قنبری اگه میشه تایید کنید' , modelRequest:'ضروری' },
//   { id: 8,  name: 'سکینه داوودی', cash: '5,000,000', date: '1403/03/17' ,  explain:'برای خرج عروسی و مراسم ازدواج  نیاز دارم و حتما باید چک های تالارو پاس کنم بد گیرم اقای قنبری اگه میشه تایید کنید' , modelRequest:'ضروری' },
//   { id: 9,  name: 'سکینه داوودی', cash: '5,000,000', date: '1403/03/17' ,  explain:'برای خرج عروسی و مراسم ازدواج  نیاز دارم و حتما باید چک های تالارو پاس کنم بد گیرم اقای قنبری اگه میشه تایید کنید' , modelRequest:'ضروری' },
//   { id: 10,  name: 'سکینه داوودی', cash: '5,000,000', date: '1403/03/17' ,  explain:'برای خرج عروسی و مراسم ازدواج  نیاز دارم و حتما باید چک های تالارو پاس کنم بد گیرم اقای قنبری اگه میشه تایید کنید' , modelRequest:'ضروری' },
//   { id: 12,  name: 'سکینه داوودی', cash: '5,000,000', date: '1403/03/17' ,  explain:'برای خرج عروسی و مراسم ازدواج  نیاز دارم و حتما باید چک های تالارو پاس کنم بد گیرم اقای قنبری اگه میشه تایید کنید' , modelRequest:'ضروری' },
//   { id: 13,  name: 'سکینه داوودی', cash: '5,000,000', date: '1403/03/17' ,  explain:'برای خرج عروسی و مراسم ازدواج  نیاز دارم و حتما باید چک های تالارو پاس کنم بد گیرم اقای قنبری اگه میشه تایید کنید' , modelRequest:'ضروری' },
//   { id: 14,  name: 'سکینه داوودی', cash: '5,000,000', date: '1403/03/17' ,  explain:'برای خرج عروسی و مراسم ازدواج  نیاز دارم و حتما باید چک های تالارو پاس کنم بد گیرم اقای قنبری اگه میشه تایید کنید' , modelRequest:'ضروری' },
//   { id: 15,  name: 'سکینه داوودی', cash: '5,000,000', date: '1403/03/17' ,  explain:'برای خرج عروسی و مراسم ازدواج  نیاز دارم و حتما باید چک های تالارو پاس کنم بد گیرم اقای قنبری اگه میشه تایید کنید' , modelRequest:'ضروری' },
// ];

// const LoanApplicationPage: React.FC = () => {
//   return (
//     <div >
//          <div className='flex gap-32  items-center mb-2 mt-5 mr-3  '>
//             <div className='mr-2 '>
//                 <p className='font-bold text-lg'>
//                 مشاهده کاربران           
//                 </p>
//             </div>
//             <div className='flex items-center gap-2 '>
//           <label className="input  flex items-center border border-[#E2E8F0] gap-4  ">
           
//               <Image
//               src={ImageSearch}
//               width={20}
//               height={20}
//               alt='search'
//               />
           

//             <input className='w-[32rem] h-[32rem]' type="search"   placeholder="جستجو نام کاربری یا شماره تلفن"   />
//           </label>

         
//         </div>


//             <div className='flex justify-end mr-2  '>
//               <a href="">
//               <Image
//                 src={backImage}
//                 width={38}
//                 height={38}
//                 alt='arrow'

//                 />
//               </a>
              
//             </div>
//         </div>
//       <div>
      
//       </div>
//       <LoanAplicationTable users={users} />
//     </div>
   
//   );
// };

// export default LoanApplicationPage;



import React from 'react'
import AdminNavbarHeader from '@/src/app/components/AdminPage/AdminNavbarHeader'
import AdminPageNavbar from '@/src/app/components/AdminPage/AdminPageNavbar'
import InputPassword from '../components/AdminPage/InputPassword'
import SetUserPassword from '../components/AdminPage/SetedPassword'
import RequestLoan from '../components/AdminPage/RequestLoan'

function SetUserPasswordPage() {
  return (
    <div>
        <div className='flex '> 
            <div>
               
            <div >
          <div>
            <AdminNavbarHeader />
          </div>
          <div>
            <AdminPageNavbar />
          </div>
        </div>
            </div>
            <div>
          <RequestLoan/>
            </div>
        </div>
    </div>
  )
}

export default SetUserPasswordPage

