import React from 'react'
import AdminNavbarHeader from '../components/AdminPage/AdminNavbarHeader'
import AdminPageNavbar from '../components/AdminPage/AdminPageNavbar'
import RuleAdmin from '../components/UserPage/RuleAdmin'

function RuleAdminPage() {
  return (
    <div>
        <div className='flex dark:bg-[#283B4D]'> 
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
                <RuleAdmin/>
            </div>
        </div>
    </div>
  )
}

export default RuleAdminPage