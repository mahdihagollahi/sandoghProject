// import React, { useState, useEffect } from "react";
// import UserTableNotDespositors from "@/src/app/components/AdminPage/UserTableNotDespositors";
// import Image from "next/image";
// import backImage from "@/src/app/assent/Img/adminPanel/back.svg";
// import RoutTableFiancial from "./RoutTableFinancial";
// import Link from "next/link";
// import axios from "axios";
// import { useMutation, useQueryClient } from "@tanstack/react-query";

// interface User {
//   id: number;
//   name: string;
//   joinDate: string;
//   loans: string;
//   depositAmount: string;
// }

// const NotDepositorsUserFinancial: React.FC = () => {
//   const [users, setUsers] = useState<User[]>([]);
//   const queryClient = useQueryClient();

//   const axiosInstance = axios.create({
//     baseURL: "https://shabab.v1r.ir/api",
//   });

//   axiosInstance.interceptors.request.use(
//     (config) => {
//       const authToken = localStorage.getItem("authToken");
//       if (authToken) {
//         config.headers.Authorization = `Bearer ${authToken}`;
//       }
//       return config;
//     },
//     (error) => Promise.reject(error)
//   );

//   const fetchUsers = async () => {
//     try {
//       const response = await axiosInstance.get(
//         "http://hosseinshabab.iapp.ir/api/installments/show/admin"
//       );
//       setUsers(response.data);
//     } catch (error) {
//       console.error("Error fetching users:", error);
//     }
//   };

//   useEffect(() => {
//     fetchUsers();
//   }, []);

//   const updateUser = async (id: number, data: any) => {
//     const response = await axiosInstance.get(`/factors/index/${id}`, data, {
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });
//     return response.data;
//   };

//   const mutation = useMutation({
//     mutationFn: (updatedUser: User) => updateUser(updatedUser.id, updatedUser),
//     onSuccess: () => {
//       queryClient.invalidateQueries(["users"]);
//       fetchUsers();
//     },
//   });

//   const handleUpdate = (user: User) => {
//     mutation.mutate(user);
//   };

//   return (
//     <div>
//       <div className="flex gap-[74%]  items-center mb-2 mt-12 mr-3  ">
//         <div className="mr-2 ">
//           <p className="font-bold text-lg">مدیریت مالی</p>
//         </div>

//         <div className="flex justify-end mr-2  ">
//           <Link href="/showuserdetail">
//             <div className="flex items-center">
//               بازگشت
//               <Image src={backImage} width={38} height={38} alt="arrow" />
//             </div>
//           </Link>
//         </div>
//       </div>
//       <div>
//         <RoutTableFiancial />
//       </div>
//       <UserTableNotDespositors users={users} />
//     </div>
//   );
// };

// export default NotDepositorsUserFinancial;




import React from "react";
import UserTableFinancial from "@/src/app/components/AdminPage/UserTableNotDespositors";
import Image from "next/image";
import backImage from "@/src/app/assent/Img/adminPanel/back.svg";
import RoutTableFiancial from "./RoutTableFinancial";
import Link from "next/link";
import axios from "axios";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

interface User {
  id: number;
  name: string;
  joinDate: string;
  loans: string;
  depositAmount: string;
}

const axiosInstance = axios.create({
  baseURL: "https://shabab.v1r.ir/api",
});

axiosInstance.interceptors.request.use(
  (config) => {
    const authToken = localStorage.getItem("authToken");
    if (authToken) {
      config.headers.Authorization = `Bearer ${authToken}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

const fetchUsers = async (): Promise<User[]> => {
  try {
    const response = await axiosInstance.get("http://hosseinshabab.iapp.ir/api/installments/show/admin");
    console.log("API response:", response.data);

    // بررسی و تبدیل داده‌ها به آرایه
    if (response.data && Array.isArray(response.data.data)) {
      return response.data.data.map(user => ({
        id: user.id,
        name: `${user.first_name} ${user.last_name}`,
        joinDate: user.created_at,
        loans: user.debt,
        depositAmount: user.card_number // مثال: فرض می‌کنیم که depositAmount داده‌ای است که از card_number گرفته شده است
      }));
    } else {
      throw new Error("Data is not in the expected format");
    }
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error; // Ensure that error is thrown for React Query to handle
  }
};

const updateUser = async (updatedUser: User) => {
  try {
    const response = await axiosInstance.put(`/factors/index/${updatedUser.id}`, updatedUser, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error updating user:", error);
    throw error;
  }
};

const NotDepositorsUserFinancial: React.FC = () => {
  const queryClient = useQueryClient();

  const { data: users = [], isLoading, isError, error } = useQuery({
    queryKey: ['users'],
    queryFn: fetchUsers,
  });

  const mutation = useMutation({
    mutationFn: updateUser,
    onSuccess: () => {
      queryClient.invalidateQueries(['users']);
    },
    onError: (error) => {
      console.error('Error updating user:', error);
    },
  });

  const handleUpdate = (user: User) => {
    mutation.mutate(user);
  };

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error: {error instanceof Error ? error.message : "An unknown error occurred"}</p>;

  if (!Array.isArray(users)) {
    return <p>Error: Data format is incorrect</p>;
  }

  return (
    <div>
      <div className="flex gap-[74%] items-center mb-2 mt-12 mr-3">
        <div className="mr-2">
          <p className="font-bold text-lg">مدیریت مالی</p>
        </div>
        <div className="flex justify-end mr-2">
          <Link href="/showuserdetail">
            <div className="flex items-center">
              بازگشت
              <Image src={backImage} width={38} height={38} alt="arrow" />
            </div>
          </Link>
        </div>
      </div>
      <div>
        <RoutTableFiancial />
      </div>
      <UserTableFinancial users={users as User[]} />
    </div>
  );
};

export default NotDepositorsUserFinancial;
