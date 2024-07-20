// import React from 'react'
// import AdminHeader from '../components/AdminHeader'
// import NumberOfMebers from '../components/NumberOfMebers'
// import LoanApplication from '../components/LoanApplication'

// function AdminFristPage() {
//   return (
//     <div>
//       <div >
//       <AdminHeader/>
//       </div>
//       <div className='flex  mr-20 xl:mr-96 xl:flex-row md:flex md:flex-col sm:mr-10  sm:flex sm:flex-col sm:items-center lg:flex lg:flex-col lg:items-center   '>
//         <NumberOfMebers/>
//         <LoanApplication/>
//       </div>

//     </div>
//   )
// }

// export default AdminFristPage

import React from "react";
import AdminHeader from "../components/AdminHeader";
import NumberOfMebers from "../components/NumberOfMebers";
import LoanApplication from "../components/LoanApplication";
import AdminNavbarHeader from "../components/AdminNavbarHeader";
import AdminPageNavbar from "../components/AdminPageNavbar";
import CardAdmin from "../components/CardAdmin";
import NewDepositSlip from "../components/NewDepositSlip";
import SuupportMassge from "../components/SupportMassge";
import CharAdminDashboard from '../components/CharAdminDashboard'

function AdminFirstPage() {
  return (
    <div className="">
      <div className="w-full flex flex-col ">
        <div >
          <div>
            <AdminNavbarHeader />
          </div>
          <div>
            <AdminPageNavbar />
          </div>
        </div>

        <div className="block xl:-mt-[61%]  md:-mt-[46%]">
          <div className="flex  w-full   ">
            <AdminHeader />
          </div>

          <div className="flex flex-col mr-[30rem] mt-4 xl:ml-32 xl:flex-row xl:justify-center lg:items-center sm:items-center md:items-center gap-6  mx-4">
            <div>
            <NumberOfMebers />

            </div>
            <div>
            <LoanApplication />

            </div>
            <div className="">
            <CardAdmin/>

            </div>
          </div>
        </div>

        <div>
          <NewDepositSlip/>
        </div>

       <div>
        <SuupportMassge/>
       </div>

       <div>
        <CharAdminDashboard/>
       </div>
      </div>
    </div>
  );
}

export default AdminFirstPage;
