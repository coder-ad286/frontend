import { useEffect } from 'react'
import rating from '../../assets/icons/5star.jpg'
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import randomColor from 'randomcolor';
const TestimonialCard = ({ name, text1, text2, delay ,color}) => {
    console.log(randomColor());
    const variant = (delay) => {
        return {
            hidden: {
                opacity: 0,
                y: 100
            },
            visible: {
                y: 0,
                opacity: 1,
                transition: {
                    duration: 0.5,
                    delay: delay
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
        <motion.div
            variants={variant(delay)}
            initial="hidden"
            animate={control}
            ref={ref}
            className="w-full md:w-1/2 lg:w-1/3 p-0 md:p-1">
            <div className="m-3">
                <div className='bg-white rounded-lg text-black h-[100px] flex'>
                    <div className='my-auto m-5 border-r-2 md:border-r-4 border-[#9d9d9d] px-3'>
                        <div style={{
                            backgroundColor:randomColor()
                        }} className={`text-center px-5 my-auto b rounded-full w-[60px] h-[60px] ml-3 flex `}>
                            <h1 className='my-auto  mx-auto text-b font-poppins font-bold text-3xl'>{name.charAt(0)}</h1>
                        </div>
                    </div>
                    <div className='mt-3 ml-2'>
                        <h1 className='font-poppins font-extrabold text-lg flex'>{name}<span className='mt-[5px] sm:mt-[6px] md:mt-[6px] ml-2'><img src={rating} alt="" className='w-[90px] sm:w-[75px] md:w-[85px]' /></span></h1>
                        <h2 className='font-poppins text-sm'>{text1}</h2>
                        <h2 className='font-poppins text-sm'>{text2}</h2>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default TestimonialCard