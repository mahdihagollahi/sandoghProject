import React from 'react'
import AdminNavbarHeader from '@/app/components/AdminNavbarHeader'
import AdminPageNavbar from '@/app/components/AdminPageNavbar'
import EveryUserComponent from '@/app/components/EveryUserComponent'

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
            <div className='w-full '>
               <EveryUserComponent/>
            </div>
        </div>
    </div>
  )
}

export default ManagementAccount

