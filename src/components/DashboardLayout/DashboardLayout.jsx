import React from 'react'
import './DashboardLayout.css'
import { Outlet } from 'react-router-dom'

const DashboardLayout = () => {
  return (
    <div>
        
        <Outlet/>
    </div>
  )
}

export default DashboardLayout