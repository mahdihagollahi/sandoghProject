import React from 'react'
import AdminNavbarHeader from '@/src/app/components/AdminPage/AdminNavbarHeader'
import AdminPageNavbar from '@/src/app/components/AdminPage/AdminPageNavbar'
import DetailUser from '@/src/app/components/AdminPage/DetailUserComponnent'

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