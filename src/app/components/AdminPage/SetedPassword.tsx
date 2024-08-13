import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";

interface UserData {
  first_name: string | null;
  last_name: string | null;
}

export default function SetedPassword() {
  const [completions, setCompletions] = useState<{ name: string }[]>([]); 

  useEffect(() => {
    const fetchCompletions = async () => {
      const authToken = localStorage.getItem("authToken"); 
      console.log(authToken);

      if (!authToken) {
        console.error("توکن موجود نیست.");
        return;
      }

      try {
        const response: AxiosResponse<UserData> = await axios.put("https://shabab.v1r.ir/api/users/index", {}, {
          headers: {
            Authorization: `Bearer ${authToken}`
          },
        });

        const fullName = `${response.data.first_name || ""} ${response.data.last_name || ""}`.trim();
        setCompletions([{ name: fullName }]);

      } catch (error) {
        console.error("خطا در دریافت داده‌ها:", error);
      }
    };

    fetchCompletions(); 
  }, []);

  return (
    <div>
      <div className="">
        <div className="flex justify-center">
          <div className="bg-white shadow-lg mt-5 p-6 md:p-10 w-[97.5%] rounded-sm">
            {completions.length > 0 ? (
              completions.map((item, index) => (
                <div
                  key={index}
                  className="flex justify-between border-b last:border-b-0 py-9"
                >
                  <span className="font-bold">{item.name}</span>
                  <span>تکمیل شده</span>
                </div>
              ))
            ) : (
              <p>داده‌ای یافت نشد</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}





