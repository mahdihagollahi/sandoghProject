import React from 'react'
import AdminNavbarHeader from '@/app/components/AdminPage/AdminNavbarHeader'
import UserPageNavbar from '../components/UserPage/UserPageNavbar'
import CurrentLoanAplicationComponent from '../components/UserPage/CurrentLoanAplicationComponent'

function CurrentLoanAplicationPage() {
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
             <CurrentLoanAplicationComponent/>
            </div>
        </div>
    </div>
  )
}

export default CurrentLoanAplicationPage