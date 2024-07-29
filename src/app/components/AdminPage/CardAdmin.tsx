// import React from 'react'
// import Image from 'next/image'
// import CardImage from '../assent/Img/adminPanel/Credit Card.png'
// import EditICon from '../assent/Img/adminPanel/Edit.svg'

// function CardAdmin() {
//   return (
//     <div>
//         <div className=' w-full mt-2 ml-0 '>
//             <div className='bg-[#ffff] rounded-md p-2  shadow-lg md:items-center xl:w-96'>

//             <div >
//                <Image
//                    className='mr-10'
//                src={CardImage}
//                width={300}
//                height={70}
//                alt='Card'
//                />
//             </div>
           

//             </div>

//             <div className=' mt-8 mr-10  pb-3 pt-2 px-3 w-80 h-10 border border-[#4FD1C5]  '>
//                 <button className='flex  justify-between gap-3 bg-white'>
//                 آیا شماره کارت صندوق را تغییر میدهید ؟ 
//                 <Image
//                 src={EditICon}
//                 width={20}
//                 height={20}
//                 alt='edit'
//                 />
//                 </button>
//             </div>
          
//         </div>
//     </div>
//   )
// }

// export default CardAdmin


import React from 'react'
import Image from 'next/image'
import CardImage from '@/src/app/assent/Img/adminPanel/Credit Card.png'
import EditIcon from '@/src/app/assent/Img/adminPanel/Edit.svg'

function CardAdmin() {
  return (
    <div className='flex flex-col items-center'>
      <div className='w-full mt-2'>
        <div className='bg-white rounded-md p-2 shadow-lg md:items-center xl:w-96 mx-auto'>
          <div className='flex justify-center'>
            <Image
              className=' flex justify-center'
              src={CardImage}
              width={300}
              height={70}
              alt='Card'
            />
          </div>
          <div className='mt-8 mx-auto pb-3 pt-2 px-3 w-full md:w-80 h-10 border border-[#4FD1C5] cursor-pointer'>
          <button className='flex justify-between items-center gap-3 bg-white w-full '>
            آیا شماره کارت صندوق را تغییر میدهید ؟ 
            <Image
              src={EditIcon}
              width={20}
              height={20}
              alt='edit'
            />
          </button>
        </div>
        </div>

        
      </div>
    </div>
  )
}

export default CardAdmin





