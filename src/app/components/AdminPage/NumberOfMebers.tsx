import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import groupImage from '@/src/app/assent/Img/adminPanel/Iconly.svg'
import axios from 'axios'

interface UserIdResponse {
  user_id: number;
  [key: string]: any; 
}

function NumberOfMebers() {
  const [responseData, setResponseData] = useState<UserIdResponse | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchUserId = async () => {
      try {
        const authToken = localStorage.getItem('authToken');
        if (!authToken) {
          console.error('Token not found in localStorage');
          setLoading(false);
          return;
        }

        console.log("Using token:", authToken);

        const response = await axios.get<UserIdResponse>('https://shabab.v1r.ir/api/users/memberCnt', {
          headers: {
            Authorization: `Bearer ${authToken}`, 
          },
        });

        console.log("Server response:", response.data);
        setResponseData(response.data); 
        setLoading(false); 
      } catch (error) {
        setLoading(false);
        if (axios.isAxiosError(error)) {
          if (error.response?.status === 401) {
            console.error('Unauthorized: Invalid token or missing credentials');
          } else {
            console.error('Error fetching data:', error.message);
          }
        }
      }
    };

    fetchUserId();
  }, []);

  return (
    <>
      <div className='w-full flex -mt-[50%] '>
        <div className='bg-[#ffff] rounded-md px-4 py-5 shadow-lg flex flex-col gap-12 md:items-center md:ml-5 xl:w-72 '>
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
            <div className='flex items-center gap-1'>
              <p className='font-bold text-[#A0AEC0] text-xs leading-8'>
                {loading ? 'در حال بارگذاری...' : responseData ? JSON.stringify(responseData)  : 'اطلاعات موجود نیست'}
            
              </p>
              <p className='font-bold text-[#A0AEC0] text-xs leading-8'>
               نفر عضو
               </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default NumberOfMebers
