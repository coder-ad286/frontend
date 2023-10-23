import React from 'react'
import Error from '../assets/images/404.jpeg'
import {  useNavigate } from 'react-router-dom'
import Appbar from '../components/Appbar'
import { Helmet } from 'react-helmet-async'

export const PageNotFound = () => {
  const navigate = useNavigate()
  return (
    <div className=" t items-center justify-center text-white  bg-[black] z-50">
      <Helmet>
      <title>JeeTrends-Page Not Found</title>
      </Helmet>
      <Appbar />
      <div className=' flex flex-col justify-center'>
        <img src={Error} alt="Loading..." className="w-[40%] h-auto  mx-auto " />
        <button onClick={()=>navigate('/')} className='my-5 p-2 text-center rounded-xl hover:bg-white hover:text-black font-poppins w-1/6 mx-auto font-bold text-[10px] md:text-sm'>Back To Home</button>
      </div>
    </div>
  )
}
