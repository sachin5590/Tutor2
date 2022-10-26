import React from 'react'
import { Outlet,Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Navbar from '../component/Navbar';

export const PrivateComponent = () => {
  const isLoggedIn = useSelector((state) => state.account?.isLoggedIn);

  if (!isLoggedIn) {
    return <Navigate to = "/"/>;
  }

  return (
    <>
      <Navbar/>
      <Outlet/>
    </>
  );
}
