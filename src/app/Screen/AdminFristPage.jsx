

// import React from "react";
// import AdminHeader from "../components/AdminPage/AdminHeader";
// import NumberOfMebers from "../components/AdminPage/NumberOfMebers";
// import LoanApplication from "../components/AdminPage/LoanApplication";
// import AdminNavbarHeader from "../components/AdminPage/AdminNavbarHeader";
// import AdminPageNavbar from "../components/AdminPage/AdminPageNavbar";
// import CardAdmin from "../components/AdminPage/CardAdmin";
// import NewDepositSlip from "../components/AdminPage/NewDepositSlip";
// import SupportMassgeDashboard from "../components/AdminPage/SupportMassgeDashboard";
// import ChartAdminDashboard from '../components/AdminPage/ChartAdminDashboard'

// function AdminFirstPage() {
//   return (
//     <div className="overflow-y-hidden dark:bg-black bg-[#F8F9FA]  pb-[5%] font-custom">
//       <div className=" flex flex-col dark:bg-black ">
//         <div className="dark:bg-black">
//           <div className="dark:bg-black">
//           <div className="dark:bg-black">
//             <AdminNavbarHeader />
//           </div>
//           <div className="dark:bg-black">
//             <AdminPageNavbar />
//           </div>
//         </div>
//         </div>
//         <div className="dark:bg-black">

       

//         <div className="block xl:-mt-[75%]  md:-mt-[46%] dark:bg-black">
//           <div className="flex  w-full  dark:bg-black ">
//             <AdminHeader />
//           </div>

//           <div className="flex flex-col mr-[30rem] dark:bg-black xl:ml-32 xl:flex-row xl:justify-center lg:items-center sm:items-center md:items-center gap-6  mx-4">
//             <div className="dark:bg-black">
//             <NumberOfMebers />

//             </div>
//             <div className="dark:bg-black">
//             <LoanApplication />

//             </div>
//             <div className="dark:bg-black">
//             <CardAdmin/>

//             </div>
//           </div>
//         </div>

//         <div className="dark:bg-black">
//           <NewDepositSlip/>
//         </div>

//        <div className="dark:bg-black">
//         <SupportMassgeDashboard/>
//        </div>
// <div className="dark:bg-black">

//        <div className="mt-[1%] dark:bg-black">
//         <ChartAdminDashboard/>
//         </div>

//        </div>
//       </div>
//     </div>
//     </div>
//   );
// }

// export default AdminFirstPage;







import React from "react";
import AdminHeader from "../components/AdminPage/AdminHeader";
import NumberOfMebers from "../components/AdminPage/NumberOfMebers";
import LoanApplication from "../components/AdminPage/LoanApplication";
import AdminNavbarHeader from "../components/AdminPage/AdminNavbarHeader";
import AdminPageNavbar from "../components/AdminPage/AdminPageNavbar";
import CardAdmin from "../components/AdminPage/CardAdmin";
import NewDepositSlip from "../components/AdminPage/NewDepositSlip";
import SupportMassgeDashboard from "../components/AdminPage/SupportMassgeDashboard";
import ChartAdminDashboard from '../components/AdminPage/ChartAdminDashboard'

function AdminFirstPage() {
  return (
    <div className="overflow-y-hidden dark:bg-black bg-[#F8F9FA]  pb-[2%] font-custom">
    
    <div className="flex">

      <div>
        <div className=" flex">
          <div>
         <AdminNavbarHeader/>
         </div>
         <div>
          <AdminHeader/>
         </div>
         </div>
         <div className="flex">
          <div>
          <AdminPageNavbar/>

          </div>
          <div className="mr-14">
            <NumberOfMebers/>
          </div>
          <div>
            <LoanApplication/>
          </div>
          <div className="mr-4">
            <CardAdmin/>  
          </div>
         </div>
          <div className="flex">
             <div className="-mt-[56%]  mr-8">
             <NewDepositSlip/>
             </div>
             <div>
             </div>
          </div>
      </div>
    </div>
    <div className="bg-[#F8F9FA]">
    <div className="mr-16 ">
      <ChartAdminDashboard/>
      </div>

      <div className="-mt-[43%] ">
        <SupportMassgeDashboard/>
      </div>
    </div>
    
    
    </div>
  );
}

export default AdminFirstPage;

