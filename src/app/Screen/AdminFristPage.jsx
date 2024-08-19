
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
    // <div className="overflow-y-hidden dark:bg-black bg-[#F8F9FA]  pb-[2%] font-custom">
    
//     <div className="flex">

//       <div>
//         <div className=" flex">
//           <div>
        //  <AdminNavbarHeader/>
//          </div>
//          <div>
          // <AdminHeader/>
//          </div>
//          </div>
//          <div className="flex">
//           <div>
//           <AdminPageNavbar/>

//           </div>
//           <div className="mr-14">
            // <NumberOfMebers/>
//           </div>
//           <div>
//             <LoanApplication/>
//           </div>
//           <div className="mr-4">
//             <CardAdmin/>  
//           </div>
//          </div>
//           <div className="flex">
//              <div className="-mt-[56%]  mr-8">
//              <NewDepositSlip/>
//              </div>
//              <div>
//              </div>
//           </div>
//       </div>
//     </div>
//     <div className="bg-[#F8F9FA]">
//     <div className="mr-16 ">
//       <ChartAdminDashboard/>
//       </div>

//       <div className="-mt-[43%] ">
//         <SupportMassgeDashboard/>
//       </div>
//     </div>
    
    
//     </div>
//   );
// }

// export default AdminFirstPage;



import React from 'react'
import AdminHeader from "../components/AdminPage/AdminHeader";
import NumberOfMebers from "../components/AdminPage/NumberOfMebers";
import LoanApplication from "../components/AdminPage/LoanApplication";
import AdminNavbarHeader from "../components/AdminPage/AdminNavbarHeader";
import AdminPageNavbar from "../components/AdminPage/AdminPageNavbar";
import CardAdmin from "../components/AdminPage/CardAdmin";
import NewDepositSlip from "../components/AdminPage/NewDepositSlip";
import SupportMassgeDashboard from "../components/AdminPage/SupportMassgeDashboard";
import ChartAdminDashboard from '../components/AdminPage/ChartAdminDashboard'


function AdminFristPage() {
  return (
    <div className="overflow-y-hidden dark:bg-black bg-[#F8F9FA]  pb-[2%] font-custom">
     <div className='flex ml-40'>
        <div>
          <div >
          <AdminNavbarHeader/>
          </div>
           <AdminPageNavbar/>
        </div>
        <div>
          <div className=''>
          <AdminHeader/>
          </div>
          <div className='flex xl: mt-4 xl:mr-20'>
           <div >
           <NumberOfMebers/>
           </div>
           <div>
            <LoanApplication/>
           </div>
           <div>
            <CardAdmin/>
           </div>
           </div>
           <div className=''>
            <NewDepositSlip/>
           </div>
        </div>
     </div>
     <div className='flex'>
            <div className='-mt-[50%] mr-[30%]'>
              <ChartAdminDashboard/>
            </div>
            <div className='-mt-[51.5%] -mr-[5%] '>
              <SupportMassgeDashboard/>
            </div>
        </div>
    </div>
  )
}

export default AdminFristPage