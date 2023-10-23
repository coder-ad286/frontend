import React from 'react'
import { useNavigate } from 'react-router-dom'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react'

const HeroineCard = ({ data,delay }) => {
    const { image, title, description, id } = data;
    const control = useAnimation();
    const [ref, inView] = useInView();
    useEffect(() => {
        if (inView) {
            control.start('visible')
        }
       
    }, [control, inView])

    const variant = (delay) => {
        return {
            hidden: {
                opacity: 0,
                y: 100
            },
            visible: {
                opacity: 1,
                y: 0,
                transition: {
                    duration: 0.5,
                    delay : delay
                }

            }
        }
    }


    const navigate = useNavigate();
    return (



        <motion.div

            variants={variant(Number(`0.${delay}`))}
            initial="hidden"
            animate={control}
            ref={ref}
            key={id} className="w-full md:w-1/2 lg:w-1/3 p-0 md:p-1">

            <div className="m-3">
                <div className=''>
                    <LazyLoadImage src={image} alt="" className='rounded-t-xl opacity-40 shadow-md shadow-white w-full' />
                </div>
                <div className="bg-[#f0008c] rounded-b-3xl p-5 lg:h-[350px] ">
                    <LazyLoadImage src={image} alt={image} className='w-[150px] h-[150px] object-cover mx-auto rounded-full -mt-24 drop-shadow-lg' />

                    <div className='flex flex-col'>
                        <h1 className='text-white mt-3 w-1/3 text-center text-lg mx-auto font-poppins'><span className='border-b-2'>{title}</span></h1>
                        <p className='text-black font-bold font-poppins px-7 text-center flex text-[12px] lg:text-[15px] capitalize h-[150px]'><span className='mt-3'>{description}</span></p>
                        <button onClick={() => {
                            navigate(`/services/${id}`)
                        }} className='bg-black text-white font-poppins text-xl mt-5 p-1 rounded-lg w-1/4 mx-auto text-center hover:bg-gray-500'>More</button>
                    </div>

                </div>

            </div>

        </motion.div>





    )
}

export default HeroineCard