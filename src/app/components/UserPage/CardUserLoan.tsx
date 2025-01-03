


// import React from 'react'
// import Image from 'next/image'
// import CardImage from '@/app/assent/Img/adminPanel/Credit Card.png'
// import CopyIcon from '@/app/assent/Img/userPanel/copy.svg'

// function CardUserLoan() {
//     const cardNumber = { number: '6037998323457865' }

//   const copyToClipboard = () => {
//     navigator.clipboard.writeText(cardNumber.number)
//       .then(() => {
//         alert('شماره کارت کپی شد!')
//       })
//       .catch(err => {
//         console.error('Error copying text: ', err)
//       })
//   }
//   return (
//     <div className='flex flex-col items-center'>
//       <div className='w-[90%] ml-10'>
//         <div className='bg-white rounded-md py-20  shadow-md md:items-center xl:w-full '>
//           <div className='flex justify-center '>
//             <Image
//               className=''
//               src={CardImage}
//               width={300}
//               height={70}
//               alt='Card'
//             />
//           </div>
//           <div className='mt-8 mx-auto pb-3 pt-2  w-full md:w-80 rounded-md h-10 border border-opacity-50 border-[#394860] cursor-pointer'>
//           <button className='flex  items-center justify-center gap-3 text-[#394860] w-full '
//            onClick={copyToClipboard}
//           >
//             <Image src={CopyIcon} width={20} height={20} alt='copy'/>

           
//           شماره کارت را کپی کنید
//           </button>
//         </div>
//         </div>

        
//       </div>
//     </div>
//   )
// }

// export default CardUserLoan

// import React, { Fragment } from 'react'
// import Image from 'next/image'
// import CopyIcon from '@/app/assent/Img/userPanel/copy.svg'
// import CardImage from '@/app/assent/Img/adminPanel/Credit Card.png'
// function CardUser() {
//   const cardNumber={number:'6037998323457865'}

//   const copyToClipboard = () => {
//     navigator.clipboard.writeText(cardNumber.number)
//       .then(() => {
//         alert('شماره کارت کپی شد!')
//       })
//       .catch(err => {
//         console.error('Error copying text: ', err)
//       })
//   }
//   return (
//     <Fragment>

   
//     <div className='flex flex-col items-center'>
//       <div className='w-full '>
//       <p className='absolute mr-16 mt-10'>
//          شماره کارت صندوق
//          </p>
//         <div className='bg-white rounded-md py-20 shadow-md md:items-center xl:w-96 '>
       
//           <div className='flex justify-center '>
//             <Image
//               className=''
//               src={CardImage}
//               width={300}
//               height={70}
//               alt='Card'
//             />
//           </div>
//           <div className='mt-8 mx-auto pb-3 pt-2  w-full md:w-80 rounded-md h-10 border border-opacity-50 border-[#394860] cursor-pointer'>
//           <button className='flex  items-center justify-center gap-3 text-[#394860] w-full '
//            onClick={copyToClipboard}
//           >
//             <Image src={CopyIcon} width={20} height={20} alt='copy'/>
//           شماره کارت را کپی کنید
//           </button>
//         </div>
//         </div>
//       </div>
//     </div>
//     </Fragment>
//   )
// }

// export default CardUser


import React, { Fragment, useEffect, useState } from 'react';
import Image from 'next/image';
import axios from 'axios';
import CopyIcon from '@/app/assent/Img/userPanel/copy.svg';
import CardImage from '@/app/assent/Img/adminPanel/Credit Card.png';

function CardUser() {
  const [cardNumber, setCardNumber] = useState({ number: '' });

  // دریافت شماره کارت از API
  useEffect(() => {
    const fetchCardNumber = async () => {
      try {
        const authToken = localStorage.getItem('authToken'); // دریافت توکن از localStorage
        if (authToken) {
          const response = await axios.post(
            'https://mohammadelia30.ir/shabab/api/auth/me',
            {}, // اگر پارامتری لازم نیست، می‌توان اینجا خالی فرستاد
            {
              headers: {
                Authorization: `Bearer ${authToken}`, // ارسال توکن در هدر
              },
            }
          );
          // دریافت شماره کارت از response
          if (response.data && response.data.card_number) {
            setCardNumber({ number: response.data.card_number });
          } else {
            setCardNumber({ number: 'شماره کارت موجود نیست' });
          }
        }
      } catch (error) {
        console.error('خطا در دریافت اطلاعات:', error);
        setCardNumber({ number: 'خطا در دریافت شماره کارت' });
      }
    };

    fetchCardNumber();
  }, []);

  // تابع برای کپی کردن شماره کارت
  const copyToClipboard = () => {
    if (cardNumber.number && cardNumber.number !== 'شماره کارت موجود نیست') {
      navigator.clipboard.writeText(cardNumber.number)
        .then(() => {
          alert('شماره کارت کپی شد!');
        })
        .catch(err => {
          console.error('Error copying text: ', err);
        });
    }
  };

  return (
    <Fragment>
      <div className='flex flex-col items-center'>
        <div className='w-full'>
          <p className='absolute mr-16 mt-10'>
            شماره کارت صندوق
          </p>
          <div className='bg-white rounded-md py-20 shadow-md md:items-center xl:w-96'>
            <div className='flex justify-center'>
              {/* <Image
                className=''
                src={CardImage}
                width={300}
                height={70}
                alt='Card'
              /> */}
              <p className='mt-5 text-center'>
                {cardNumber.number ? cardNumber.number : 'در حال دریافت...'}
              </p>
            </div>
            <div className='mt-8 mx-auto pb-3 pt-2 w-full md:w-80 rounded-md h-10 border border-opacity-50 border-[#394860] cursor-pointer'>
              <button className='flex items-center justify-center gap-3 text-[#394860] w-full'
                onClick={copyToClipboard}
                disabled={cardNumber.number === 'شماره کارت موجود نیست'}
              >
                <Image src={CopyIcon} width={20} height={20} alt='copy' />
                شماره کارت را کپی کنید
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default CardUser;

