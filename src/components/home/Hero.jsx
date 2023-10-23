import React from 'react'
import Navbar from '../Navbar'
import Bg from '../../assets/images/Hero1.jpg'
import Bg1 from '../../assets/images/Hero2.jpg'
import Bg2 from '../../assets/images/Hero3.jpg'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css';
import Logo from '../../assets/images/logo.png'
import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Link } from 'react-scroll'

const images = [Bg, Bg1, Bg2];

const Hero = () => {
  //Function to Change Description For Every 2 Seconds
  const [isSwapped, setIsSwapped] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsSwapped(prevState => !prevState);
    }, 3000);

    return () => clearInterval(intervalId);

  }, []);
  //Function End

  //Bg Image Changer
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className='relative font-poppins'>
        <Navbar />
        {images.map((image, index) => (
          <LazyLoadImage
            key={index}
            src={image}
            alt={`HeroImage ${index + 1}`}
            className={`absolute top-0 w-full h-[500px] lg:h-screen -z-10 transition-all duration-500 ${index === currentIndex ? "opacity-100" : "opacity-0"
              }`}
            effect="opacity"
          />
        ))}

        {/*HeroImage*/}

        {/* Container Containg Logo And Description */}
        <AnimatePresence>
          <div className='mt-24 md:mt-0 h-[350px] md:h-[450px] lg:h-screen flex flex-col max-w-[1280px] mx-auto'>

            {/* Logo */}
            <LazyLoadImage src={Logo} alt="" effect='blur' className='mx-auto  md:mx-0  w-[350px] md:w-[400px] md:mt-[100px] lg:w-[550px] lg:h-[120px] lg:mt-[140px] xl:w-[800px] xl:mt-[190px] xl:h-[150px]' />
            {/* Description */}



            {isSwapped && <motion.div
              initial={{
                opacity: 0,
                x: -100
              }}
              animate={{
                opacity: 1,
                x: 0,
                transition: {
                  duration: 0.5
                }
              }}


              className='hero flex flex-col  mx-auto md:mx-0  text-white w-3/4 sm:w-1/2 text-center text-2xl md:text-3xl lg:text-4xl xl:text-5xl md:w-[400px] lg:w-[550px] xl:w-[800px] mt-2 lg:mt-5 h-[90px] lg:h-[110px]'>
              <h1 className='px-2 lg:px-5 font-bold  font-offside text-[#08b14a]  pt-1'>TRAINING ACADEMY</h1>
              <h1 className='px-2 lg:px-5 font-serif text-[#f0008c]  font-extrabold text-lg md:text-xl lg:text-2xl xl:text-3xl'>(Classes Available Here)</h1>
            </motion.div>}
            {!isSwapped &&
              <motion.div
                initial={{
                  opacity: 0,
                  x: 100
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                  transition: {
                    duration: 0.5
                  }
                }}

                className='hero flex flex-col mx-auto md:mx-0 text-white sm:text-lg w-screen sm:w-1/2 text-center lg:text-3xl xl:text-4xl md:w-[400px] lg:w-[550px] xl:w-[800px] mt-2 lg:mt-5  h-[90px] lg:h-[110px]'>
                <h1 className='px-2 lg:px-5 font-serif mt-3'>Exclusive Women's Beauty Parlour &</h1>
                <h1 className='px-2 lg:px-5 font-serif '>Makeup Studio & Tattoo Studio</h1>
              </motion.div>

            }




            {/*It Contains Two Buttons => ['Learn More','Contact'] */}
            <div className='mx-auto md:mx-0 text-white sm:text-xl lg:text-2xl w-[350px] md:w-[400px] lg:w-[550px] xl:w-[800px] mt-2 lg:mt-5 flex'>
              <div className='w-full mx-auto flex justify-between'>
      
                <Link
                  activeClass="active"
                  to="splservices"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className='ml-auto mr-2 md:mr-5 my-auto bg-[#f0008c] hover:bg-[#f0006c] rounded-xl px-2 py-2 text-black font-semibold hover:cursor-pointer'>Learn More</Link>
                <Link
                  activeClass="active"
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className='mr-auto ml-2 md:ml-5 rounded-xl my-auto border-4 border-[#f0008c] py-1 px-5   hover:cursor-pointer font-semibold hover:bg-[#f0008c] hover:text-black'>Contact</Link>
              </div>

            </div>

          </div>
        </AnimatePresence>

      </div>
    </>
  )
}

export default Hero