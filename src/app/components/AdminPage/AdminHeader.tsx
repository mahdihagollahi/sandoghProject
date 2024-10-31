import React from "react";
import Image from "next/image";
import IconImage from "@/app/assent/Img/adminPanel/defultUser.png";
import axios from "axios";
import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { styled } from "@mui/material/styles";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch, { SwitchProps } from "@mui/material/Switch";


interface User {
  name: string;
  image: string | typeof IconImage;
}

const fetchUserData = async (): Promise<User> => {
  const authToken = localStorage.getItem("authToken");

  if (!authToken) {
    throw new Error('لطفا دوباره لاگین کنید');
  }

  const response = await axios.post<{
    user: { first_name: string; last_name: string; media: Array<{ url: string }> };
  }>(
    "https://fundcharitynet.com/api/auth/me",
    {},
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${authToken}`,
      },
    }
  );

  const userData = response.data.user;
  const fullName =
    `${userData.first_name} ${userData.last_name}` || "نام کاربر نیست";

  const imageUrl = userData.media.length > 0 && userData.media[0]?.url ? userData.media[0].url : IconImage.src;

  return {
    name: fullName,
    image: imageUrl,
  };
};

// const AdminHeader: React.FC = ({toggleTheme}) => {
const AdminHeader: React.FC = () => {
  const {
    data: user,
    error,
    isLoading,
  }: UseQueryResult<User, Error> = useQuery({
    queryKey: ["user"],
    queryFn: fetchUserData,
  });
      



  // const MaterialUISwitch = styled(Switch)(({ theme }) => ({
  //   width: 59,
  //   height: 34,
  //   padding: 7,
  //   "& .MuiSwitch-switchBase": {
  //     margin: 1,
  //     padding: 0,
  //     transform: "translateX(6px)",
  //     "&.Mui-checked": {
  //       color: "#fff",
  //       transform: "translateX(22px)",
  //       "& .MuiSwitch-thumb:before": {
  //         backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
  //           "#fff"
  //         )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
  //       },
  //       "& + .MuiSwitch-track": {
  //         opacity: 1,
  //         backgroundColor: "#aab4be",
  //         ...theme.applyStyles("dark", {
  //           backgroundColor: "#8796A5",
  //         }),
  //       },
  //     },
  //   },
  //   "& .MuiSwitch-thumb": {
  //     backgroundColor: "#001e3c",
  //     width: 32,
  //     height: 32,
  //     "&::before": {
  //       content: "''",
  //       position: "absolute",
  //       width: "100%",
  //       height: "100%",
  //       left: 0,
  //       top: 0,
  //       backgroundRepeat: "no-repeat",
  //       backgroundPosition: "center",
  //       backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
  //         "#fff"
  //       )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
  //     },
  //     ...theme.applyStyles("dark", {
  //       backgroundColor: "#003892",
  //     }),
  //   },
  //   "& .MuiSwitch-track": {
  //     opacity: 1,
  //     backgroundColor: "#aab4be",
  //     borderRadius: 20 / 2,
  //     ...theme.applyStyles("dark", {
  //       backgroundColor: "#8796A5",
  //     }),
  //   },
  // }));

  if (isLoading) {
    return (
      <div className="font-custom">
        <div className="flex gap-[10%] w-[100.8%] flex-col md:flex-row justify-between dark:bg-[#4F5D74] bg-[#FFFFFF] mt-8 ml-3 md:mr-14 md:ml-3 lg:ml-3 xl:px-5 rounded-md shadow-md py-3 px-3 h-auto md:h-16">
          <div className="flex items-center gap-40 mb-4 md:mb-0">
            <p className="mt-1 whitespace-nowrap text-[#2D3748] dark:text-[#F5F5F5] font-light text-lg">
              سلام، وقت شما بخیر به بخش داشبورد خوش آمدید، گزارشات مورد نیاز شما
              در اختیار شماست!
            </p>
          </div>
          <div className="flex justify-between mt-2 dark:text-[#F5F5F5] gap-4">
            <span className="loading loading-dots text-[#4FD1C5] loading-sm"></span>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="">
        <div className="flex gap-[10%] w-[100.8%] flex-col md:flex-row justify-between dark:bg-[#4F5D74] bg-[#FFFFFF] mt-8 ml-3 md:mr-14 md:ml-3 lg:ml-3 xl:px-5 rounded-md shadow-md py-3 px-3 h-auto md:h-16">
          <div className="flex items-center gap-40 mb-4 md:mb-0">
            <p className="mt-1 whitespace-nowrap text-[#2D3748] dark:text-[#F5F5F5] font-light text-lg">
              سلام، وقت شما بخیر به بخش داشبورد خوش آمدید، گزارشات مورد نیاز شما
              در اختیار شماست!
            </p>
          </div>
          <div className="flex justify-between mt-2 dark:text-[#F5F5F5] gap-4">
            خطا: {error.message}
          </div>
        </div>
      </div>
    );
  }

  const userImage = user?.image ? user.image : IconImage.src;

  return (
    <div className="">
      <div className="flex gap-[8%] w-[100.8%] flex-col md:flex-row justify-between dark:bg-[#4F5D74] bg-[#FFFFFF] mt-8 ml-3 md:mr-14 md:ml-3 lg:ml-3 xl:px-5 rounded-md shadow-md py-3 px-3 h-auto md:h-16">
        <div className="flex items-center mb-4 md:mb-0">
          <p className="mt-1 whitespace-nowrap text-[#2D3748] dark:text-[#F5F5F5] font-light text-lg">
            سلام، وقت شما بخیر به بخش داشبورد خوش آمدید، گزارشات مورد نیاز شما
            در اختیار شماست!
          </p>
           <div className="-mr-6">
            {/* <FormGroup
            
         
            >

              <FormControlLabel
            
                control={<MaterialUISwitch  sx={{ m: 1 }} />}
                label=""
              />
            </FormGroup> */}
          </div>

        </div>

        <div className="flex  items-center gap-1 mt-3">
         
          <div>
            <Image
              className="bg-[#FFFFFF] justify-between dark:bg-[#4F5D74] mb-3 rounded-full"
              src={userImage}
              alt="user"
              width={44}
              height={44}
            />
          </div>
          <div className="hidden lg:inline lg:h-auto md:mb-4">
            <p className="text-[#2D3748] mt-2 flex dark:text-[#F5F5F5] whitespace-nowrap items-center font-medium text-base">
              {user?.name}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminHeader;



