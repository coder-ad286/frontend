import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { AnimatePresence, motion } from 'framer-motion'
import { Link } from 'react-scroll'


const Navbar = () => {
  const [nav, setNav] = useState(false)
  const handleNav = () => {
    setNav(!nav)
  }
  const navigate = useNavigate()
  return (

    //NAVBAR CONTAINER 
    <div className={`max-w-[1280px] h-[60px] mx-auto border-b-2 border-gray-400  flex justify-between ${nav && 'bg-black'}`}>

      {/* COMPANY NAME IN THE NAVBAR */}
      <div className='mt-auto ml-5 pb-0'>
        <h1 onClick={()=>navigate('/')} className='text-[#f0008c] font-extrabold text-lg md:text-2xl font-poppins'><span className='text-[#08b14a]'>JEE</span> TRENDS</h1>
      </div>

      {/* PAGE MENUS IN THE NAVBAR */}
      <div className='mt-auto mr-5 pb-1 hidden sm:flex'>
        <ul className='flex text-white font-bold text-lg md:text-2xl mr-5'> {/* ul for Navbar menus */}
          <li className='mx-5 hover:text-[#08b14a]'><NavLink to='/'>Home</NavLink></li>
          <li className='mx-5 hover:text-[#08b14a]'><NavLink to='/gallery'>Gallery</NavLink></li>
          <li className='mx-5 hover:text-[#08b14a]'>
            <Link
              activeClass="active"
              to="services"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >Services</Link>
          </li>
        </ul>
      </div>

      {/* HANBURGER MENU ICON */}
      <div onClick={handleNav} className='block sm:hidden text-white mt-auto text-2xl font-extrabold mr-5 pb-1'>
        {!nav ? <AiOutlineMenu /> : <AiOutlineClose />}
      </div>

      {/* HANBURGER PAGE MENUS */}
      <AnimatePresence>
        {nav && <motion.div
          initial={{
            height: 0,
            opacity: 0
          }}
          animate={{
            height: 'auto',
            opacity: 1
          }}
          exit={{
            height: 0,
            opacity: 0
          }}
          className='w-full z-20 bg-black absolute sm:hidden top-[60px] left-0 flex py-10' >
          <ul className='text-white mx-auto flex flex-col w-full'> {/* ul for Navbar menus */}
            <motion.li
              initial={{
                opacity: 0,
                x: 100
              }}
              animate={{
                opacity: 1,
                x: 0,
                transition: {
                  delay: 0,
                  duration: 0.5
                }
              }}
              onClick={()=>setNav(!nav)}
              className='mx-auto w-full text-xl font-bold   p-2 my-2 flex hover:bg-[#f0008c] bg-opacity-50'><NavLink to='/' className='w-full text-center'>Home</NavLink></motion.li>
            <motion.li
              initial={{
                opacity: 0,
                x: 100
              }}
              animate={{
                opacity: 1,
                x: 0,
                transition: {
                  delay: 0.1,
                  duration: 0.5
                }
              }}
              className='mx-auto w-full text-xl font-bold   p-2 my-2 flex hover:bg-[#f0008c] bg-opacity-50'><NavLink to='/gallery' className='w-full text-center'>Gallery</NavLink></motion.li>
            <motion.li
              initial={{
                opacity: 0,
                x: 100
              }}
              animate={{
                opacity: 1,
                x: 0,
                transition: {
                  delay: 0.2,
                  duration: 0.5
                }
              }}
              className='mx-auto w-full text-xl font-bold   p-2 my-2 flex hover:bg-[#f0008c] bg-opacity-50'>
              <Link
                activeClass="active"
                className='w-full text-center'
                to="services"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >Services</Link>
            </motion.li>
          </ul>
        </motion.div>}
      </AnimatePresence>

    </div>
  )
}

export default Navbar