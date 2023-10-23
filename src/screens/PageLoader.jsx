import React from 'react';
import Loader from '../assets/Loader/Makeup.gif'

const PageLoader = () => {
  return (
    <div className="w-full h-[550px] flex items-center justify-center bg-[black] z-50">
      <img src={Loader} alt="Loading..." className="w-1/3 md:w-1/6 h-auto" />
    </div>
  );
};

export default PageLoader;
