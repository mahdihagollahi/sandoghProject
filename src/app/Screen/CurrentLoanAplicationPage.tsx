import React from 'react'
import UserNavbarHeader from '@/app/components/UserPage/UserNavbarHeader'
import UserPageNavbar from '../components/UserPage/UserPageNavbar'
import CurrentLoanAplicationComponent from '../components/UserPage/CurrentLoanAplicationComponent'

function CurrentLoanAplicationPage() {
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
             <CurrentLoanAplicationComponent/>
            </div>
        </div>
    </div>
  )
}

export default CurrentLoanAplicationPage