import React from "react";
import UserHeader from "@/src/app/components/UserPage/UserHeader";
import UserNavbarHeader from "@/src/app/components/UserPage/UserNavbarHeader";
import UserPageNavbar from "@/src/app/components/UserPage/UserPageNavbar";
import CardUser from "@/src/app/components/UserPage/CardUser";
import ChartPament from "@/src/app/components/UserPage/ChartPayment";
import RequestBox from "@/src/app/components/UserPage/RequestBox";
import Supportbox from "@/src/app/components/UserPage/Supportbox";

function UserFirstPage() {
  return (
    <div className="bg-[#F8F9FA]">
      <div className="w-full flex flex-col ">
        <div>
          <div>
            <UserNavbarHeader />
          </div>
          <div>
            <UserPageNavbar />
          </div>
        </div>

        <div className="block xl:-mt-[55%]  md:-mt-[46%]">
          <div className="flex  w-full   ">
            <UserHeader />
          </div>

          <div className="flex flex-row  mt-8   gap-9  mr-[27%]">
            <div>
              <ChartPament />
            </div>
            <div className="">
              <CardUser />
            </div>
          </div>
        </div>

        <div className="flex flex-row justify-end ml-4 gap-10 mt-10">
          <div className="">
            <RequestBox />
          </div>

          <Supportbox />
        </div>
      </div>
    </div>
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
