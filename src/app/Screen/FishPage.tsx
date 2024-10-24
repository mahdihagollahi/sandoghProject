
"use client";
import React from "react";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import axios from "axios";
import Image from "next/image";
import backImage from "@/app/assent/Img/adminPanel/back.svg";

const queryClient = new QueryClient();

function FishPage() {
  const { data, error, isLoading } = useQuery({
    queryKey: ["fetchImage"], 
    queryFn: async () => {
      const token = localStorage.getItem("authToken");

      if (!token) {
        throw new Error("No auth token found");
      }

      const response = await axios.post(
        "https://shabab.v1r.ir/api/media/show",
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      return response.data;
    },
  });

  if (isLoading)
    return (
      <div className="bg-[#F8F9FA] dark:bg-[#2C2C2C] mt-4">
        <div className="flex overflow-y-hidden justify-end mr-20">
          <a href="/depositreceipt" className="flex items-center">
            بازگشت
            <Image src={backImage} width={38} height={38} alt="arrow" />
          </a>
        </div>
        <div className="flex items-center justify-center">
        <span className="loading loading-dots text-[#4FD1C5] loading-lg"></span>
        </div>
      </div>
    );
  if (error)
    return (
      <div className="bg-[#F8F9FA] dark:bg-[#2C2C2C] mt-4">
        <div className="flex overflow-y-hidden justify-end mr-20">
          <a href="/depositreceipt" className="flex items-center">
            بازگشت
            <Image src={backImage} width={38} height={38} alt="arrow" />
          </a>
        </div>
        <div className="flex items-center justify-center">
          Error: {error.message}
        </div>
      </div>
    );

  return (
    <div className="bg-[#F8F9FA] dark:bg-[#283B4D] mt-4">
      <div className="flex overflow-y-hidden justify-end mr-20">
        <a href="/depositreceipt" className="flex items-center">
          بازگشت
          <Image src={backImage} width={38} height={38} alt="arrow" />
        </a>
      </div>
      <div className="flex items-center justify-center">
        {data && (
          <Image
            src={data.imageUrl} 
            width={500}
            height={900}
            alt="FishImage"
          />
        )}
      </div>
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <FishPage />
    </QueryClientProvider>
  );
}

export default App;
