



import React from 'react'
import AdminNavbarHeader from '@/src/app/components/AdminPage/AdminNavbarHeader'
import AdminPageNavbar from '@/src/app/components/AdminPage/AdminPageNavbar'
import CheckedRequestLoan from '../components/AdminPage/CheckedRequestLoan'

function CheckedLoanApplicationPage() {
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
          <CheckedRequestLoan/>
            </div>
        </div>
    </div>
  )
}

export default CheckedLoanApplicationPage

