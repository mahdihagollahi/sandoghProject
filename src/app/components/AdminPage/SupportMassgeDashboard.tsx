import React from "react";
import Image from "next/image";
import IconImage from "@/src/app/assent/Img/adminPanel/defultUser.png";
import Link from "next/link";
import axios from "axios";
import { useQuery, QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

const fetchMessages = async () => {
  const token = localStorage.getItem("authToken");
  if (!token) {
    throw new Error("No token found");
  }

  const { data } = await axios.get(
    "https://mohammadelia30.ir/shabab/api/messages/index",
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return data.ticket;
};

function SupportMassgeDashboard() {
  const { data, error, isLoading } = useQuery("messages", fetchMessages);

  if (isLoading) {
    return (
      <div className="flex justify-center mt-4 items-center md:justify-center xl:justify-end xl:mt-6">
        <div className="w-[388px] h-[457px] max-w-md bg-white dark:bg-[#4F5D74] xl:py-[0.67%] shadow-md rounded-md px-2">
          <div className="py-3">
            <p className="font-bold text-sm dark:text-white px-7 text-[#2D3748]">
              پیام های پشتیبانی
            </p>
          </div>
          <div>
            <div className="flex justify-center items-center mt-40">
              <span className="loading loading-dots text-accent  loading-lg"></span>
            </div>
            <div className="flex justify-center py-8">
              <Link href="/support" passHref>
                <button className="bg-[#4FD1C5] text-white py-2 px-24  mt-[120px] rounded-lg">
                  دیدن همه
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center mt-4 items-center md:justify-center xl:justify-end xl:mt-6">
        <div className="w-[388px] h-[457px] max-w-md bg-white dark:bg-[#4F5D74] xl:py-[0.67%] shadow-md rounded-md px-2">
          <div className="py-3">
            <p className="font-bold text-sm dark:text-white px-7 text-[#2D3748]">
              پیام های پشتیبانی
            </p>
          </div>
          <div>
            <div className="flex text-white justify-center items-center mt-40">
              <p>Error loading messages</p>
            </div>
            <div className="flex justify-center py-8">
              <Link href="/support" passHref>
                <button className="bg-[#4FD1C5] text-white py-2 px-24  mt-32 rounded-lg">
                  دیدن همه
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!data || data.total === 0) {
    return (
      <div className="flex justify-center mt-4 items-center md:justify-center xl:justify-end xl:mt-6">
        <div className="w-[388px] h-[457px] max-w-md bg-white dark:bg-[#4F5D74] xl:py-[0.67%] shadow-md rounded-md px-2">
          <div className="py-3">
            <p className="font-bold text-sm dark:text-white px-7 mt-2 text-[#2D3748]">
              پیام های پشتیبانی
            </p>
          </div>
          <div>
            <div className="flex  text-white justify-center items-center mt-40">
              <p>پیامی وجود ندارد</p>
            </div>
            <div className="flex justify-center py-8">
              <Link href="/support" passHref>
                <button className="bg-[#4FD1C5] text-white py-2 px-24 mt-32 rounded-lg">
                  دیدن همه
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex justify-center mt-4 items-center md:justify-center xl:justify-end xl:mt-6">
      <div className="w-[388px] h-[457px] bg-white dark:bg-[#4F5D74] xl:py-[0.67%] shadow-md rounded-md px-2">
        <div className="py-3">
          <p className="font-bold text-sm dark:text-white px-7 text-[#2D3748]">
            پیام های پشتیبانی
          </p>
        </div>
        <div>
          <div className="px-4">
            {data.data.map((items:any) => (
              <div
                key={items.id}
                className="flex items-center py-4 gap-3 overflow-y-scroll"
              >
                <div className="flex-shrink-0">
                  <Image
                    src={
                      items.media.length > 0 ? items.media[0].url : IconImage
                    }
                    width={40}
                    height={40}
                    alt=""
                    className="rounded-full"
                  />
                </div>

                <div className="ml-4 flex-grow">
                  <p className="font-medium text-sm leading-6 dark:text-white text-[#2D3748]">
                    {items.first_name && items.last_name
                      ? `${items.first_name} ${items.last_name}`
                      : items.phone_number}
                  </p>
                  {items.messages[0] && (
                    <p className="font-normal text-xs dark:text-white text-[#A0AEC0]">
                      {items.messages[0].description}
                    </p>
                  )}
                </div>

                <div className="text-xs dark:text-white text-[#A0AEC0]">
                  {new Date(items.created_at).toLocaleTimeString()}
                </div>
              </div>
            ))}
          </div>

          <div className="flex  justify-center mt-60 py-8">
            <Link href="/support" passHref>
              <button className="bg-[#4FD1C5] text-white py-2 px-24 rounded-lg">
                دیدن همه
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <SupportMassgeDashboard />
    </QueryClientProvider>
  );
}

export default App;
