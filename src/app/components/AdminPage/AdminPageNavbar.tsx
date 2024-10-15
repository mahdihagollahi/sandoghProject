"use client"
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import NavbarData from "./NavbarData";
import ImageExport from "@/app/assent/Img/adminPanel/Exit.svg";

const Data = NavbarData().Navbar;

function AdminPageNavbar() {
  const [hoverImage, setHoverImage] = useState<{ [key: number]: boolean }>({});
  const [clickedImage, setClickedImage] = useState<number | null>(null);

  const pathname = usePathname();

  const handleMouseEnter = (id: number) => {
    setHoverImage((prev) => ({ ...prev, [id]: true }));
  };

  const handleMouseLeave = (id: number) => {
    setHoverImage((prev) => ({ ...prev, [id]: false }));
  };

  const handleClick = (id: number) => {
    setClickedImage(id);
    setHoverImage((prev) => ({ ...prev, [id]: true }));
    localStorage.setItem("clickedImage", id.toString());
  };

  return (
    <div className="bg-[#F8F9FA] dark:bg-[#283B4D]">
      <div className="flex w-80 flex-col mt-5 mr-10 bg-[#F8F9FA] dark:bg-[#283B4D] gap-9">
        {Data.map((image) => (
          <Link key={image.id} href={image.link} passHref>
            <div
              className="relative -mt-2"
              onMouseEnter={() => handleMouseEnter(image.id)}
              onMouseLeave={() => handleMouseLeave(image.id)}
              onClick={() => handleClick(image.id)}
            >
              <Image
                src={
                  pathname === image.link
                    ? image.hoverSrc
                    : hoverImage[image.id] || clickedImage === image.id
                    ? image.hoverSrc
                    : image.src
                }
                alt={`Image ${image.id}`}
                width={200}
                height={200}
                className="transition-opacity duration-300 cursor-pointer ease-in-out"
                style={{ position: "relative" }}
              />
            </div>
          </Link>
        ))}
        <Link href="/exitadmin">
          <button className="mr-[1%] mt-[2%] ">
            <Image
              src={ImageExport}
              width={60}
              alt="Exit"
              className="cursor-pointer"
            />
          </button>
        </Link>
      </div>
    </div>
  );
}

export default AdminPageNavbar;
