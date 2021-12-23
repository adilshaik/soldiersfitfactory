import React from 'react';

export const Branding = () => {
  return (
    <div className='relative h-96'>
      <div className='absolute inset-0'>
        <img
          className='w-full h-full object-cover'
          src='/branding.jpg'
          alt=''
        />
        <div
          className='absolute inset-0 mix-blend-multiply'
          aria-hidden='true'
        />
      </div>
      <div
        data-aos='fade-right'
        className='relative max-w-7xl mx-auto pl-16 pt-12 sm:pt-12 '
      >
        <h1 className='text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl'>
          HUSTLE HUT
        </h1>
        {/* <p className='mt-6 text-xl text-indigo-100 max-w-3xl'>
          Mattis amet hendrerit dolor, quisque lorem pharetra. Pellentesque
          lacus nisi urna, arcu sociis eu. Orci vel lectus nisl eget eget ut
          consectetur. Sit justo viverra non adipisicing elit distinctio.
        </p> */}
      </div>
    </div>
  );
};
