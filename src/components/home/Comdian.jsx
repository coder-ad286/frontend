import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css';
import Mehandhi from '../../assets/images/Comedian_Images/Mehandi.jpg'
import Lipstick from '../../assets/images/Comedian_Images/Permanent_Lipstick.png'
import Eyebrow from '../../assets/images/Comedian_Images/Permanent_Eyebrows.png'
import Heading from '.././Heading'
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

const Comdian = () => {

  const variant = () => {
    return {
      hidden: {
        opacity: 0,
        y: 100
      },
      visible: {
        y: 0,
        opacity: 1,
        transition: {
          duration: 0.2,
          delay:0.2
        }

      }
    }
  }
  const [ref, inView] = useInView();
  const control = useAnimation();

  useEffect(() => {
    if (inView) {
      control.start('visible')
    }
    else {
      control.start('hidden')
    }
  }, [inView, control])

  // SPECIAL SERVICES
  return (
    <div ref={ref} id='splservices' className='max-w-[1280px] mx-auto text-white px-5 mt-10'>

      {/* Title : Special Servicces */}
      <Heading name={'Special Services'} x={100} />
      {/* Grid Of Special Services */}
      <motion.div
        variants={variant()}
        initial='hidden'
        animate={control}
        
        className='grid grid-cols-1 gap-3 capitalize w-full mx-auto py-5 px-5 bg-[#f0008b] rounded-xl mt-5'>
        {/*Grid row 1 */}
        <div>

          <div className='grid grid-cols-4 gap-3'>
            <div className='rounded col-span-2 lg:col-span-1 mt-8 md:mt-0'>
              <LazyLoadImage effect='blur' className='rounded-lg' src={Lipstick} alt="" />
            </div>
            <div className='flex flex-col col-span-2 lg:col-span-3 bg-white rounded-xl text-black sm:pt-2 md:pl-7 pt-1'>
              <h1 className='text-xs sm:text-xl md:text-2xl font-poppins font-bold pl-2 sm:pl-3'><span className='border-b border-black'>Permant Lipstick</span></h1>
              <div className='flex my-auto md:my-0 px-1 md:w-3/4 mx-auto py-2'>
                <p className='text-xs sm:text-sm md:text-lg lg:text-2xl xl:text-3xl text-center py-2 my-auto lg:my-0'>Say goodbye to fading lipstick and hello to long-lasting, perfect pouts with our Permanent Lipstick services.</p>
              </div>
            </div>
          </div>

        </div>

        {/*Grid row 2 */}
        <div>

          <div className='grid grid-cols-4 gap-3'>
            <div className='flex flex-col col-span-2 lg:col-span-3 bg-white rounded-xl text-black sm:pt-2 md:pl-7 pt-1 -mt-[2px] sm:-mt-[-1px] md:-mt-0'>
              <h1 className='text-xs sm:text-xl md:text-2xl font-poppins font-bold pl-2 sm:pl-3'><span className='border-b border-black'>Mehandi</span></h1>
              <div className='flex my-auto md:my-0 px-1 md:w-3/4 mx-auto py-2'>
                <p className='text-xs sm:text-sm md:text-lg lg:text-2xl xl:text-3xl text-center py-2 my-auto lg:my-0'>JeeTrends artists are passionate about creating exquisite Mehandi designs that adorn your hands and feet.</p>
              </div>
            </div>
            <div className='rounded col-span-2 lg:col-span-1 mt-8 md:mt-0'>
              <LazyLoadImage effect='blur' className='rounded' src={Mehandhi} alt="" />
            </div>
          </div>

        </div>

        {/*Grid row 3 */}
        <div className='grid grid-cols-4 gap-3'>

          <div className='rounded col-span-2 lg:col-span-1 mt-8 md:mt-0'>
            <LazyLoadImage effect='blur' className='rounded' src={Eyebrow} alt="" />
          </div>
          <div className='flex flex-col col-span-2 lg:col-span-3 bg-white rounded-xl text-black sm:pt-2 md:pl-7 pt-1'>
            <h1 className='text-xs sm:text-xl md:text-2xl font-poppins font-bold pl-2 sm:pl-3'><span className='border-b border-black'>Permant Eyebrows</span></h1>
            <div className='flex my-auto md:my-0 px-1 md:w-3/4 mx-auto py-2'>
              <p className='text-xs sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-center py-2 my-auto lg:my-0'>Goodbye to Daily Routine Eyebrows and say hello to long-lasting, perfect pouts with our Permanent Eybrow services.</p>
            </div>
          </div>

        </div>

      </motion.div>
    </div>
  )
}

export default Comdian