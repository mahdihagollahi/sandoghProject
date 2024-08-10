

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import groupImage from '@/src/app/assent/Img/adminPanel/Iconly.svg'
import axios from 'axios'

interface UserIdResponse {
  user_id: number;
}

function NumberOfMebers() {
  const [userId, setUserId] = useState<number | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchUserId = async () => {
      try {
        const token = 'YOUR_ACCESS_TOKEN'; 
        console.log("Using token:", token);

        const response = await axios.get<UserIdResponse>('https://shabab.v1r.ir/api/users/memberCnt', {
          headers: {
            Authorization: `Bearer ${token}`, 
          },
        });

        console.log("Server response:", response.data);
        setUserId(response.data.user_id); 
        setLoading(false); 
      } catch (error) {
        setLoading(false);
        if (axios.isAxiosError(error)) {
          if (error.response?.status === 401) {
            console.error('Unauthorized: Invalid token or missing credentials');
          } else {
            console.error('Error fetching user ID:', error.message);
          }
        }
      }
    };

    fetchUserId();
  }, []);

 

  return (
    <div>
        <div className='w-full flex -mt-[50%] '>
          <div className='bg-[#ffff]     rounded-md  px-4 py-5 shadow-lg flex flex-col  gap-12 md:items-center md:ml-5 xl:w-72 '>
            <div className='flex justify-between gap-20'>
            <p className='text-[#2D3748] font-bold text-sm leading-5'>
             تعداد اعضای عضو
             </p>
            <Image src={groupImage} width={24} height={24} alt='group'/>
           
            </div>
            <div className='flex justify-between gap-[117px] '>
               <div>
                  <p className='font-bold text-[#A0AEC0] text-xs leading-8'>
                  تعداد : 
                  </p>
               </div>
               <div>
               <p className='font-bold text-[#A0AEC0] text-xs leading-8'>
              {userId !== null ? `کاربر   ${userId}` : 'داده‌ای دریافت نشد'}
                  </p>
               </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default NumberOfMebers


