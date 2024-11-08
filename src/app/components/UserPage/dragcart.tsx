// import React,{useState} from "react";
// import Image from "next/image";
// import icon from "@/src/app/assent/Img/userPanel/Iconly (1).svg";
// import dragcard from "@/src/app/assent/Img/userPanel/drapcart.svg"

// export default function DragCart() {
//   const [uploadedImage , setUplodedImage]=useState(null)
//   const [dragOver , setDragOver]=useState<boolean>(false)

//   const handelFileUploaded = (event:any) => {
//     const file = event.target.files[0];
//     if (file && file.size <= 2 * 1024 * 1024) { 
//       const reader = new FileReader();
//       reader.onload = () => {
//         setUplodedImage(reader.result);
//       };
//       reader.readAsDataURL(file);
//     } else {
//       alert("حجم عکس ها باید کمتر از 2 مگابایت باشد");
//     }
//   };

//   const handelDrop = (event:any) =>{
//     event.preventDefult();
//     setDragOver(false);
//     const file = event.target.files[0];
//     if (file && file.size <= 2 * 1024 * 1024) { 
//       const reader = new FileReader();
//       reader.onload = () => {
//         setUplodedImage(reader.result);
//       };
//       reader.readAsDataURL(file);
//     } else {
//       alert("حجم عکس ها باید کمتر از 2 مگابایت باشد");
//     }

//   };

//   const handelDragOver = (event:any) =>{
//     event.preventDefult();
//     setDragOver(true)
//   };

//   const handelDragLeave = () =>{
//     setDragOver(false)
    
//   }


//   const handleRemoveImage = () => {
//     setUplodedImage(null);
//   };
//   return (
//     <>
//     <div className="flex flex-col gap-[28px]">
//         <div className={`border-dashed w-[345px]  p-[10px] h-[200px] rounded-md border-2  border-[#4FD1C5] ${dragOver? 'border-[#38B2AC]' : 'border-[#4FD1C5]'}`}
//         onDragOver={handelDragOver}
//         onDragLeave={handelDragLeave}
//         onDrop={handelDrop}
//         >
//           <Image
//             className="mr-[300px] mb-[8px] "
//             style={{ width: "18px", height: "18px" }}
//             src={icon}
//             onClick={handleRemoveImage}
//             alt=""
//           />
//           <div className="flex flex-col gap-[20px] justify-center items-center">
//             {uploadedImage ? (
//             <Image src={uploadedImage} width={384} height={160} alt="Uploaded" className=" p-2 rounded-md" />
//             ) : (
//               <label className="relative cursor-pointer flex flex-col gap-4 items-center justify-center h-full">
//               <input type="file"  className="absolute inset-0 opacity-0 cursor-pointer" onChange={handelFileUploaded} />
//               <Image className="w-5 h-4 mt-2 cursor-pointer" src={dragcard} alt="drag and drop"  />
           
//             <p className="text-[#2D3748] text-sm">آپلود عکس کارت ملی از فایل ها</p>
//             <p className="text-[#809FB8] text-sm">اینجا بکشید و رها کنید</p>
//             </label>
//             )}
           
//           </div>
         
//         </div>
//         <div>
//           <ul className="list-disc list-inside flex flex-col gap-[10px] text-[#2D3748]">
//             <li>لطفا عکس کارت ملی خود را در کادر قراره داده شده باگذاری کنید </li>
//             <li>حجم عکس ها بیشتر از 2 مگابایت نباشند</li>
//             <li>عکس کاملا واضح باشد</li>
//           </ul>
//         </div>
//       </div>
   
//     </>
//   );
// }

import React, { useState } from "react";
import Image from "next/image";
import icon from "@/app/assent/Img/userPanel/Iconly (1).svg";
import dragcard from "@/app/assent/Img/userPanel/drapcart.svg";

export default function DragCart({formData, handleChange}) {
  // const [uploadedImage, setUplodedImage] = useState<string | null>(null); 
  // const [dragOver, setDragOver] = useState<boolean>(false);

  // const handelFileUploaded = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   const file = event.target.files?.[0]; 
  //   if (file && file.size <= 2 * 1024 * 1024) { 
  //     const reader = new FileReader();
  //     reader.onload = () => {
  //       if (typeof reader.result === 'string') {
  //         setUplodedImage(reader.result);
  //       }
  //     };
  //     reader.readAsDataURL(file);
  //   } else {
  //     alert("حجم عکس ها باید کمتر از 2 مگابایت باشد");
  //   }
  // };

  // const handelDrop = (event: React.DragEvent<HTMLDivElement>) => {
  //   event.preventDefault();
  //   setDragOver(false);
  //   const file = event.dataTransfer.files?.[0]; 
  //   if (file && file.size <= 2 * 1024 * 1024) { 
  //     const reader = new FileReader();
  //     reader.onload = () => {
  //       if (typeof reader.result === 'string') { 
  //         setUplodedImage(reader.result);
  //       }
  //     };
  //     reader.readAsDataURL(file);
  //   } else {
  //     alert("حجم عکس ها باید کمتر از 2 مگابایت باشد");
  //   }
  // };



  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [dragOver, setDragOver] = useState<boolean>(false);

  const handelFileUploaded = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && file.size <= 2 * 1024 * 1024) {
      const reader = new FileReader();
      reader.onload = () => {
        if (typeof reader.result === "string") {
          setUploadedImage(reader.result);
          handleChange("cart", file); // ارسال فایل با نام "profile"
        }
      };
      reader.readAsDataURL(file);
    } else {
      alert("حجم عکس ها باید کمتر از 2 مگابایت باشد");
    }
  };

  const handelDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setDragOver(false);
    const file = event.dataTransfer.files?.[0];
    if (file && file.size <= 2 * 1024 * 1024) {
      const reader = new FileReader();
      reader.onload = () => {
        if (typeof reader.result === "string") {
          setUploadedImage(reader.result);
          handleChange("cart", file); // ارسال فایل با نام "profile"
        }
      };
      reader.readAsDataURL(file);
    } else {
      alert("حجم عکس ها باید کمتر از 2 مگابایت باشد");
    }
  };

  const handelDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setDragOver(true);
  };

  const handelDragLeave = () => {
    setDragOver(false);
  };

  const handleRemoveImage = () => {
    setUplodedImage(null);
  };

  return (
    <>
      <div className="flex flex-col gap-[28px]">
        <div className={`border-dashed w-[345px] p-[10px] h-[200px] rounded-md border-2 border-[#4FD1C5] ${dragOver ? 'border-[#38B2AC]' : 'border-[#4FD1C5]'}`}
          onDragOver={handelDragOver}
          onDragLeave={handelDragLeave}
          onDrop={handelDrop}
        >
          <Image
            className="mr-[300px] mb-[8px]"
            style={{ width: "18px", height: "18px" }}
            src={icon}
            onClick={handleRemoveImage}
            alt=""
          />
          <div className="flex flex-col gap-[20px] justify-center items-center">
            {uploadedImage ? (
              <Image src={uploadedImage} width={384} height={160} alt="Uploaded" className="p-2 rounded-md" />
            ) : (
              <label className="relative cursor-pointer flex flex-col gap-4 items-center justify-center h-full">
                <input type="file" className="absolute inset-0 opacity-0 cursor-pointer" onChange={handelFileUploaded} />
                <Image className="w-5 h-4 mt-2 cursor-pointer" src={dragcard} alt="drag and drop" />
                <p className="text-[#2D3748] text-sm">آپلود عکس کارت ملی از فایل ها</p>
                <p className="text-[#809FB8] text-sm">اینجا بکشید و رها کنید</p>
              </label>
            )}
          </div>
        </div>
        <div>
          <ul className="list-disc list-inside flex flex-col gap-[10px] text-[#2D3748]">
            <li>لطفا عکس کارت ملی خود را در کادر قراره داده شده باگذاری کنید</li>
            <li>حجم عکس ها بیشتر از 2 مگابایت نباشند</li>
            <li>عکس کاملا واضح باشد</li>
          </ul>
        </div>
      </div>
    </>
  );
}
