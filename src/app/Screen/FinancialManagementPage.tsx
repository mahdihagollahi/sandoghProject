import React from 'react'
import AdminNavbarHeader from '@/src/app/components/AdminNavbarHeader'
import AdminPageNavbar from '@/src/app/components/AdminPageNavbar'
import FinancialManagement from '@/src/app/components/FinancialManagement'

function FinancialManagementPage() {
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
              <FinancialManagement/>
            </div>
        </div>
    </div>
  )
}

export default FinancialManagementPage

