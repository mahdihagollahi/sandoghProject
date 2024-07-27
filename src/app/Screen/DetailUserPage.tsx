import React from 'react'
import AdminNavbarHeader from '@/src/app/components/AdminNavbarHeader'
import AdminPageNavbar from '@/src/app/components/AdminPageNavbar'
import DetailUser from '@/src/app/DeletedUser'

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