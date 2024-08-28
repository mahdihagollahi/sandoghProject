
import React from 'react'
import AdminNavbarHeader from '@/src/app/components/AdminPage/AdminNavbarHeader'
import DeleteUserComponent from '@/src/app/components/AdminPage/DeleteUserComponent'
import AdminPageNavbar from '../components/AdminPage/AdminPageNavbar'


function UserDeletePage() {
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
              
            <DeleteUserComponent/>

            </div>
        </div>
    </div>
  )
}

export default UserDeletePage

