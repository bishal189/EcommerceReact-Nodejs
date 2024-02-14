import React from 'react'
import UserContext from '../../context/userContext'
import { useContext } from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom'

const ProctedRoutes = () => {
  const jwt = localStorage.getItem("token");
  const location = useLocation()
  return jwt?<Outlet/>:<Navigate to='/login'state={{from:location.pathname}} />
  
}

export default ProctedRoutes
