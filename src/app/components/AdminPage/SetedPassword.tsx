import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { FC } from 'react';

interface UserData {
  first_name: string | null;
  last_name: string | null;
}

const fetchUserData = async () => {
  const authToken = localStorage.getItem("authToken");
  if (!authToken) {
    throw new Error("توکن موجود نیست.");
  }

  const response = await axios.put<UserData>("https://mohammadelia30.ir/shabab/api/users/index", {}, {
    headers: {
      Authorization: `Bearer ${authToken}`
    },
  });

  return response.data;
};

const SetedPassword: FC = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ['userData'], 
    queryFn: fetchUserData, 
  });

  const completions = data ? [
    {
      name: `${data.first_name || ""} ${data.last_name || ""}`.trim()
    }
  ] : [];

  if (isLoading) {
    return (
      <div>
         <div className="">
        <div className="flex justify-center">
        <div className="bg-white dark:bg-[#4F5D74] shadow-md mt-5 p-6  md:p-10  w-[97%] rounded-md">
        <div className='flex justify-center items-center'>
           <span className="loading loading-dots text-[#4FD1C5] loading-lg"></span>
           </div>
          </div>
        </div>
      </div>
      </div>
    );
  }

  if (error) {
    return (
      <div>
         <div className="">
        <div className="flex justify-center">
        <div className="bg-white dark:bg-[#4F5D74] shadow-md mt-5 p-6  md:p-10  w-[97%] rounded-md">
        <div>
           <p className="dark:text-white">خطا در دریافت داده‌ها: {(error as Error).message}</p>           </div>
          </div>
        </div>
      </div>
      </div>
    );
  }

  if (!data || completions[0].name === "") {
    return(
      <div>
      <div className="">
     <div className="flex justify-center">
       <div className="bg-white dark:bg-[#4F5D74] shadow-md mt-5 p-6  md:p-10  w-[97%] rounded-md">
        <div className='flex justify-center items-center'>
        <p className="dark:text-white">کاربری یافت نشد</p>
        </div>
       </div>
     </div>
   </div>
   </div>
    )
  }

  return (
    <div>
      <div className="">
        <div className="flex justify-center">
        <div className="bg-white dark:bg-[#4F5D74] shadow-md mt-5 p-6  md:p-10  w-[97%] rounded-md">
        {completions.map((item, index) => (
                <div
                  key={index}
                  className="flex justify-between border-b last:border-b-0 py-9"
                >
                  <span className="font-bold dark:text-white">{item.name}</span>
                  <span className="dark:text-white">تکمیل شده</span>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default SetedPassword;




