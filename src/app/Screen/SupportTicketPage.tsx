"use client"
import React from 'react'
import UserNavbarHeader from "@/app/components/UserPage/UserNavbarHeader";
import UserPageNavbar from '../components/UserPage/UserPageNavbar'
import SupportTicket from '../components/UserPage/SupportTicket'

function SupportTicketPage() {
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
               <SupportTicket/>
            </div>
        </div>
    </div>
  )
}

export default SupportTicketPage

