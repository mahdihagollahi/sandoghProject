
import React from 'react'
import AdminNavbarHeader from '@/src/app/components/AdminNavbarHeader'
import AdminPageNavbar from '@/src/app/components/AdminPageNavbar'
import DeletedUserComponent from '@/src/app/components/DeletedUserComponent'

function DeletedUser() {
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
               <DeletedUserComponent/>
            </div>
        </div>
    </div>
  )
}

export default DeletedUser

