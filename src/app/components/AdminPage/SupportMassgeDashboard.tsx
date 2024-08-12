// import React from 'react'
// import Image from 'next/image';
// import Image1 from '@/src/app/assent/Img/adminPanel/Avatar.svg';
// import Image2 from '@/src/app/assent/Img/adminPanel/Avatar-2.svg';
// import Image3 from '@/src/app/assent/Img/adminPanel/avatar online copy.svg';
// import Image4 from '@/src/app/assent/Img/adminPanel/avatar online.svg';
// import Link from 'next/link';


// const User =[
//     {id: 1 , src:Image1 , name:'الهه علی نیا' , massage:'سلام چرا وام من واریز نمیشه؟' , time: '7:00' },
//     {id: 1 , src:Image2 , name:'کتی کتایونی' , massage:'سلام نمیتونم درخواست واممو ثبت کنم' , time: '7:00' },
//     {id: 1 , src:Image3 , name:'سهیلا آمری' , massage:'سلام چرا پیام های یادآوری برای من نمیاد؟' , time: '7:00' },
//     {id: 1 , src:Image4 , name:'ابراهیم علی نیا' , massage:'سلام چرا فیش رسیدمو آپلود میکنم ثبت نمیشه؟' , time: '7:00' },
// ];
// function SupportMassgeDashboard() {
//   return (
//     <div className='flex justify-center mt-4 items-center   md:justify-center  xl:justify-end xl:ml-10 xl:mt-6'>
//         <div className='w-96 max-w-md bg-white shadow-xl rounded-lg px-4 '>
//             <div className='py-4 '>
             
//                 <p className='font-bold text-sm px-7 text-[#2D3748]'>
//                 پیام های پشتیبانی
//                 </p>
//                </div>
//                <div>

//              <div className='px-4'>
//                {User.map((items) =>(
//                 <div key={items.id} className='flex items-center py-4 gap-3  '>
//                     <div className='flex-shrink-0'>
                
//                        <Image src={items.src} width={40} height={40} alt='' className='rounded-full'
//                        />
//                         </div>   
                       
//                             <div className='ml-4 flex-grow'>
//                                <p className='font-medium text-sm leading-6 text-[#2D3748]'>
//                                 {items.name}
//                                </p>

//                                <p className='font-normal text-xs  text-[#A0AEC0]'>
//                                 {items.massage}
//                                </p>
//                             </div>

                          
                       
//                         <div className='text-xs text-[#A0AEC0]'>
                         
//                             {items.time}
                         
//                         </div>
//                     </div>

              
//                ))}
//             </div>

//             <div className='flex justify-center py-8' >
//               <Link href='/support' passHref>
//               <button className='bg-[#4FD1C5] text-white py-2 px-24 rounded-lg'  >
//             دیدن همه
//           </button>
//               </Link>
        
//         </div>

//         </div>
//         </div>
//         </div>
   
//   )
// }

// export default SupportMassgeDashboard


import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'next/link';
import Image from 'next/image'; // اگر لازم است برای تصاویر

// تعریف نوع برای پیام‌ها
interface Message {
  id: number;
  title: string | null;
  description: string;
  status: string;
  ticket_id: number;
  priority: string;
  created_at: string;
  updated_at: string;
}

// فانکشن برای گرفتن توکن از localStorage
const getToken = (): string | null => {
  return localStorage.getItem('token');
};

// فانکشنی برای گرفتن داده‌ها از API با توکن
const fetchMessages = async (): Promise<Message[]> => {
  const token = getToken();
  if (!token) {
    throw new Error('No token found');
  }

  const { data } = await axios.get<Message[]>('https://shabab.v1r.ir/api/messages/index', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return data;
};

const SupportMassgeDashboard: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchMessages();
        setMessages(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'خطای ناشناخته');
      } finally {
        setIsLoading(false);
      }
    };

    getData();
  }, []);

  if (isLoading) return   <div className='flex justify-center mt-4 items-center md:justify-center xl:justify-end xl:ml-10 xl:mt-6'>
  <div className='w-96 max-w-md bg-white shadow-xl rounded-lg px-4'>
    <div className='py-4'>
      <p className='font-bold text-sm px-7 text-[#2D3748]'>
        پیام های پشتیبانی
      </p>
    </div>
    <div>
      <div className='px-4'>
        <div>
          در حال بارگذاری
        </div>
      </div>
      <div className='flex justify-center py-8'>
        <Link href='/support' passHref>
          <button className='bg-[#4FD1C5] text-white py-2 px-24 rounded-lg'>
            دیدن همه
          </button>
        </Link>
      </div>
    </div>
  </div>
</div>;
  if (error) return   <div className='flex justify-center mt-4 items-center md:justify-center xl:justify-end xl:ml-10 xl:mt-6'>
  <div className='w-96 max-w-md bg-white shadow-xl rounded-lg px-4'>
    <div className='py-4'>
      <p className='font-bold text-sm px-7 text-[#2D3748]'>
        پیام های پشتیبانی
      </p>
    </div>
    <div>
      <div className='px-4'>
       <div>
        خطا در بارگذاری اطلاعات{error}
       </div>
      </div>
      <div className='flex justify-center py-8'>
        <Link href='/support' passHref>
          <button className='bg-[#4FD1C5] text-white py-2 px-24 rounded-lg'>
            دیدن همه
          </button>
        </Link>
      </div>
    </div>
  </div>
</div>;

  return (
    <div className='flex justify-center mt-4 items-center md:justify-center xl:justify-end xl:ml-10 xl:mt-6'>
      <div className='w-96 max-w-md bg-white shadow-xl rounded-lg px-4'>
        <div className='py-4'>
          <p className='font-bold text-sm px-7 text-[#2D3748]'>
            پیام های پشتیبانی
          </p>
        </div>
        <div>
          <div className='px-4'>
            {messages.map((item) => (
              <div key={item.id} className='flex items-center py-4 gap-3'>
                <div className='flex-shrink-0'>
                  {/* اگر تصاویر استفاده می‌کنید، از اینجا اضافه کنید */}
                </div>
                <div className='ml-4 flex-grow'>
                  <p className='font-medium text-sm leading-6 text-[#2D3748]'>
                    {item.title || 'بدون عنوان'}
                  </p>
                  <p className='font-normal text-xs text-[#A0AEC0]'>
                    {item.description}
                  </p>
                  <p className='font-normal text-xs text-[#A0AEC0]'>
                    وضعیت: {item.status}
                  </p>
                  <p className='font-normal text-xs text-[#A0AEC0]'>
                    اولویت: {item.priority}
                  </p>
                  <p className='font-normal text-xs text-[#A0AEC0]'>
                    تاریخ ایجاد: {new Date(item.created_at).toLocaleString()}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className='flex justify-center py-8'>
            <Link href='/support' passHref>
              <button className='bg-[#4FD1C5] text-white py-2 px-24 rounded-lg'>
                دیدن همه
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportMassgeDashboard;
