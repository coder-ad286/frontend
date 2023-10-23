import React, { useEffect, useState } from 'react'
import Appbar from '../components/Appbar'
import Footer from '../components/Footer'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css';
import { useParams } from 'react-router-dom'
import { getData } from '../data/services'
import { AnimatePresence, motion } from 'framer-motion';
import PageLoader from './PageLoader';
import Copyright from '../components/Copyright';
import { Helmet } from 'react-helmet-async';

const Services = () => {
  const { id } = useParams();
  const [card, setCard] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])
  useEffect(() => {
    const fetchCardData = async () => {
      const cards = getData();
      const card = cards.find((card) => card.id === id);
      setCard(card);
    };

    fetchCardData(); // Call the async function
  }, [id]);

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const currentIndex = index === 0 ? 1 : 0;
      setIndex(currentIndex)
    }, 5000);
    return () => clearInterval(interval);
  }, [index]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (

    <>
      <Helmet>
        <title>JeeTrends-Service</title>
      </Helmet>
      <>
        <div className='h-[800px] xl:h-[1000px] sm:h-[1000px] '>
          <Appbar />
          {card && <div className='bg-[#f0008c] border-b-4 border-[#08b14a] h-[150px] lg:h-[200px] xl:h-[200px] flex'>
            <div className='my-auto mx-auto w-full'>
              <h1 className='mx-auto my-auto  text-white text-center text-6xl lg:text-7xl xl:text-8xl font-marcellus [text-shadow:_7px_10px_4px_rgb(0_0_0_/_25%)]'>{card.title}</h1>
              <p className='text-white text-center my-auto font-poppins text-xs md:text-lg capitalize lg:text-xl font-semibold px-2 md:px-0'>{card.caption}</p>
            </div>

          </div>}

          {!loading && card && <div>

            <div className='grid grid-cols-1 md:grid-cols-2  gap-2 mt-5 h-[400px]'>

              <div className='order-2 md:border-l-4 border-[#f0008c] rounded text-white '>

                <div className='flex justify-center align-middle py-2 '>

                  <ul className='list-disc'> {/* Service Lists */}
                    {card.branches.map((branch, index) => {
                      return (
                        <li key={index} className=' xl:mt-5 text-xl md:text-3xl'> {branch}</li>
                      )
                    })}

                  </ul>

                </div>

              </div>
              <div className='order-1 rounded flex  h-[400px]'>

                {/* Swapping Images */}
                <div className="relative flex justify-center py-5 text-white mx-auto border-b border-[#f0008c] md:border-none"> {/* Slide Images 1 */}
                  <AnimatePresence mode='wait'>
                    <motion.div
                      key={index + 23 * 56}
                      className=' flex justify-center'
                      initial={{
                        opacity: 0
                      }}
                      animate={{
                        opacity: 1,
                        transition: {
                          duration: 2,
                          delay: 0.5

                        }
                      }}
                      exit={{
                        opacity: 0,
                        transition: {
                          duration: 1,

                        }
                      }}

                    >
                      <LazyLoadImage src={card.branchImages[index]} alt="1"

                        className="w-full lg:w-[300px] object-cover h-auto lg:h-full opacity-60 rounded-xl"

                      />
                    </motion.div>
                    <motion.img
                      initial={{
                        opacity: 0
                      }}
                      animate={{
                        opacity: 1,
                        transition: {
                          duration: 2,

                        }
                      }}
                      exit={{
                        opacity: 0,
                        transition: {
                          duration: 1,
                          delay: 0.5
                        }
                      }}

                      key={index}
                      src={card.branchImages[index]} alt="1" className="absolute  top-1/2  left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/2 h-auto rounded-xl" />
                  </AnimatePresence>
                </div>

              </div>

            </div>

          </div>}

          {!card && !loading && <div className=' h-[500px] flex items-center justify-center'>
            <p className='text-white animate-bounce font-poppins text-xl md:text-2xl text-center font bold'>No Services Found..!</p>
          </div>}
          {
            loading && <PageLoader />
          }

        </div>
        <div className='mt-40'>
          <Footer />
          <Copyright />
        </div>
      </>
    </>
  )
}

export default Services