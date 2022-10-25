import React from 'react'
import { Outlet,Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const PrivateComponent = () => {

    const isLoggedin = useSelector((state)=>state.changeLoginData)
  return isLoggedin? <Outlet/> : <Navigate to="/"/>
}
