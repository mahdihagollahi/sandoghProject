import React,{useState} from 'react'
import Image from 'next/image'
import FillImage from '@/app/assent/Img/adminPanel/Fill 396.svg'
import DeleteImage from '@/app/assent/Img/adminPanel/Delete.svg'
import Paginate from './Paginate'



const UserTable =({users})=> {

    const [currentPage , setCurrentPage]= useState(0)
    const itemsPerPage =7;

    const pageClick = (data) =>{
        setCurrentPage(data.selected)
    }

    const offset = currentPage * itemsPerPage;
    const currentPageData = users.slice(offset, offset + itemsPerPage);
    const pageCount = Math.ceil(users.length / itemsPerPage);
  
  return (
    <div>
        <div className='p-4'>
            <div className='max-w-full bg-white shadow-md overflow-hidden'>
                <table>
                    <thead>
                        <tr>
                            <th className='font-bold text-sm text-[#2D3748]'>
                            نام کاربران
                            </th>

                            <th className='font-bold text-sm text-[#2D3748]'>
                            تاریخ عضویت
                          </th>

                          <th className='font-bold text-sm text-[#2D3748]'>
                          وام های دریافتی
                          </th>

                          <th className='font-bold text-sm text-[#2D3748]'>
                          جزئیات 
                          </th>

                          <th className='font-bold text-sm text-[#2D3748]'>
                          حذف کردن
                          </th>
                        </tr>
                    </thead>
                    <tbody>
                    {currentPageData.map((user, index) => (
                            <tr key={index}>
                              <td className='py-2 px-4 border-b '>
                    <Image src={user.image} width={24} height={24} alt='' />
                  </td>
                               <td className='py-2 px-4 border-b'>{user.name}</td>
                               <td className='py-2 px-4 border-b'>{user.joinDate}</td>
                               <td className='py-2 px-4 border-b'>{user.loans}</td>
                               <td className='py-2 px-4 border-b'>
                                <button className=' border flex gap-1 border-[#4FD1C5] p-1 rounded-md'>
                                    <p className='font-normal text-sm text-[4FD1C5]'>
                                    اطلاعات بیشتر

                                    </p>
                                    <Image
                                    src={FillImage}
                                    width={24}
                                    height={24}
                                    alt=''
                                    />
                                </button>
                               </td>

                               <td className='py-2 px-4 border-b'>
                                <button className='w-6 h-6 '>
                                <Image src={DeleteImage} width={24} height={24} alt='حذف' />                                </button>
                               </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                 
                 <Paginate
                 currentPageData={currentPageData}
                 pageCount={pageCount}
                 pageClick={pageClick}
                 />
              
            </div>
        </div>
    </div>
  )
}

export default UserTable

