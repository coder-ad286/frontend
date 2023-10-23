import React, { useState, useEffect } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css';
import Appbar from '../components/Appbar'
import Footer from '../components/Footer'
import PageLoader from './PageLoader';
import { collection, onSnapshot } from 'firebase/firestore';
import { db } from '../firebase/config';
import Copyright from '../components/Copyright';
import { Helmet } from 'react-helmet-async';


const Gallery = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {

    const collectionRef = collection(db, 'images');
    try {
      onSnapshot(collectionRef, (snapshot) => {
        setImages([])
        snapshot.docs.forEach((doc) => {
          setImages((prev) => {
            return [
              ...prev,
              {
                ...doc.data(),
                id: doc.id
              }
            ]
          })
        })
        setLoading(false);
      })
    }
    catch (error) {
      setError(error.message)
    }
  }, [images])
  const [model, setModel] = useState(false);
  const [tempImgSrc, setTempImgSrc] = useState('');

  const getImg = (imgsrc) => {
    setTempImgSrc(imgsrc);
    setModel(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };




  return (
    <>
      <Helmet>
        <title>JeeTrends-Gallery</title>
      </Helmet>
      <div>
        <Appbar className='fixed top-0' />

        {/* Banner : Gallery */}
        <div className='bg-[#f0008c] border-b-4 border-[#08b14a] h-[150px] lg:h-[200px] xl:h-[250px] flex'>

          <div className='my-auto mx-auto w-full'>
            <h1 className='mx-auto my-auto  text-white text-center text-6xl lg:text-7xl xl:text-8xl font-marcellus [text-shadow:_7px_10px_4px_rgb(0_0_0_/_25%)]'><span className='text-7xl lg:text-8xl xl:text-9xl'>G</span>ALLERY</h1>
            <p className='text-white text-center my-auto font-poppins text-xs md:text-lg lg:text-xl font-semibold'>Checkout Our Gallery And Discover Our Beauty Expertise</p>
          </div>

        </div>

        {/* Image Preview */}
        <div className={model ? 'scale-20 pb-10 pt-5' : 'w-full h-full px-2 fixed flex justify-center align-middle bg-[#000000] transition-opacity-4 opacity-0 scale-50 overflow-hidden z-[999]'}>
          <AiOutlineClose
            className='text-white text-5xl ml-auto md:mr-5 p-[5px] bg-black cursor-pointer'
            onClick={() => setModel(false)}
          />
          <img src={tempImgSrc} alt="" className=' block m-auto rounded-xl' />
        </div>

        {/* Page Loader */}
        {loading && <PageLoader />}

        {/* Gallery Images */}
        {!loading && images.length > 0 && <div className='columns-2  md:columns-3 lg:columns-4 xl:columns-5 mt-5 px-3 md:px-10'>
          {images.map((image) => (

            <div className='cursor-pointer w-full mt-2 ' key={image.id} onClick={() => getImg(image.downloadURl)}>
              <LazyLoadImage src={image.downloadURl} alt={image.name} className='w-full h-full hover:opacity-75' effect='blur' />
            </div>

          ))}
        </div>}
        {images.length === 0 && <div className=' h-[500px] flex items-center justify-center'>
          <p className='text-white animate-bounce font-poppins text-xl md:text-2xl text-center font bold'>No Images Found</p>
        </div>}
        {error && !loading && <div className=' h-[500px] flex items-center justify-center'>
          <p className='text-white animate-bounce font-poppins text-xl md:text-2xl text-center font bold'>{error}</p>
        </div>}

        <Footer />
        <Copyright />
      </div>
    </>
  );
};

export default Gallery;