import React from 'react'
import Heading from '../Heading'
import TestimonialCard from './TestimonialCard'

const Testimonials = () => {
  const colors = [
    'c415e0',
    'e1155e',
    '0dd445',
  ]
  return (
    <div className='max-w-[1280px] mx-auto flex flex-col mt-16 md:mt-28'>

      {/* Title : Testimonials */}
      <Heading name={'Testimonials'} x={-100} />
      <div className="flex flex-wrap justify-center mb-12">
        <TestimonialCard
          name={"Sweety Anu"}
          text1={"My Hair Smoothing"}
          text2={"Experience Was Amazing"}
          color={colors[0]}
          delay={0}
        />
        <TestimonialCard
          name={"Divya"}
          text1={"Good Infrastructure And"}
          text2={"Friendly Staff."}
          color={colors[1]}
          delay={0.1}
        />
        <TestimonialCard
          name={"Fathima"}
          text1={"Affordable Price"}
          text2={"Best Services."}
          color={colors[2]}
          delay={0.2}
        />
      </div>
    </div>
  )
}

export default Testimonials