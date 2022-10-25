import React from 'react'
import { useSelector } from 'react-redux'

export const Home = () => {
    const data = useSelector((state)=>state.changeSignupData.account.payload)
  return (
    <div>Welcome {data.name}</div>
  )
}

export default Home