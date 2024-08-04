"use client"
import React from 'react'
import AdminNavbarHeader from '@/src/app/components/AdminPage/AdminNavbarHeader'
import AdminPageNavbar from '@/src/app/components/AdminPage/AdminPageNavbar'
import SentedMassege from '../components/UserPage/SendMassege'

function ManagementAccount() {
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
              <SentedMassege/>
            </div>
        </div>
    </div>
  )
}

export default ManagementAccount

