import React, { useEffect } from 'react'
import Heading from '../Heading'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
const Contact = () => {
  const variant = (x) => {
    return {
      hidden: {
        opacity: 0,
        x: x
      },
      visible: {
        x: 0,
        opacity: 1,
        transition: {
          duration: 0.5,
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
  return (
    <div id='contact' className='max-w-[1280px] mx-auto text-white px-5 mt-1 md:mt-20'>

      {/* Title : Contact Us */}
      <Heading name={'Contact Us'} x={-100} />
      <div ref={ref} className='grid grid-cols-1 md:grid-cols-2 gap-2 mt-5 md:mt-10 h-[400px]'>

        <motion.div
          variants={variant(-30)}
          initial='hidden'
          animate={control}
          className='flex  rounded-xl'>
          <div className='my-auto text-[#e1dba1] mx-auto p-1 text-center font-poppins font-semibold text-sm md:text-lg lg:text-2xl xl:text-3xl'>
            <h1>No.1 Church Complex, Azhagar Kovil</h1>
            <h1>Bus Stand, K Pudhur, Madurai-625007</h1>
            <h1>(Nearby Lourdes Shirne)</h1>
            <button className='bg-[#f0008c] text-white px-4 py-1 rounded-xl my-5 hover:bg-slate-500'><a href='https://maps.app.goo.gl/6KQ2kGdUX3su5Ye99'>GET DIRECTION</a></button>
          </div>
        </motion.div>

        {/*Google Map */}
        <motion.div
          variants={variant(30)}
          initial='hidden'
          animate={control}
          className='flex  rounded-xl'><div className='w-full rounded-xl'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7859.230776884855!2d78.14915479084878!3d9.965922427534675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2fefa2f839f0f351%3A0x1ab2611714f961a1!2sJee%20Trends%20Women&#39;s%20Beauty%20Parlour!5e0!3m2!1sen!2sin!4v1697966594255!5m2!1sen!2sin" className='border w-full h-full rounded-xl' allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title='JeeTreands'></iframe>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Contact