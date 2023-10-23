import React from 'react';

const Copyright = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="text-center  w-full text-[#08b14a] border-t-2 border-black text-sm py-2 font-poppins bg-white bg-opacity-20 backdrop-blur-lg drop-shadow-lg">
      &copy; {currentYear} All Rights Reserved. || Designed By WibeTec.
    </div>
  );
};

export default Copyright;
