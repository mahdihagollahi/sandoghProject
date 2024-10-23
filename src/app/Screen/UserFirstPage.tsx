import React, { Fragment } from "react";
import UserHeader from "@/app/components/UserPage/UserHeader";
import UserNavbarHeader from "@/app/components/UserPage/UserNavbarHeader";
import UserPageNavbar from "@/app/components/UserPage/UserPageNavbar";
import CardUser from "@/app/components/UserPage/CardUser";
import RequestBox from "@/app/components/UserPage/RequestBox";
import Supportbox from "@/app/components/UserPage/Supportbox";
import ManagerManoy from "../components/UserPage/ManagerManoy";

function UserFirstPage() {
  return (
    <Fragment>
      <div className="">
        <div className=" bg-[#F8F9FA] ">
          <div className="  flex  ">
            <div>
              <div>
                <UserNavbarHeader />
              </div>
              <div>
                <UserPageNavbar />
              </div>
            </div>

            <div>
              <div className=" ">
                <div className="flex  ">
                  <UserHeader />
                </div>

                <div className="flex flex-row  mt-10   gap-9  ">
                  <div>
                    <ManagerManoy />
                  </div>
                  <div className="">
                    <CardUser />
                  </div>
                </div>
              </div>

              <div className="flex flex-row justify-end  gap-10 mt-10">
                <div className="">
                  <RequestBox />
                </div>

                <Supportbox />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default UserFirstPage;

// import React from "react";
// import UserHeader from "@/src/app/components/UserPage/UserHeader";
// import UserNavbarHeader from "@/src/app/components/UserPage/UserNavbarHeader";
// import UserPageNavbar from "@/src/app/components/UserPage/UserPageNavbar";
// import CardUser from "@/src/app/components/UserPage/CardUser";
// import ChartPament from "@/src/app/components/UserPage/ChartPayment";
// import RequestBox from "@/src/app/components/UserPage/RequestBox";
// import Supportbox from "@/src/app/components/UserPage/Supportbox";

// function UserFirstPage() {
//   return (
//     <div className="bg-[#F8F9FA] min-h-screen">
//       {/* Navbar Section */}
//       <div className="w-full flex flex-col">
//         <UserNavbarHeader />
//         <UserPageNavbar />
//       </div>

//       {/* Header and Content Section */}
//       <div className="flex flex-col xl:flex-row xl:items-start mt-8 xl:mt-[-10%] md:mt-[-5%] gap-9 px-4">
//         <div className="flex w-full flex-col items-start">
//           <UserHeader />
//           <div className="flex flex-col md:flex-row items-start gap-9 mt-8">
//             <ChartPament />
//             <CardUser />
//           </div>
//         </div>
//       </div>

//       {/* Request and Support Section */}
//       <div className="flex flex-row justify-end gap-10 mt-10 px-4">
//         <RequestBox />
//         <Supportbox />
//       </div>
//     </div>
//   );
// }

// export default UserFirstPage;
