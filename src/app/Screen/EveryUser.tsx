"use client"
import React from 'react'
import AdminNavbarHeader from '@/src/app/components/AdminNavbarHeader'
import AdminPageNavbar from '@/src/app/components/AdminPageNavbar'
import EveryUserComponent from '@/src/app/components/EveryUserComponent'

function EveryUser() {
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
               <EveryUserComponent/>
            </div>
        </div>
    </div>
  )
}

export default EveryUser

