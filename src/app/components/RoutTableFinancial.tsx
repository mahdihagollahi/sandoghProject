import React,{useState} from 'react'
import Image from 'next/image'
import UserOutlineImage from '@/app/assent/Img/adminPanel/3UserOutline.svg'
import crossOutline from '@/app/assent/Img/adminPanel/crossOutline.svg'

import IconlyImage from '@/app/assent/Img/adminPanel/Iconly.svg'; 
import crossActiveImage from '@/app/assent/Img/adminPanel/crossActive.svg'; 


function RoutTableUser() {

  const [currentImage, setCurrentImage] = useState(UserOutlineImage);
  const [currentActiveImage, setcurrentActiveImage] = useState(crossOutline);

  const handleImageChange = () => {
    setCurrentImage(IconlyImage);
  };

  const handleImageChangeCross = () => {
    setcurrentActiveImage(crossActiveImage);
  };

  return (
    <div>
        <div>
            <div className='flex w-[400px] shadow-md justify-between px-10 mt-8 mr-5 bg-white h-16 rounded-md '>
              <div className='flex  items-center gap-2 active:border-b-2 active:border-[#4FD1C5]'  onClick={handleImageChange}>
                 <Image
                 src={currentImage}
                 width={25}
                 height={25}
                 alt='men'
                 />
                 <p className='font-bold text-sm text-[#2D3748]'> 
                 واریز کرده ها                
                  </p>
              </div>

              <div className='flex items-center gap-2 active:border-b-2 active:border-[#4FD1C5]'
              onClick={handleImageChangeCross}
              >
                 <Image
                 src={currentActiveImage}
                 width={25}
                 height={25}
                 alt='men'
                 />
                 <p className='font-bold text-sm text-[#2D3748]'> 
                 واریز نکرده ها                 
                 </p>
              </div>
            </div>
        </div>
    </div>
  )
}

export default RoutTableUser




