import React from 'react'
import Image from 'next/image';
import Image1 from '@/src/app/assent/Img/adminPanel/Avatar.svg';
import Image2 from '@/src/app/assent/Img/adminPanel/Avatar-2.svg';
import Image3 from '@/src/app/assent/Img/adminPanel/avatar online copy.svg';
import Image4 from '@/src/app/assent/Img/adminPanel/avatar online.svg';
import Link from 'next/link';


const User =[
    {id: 1 , src:Image1 , name:'الهه علی نیا' , massage:'سلام چرا وام من واریز نمیشه؟' , time: '7:00' },
    {id: 1 , src:Image2 , name:'کتی کتایونی' , massage:'سلام نمیتونم درخواست واممو ثبت کنم' , time: '7:00' },
    {id: 1 , src:Image3 , name:'سهیلا آمری' , massage:'سلام چرا پیام های یادآوری برای من نمیاد؟' , time: '7:00' },
    {id: 1 , src:Image4 , name:'ابراهیم علی نیا' , massage:'سلام چرا فیش رسیدمو آپلود میکنم ثبت نمیشه؟' , time: '7:00' },
];
function SupportMassgeDashboard() {
  return (
    <div className='flex justify-center mt-4 items-center bg-white dark:bg-black  md:justify-center  xl:justify-end xl:ml-10 xl:mt-6'>
        <div className='w-96 max-w-md  dark:bg-black  shadow-xl rounded-lg px-4 '>
            <div className='py-4 '>
             
                <p className='font-bold text-sm dark:text-white px-7 text-[#2D3748]'>
                پیام های پشتیبانی
                </p>
               </div>
               <div>

             <div className='px-4'>
               {User.map((items) =>(
                <div key={items.id} className='flex items-center py-4 gap-3  '>
                    <div className='flex-shrink-0'>
                
                       <Image src={items.src} width={40} height={40} alt='' className='rounded-full'
                       />
                        </div>   
                       
                            <div className='ml-4 flex-grow'>
                               <p className='font-medium text-sm leading-6 dark:text-white text-[#2D3748]'>
                                {items.name}
                               </p>

                               <p className='font-normal text-xs dark:text-white  text-[#A0AEC0]'>
                                {items.massage}
                               </p>
                            </div>

                          
                       
                        <div className='text-xs dark:text-white text-[#A0AEC0]'>
                         
                            {items.time}
                         
                        </div>
                    </div>

              
               ))}
            </div>

            <div className='flex justify-center py-8' >
              <Link href='/support' passHref>
              <button className='bg-[#4FD1C5] text-white py-2 px-24 rounded-lg'  >
            دیدن همه
          </button>
              </Link>
        
        </div>

        </div>
        </div>
        </div>
   
  )
}

export default SupportMassgeDashboard


// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import Link from 'next/link';

// interface MessageDetail {
//   id: number;
//   title: string | null;
//   description: string;
//   status: string;
//   ticket_id: number;
// }

// interface Message {
//   id: number;
//   name: string;
//   type: string;
//   response_status: string;
//   created_at: string;
//   updated_at: string;
//   user_id: number;
//   messages: MessageDetail[];
// }

// const getToken = (): string | null => {
//   return localStorage.getItem('authToken');
// };

// const fetchMessages = async (): Promise<Message[]> => {
//   const authToken = getToken();
//   if (!authToken) {
//     throw new Error('No token found');
//   }

//   try {
//     const response = await axios.get<Message[]>('https://shabab.v1r.ir/api/messages/index', {
//       headers: {
//         Authorization: `Bearer ${authToken}`,
//       },
//     });
//     console.log("API Response:", response.data);
//     return response.data;
//   } catch (error) {
//     console.error("Error fetching messages:", error);
//     throw error;
//   }
// };

// const SupportMessageDashboard: React.FC = () => {
//   const [messages, setMessages] = useState<Message[]>([]);
//   const [isLoading, setIsLoading] = useState<boolean>(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     const getData = async () => {
//       try {
//         const data = await fetchMessages();
//         setMessages(data);
//       } catch (err) {
//         setError(err instanceof Error ? err.message : 'Unknown error');
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     getData();
//   }, []);

 
//   return (
//     <div>
//       {messages.map((item) => (
//         <div key={item.id}>
//           <h3>{item.name || 'بدون نام'}</h3>
//           {item.messages.map((msg) => (
//             <p key={msg.id}>{msg.description}</p>
//           ))}
//           <span>{new Date(item.created_at).toLocaleString()}</span>
//         </div>
//       ))}
//       <Link href='/support' passHref>
//         <button>دیدن همه</button>
//       </Link>
//     </div>
//   );
// };

// export default SupportMessageDashboard;
