import React from 'react'
import AdminNavbarHeader from '@/app/components/AdminNavbarHeader'
import AdminPageNavbar from '@/app/components/AdminPageNavbar'
import SaveInformation from '@/app/components/SaveInformation'

function ManagementAccount() {
  return (
    <div>
        <div className='flex '> 
            <div>
               
            <div >
          <div>
            <AdminNavbarHeader />
          </div>
          <div>
            <AdminPageNavbar />
          </div>
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

