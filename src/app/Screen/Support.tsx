import React from 'react'
import AdminNavbarHeader from '@/src/app/components/AdminNavbarHeader'
import AdminPageNavbar from '@/src/app/components/AdminPageNavbar'
import SupportMessage from '../components/SupportMessage'


function Support() {
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
             <SupportMessage/>
            </div>
        </div>
    </div>
  )
}

export default Support

