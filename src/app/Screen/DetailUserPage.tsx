import React from 'react'
import AdminNavbarHeader from '@/app/components/AdminNavbarHeader'
import AdminPageNavbar from '@/app/components/AdminPageNavbar'
import DetailUser from '@/app/components/DatailUserComponnent'

function DetailUserPage() {
  return (
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
            <div className='flex justify-center'>
            <DetailUser/>
                        </div>
                        </div>
       
     
    
  )
}

export default DetailUserPage