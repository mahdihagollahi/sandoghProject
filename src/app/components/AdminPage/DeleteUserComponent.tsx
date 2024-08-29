import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import backImage from '@/src/app/assent/Img/adminPanel/back.svg';
import eyes from "@/src/app/assent/Img/userPanel/eyes.svg";
import accept from "@/src/app/assent/Img/userPanel/acsept.svg";
import reject from "@/src/app/assent/Img/userPanel/reject.svg";


function DeleteUserComponent() {

    const user = [
        {
          id: 1,
          name: "کتی سپهری",
          code: "0038744478",
          phone: "09126346521",
          date: "1403/02/18",
        },
        {
          id: 2,
          name: "کتی ثمری",
          code: "0038354478",
          phone: "09126326521",
          date: "1403/12/28",
        },
        {
          id: 3,
          name: "مهدی احمری",
          code: "0238744478",
          phone: "09016346521",
          date: "1403/09/22",
        },
        {
          id: 4,
          name: "سجاد فهیمی",
          code: "0038747890",
          phone: "09337689721",
          date: "1403/11/30",
        },
      ];
  return (
    <div>
    <div className='flex gap-[74%] items-center mb-2 mt-10 mr-3'>
      <div className='mr-2'>
        <p className='font-bold text-lg whitespace-nowrap'>
        انصراف ها
        </p>
      </div>
      <div className='flex justify-end mr-72'>
        <Link href=''>
          <div className='flex items-center'>
            بازگشت
            <Image src={backImage} width={38} height={38} alt='arrow' />
          </div>
        </Link>

        
      </div>

     
    </div>
    <div>
      <table className="w-[130%] mt-8 p-10 shadow-md rounded-md">
  <thead>
    <tr className="border-b-2 flex flex-row justify-around  p-8 gap-10">
      <th>ردیف</th>
      <th>نام کاربری</th>
      <th>کد ملی</th>
      <th>شماره موبایل</th>
      <th>تاریخ درخواست</th>
      <th>مشاهده کاربر</th>
      <th className='pl-5'>عملیات</th>
    </tr>
  </thead>
  <tbody>
    {user.map((item) => (
      <tr key={item.id} className="flex flex-row p-8 border-b-2 justify-around my-5">
        <td>{item.id}</td>
        <td  >{item.name}</td>
        <td className="-mr-8" >{item.code}</td>
        <td className="-mr-9">{item.phone}</td>
        <td className="-mr-1">{item.date}</td>
        <td className="w-5 h-5 ">
          <Image src={eyes} alt="مشاهده" />
        </td>
        <td className="flex flex-row gap-8 ">
          <Image className="w-5 h-5" src={accept} alt="قبول" />
          <Image className="w-5 h-5" src={reject} alt="رد" />
        </td>
      </tr>
    ))}
  </tbody>
</table>  
      </div>
  </div>
  )
}

export default DeleteUserComponent