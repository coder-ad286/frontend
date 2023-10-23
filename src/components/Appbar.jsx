import React from 'react'
import {FiArrowLeft} from 'react-icons/fi'
import { NavLink, useNavigate } from 'react-router-dom'
import Logo from '../assets/images/logo.png'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css';
const Appbar = () => {
  // THIS APPBAR WILL BE USED FOR SERVICES AND GALLERY NAVBAR
  const navigate=useNavigate();
  return (
    <div>
      <div className='max-w-full h-[60px] mx-auto flex justify-between bg-black'>
       <div className='my-auto ml-5'>
      <NavLink to='/'><FiArrowLeft className='text-4xl text-white font-bold'/></NavLink>
       </div>
       <div className='my-auto mr-5 flex'>
        <LazyLoadImage  onClick={()=>navigate('/')} src={Logo} effect='blur' alt="LOGO" className='h-[30px] my-auto mr-5 md:h-[50px]' />
      </div>
      </div>
    </div>
  )
}

export default Appbar