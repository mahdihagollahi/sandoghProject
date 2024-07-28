import React from 'react'
import AdminNavbarHeader from '@/src/app/components/AdminPage/AdminNavbarHeader'
import AdminPageNavbar from '@/src/app/components/AdminPage/AdminPageNavbar'
import InputPassword from '../components/AdminPage/InputPassword'
import SetUserPassword from '../components/AdminPage/SetedPassword'

function SetUserPasswordPage() {
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
             <InputPassword/>
             <SetUserPassword/>
            </div>
        </div>
    </div>
  )
}

export default SetUserPasswordPage

