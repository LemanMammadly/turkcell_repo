import React from 'react'
import './styles.css'
import { Link, Outlet } from 'react-router-dom'

const AuthLayout = () => {
  return (
    <div className='auth-container'>
    <div className='auth-menu'>
    <Link to='/auth'>Login</Link>
    <Link to='/auth/register'>Register</Link>
    </div>
    <hr />
    <Outlet/>
    </div>
  )
}

export default AuthLayout