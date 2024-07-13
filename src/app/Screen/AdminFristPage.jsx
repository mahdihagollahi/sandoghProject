import React from 'react'
import AdminHeader from '../components/AdminHeader'
import NumberOfMebers from '../components/NumberOfMebers'

function AdminFristPage() {
  return (
    <div>
      <div >
      <AdminHeader/>
      </div>
      <div className='flex flex-col'>
        <NumberOfMebers/>
      </div>
      
    </div>
  )
}

export default AdminFristPage