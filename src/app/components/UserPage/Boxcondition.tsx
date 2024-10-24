import React ,{useEffect , useState} from "react";
import Image from "next/image";
import jaryan from "@/app/assent/Img/userPanel/jaryan.svg";
import radshodeh from "@/app/assent/Img/userPanel/radshode.svg";
import taied from "@/app/assent/Img/userPanel/taied.svg";
import ImageCrossActive from'@/app/assent/Img/adminPanel/crossActive.svg'
import TikImage from '@/app/assent/Img/adminPanel/AcceptTik.svg'
import Link from "next/link";

function BoxCondition() {
  const [selectedTab, setSelectedTab] = useState('');

  useEffect(() => {
    const storedTab = localStorage.getItem('selectedTab');
    if (storedTab) {
      setSelectedTab(storedTab);
    }
  }, []);

  const handleTabClick = (tab:any) => {
    setSelectedTab(tab);
    localStorage.setItem('selectedTab', tab);
  };
  return (
    <>
      <div className="flex flex-row w-[1026px] h-[85px] bg-white justify-around shadow-md rounded-md items-center ">
        <div className={`w-[200px] h-[80px] hover:border-b-2 hover:border-[#4FD1C5] ${selectedTab === 'currentloanaplication' ? 'border-b-2 border-[#4FD1C5]' : ''}`}>
        <Link href='/currentloanaplication' onClick={() => handleTabClick('currentloanaplication')}>
          <button className="flex flex-row items-center gap-3 mt-[25px] ">
           
            <Image className="w-[24px] h-[24px] mr-[60px]" 
            src={jaryan}
             alt="" />
            <span>جریان</span>
          
          </button>
          </Link>
        </div>
        <div className={`w-[200px] h-[80px] hover:border-b-2 hover:border-[#4FD1C5] ${selectedTab === 'requestrejectionloan' ? 'border-b-2 border-[#4FD1C5]' : ''}`}>

        <Link href='/requestrejectionloan' onClick={() => handleTabClick('requestrejectionloan')}>
          <button className="flex flex-row gap-3 mt-[25px]">
            <Image className="w-[24px] h-[24px] mr-[60px]" 
                 src={selectedTab === 'requestrejectionloan' ? ImageCrossActive : radshodeh}
                 alt="" />
            <span>رد شده</span>
          </button>
          </Link>

        </div>
        {/* <div className="w-[200px] h-[80px] hover:border-b-2 hover:border-[#4FD1C5]  "> */}
        <div className={`w-[200px] h-[80px] hover:border-b-2 hover:border-[#4FD1C5] ${selectedTab === 'acceptrequest' ? 'border-b-2 border-[#4FD1C5]' : ''}`}>

        <Link href='/acceptrequest' onClick={() => handleTabClick('acceptrequest')}>
          <button className="flex flex-row gap-3 mt-[25px]">
            <Image className="w-[24px] h-[24px] mr-[60px]" 
                 src={selectedTab === 'acceptrequest' ? TikImage :taied }
                 alt="" />
            <span>تایید شده</span>
          </button>
          </Link>

        </div>
      </div>
    </>
  );
}

export default BoxCondition;
