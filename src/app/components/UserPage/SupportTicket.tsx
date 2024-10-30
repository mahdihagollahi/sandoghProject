// import React, { useState } from "react";
// import Image from "next/image";
// import exper from "@/app/assent/Img/userPanel/Exclamation.svg";
// import path from "@/app/assent/Img/userPanel/Path-75_3_.png";

// function SupportTicket() {
//   const [description, setDescription] = useState("");
//   const [priority, setPriority] = useState("");
//   const authToken =
//     typeof window !== "undefined" ? localStorage.getItem("authToken") : null;

//   const handleSubmit = async () => {
//     if (!authToken) {
//       alert("توکن احراز هویت یافت نشد.");
//       return;
//     }

//     if (!description || !priority) {
//       alert("لطفاً تمامی فیلدها را پر کنید.");
//       return;
//     }

//     const data = {
//       description: description,
//       priority: priority,
//       message: null,
//     };

//     try {
//       const response = await fetch(
//         "https://mohammadelia30.ir/shabab/api/messages/create",
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${authToken}`,
//           },
//           body: JSON.stringify(data),
//         }
//       );

//       const result = await response.json();

//       if (response.ok) {
//         alert("پیام با موفقیت ارسال شد.");
//         console.log(result);
//       } else {
//         alert("خطایی رخ داد.");
//         console.error(result);
//       }
//     } catch (error) {
//       console.error("Error:", error);
//     }
//   };

//   return (
//     <>
//       <div className="flex justify-between items-center mb-2 mt-12">
//         <div className="mr-16">
//           <p className="font-bold text-lg">پشتیبانی</p>
//         </div>
//       </div>

//       <div className="flex flex-col gap-10 px-16 mt-10">
//         <div>نیاز به پشتیبانی دارید ؟</div>
//         <div className="flex flex-row gap-1">
//           <Image src={exper} alt="" />
//           <span className="mt-1">
//             لطفا پیام یا سوال خود را در قالب تیکت پشتیبانی ارسال کنید.
//             درسریع‌ترین زمان پاسخگو شما هستیم.
//           </span>
//         </div>
//         <div>اولویت تیکت را انتخاب کنید</div>
//         <div className="flex flex-row gap-10">
//           <div className="flex flex-row gap-1">
//             <input
//               type="radio"
//               name="priority"
//               value="medium"
//               onChange={(e) => setPriority(e.target.value)}
//               className="radio radio-[#4FD1C5]"
//             />
//             <span>متوسط</span>
//           </div>
//           <div className="flex flex-row gap-1">
//             <input
//               type="radio"
//               name="priority"
//               value="low"
//               onChange={(e) => setPriority(e.target.value)}
//               className="radio radio-[#4FD1C5]"
//             />
//             <span>کم</span>
//           </div>
//           <div className="flex flex-row gap-1">
//             <input
//               type="radio"
//               name="priority"
//               value="necessary"
//               onChange={(e) => setPriority(e.target.value)}
//               className="radio radio-[#4FD1C5]"
//             />
//             <span>ضروری</span>
//           </div>
//         </div>
//         <div className="relative">
//           <div>
//             <textarea
//               className="w-[900px] h-56 border-[#070707] border-2 rounded-md mt-4 bg-inherit py-10 px-5"
//               value={description}
//               onChange={(e) => setDescription(e.target.value)}
//             ></textarea>
//           </div>
//           <div className="absolute top-0 right-4 p-1 bg-[#F8F9FA]">
//             سوال خود را در این قسمت تایپ کنید
//           </div>
//           <div>
//             <button
//               onClick={handleSubmit}
//               className=" px-4 py-2 bg-[#4FD1C5] text-white absolute rounded-[6px] bottom-6 left-3"
//             >
//               ارسال
//             </button>
//           </div>
//           <div>
//             <Image className="absolute bottom-8 left-24" src={path} alt="" />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default SupportTicket;

import React, { useState, useRef } from "react";
import Image from "next/image";
import exper from "@/app/assent/Img/userPanel/Exclamation.svg";
import path from "@/app/assent/Img/userPanel/Path-75_3_.png";

function SupportTicket() {
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const fileInputRef = useRef(null); // Reference for file input

  const authToken =
    typeof window !== "undefined" ? localStorage.getItem("authToken") : null;

  const handleImageUpload = (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setSelectedImage(file); // Store selected image
    }
  };

  const handleSubmit = async () => {
    if (!authToken) {
      alert("توکن احراز هویت یافت نشد.");
      return;
    }

    if (!description || !priority) {
      alert("لطفاً تمامی فیلدها را پر کنید.");
      return;
    }

    const data = {
      description: description,
      priority: priority,
      message: null,
    };

    try {
      const response = await fetch(
        "https://fundcharitynet.com/api/messages/create",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${authToken}`,
          },
          body: JSON.stringify(data),
        }
      );

      const result = await response.json();

      if (response.ok) {
        alert("پیام با موفقیت ارسال شد.");
        console.log(result);
      } else {
        alert("خطایی رخ داد.");
        console.error(result);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      <div className="flex justify-between items-center mb-2 mt-12">
        <div className="mr-16">
          <p className="font-bold text-lg">پشتیبانی</p>
        </div>
      </div>

      <div className="flex flex-col gap-10 px-16 mt-10">
        <div>نیاز به پشتیبانی دارید ؟</div>
        <div className="flex flex-row gap-1">
          <Image src={exper} alt="Exclamation" />
          <span className="mt-1">
            لطفا پیام یا سوال خود را در قالب تیکت پشتیبانی ارسال کنید.
            درسریع‌ترین زمان پاسخگو شما هستیم.
          </span>
        </div>
        <div>اولویت تیکت را انتخاب کنید</div>
        <div className="flex flex-row gap-10">
          <div className="flex flex-row gap-1">
            <input
              type="radio"
              name="priority"
              value="medium"
              onChange={(e) => setPriority(e.target.value)}
              className="radio radio-[#4FD1C5]"
            />
            <span>متوسط</span>
          </div>
          <div className="flex flex-row gap-1">
            <input
              type="radio"
              name="priority"
              value="low"
              onChange={(e) => setPriority(e.target.value)}
              className="radio radio-[#4FD1C5]"
            />
            <span>کم</span>
          </div>
          <div className="flex flex-row gap-1">
            <input
              type="radio"
              name="priority"
              value="necessary"
              onChange={(e) => setPriority(e.target.value)}
              className="radio radio-[#4FD1C5]"
            />
            <span>ضروری</span>
          </div>
        </div>
        <div className="relative">
          <div>
            <textarea
              className="w-[900px] h-56 border-[#070707] border-2 rounded-md mt-4 bg-inherit py-10 px-5"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>
          <div className="absolute top-0 right-4 p-1 bg-[#F8F9FA]">
            سوال خود را در این قسمت تایپ کنید
          </div>
          <div>
            <button
              onClick={handleSubmit}
              className=" px-4 py-2 bg-[#4FD1C5] text-white absolute rounded-[6px] bottom-6 left-3"
            >
              ارسال
            </button>
          </div>
          <div>
            <label>
              <input
                type="file"
                ref={fileInputRef} // Reference input element
                style={{ display: "none" }}
                onChange={handleImageUpload}
              />
              <Image
                src={path}
                alt="Upload Image"
                className="cursor-pointer absolute bottom-8 left-24"
                onClick={() => fileInputRef.current.click()} // Trigger file input click
              />
              <div >
                {selectedImage && (
                  <p className="right-2 absolute top-10 bottom-3  text-gray-600">
                    تصویر انتخاب شده: {selectedImage.name}
                  </p>
                )}
              </div>
            </label>
          </div>
        </div>
      </div>
    </>
  );
}

export default SupportTicket;
