"use client"
import React from 'react'
// import LandingNavbar from './components/landingNavbar'
// import AdminFirstPage from './Screen/AdminFristPage'
import UserPage from '@/app/Screen/UserPage'
import { BrowserRouter ,Routes ,Route } from 'react-router-dom'
import Service from './components/Service'
import ManagementAccount from './Screen/ManagementAccount'

function page() {
  return (
    <div>
      <BrowserRouter>
      {/* <LandingNavbar/> */}
      {/* <AdminFirstPage/> */}
      {/* <ManagementAccount /> */}
      <UserPage/>
      <Routes>
      <Route
            path="/service"
            element={<Service />}
          />

<Route
            path="/ManagementAccount"
            element={<ManagementAccount />}
          />
      </Routes>

      </BrowserRouter>
    </div>
  )
}

export default page