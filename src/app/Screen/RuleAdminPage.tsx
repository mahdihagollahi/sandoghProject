import React from 'react'
import UserPageNavbar from '../components/UserPage/UserPageNavbar'
import RuleAdmin from '../components/UserPage/RuleAdmin'

function RuleAdminPage() {
  return (
    <div>
        <div className='flex '> 
            <div>
               
            <div >
          <div>
            <UserPageNavbar />
          </div>
          <div>
            <UserPageNavbar />
          </div>
        </div>
            </div>
            <div>
                <RuleAdmin/>
            </div>
        </div>
    </div>
  )
}

export default RuleAdminPage