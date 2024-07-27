import React from 'react'
import AdminNavbarHeader from '@/src/app/components/AdminNavbarHeader'
import AdminPageNavbar from '@/src/app/components/AdminPageNavbar'
import InputPassword from '../components/InputPassword'
import SetUserPassword from '../components/SetedPassword'

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

