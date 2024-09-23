'use client'
import React from 'react'
import LoginAdmin from '@/src/app/components/UserPage/LoginAdmin'
import Link from 'next/link'

function page() {
  return (
    <div>
      <Link href='/dashbaord'></Link>
        <LoginAdmin/>
    </div>
  )
}

export default page