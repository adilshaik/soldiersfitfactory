import React from 'react';
import Link from 'next/link';

export const FreeTrial = () => {
  return (
    <div className='bg-white'>
      <div className='max-w-7xl mx-auto py-5 px-4 sm:px-6 lg:px-8'>
        <div className='bg-indigo-700 rounded-lg shadow-xl overflow-hidden lg:grid lg:grid-cols-2 lg:gap-4'>
          <div className='pt-10 pb-12 px-6 sm:pt-16 sm:px-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20'>
            <div className='lg:self-center'>
              <h2 className='text-3xl font-extrabold text-white sm:text-4xl'>
                <span className='block'>Ready to dive in?</span>
                <span className='block'>Start your free trial today.</span>
              </h2>
              <p className='mt-4 text-lg leading-6 text-indigo-200'>
                Get your free trial today
              </p>
              <Link href='/contact'>
                <a className='mt-8 bg-white border border-transparent rounded-md shadow px-5 py-3 inline-flex items-center text-base font-medium text-indigo-600 hover:bg-indigo-50'>
                  Contact Us
                </a>
              </Link>
            </div>
          </div>
          <div className='-mt-6 aspect-w-5 aspect-h-3 md:aspect-w-2 md:aspect-h-1'>
            <img
              className='transform translate-x-6 translate-y-6 rounded-md object-cover object-left-top sm:translate-x-16 lg:translate-y-20'
              src='https://images.pexels.com/photos/2294361/pexels-photo-2294361.jpeg?cs=srgb&dl=pexels-li-sun-2294361.jpg&fm=jpg'
              alt='App screenshot'
            />
          </div>
        </div>
      </div>
    </div>
  );
};
