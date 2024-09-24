import React, { useEffect , useState } from "react";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import axios from "axios";
import UserDeleteTable from "@/src/app/components/AdminPage/UserDeleteTable";
import RoutTableUser from "./RoutTableUser";
import InputSearchUser from "./InputSearchUser";

interface User {
  id: number;
  first_name: string;
  last_name: string;
  src: string;
  phone_number: string;
  emergency_number: string;
  home_number: string;
  national_code: string;
  card_number: string;
  sheba_number: string;
  address: string;
  debt: number;
  created_at: string;
  updated_at: string;
}

interface UserResponse {
  user: {
    current_page: number;
    data: User[];
    first_page_url: string;
    last_page: number;
    last_page_url: string;
    next_page_url: string | null;
    path: string;
    per_page: number;
    prev_page_url: string | null;
    total: number;
  };
}

const fetchUsers = async (): Promise<User[]> => {
  const token = localStorage.getItem("authToken");

  if (!token) {
    throw new Error("No auth token found");
  }

  try {
    const { data } = await axios.put<UserResponse>(
      "https://mohammadelia30.ir/shabab/api/users/index",
      { permission: "deleted" },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return data.user.data;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
};

const DeleteUser: React.FC = () => {
 
  const queryClient = new QueryClient();

  useEffect(() => {
    const authToken = localStorage.getItem("authToken");
    if (!authToken) {
      console.log('لطفا دوباره لاگین کنید');
    }
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <UserList />
    </QueryClientProvider>
  );
};


const UserList: React.FC = () => {
  const [selectedUserId, setSelectedUserId] = useState<number | null>(null);
  const { data: users = [], isLoading, error } = useQuery("users", fetchUsers);

  if (isLoading) {
    return (
      <div>
        <div className="mr-[1%] absolute dark:text-white  z-10 mt-2">
          <p className="font-bold text-lg ">مشاهده کاربران</p>
        </div>
        <div className="flex gap-24 items-center mb-2 mt-10 mr-3">
        
          <InputSearchUser />
        </div>
        <div>
          <RoutTableUser />
          <div>
            <UserDeleteTable users={users} onUserSelect={setSelectedUserId}/>
            <div className="flex justify-center items-center -mt-5">
              <span className="loading loading-dots text-accent loading-lg"></span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <div className="mr-[1%] absolute dark:text-white  z-10 mt-2">
          <p className="font-bold text-lg ">مشاهده کاربران</p>
        </div>
        <div className="flex gap-24 items-center mb-2 mt-10 mr-3">
       
          <InputSearchUser />
        </div>
        <div>
          <RoutTableUser />

          <div>
            <UserDeleteTable users={users}  onUserSelect={setSelectedUserId}/>
            <div className="flex justify-center dark:text-white items-center -mt-5">
              خطا در بارگزاری داده
            </div>
          </div>
        </div>
      </div>
    );
  }

  if(users.length === 0){
    return(
      <div>
          <div className="mr-[1%] absolute dark:text-white  z-10 mt-2">
            <p className="font-bold text-lg ">مشاهده کاربران</p>
          </div>
      <div className="flex gap-24 items-center mb-2 mt-10 mr-3">
    

        <InputSearchUser />
      </div>
      <div>
        <RoutTableUser />
        <div>
          <UserDeleteTable users={users}  onUserSelect={setSelectedUserId}/>
          <div className="flex justify-center dark:text-white items-center -mt-5">
            کاربری یافت نشد
          </div>
        </div>
      </div>
    </div>
    )
  }

  return (
    <div>
      <div className="mr-[1%] absolute dark:text-white  z-10 mt-2">
          <p className="font-bold text-lg ">مشاهده کاربران</p>
        </div>
      <div className="flex gap-24 items-center mb-2 mt-10 mr-3">
      
        <InputSearchUser />
      </div>
      <div>
        <RoutTableUser />
      </div>
      <UserDeleteTable users={users}  onUserSelect={setSelectedUserId}/>
    </div>
  );
};

export default DeleteUser;
