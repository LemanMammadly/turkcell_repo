import React from 'react'
import { Outlet } from 'react-router-dom'
import Menu from '../../Components/Menu'

const DashboardLayout = () => {
  return (
    <div>
        <Menu/>

        <div id='content'>
            <Outlet/>
        </div>
    </div>
  )
}

export default DashboardLayout