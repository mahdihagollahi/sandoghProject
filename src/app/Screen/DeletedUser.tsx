
import React from 'react'
import AdminNavbarHeader from '@/src/app/components/AdminPage/AdminNavbarHeader'
import AdminPageNavbar from '@/src/app/components/AdminPage/AdminPageNavbar'
import DeletedUserComponent from '@/src/app/components/AdminPage/DeletedUserComponent'

function DeletedUser() {
  return (
    <div className='dark:bg-black'>
      
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

