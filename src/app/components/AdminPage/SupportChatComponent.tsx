import React, { useState } from 'react'
import Image from 'next/image'
import Image1 from '@/src/app/assent/Img/adminPanel/Avatar.svg';

import arrowImage from '@/src/app/assent/Img/adminPanel/back.svg'
function SupportChatComponent() {

  const message = [
    {id:1 ,src:Image1, name:'امیر قنبری' }
   
]
const [messages, setMessages] =useState([
  {id:1 , text:'سلام من هرکاری میکنم نمیتونم رسید پرداختو بارگذاری کنم و خطا میده باید چیکار کنم؟؟؟' , sender: 'user'},
  {id:2 , text: 'سلام، لطفا مطمئن شوید که فایل شما در قالب درست است.' , sender: 'admin'},
])

const [newMessage, setNewMessage]=useState('')
  
 const handelSend = () =>{
  if(newMessage.trim()) {
    setMessages([...messages , {id:messages.length+1 , text: newMessage , sender:'admin'}]);
    setNewMessage('');
  }
 }

 const handelKeyDown = (e) =>{
  if(e.key === 'Enter'){
    e.preventDefault();
    handelSend()
  }
 }
  return (
    <div>
        
        <div className='flex gap-[500px] justify-between items-center mb-2 mt-10  '>
            <div className='mr-4  '>
                <p className='font-bold text-lg'>
                پشتیبانی
                </p>
            </div>
            <div className=' absolute flex mr-[67%]   '>
              <a href="/Rout/support"className='flex items-center'>
              بازگشت
              <Image
                src={arrowImage}
                width={38}
                height={38}
                alt='arrow'

                />
              </a>
              
            </div>
        </div>
       

      <div>

      <div className='py-2 mt-5' >
                <p className='font-bold'>
                پیام های در انتظار پاسخگویی
                </p>
            </div>

            <div className='bg-white w-[1057px] h-[771px] shadow-lg mt-5 px-14 py-2 pb-4  rounded-sm'>
      
            {message.map((user,index )=>(
                  <div key={index} className={`flex w-[100%] mt-5 py-2 gap-4  items-start rounded-md ${
                    index %2 === 0 ? 'bg-[#4FD1C50D] border-r-4 border-[#00A991]'  : 'bg-[#2D37480D] border-r-4 border-[#2D3748]'
                    
                     }`}>
                 
                     <Image src={user.src} width={40} height={40} alt='user' className='rounded-full'/>
                     <div className='text-right'>
                       <p className='font-bold text-[#003B33]'>
                        {user.name}
                       </p>
                       
                     </div>
                  </div>

                ))}

                 <div className="p-4 h-96 overflow-y-auto">
                   {messages.map(message =>(
                    <div key={message.id} className={`mb-4 flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                      <p className={`p-3 rounded-lg inline-block max-w-4/5 ${message.sender === 'user' ? 'bg-[#4FD1C50D]' : 'bg-gray-100'}`}>
                         {message.text}
                       </p>
                    </div>
                   ))}
                 </div>

                   <div className='flex  px-9 mt-52 '>
                 <div className='flex items-center border border-[#F0F0F0] rounded-full px-2 py-3 w-[200%]'>
                     <input type="text" 
                     placeholder='تایپ کنید'
                     className='flex-grow border-none outline-none p-2 px-6 text-right'
                     value={newMessage}
                     onChange={(e) => setNewMessage(e.target.value)}
                     onKeyDown={handelKeyDown}
                    
                     />

                     <button className='bg-[#4FD1C5] rounded-md text-white px-4 py-2 ml-4'
                      onClick={handelSend}
                     >
                      ارسال
                     </button>
                 </div>
                 </div>
      </div>



    </div>
    </div>
  )
}

export default SupportChatComponent

