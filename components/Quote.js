import React from 'react';

const Quote = () => {
  return (
    <div className='flex flex-col max-w-7xl mx-auto mb-10 px-10'>
      <div
        data-aos='fade-right'
        data-aos-duration='1000'
        data-aos-easing='ease-in-out'
        className='text-4xl md:text-8xl font-black my-1'
      >
        BE SPIRITED
      </div>
      <div
        data-aos='fade-left'
        data-aos-duration='1000'
        className='text-2xl md:text-6xl font-black my-1'
      >
        FEARLESS
      </div>
      <div
        data-aos='fade-up'
        data-aos-duration='1000'
        className='text-xl md:text-4xl font-black text-gray-400 my-1'
      >
        AN EVERYDAY ATHLETE
      </div>
    </div>
  );
};

export default Quote;
