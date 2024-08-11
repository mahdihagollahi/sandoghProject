import React,{useEffect, useState} from 'react';
import Image from 'next/image';
import backImage from '@/src/app/assent/Img/adminPanel/back.svg'
import EveryLoanAplicationTable from '@/src/app/components/AdminPage/EveryLoanAplicationTable';
import RoutRequestLoan from './RoutRequestLoan';
import SwichButton from './SwichButton';
import axios from 'axios';


interface User {
  id: number;
  name: string;
  amount: string;
  date: string;
  description:string;
  type:string;
  requestNumber:number;
  guarantors:string

}

// const users: User[] = [
 
//   {
//     name: "کتی سپهری",
//     requestNumber: 3,
//     amount: "50,000,000 تومان",
//     date: "1404/03/17",
//     type: "ضروری",
//     guarantors: ["حامد رحمانی"],
//     description: "برای خرج عروسی و مراسم ازدواج نیاز دارم و حتما باید چک‌های تالارو پاس کنم. بد گریم آقای فیضی اگه میشه تایید کنید."
//   },
//   {
//     name: "ابراهیم علی نیا",
//     requestNumber: 2,
//     amount: "30,000,000 تومان",
//     date: "1404/01/16",
//     type: "ضروری",
//     guarantors: ["حامد رحمانی"],
//     description: "برای عمل قلب باز پدرم می‌خوام اوضاع خیلی بریخته ممکنه جونشو از دست بده هیچکسیم نداره قرض بگیریم لطفا وام این ماهو برای من در نظر بگیرید."
//   },
//   {
//     name: "مینا فیضی",
//     requestNumber: 3,
//     amount: "50,000,000 تومان",
//     date: "1404/03/17",
//     type: "معمولی",
//     guarantors: ["حامد رحمانی"],
//     description: "برای خرج عروسی و مراسم ازدواج نیاز دارم و حتما باید چک‌های تالارو پاس کنم. بد گریم آقای فیضی اگه میشه تایید کنید."
//   },
// ];

const EveryRequestLoan: React.FC = () => {
  const [users , setUsers]=useState<User[]>([])
  const [isUrgent, setIsUrgent] = useState(false);

  useEffect(()=>{
    const fetchData= async () =>{
      try{
        const response = await axios .post('https://shabab.v1r.ir/api/loans/show/admin') ;
        const fechedUsers = response.data.map((loan:any)=>({
          id:loan.id,
          name:`${loan.user.first_name} ${loan.user.last_name}`,
          amount:`${loan.price.toLocaleString()} تومان`,
          date: new Date(loan.created_at).toLocaleDateString('fa-IR'),
          description: loan.user_description,
          type:loan.type === 'urgent' ? 'معمولی' : 'ضروری',
          requestNumber:loan.loan_number,
             guarantors: loan.guarantors_accept === 'accepted' ? 'نامشخص' : 'رحمانی'
        }));
        setUsers(fechedUsers)
      }catch (error){
        console.error("Error fetching loan data", error)
      }
    };
    fetchData();
  } ,[])

  const filteredUsers = users.filter(user => isUrgent ? user.type === 'ضروری' : user.type === 'معمولی');
  return (
    <div >
         <div className='flex justify-between  items-center mb-2 mt-10 mr-3  '>
         <div className='mr-2 '>
                <p className='font-bold text-lg'>
                درخواست وام                
                </p>
            </div>
           


            <div  >
              <a href="" className='flex items-center ml-7' >
                بازگشت
              <Image
                src={backImage}
                width={38}
                height={38}
                alt='arrow'

                />
              </a>
            </div>
        </div>
      <div className='flex gap-[47%] items-center'>
        <div>
        <RoutRequestLoan/>

        </div>
        <div>
           <SwichButton setIsUrgent={setIsUrgent}/>
        </div>
      </div>
      <div className='mt-4'>
      <EveryLoanAplicationTable users={filteredUsers} />

      </div>
    </div>
   
  );
};

export default EveryRequestLoan;

