"use client"
import React from 'react'
import AdminNavbarHeader from '@/src/app/components/AdminPage/AdminNavbarHeader'
import SentedMassege from '../components/UserPage/SendMassege'
import UserPageNavbar from '../components/UserPage/UserPageNavbar'

function ManagementAccount() {
  return (
    <div className='dark:bg-black'>
        <div className='flex dark:bg-black '> 
            <div className='dark:bg-black'>
               
            <div className='dark:bg-black'>
          <div className='dark:bg-black'>
            <AdminNavbarHeader />
          </div>
          <div className='dark:bg-black'>
            <UserPageNavbar />
          </div>
        </div>
            </div>
            <div className='dark:bg-black'>
              <SentedMassege/>
            </div>
        </div>
    </div>
  )
}

export default ManagementAccount

