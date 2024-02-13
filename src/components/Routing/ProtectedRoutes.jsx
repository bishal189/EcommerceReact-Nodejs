

import React from 'react'
import UserContext from '../../context/userContext'
import { useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const ProctedRoutes = () => {
 const userobj= useContext(UserContext)
  return userobj?<Outlet/>:<Navigate to='/login'/>
}

export default ProctedRoutes