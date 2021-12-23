import React, { useEffect } from 'react';

export const Sale = () => {
  return (
    <div className='animate-bounce flex flex-col lg:flex-row justify-evenly text-center items-center h-60 md:h-44 lg:h-36 w-full highlight'>
      <div
        data-aos='fade-right'
        className='text-2xl md:text-5xl font-black tracking-wide text-white'
      >
        FIT START
      </div>
      <div
        data-aos='fade-up'
        className='text-3xl md:text-6xl font-black text-gray-600 tracking-wider'
      >
        LOWEST PRICES EVER
      </div>
      <div
        data-aos='fade-left'
        className='text-2xl md:text-5xl font-black text-white tracking-wide'
      >
        SALE IS LIVE
      </div>
      <style jsx>{`
        .highlight {
          background-color: #74ebd5;
          background-image: linear-gradient(90deg, #74ebd5 0%, #9face6 100%);
        }
      `}</style>
    </div>
  );
};
