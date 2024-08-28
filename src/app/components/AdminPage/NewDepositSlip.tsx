// import React from 'react';
// import Image from 'next/image';
// import MoneyImage from '@/src/app/assent/Img/adminPanel/3D money card.svg';

// function NewDepositSlip() {
//   const aplication = [
//     {id: 1, numberLoan: 20}
//   ];

//   return (
//     <div>
//       <div className='mr-96 ml-8 -mt-[12%]'>
//         <div className='flex justify-between gap-12 shadow-lg w-[59%] h-[20%] rounded-md p-6 bg-[#ffff]'>
//           <div className='flex flex-col gap-9'>
//             <div>
//               <p className='font-bold text-sm leading-8 text-[#2D3748]'>
//                 {aplication[0].numberLoan} فیش واریزی جدید
//               </p>
//             </div>
//             <div>
//               <button className='bg-[#4FD1C5] border border-[#4FD1C5] w-64 h-10 rounded-xl text-white'>
//                 دیدن همه
//               </button>
//             </div>
//           </div>
//           <div>
//             <Image
//               src={MoneyImage}
//               width={132}
//               height={121}
//               alt='money'
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default NewDepositSlip;




// import React from 'react';
// import Image from 'next/image';
// import { useQuery } from '@tanstack/react-query'; 
// import axios from 'axios';
// import MoneyImage from '@/src/app/assent/Img/adminPanel/3D money card.svg';

// const fetchDepositSlip = async () => {
//   const response = await axios.get('https://shabab.v1r.ir/api/factors/factorCnt');
//   return response.data;
 
// };

// function NewDepositSlip() {
//   const query = useQuery({
//     queryKey: ['depositSlip'],
//     queryFn: fetchDepositSlip,
   
//   });

//   if (query.isLoading) return <div>Loading...</div>;
//   if (query.error) return <div>An error occurred: {query.error.message}</div>;

//   const { data } = query;

//   return (
//     <div>
//       <div className='mr-96 ml-8 -mt-[12%]'>
//         <div className='flex justify-between gap-12 shadow-lg w-[59%] h-[20%] rounded-md p-6 bg-[#ffff]'>
//           <div className='flex flex-col gap-9'>
//             <div>
//               <p className='font-bold text-sm leading-8 text-[#2D3748]'>
//                 {data.numberLoan} فیش واریزی جدید
//               </p>
//             </div>
//             <div>
//               <button className='bg-[#4FD1C5] border border-[#4FD1C5] w-64 h-10 rounded-xl text-white'>
//                 دیدن همه
//               </button>
//             </div>
//           </div>
//           <div>
//             <Image
//               src={MoneyImage}
//               width={132}
//               height={121}
//               alt='money'
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default NewDepositSlip;


import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import MoneyImage from '@/src/app/assent/Img/adminPanel/3D money card.svg';

const fetchDepositSlip = async (token: string) => {
  const response = await axios.get('http://hosseinshabab.iapp.ir/api/factors/factorCnt', {
    headers: {
   
      'Authorization': `Bearer ${token}`
    },
  });

  return response.data;
};

function NewDepositSlip() {
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    const storedToken = localStorage.getItem('authToken');
    if (storedToken) {
      setToken(storedToken);
    } else {
      console.error('No auth token found');
    }
  }, []);

  const query = useQuery({
    queryKey: ['depositSlip'],
    queryFn: () => fetchDepositSlip(token || ''),
    enabled: !!token, 
  });

  if (query.isLoading) return (
    <div>
       <div className='ml-8 mr-20 -mt-[15.55%]'>
        <div className='flex justify-between gap-12 shadow-lg w-[60%] h-[20%] rounded-md p-6 dark:bg-black bg-[#ffff]'>
          <div className='flex flex-col gap-9'>
            <div>
              <p className='font-bold text-sm dark:text-white leading-8 text-[#2D3748]'>
                درحال بارگزاری
              </p>
            </div>
            <div>
              <button className='bg-[#4FD1C5] border border-[#4FD1C5] w-64 h-10 rounded-xl text-white'>
                دیدن همه
              </button>
            </div>
          </div>
          <div>
            <Image
              src={MoneyImage}
              width={132}
              height={121}
              alt='money'
            />
          </div>
        </div>
      </div>
    </div>
  );
  if (query.error) 

    return (
      <div>
        <div className='ml-8 mr-20 -mt-[14%]'>
         <div className='flex justify-between gap-12 shadow-lg w-[61%] h-[20%] rounded-md p-6 dark:bg-black bg-[#ffff]'>
         <div className='flex flex-col gap-9'>
              <div>
                <p className='font-bold text-sm leading-8 dark:text-white text-[#2D3748]'>
                An error occurred: {query.error.message}                
                </p>
              </div>
              <div>
                <button className='bg-[#4FD1C5] border border-[#4FD1C5] w-64 h-10 rounded-xl text-white'>
                  دیدن همه
                </button>
              </div>
            </div>
            <div>
              <Image
                src={MoneyImage}
                width={132}
                height={121}
                alt='money'
              />
            </div>
          </div>
        </div>
      </div>
    );

  const data = query.data;
  const numberLoan = data?.numberLoan || 0;

  return (
    <div>
    <div className='ml-8 mr-20 -mt-[15.55%]'>
      <div className='flex justify-between gap-12 shadow-lg w-[60%] h-[20%] rounded-md p-6 dark:bg-black bg-[#ffff]'>
      <div className='flex flex-col gap-9'>
            <div>
              <p className='font-bold text-sm leading-8 dark:text-white text-[#2D3748]'>
                {numberLoan} فیش واریزی جدید
              </p>
            </div>
            <div>
              <button className='bg-[#4FD1C5] border border-[#4FD1C5] w-64 h-10 rounded-xl text-white'>
                دیدن همه
              </button>
            </div>
          </div>
          <div>
            <Image
              src={MoneyImage}
              width={132}
              height={121}
              alt='money'
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewDepositSlip;
