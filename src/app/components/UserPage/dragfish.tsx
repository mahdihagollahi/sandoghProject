// "use client";
// import React, { useCallback, useState } from "react";
// import Image from "next/image";
// import cardfish from "@/src/app/assent/Img/userPanel/Fill 425.svg";
// import trash from "@/src/app/assent/Img/userPanel/trash.svg";
// import { useDropzone } from "react-dropzone";

// const Dragfish: React.FC = () => {
//   const [imageSrc, setImageSrc] = useState<string | null>(null);

//   const onDrop = useCallback((acceptedFiles: File[]) => {
//     if (acceptedFiles && acceptedFiles.length > 0) {
//       const file = acceptedFiles[0];
//       const reader = new FileReader();
//       reader.onload = (event) => {
//         setImageSrc(event.target?.result as string);
//       };
//       reader.readAsDataURL(file);
//     }
//   }, []);

//   const { getRootProps, getInputProps } = useDropzone({ onDrop });

//   return (
//     <>
//       <div className="flex flex-col pr-16 shadow-md bg-white p-8">
//         <div className="mb-5 ">
//           <p className="font-medium ">
//           آپلود فیش واریزی
//           </p>
//         </div>
//         <div className="border-dashed w-[400px] p-4  h-[250px]  rounded-md border-2 flex flex-col items-center justify-center border-[#4FD1C5]">
//           <div
//             {...getRootProps()}
//             className="flex flex-col gap-5 justify-center items-center"
//           >
//             <input {...getInputProps()} />
//             {imageSrc ? (
//               <img
//                 className="w-[400px] h-[210px] mt-2 p-2"
//                 src={imageSrc}
//                 alt="Uploaded"
//               />
//             ) : (
//               <div  className="flex flex-col gap-[20px] justify-center items-center">
//                 <Image
//                   className="w-[35px] h-[35px] mt-2"
//                   src={cardfish}
//                   alt=""
//                 />
//                 <p className="text-[#2D3748] text-base font-bold">
//                   آپلود عکس از فایل ها
//                 </p>
//                 <p className="text-[#809FB8] text-xs">اینجا بکشید و رها کنید</p>
//               </div>
//             )}
//           </div>
//         </div>
//         <div className="flex flex-row gap-3 mt-8">
//           <div className="relative">
//             <input className="border-[#4FD1C5] rounded-md border-[1px] w-[110px] h-[42px]" />
//             <span className="absolute -top-[8px] right-2 text-xs bg-white">
//               <span className="text-[red]">*</span>مبلغ پرداخت
//             </span>
//           </div>
//           <button className="bg-[#4FD1C5] text-[#ffff] w-[282px] h-[42px] rounded-md">
//             <div className="flex flex-row justify-center gap-1">
//               <div>
//                 <Image className="w-[24px] h-[24px]" src={trash} alt="" />
//               </div>
//               <div className="text-sm">حذف یا بارگذاری مجدد</div>
//             </div>
//           </button>
//         </div>
//         <div className="relative mt-10">
//           <input className="border-[#4FD1C5] rounded-md border w-[400px] h-[100px] overflow-scroll " type="text" />
//           <span className="absolute -top-[8px] right-3 text-xs bg-white">
//             توضیحات
//           </span>
//         </div>
//         <ul className="text-[#2D374880] opacity-[80%] list-disc list-inside text-sm mt-10">
//           <li>لطفا بیش از 100 کاراکتر توضیحات ننویسید !</li>
//           <li>
       
// حجم عکس ها بیشتر از 2 مگابایت نباشن
//           </li>
//           <li>
// عکس کاملا واضح و  باشد و مبلغ قابل خواندن باشد
//           </li>
//           <li>
// بعد از بارگذاری ، فیش توسط مدیر تایید یا رد میشود و در بخش نمایش اقساط شما نشان داده میشود
//           </li>
//         </ul>
//       </div>
//     </>
//   );
// };

// export default Dragfish;
"use client";
import React, { useCallback, useState } from "react";
import Image from "next/image";
import cardfish from "@/src/app/assent/Img/userPanel/Fill 425.svg";
import trash from "@/src/app/assent/Img/userPanel/trash.svg";
import { useDropzone } from "react-dropzone";

const Dragfish: React.FC = () => {
  const [imageSrc, setImageSrc] = useState<string | null>(null);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles && acceptedFiles.length > 0) {
      const file = acceptedFiles[0];
      const reader = new FileReader();
      reader.onload = (event) => {
        setImageSrc(event.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  }, []);

  const handleRemoveImage = () => {
    setImageSrc(null);
  };

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <div className="flex flex-col pr-16 shadow-md bg-white p-8 rounded-md">
      <div className="mb-5">
        <p className="font-medium">آپلود فیش واریزی</p>
      </div>
      <div className="border-dashed w-[400px] p-4 h-[250px] rounded-md border-2 flex flex-col items-center justify-center border-[#4FD1C5]">
        <div
          {...getRootProps()}
          className="flex flex-col gap-5 justify-center items-center cursor-pointer"
        >
          <input {...getInputProps()} />
          {imageSrc ? (
            <img
              className="w-[400px] h-[210px] mt-2 p-2 rounded-md object-cover"
              src={imageSrc}
              alt="Uploaded"
            />
          ) : (
            <div className="flex flex-col gap-[20px] justify-center items-center">
              <Image className="w-[35px] h-[35px] mt-2" src={cardfish} alt="" />
              <p className="text-[#2D3748] text-base font-bold">آپلود عکس از فایل ها</p>
              <p className="text-[#809FB8] text-xs">اینجا بکشید و رها کنید</p>
            </div>
          )}
        </div>
      </div>
      <div className="flex flex-row gap-3 mt-8">
        <div className="relative">
          <input className="border-[#4FD1C5] rounded-md border-[1px] w-[110px] h-[42px] px-2" />
          <span className="absolute -top-[8px] right-2 text-xs bg-white px-1">
            <span className="text-[red]">*</span>مبلغ پرداخت
          </span>
        </div>
        <button
          onClick={handleRemoveImage}
          className="bg-[#4FD1C5] text-white w-[282px] h-[42px] rounded-md flex flex-row justify-center gap-1 items-center"
        >
          <Image className="w-[24px] h-[24px]" src={trash} alt="Trash Icon" />
          <span className="text-sm">حذف یا بارگذاری مجدد</span>
        </button>
      </div>
      <div className="relative mt-10">
        <input className="border-[#4FD1C5] rounded-md border w-[400px] h-[100px] overflow-scroll px-2" type="text" />
        <span className="absolute -top-[8px] right-3 text-xs bg-white px-1">توضیحات</span>
      </div>
      <ul className="text-[#2D3748] opacity-[80%] list-disc list-inside text-sm mt-10">
        <li>لطفا بیش از 100 کاراکتر توضیحات ننویسید !</li>
        <li>حجم عکس ها بیشتر از 2 مگابایت نباشن</li>
        <li>عکس کاملا واضح باشد و مبلغ قابل خواندن باشد</li>
        <li>بعد از بارگذاری، فیش توسط مدیر تایید یا رد میشود و در بخش نمایش اقساط شما نشان داده میشود</li>
      </ul>
    </div>
  );
};

export default Dragfish;