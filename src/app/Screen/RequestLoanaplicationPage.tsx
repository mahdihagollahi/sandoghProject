"use client"
import React from 'react'
import AdminNavbarHeader from '@/src/app/components/AdminPage/AdminNavbarHeader'
import UserPageNavbar from '../components/UserPage/UserPageNavbar'
import RequestLoanAplicationComponent from '../components/UserPage/RequestLoanAplicationComponent'

function RequestLoanaplicationPage() {
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
             <RequestLoanAplicationComponent/>
            </div>
        </div>
    </div>
  )
}

export default RequestLoanaplicationPage

