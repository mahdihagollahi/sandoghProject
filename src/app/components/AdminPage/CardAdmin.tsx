// import React from 'react'
// import Image from 'next/image'
// import Background from '@/src/app/assent/Img/adminPanel/Background.png'
// import EditIcon from '@/src/app/assent/Img/adminPanel/Edit.svg'

// function CardAdmin() {
//   return (
//     <div className='flex flex-col items-center'>
//       <div className='w-full '>
//         <div className='bg-white dark:bg-black rounded-md py-[16%] shadow-lg md:items-center xl:w-96 mx-auto'>
//           <div className='flex justify-center '>
//             <Image
//               className=' flex justify-center'
//               src={Background}
//               width={300}
//               height={70}
//               alt='Card'
//             />
//           </div>
//           <div className='mt-8 mx-auto pb-3 pt-2 px-8 w-full md:w-80 h-10 border border-[#4FD1C5] cursor-pointer'>
//           <button className='flex justify-between items-center   dark:bg-black dark:text-white bg-white w-full '>
//           <Image
//               src={EditIcon}
//               width={20}
//               height={20}
//               alt='edit'
//             />
//             آیا شماره کارت صندوق را تغییر میدهید ؟ 
         
//           </button>
//         </div>
//         </div>

        
//       </div>
//     </div>
//   )
// }

// export default CardAdmin




import React, { useState, ChangeEvent } from 'react';
import axios from 'axios';
import { useQuery, useQueryClient, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Background from '@/src/app/assent/Img/adminPanel/Background.png';
import EditIcon from '@/src/app/assent/Img/adminPanel/Edit.svg';
import Image from 'next/image';

interface UserData {
  name: string;
  cardNumber: string;
  expire: string;
}

// تابع fetchUserData با تایپ مشخص
const fetchUserData = async (): Promise<UserData> => {
  const authToken = localStorage.getItem('authToken');
  if (!authToken) {
    throw new Error('No auth token found');
  }

  const response = await axios.get<UserData>('https://shabab.v1r.ir/api/settings/index', {
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
  });

  return response.data;
};

function CardAdmin() {
  const queryClient = useQueryClient(); // برای استفاده از invalidateQueries
  const [isEditing, setIsEditing] = useState(false);
  const [cardNumber, setCardNumber] = useState('');

  const { data, isLoading, error } = useQuery<UserData>({
    queryKey: ['userData'],
    queryFn: fetchUserData,
    onSuccess: (data) => {
      setCardNumber(data.cardNumber);
    },
  });

  const handleEditClick = () => {
    setIsEditing(!isEditing);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCardNumber(e.target.value);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
    queryClient.invalidateQueries(['userData']); // برای ریفرش داده‌ها پس از ذخیره
  };

  if (isLoading) return (
    <div className='flex flex-col items-center'>
      <div className='w-full'>
        <div className='bg-white dark:bg-black rounded-md py-[16%] shadow-lg md:items-center xl:w-96 mx-auto'>
          <div className='relative flex justify-center items-center h-48'>
            <div
              className='absolute inset-0 w-80 h-40 mr-8 rounded-3xl'
              style={{ backgroundImage: `url(${Background.src})` }}
            ></div>

            <div className='relative z-10'>
       <p className='text-white text-lg mr-10 mb-10 font-normal'>...loading</p>
            </div>
          </div>
          <div className='mt-8 mx-auto pb-3 pt-2 px-8 w-full md:w-80 h-10 border border-[#4FD1C5] cursor-pointer'>
            <button
              className='flex justify-between items-center dark:bg-black dark:text-white bg-white w-full'
            >
              <Image src={EditIcon} width={20} height={20} alt='edit' />
              آیا شماره کارت صندوق را تغییرمیدهید؟
            </button>
          </div>
        </div>
      </div>
    </div>
  );
  if (error) return (
    <div className='flex flex-col items-center'>
    <div className='w-full'>
      <div className='bg-white dark:bg-black rounded-md py-[16%] shadow-lg md:items-center xl:w-96 mx-auto'>
        <div className='relative flex justify-center items-center h-48'>
          <div
            className='absolute inset-0 w-80 h-40 mr-8  rounded-3xl'
            style={{ backgroundImage: `url(${Background.src})` }}
          ></div>

          <div className='relative z-10'>
     <p className='text-white  text-lg mr-10 mb-10 font-normal'>
     Error: {error.message}      
     </p>
          </div>
        </div>
        <div className='mt-8 mx-auto pb-3 pt-2 px-8 w-full md:w-80 h-10 border border-[#4FD1C5] cursor-pointer'>
          <button
            onClick={isEditing ? handleSaveClick : handleEditClick}
            className='flex justify-between items-center dark:bg-black dark:text-white bg-white w-full'
          >
            
            <Image src={EditIcon} width={20} height={20} alt='edit' />
            آیا شماره کارت صندوق را تغییرمیدهید؟
          </button>
        </div>
      </div>
    </div>
  </div>
  )

  return (
    <div className='flex flex-col items-center'>
      <div className='w-full'>
        <div className='bg-white dark:bg-black rounded-md py-[16%] shadow-lg md:items-center xl:w-96 mx-auto'>
          <div className='relative flex justify-center items-center h-48'>
            <div
              className='absolute inset-0 w-80 h-40 mr-8  rounded-3xl'
              style={{ backgroundImage: `url(${Background.src})` }}
            ></div>

            <div className='relative z-10'>
              <p className='text-white text-lg mr-64 mb-10 font-normal'>
                {data?.name}
              </p>
              <div className='text-white text-lg mr-32 font-normal tracking-wider mb-5'>
                {isEditing ? (
                  <input
                    type='text'
                    value={cardNumber}
                    onChange={handleInputChange}
                    className='bg-transparent border-b-2 border-white focus:outline-none w-full'
                  />
                ) : (
                  <p>{cardNumber}</p>
                )}
              </div>
              <p className='text-white text-lg mr-60 font-normal'>
                انقضا: {data?.expire}
              </p>
            </div>
          </div>
          <div className='mt-8 mx-auto pb-3 pt-2 px-8 w-full md:w-80 h-10 border border-[#4FD1C5] cursor-pointer'>
            <button
              onClick={isEditing ? handleSaveClick : handleEditClick}
              className='flex justify-between items-center dark:bg-black dark:text-white bg-white w-full'
            >
              <Image src={EditIcon} width={20} height={20} alt='edit' />
              {isEditing ? 'تایید' : 'آیا شماره کارت صندوق را تغییر میدهید ؟'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardAdmin;
