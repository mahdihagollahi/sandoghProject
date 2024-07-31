"use client"
import React from 'react'
import AdminNavbarHeader from '@/src/app/components/AdminPage/AdminNavbarHeader'
import SentedMassege from '../components/UserPage/sendmassege'
import UserPageNavbar from '../components/UserPage/UserPageNavbar'

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
            <UserPageNavbar />
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

