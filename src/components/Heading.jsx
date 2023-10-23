import React, { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer'

const Heading = ({ name, x }) => {
    const variant = (x) => {
        return {
            hidden: {
                opacity: 0,
                x: 100
            },
            visible: {
                x: 0,
                opacity: 1,
                transition:{
                    duration:0.5
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
        else
        {
            control.start('hidden')
        }
    }, [inView, control])
    return (
        <div ref={ref} className='w-3/4 mx-auto flex'>
            <motion.h1
                variants={variant(x)}
                
                initial="hidden"
                animate={control}

                className=' text-3xl md:text-5xl font-kaushan text-white mx-auto mb-5 md:mb-10'>{name}</motion.h1>
        </div>

    )
}

export default Heading