import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import EyeImage from "@/src/app/assent/Img/adminPanel/eyeWhite.svg";

interface TableSumFishProps {
  userId: number;
}

const FishComponent: React.FC<TableSumFishProps> = ({ userId }) => {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchFishImage = async () => {
      try {
        const authToken = localStorage.getItem("authToken");
        if (!authToken) {
          throw new Error("Authentication token not found");
        }

        const response = await axios.get(`https://mohammadelia30.ir/shabab/api/installments/show/admin/${userId}`, {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        });

        if (response.status !== 200) {
          throw new Error("Error fetching image");
        }

        setImageUrl(response.data.imageUrl || null); 
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchFishImage();
  }, []);

  if (isLoading) return (
    <div>
    <div className="bg-white dark:bg-[#4F5D74] dark:text-white w-[100%] py-8 px-16 rounded-md shadow-md mr-4">
      <div className="flex justify-center">
      <span className="loading loading-dots text-accent loading-lg"></span>
      </div>
      <div className="flex justify-center mt-10">
        <Link href="/fish">
          <button className="bg-[#4FD1C5] border border-[#4FD1C5] rounded-md px-20 py-2 flex gap-2 items-center">
            <Image src={EyeImage} width={20} height={20} alt="eye" />
            <span className="text-[#FFFFFF] font-normal">بزرگنمایی</span>
          </button>
        </Link>
      </div>
    </div>
  </div>
  );
  if (error) return (
    <div>
    <div className="bg-white dark:bg-[#4F5D74] dark:text-white w-[100%] py-8 px-16 rounded-md shadow-md mr-4">
      <div className="flex justify-center">
      Error loading image: {error}
      </div>
      <div className="flex justify-center mt-10">
        <Link href="/fish">
          <button className="bg-[#4FD1C5] border border-[#4FD1C5] rounded-md px-20 py-2 flex gap-2 items-center">
            <Image src={EyeImage} width={20} height={20} alt="eye" />
            <span className="text-[#FFFFFF] font-normal">بزرگنمایی</span>
          </button>
        </Link>
      </div>
    </div>
  </div>
  );

  return (
    <div>
      <div className="bg-white dark:bg-[#4F5D74] dark:text-white w-[100%] py-8 px-16 rounded-md shadow-md mr-4">
        <div className="flex justify-center">
          {imageUrl ? (
            <Image src={imageUrl} width={198} height={299} alt="fish" />
          ) : (
            <div>عکسی موجود نیست</div> 
          )}
        </div>
        <div className="flex justify-center mt-10">
          <Link href="/fish">
            <button className="bg-[#4FD1C5] border border-[#4FD1C5] rounded-md px-20 py-2 flex gap-2 items-center">
              <Image src={EyeImage} width={20} height={20} alt="eye" />
              <span className="text-[#FFFFFF] font-normal">بزرگنمایی</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FishComponent;
