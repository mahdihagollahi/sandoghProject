"use client"
import React from 'react'
import UserNavbarHeader from "@/app/components/UserPage/UserNavbarHeader";
import UserPageNavbar from '../components/UserPage/UserPageNavbar'
import RequestLoanAplicationComponent from '../components/UserPage/RequestLoanAplicationComponent'

function RequestLoanaplicationPage() {
  return (
    <div>
        <div className='flex '> 
            <div>
               
            <div >
          <div>
            <UserNavbarHeader />
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

