"use client"
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";
import { useMediaQuery } from "react-responsive";
import { usePathname } from "next/navigation";
import Image from "next/image";
import dashboardUser from "@/app/assent/Img/userPanel/dashboardUser.svg";
import ImageDashboardHover from "@/app/assent/Img/userPanel/UserDashboardHover.svg";
import mangmentUser from "@/app/assent/Img/userPanel/mangmentUser.svg";
import mangmentUserHover from "@/app/assent/Img/userPanel/mangmentUserHover.svg";
import ShowInstallments from "@/app/assent/Img/userPanel/ShowInstallments.svg";
import ShowInstallmentsHover from "@/app/assent/Img/userPanel/ShowInstallmentsHover.svg";
import payInstallments from "@/app/assent/Img/userPanel/payInstallments.svg";
import payInstallmentsHover from "@/app/assent/Img/userPanel/payInstallmentsHover.svg";
import RequestInstallments from "@/app/assent/Img/userPanel/RequestInstallments.svg";
import RequestnstallmentsHover from "@/app/assent/Img/userPanel/RequestnstallmentsHover.svg";
import SupportUser from "@/app/assent/Img/userPanel/SupportUser.svg";
import SupportUserHover from "@/app/assent/Img/userPanel/SupportUserHover.svg";
import ImageRule from "@/app/assent/Img/userPanel/Rule.svg";
import ImageRuleHover from "@/app/assent/Img/userPanel/RuleHover.svg";
import ImageMessage from "@/app/assent/Img/userPanel/message.svg";
import ImageMessageHover from "@/app/assent/Img/userPanel/MessageHover.svg";
import ImageExport from "@/app/assent/Img/adminPanel/Exit.svg";

const Navbar = [
  {
    id: 1,
    src: dashboardUser,
    hoverSrc: ImageDashboardHover,
    link: "/dashboarduser",
  },
  {
    id: 2,
    src: mangmentUser,
    hoverSrc: mangmentUserHover,
    link: "/useraccount",
  },
  { id: 3, src: ShowInstallments, hoverSrc: ShowInstallmentsHover, link: "/showloans" },
  {
    id: 4,
    src: payInstallments,
    hoverSrc: payInstallmentsHover,
    link: "/loanpayment",
  },
  {
    id: 5,
    src: RequestInstallments,
    hoverSrc: RequestnstallmentsHover,
    link: "/requestloanaplication",
  },
  {
    id: 6,
    src: ImageMessage,
    hoverSrc: ImageMessageHover,
    link: "/sentedmassageuser",
  },
  {
    id: 7,
    src: SupportUser,
    hoverSrc: SupportUserHover,
    link: "/supportticket",
  },

  { id: 8, src: ImageRule, hoverSrc: ImageRuleHover, link: "/ruleuser" },
];

function UserPageNavbar() {
  const [hoverImage, setHoverImage] = useState<{ [key: number]: boolean }>({});
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [clickedImage, setClickedImage] = useState<number | null>(null);
  const isMobile = useMediaQuery({ maxWidth: 800 });

  const pathname = usePathname();

  const handleMouseEnter = (id: number) => {
    setHoverImage((prev) => ({ ...prev, [id]: true }));
  };

  const handleMouseLeave = (id: number) => {
    setHoverImage((prev) => ({ ...prev, [id]: false }));
  };

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const storedClickedImage = localStorage.getItem("clickedImage");
    if (storedClickedImage) {
      const imageId = parseInt(storedClickedImage, 10);
      setClickedImage(imageId);
      setHoverImage((prev) => ({ ...prev, [imageId]: true }));
    }
  }, []);

  const handleClick = (id: number) => {
    setClickedImage(id);
    setHoverImage((prev) => ({ ...prev, [id]: true }));
    localStorage.setItem("clickedImage", id.toString());
  };

  return (
    <div className="bg-[#F8F9FA]">
      {isMobile ? (
        <div className="flex justify-between items-center p-4 bg-gray-800 text-white">
          <span>Admin Panel</span>
          <button onClick={handleMenuToggle}>
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      ) : null}
      <div
        className={`flex w-80 flex-col mt-5 mr-10 gap-9 ${
          isMobile && !isMenuOpen ? "hidden" : ""
        }`}
      >
        {Navbar.map((image) => (
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
                className={`transition-opacity duration-300 cursor-pointer ease-in-out`}
                style={{ position: "relative" }}
              />
            </div>
          </Link>
        ))}
        <div className="mr-[1%] mt-[10%]">
          <Link href="/exituser">
            <Image
              src={ImageExport}
              width={60}
              alt="Exit"
              className="cursor-pointer"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default UserPageNavbar;
