import React from 'react'
import AdminNavbarHeader from '@/app/components/AdminNavbarHeader'
import AdminPageNavbar from '@/app/components/AdminPageNavbar'
import DepositorsUserFinancial from '@/app/components/DepositorsUserFinancial'

function ThoseWhoHaveNotDeposited() {
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
               <DepositorsUserFinancial/>
            </div>
        </div>
    </div>
  )
}

export default ThoseWhoHaveNotDeposited

