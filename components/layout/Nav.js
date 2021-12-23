import React, { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import Link from 'next/link';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Cafit', href: '/cafit' },
  { name: 'Blogs', href: '/blogs' },
  { name: 'Team', href: '/team' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Contact', href: '/contact' },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export const Nav = () => {
  return (
    <div
      className='z-30 fixed w-full text-white overflow-hidden top-0 left-0 shadow-xl'
      style={{ backgroundColor: 'rgb(189,179,132)' }}
    >
      <Popover
        className='fixed top-0 left-0 w-full z-20 '
        style={{
          backgroundColor: 'rgb(189,179,132)',
          backgroundImage:
            'linear-gradient(to right, rgba(0,0,0, 0.7), rgba(0,0,0,0.6)), url(/camo.webp)',
        }}
      >
        <div className='flex justify-between items-center px-4 py-4 sm:px-6 md:justify-start md:space-x-10'>
          <div className='flex justify-start lg:w-0 md:flex-1'>
            <Link href='/'>
              <a className='flex items-center'>
                <div className='flex flex-row items-center'>
                  <img
                    className='h-12 w-auto sm:h-12'
                    src='/logo.png'
                    alt='sff'
                  />
                  <span className='hidden lg:block text-2xl font-black uppercase mb-1 ml-3 text-white'>
                    Soldiers Fit Factory
                  </span>
                </div>
              </a>
            </Link>
          </div>
          <div className='-mr-2 -my-2 lg:hidden'>
            <Popover.Button className='bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-800 gover:text-gray-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'>
              <span className='sr-only'>Open menu</span>
              <MenuIcon className='h-6 w-6' aria-hidden='true' />
            </Popover.Button>
          </div>

          <div className='hidden lg:flex items-center justify-end md:flex-1 lg:w-0'>
            <Popover.Group as='nav' className='hidden lg:flex space-x-10'>
              {navigation.map((navigate) => {
                return (
                  <Link key={navigate.name} href={navigate.href}>
                    <span className='cursor-pointer text-xl font-bold tracking-wider uppercase text-white'>
                      {navigate.name}
                    </span>
                  </Link>
                );
              })}
            </Popover.Group>
          </div>
        </div>

        <Transition
          as={Fragment}
          enter='duration-200 ease-out'
          enterFrom='opacity-0 scale-95'
          enterTo='opacity-100 scale-100'
          leave='duration-100 ease-in'
          leaveFrom='opacity-100 scale-100'
          leaveTo='opacity-0 scale-95'
        >
          <Popover.Panel
            focus
            className='absolute top-0 inset-x-0 p-2 transition transform origin-top-right lg:hidden'
          >
            <div className='rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50'>
              <div className='pt-5 pb-6 px-5'>
                <div className='flex items-center justify-between'>
                  <Link href='/'>
                    <a className='flex items-center'>
                      <div className='flex flex-row items-center'>
                        <img
                          className='h-12 w-auto sm:h-12'
                          src='/logo.png'
                          alt='sff'
                        />
                        <span className='hidden lg:block text-xl font-semibold mb-1'>
                          SOLDIERS FIT FACTORY
                        </span>
                      </div>
                    </a>
                  </Link>
                  <div className='-mr-2'>
                    <Popover.Button className='bg-white rounded-md p-2 inline-flex items-center justify-center  text-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'>
                      <span className='sr-only'>Close menu</span>
                      <XIcon className='h-6 w-6' aria-hidden='true' />
                    </Popover.Button>
                  </div>
                </div>
              </div>
              <div className='py-6 px-5'>
                <div className='grid grid-cols-1 gap-4'>
                  {navigation.map((navigate) => {
                    return (
                      <Link key={navigate.name} href={navigate.href}>
                        <span className='cursor-pointer text-lg font-medium text-gray-900 hover:text-gray-700'>
                          {navigate.name}
                        </span>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
    </div>
  );
};
