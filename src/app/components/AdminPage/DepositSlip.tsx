import React from 'react';
import Image from 'next/image';
import backImage from '@/src/app/assent/Img/adminPanel/back.svg'

const TextAreaComponent = ({onClose , users}) => {
  return (
    <div className="w-full mx-auto  flex flex-col gap-3 pb-3 p-10 rounded-lg shadow-md">

<div className='flex justify-end mr-2  '>
        
             
              <div  className='flex items-center'    onClick={onClose}>
              بازگشت
              <Image
                src={backImage}
                width={38}
                height={38}
                alt='arrow'

                />
              </div>
          
            </div>
    <Image src={users.src} width={500} height={500} alt='deposit slip'/>
     
    </div>
  );
};

export default TextAreaComponent;