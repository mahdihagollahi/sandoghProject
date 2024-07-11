"use client"
import React from 'react'
// import LandingNavbar from './components/landingNavbar'
import AdminFirstPage from './Screen/AdminFristPage'
import { BrowserRouter ,Routes ,Route } from 'react-router-dom'
import Service from './components/Service'

function page() {
  return (
    <div>
      <BrowserRouter>
      {/* <LandingNavbar/> */}
      <AdminFirstPage/>
      <Routes>
      <Route
            path="/service"
            element={<Service />}
          />
      </Routes>

      </BrowserRouter>
    </div>
  )
}

export default page