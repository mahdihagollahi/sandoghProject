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

        <div className="block xl:-mt-[42%]  md:-mt-[46%]">
          <div className="flex  w-full   ">
            <AdminHeader />
          </div>

          <div className="flex flex-col mr-20  xl:ml-32 xl:flex-row xl:justify-center lg:items-center sm:items-center md:items-center gap-6 mt-6 mx-4">
            <NumberOfMebers />
            <LoanApplication />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminFirstPage;
