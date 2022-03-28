import React, { useEffect } from 'react';
import { Nav } from '../Nav';

export function Hero() {
  return (
    <div className='min-h-screen relative bg-white overflow-hidden'>
      <div className='max-w-7xl mx-auto'>
        <div className='relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32'>
          <svg
            className='hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2'
            fill='currentColor'
            viewBox='0 0 100 100'
            preserveAspectRatio='none'
            aria-hidden='true'
          >
            <polygon points='50,0 100,0 50,100 0,100' />
          </svg>
          <Nav />
          <main className='mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28'>
            <div className='sm:text-center lg:text-left'>
              <h1 className='text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl'>
                <h1 className='text-4xl lg:text-6xl font-black'>
                  Fitness starts with what you eat.{' '}
                </h1>
              </h1>
              <p className='mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0'>
                Take control of your goals. Track calories, break down
                ingredients, and log activities with{'   '}
                <span className='text-indigo-800 font-bold text-lg md:text-2xl ml-2'>
                  {' '}
                  <span className='relative inline-block highlight z-10 mr-4'>
                    Soldiers{' '}
                  </span>{' '}
                  <span className='relative inline-block highlight z-10 mr-4'>
                    Fit{' '}
                  </span>{' '}
                  <span className='relative inline-block highlight z-10 mr-4'>
                    Factory.{' '}
                  </span>{' '}
                </span>
              </p>
            </div>
          </main>
        </div>
      </div>
      <div className='lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2'>
        <img
          className='h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full'
          src='/hero/gym-hero.png'
          alt=''
        />
      </div>
      <style jsx>
        {`
          .highlight::before {
            content: '';
            height: 1rem;
            background-color: #2dd7d1;
            width: calc(100% + 0.5rem);
            left: -0.25rem;
            bottom: 0.4rem;
            display: block;
            position: absolute;
            transform: rotate(-1deg) skewX(-1deg);
            z-index: -1;
          }
        `}
      </style>
    </div>
  );
}
