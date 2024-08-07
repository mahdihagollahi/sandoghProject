import React from 'react'
import AdminNavbarHeader from '@/src/app/components/AdminPage/AdminNavbarHeader'
import UserPageNavbar from '../components/UserPage/UserPageNavbar'
import SupportTicket from '../components/UserPage/SupportTicket'


function ShowLoanPage() {
  return (
    <div>
          <div className='flex '> 
            <div>
               
            <div >
          <div>
            <AdminNavbarHeader />
          </div>
          <div>
            <UserPageNavbar />
          </div>
        </div>
            </div>
            <div>
               <SupportTicket/>
            </div>
        </div>
    </div>
  )
}

export default ShowLoanPage