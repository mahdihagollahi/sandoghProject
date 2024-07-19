import React from 'react'
import AdminNavbarHeader from '../components/AdminNavbarHeader'
import AdminPageNavbar from '../components/AdminNavbarHeader'
import SaveInformation from '../components/SaveInformation'

function ManagementAccount() {
  return (
    <div>
        <div className='flex '> 
            <div>
               <div>
          
               </div>
               <div>
                <AdminPageNavbar/>
               </div>
            </div>
            <div>
               <SaveInformation/>
            </div>
        </div>
    </div>
  )
}

export default ManagementAccount