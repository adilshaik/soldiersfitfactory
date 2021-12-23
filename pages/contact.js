import { MailIcon, PhoneIcon } from '@heroicons/react/outline';
import { Nav } from '../components/layout/Nav';
import { Footer } from '../components/layout/Footer';
import { BsInstagram } from 'react-icons/bs';
import Head from 'next/head';
import React from 'react';

const offices = [
  {
    id: 1,
    city: 'Los Angeles',
    address: ['4556 Brendan Ferry', 'Los Angeles, CA 90210'],
  },
  {
    id: 2,
    city: 'New York',
    address: ['886 Walter Streets', 'New York, NY 12345'],
  },
  {
    id: 3,
    city: 'Toronto',
    address: ['7363 Cynthia Pass', 'Toronto, ON N3Y 4H8'],
  },
  { id: 4, city: 'London', address: ['114 Cobble Lane', 'London N1 2EF'] },
];

export default function Example() {
  return (
    <React.Fragment>
      <Head>
        <title>SFF | Contact</title>
        <meta
          name='description'
          content='Our workouts can be done both at the center and at home with the help from us.'
        />
        <link rel='icon' href='/favicon.png' />
      </Head>

      <div className='bg-white'>
        <Nav />

        <main className='overflow-hidden mt-40'>
          {/* Contact section */}
          <section
            className='relative bg-white'
            aria-labelledby='contact-heading'
          >
            <div
              className='absolute w-full h-1/2 bg-warm-gray-50'
              aria-hidden='true'
            />
            {/* Decorative dot pattern */}
            <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
              <svg
                className='absolute z-0 top-0 right-0 transform -translate-y-16 translate-x-1/2 sm:translate-x-1/4 md:-translate-y-24 lg:-translate-y-72'
                width={404}
                height={384}
                fill='none'
                viewBox='0 0 404 384'
                aria-hidden='true'
              >
                <defs>
                  <pattern
                    id='64e643ad-2176-4f86-b3d7-f2c5da3b6a6d'
                    x={0}
                    y={0}
                    width={20}
                    height={20}
                    patternUnits='userSpaceOnUse'
                  >
                    <rect
                      x={0}
                      y={0}
                      width={4}
                      height={4}
                      className='text-warm-gray-200'
                      fill='currentColor'
                    />
                  </pattern>
                </defs>
                <rect
                  width={404}
                  height={384}
                  fill='url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)'
                />
              </svg>
            </div>
            <div className='max-w-7xl mx-auto mb-20 px-4 sm:px-6 lg:px-8'>
              <div className='relative bg-white shadow-xl'>
                <h2 id='contact-heading' className='sr-only'>
                  Contact us
                </h2>

                <div className='grid grid-cols-1 lg:grid-cols-3'>
                  {/* Contact information */}
                  <div className='relative overflow-hidden py-10 px-6 bg-gradient-to-b from-teal-500 to-teal-600 sm:px-10 xl:p-12'>
                    {/* Decorative angle backgrounds */}
                    <div
                      className='absolute inset-0 pointer-events-none sm:hidden'
                      aria-hidden='true'
                    >
                      <svg
                        className='absolute inset-0 w-full h-full'
                        width={343}
                        height={388}
                        viewBox='0 0 343 388'
                        fill='none'
                        preserveAspectRatio='xMidYMid slice'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          d='M-99 461.107L608.107-246l707.103 707.107-707.103 707.103L-99 461.107z'
                          fill='url(#linear1)'
                          fillOpacity='.1'
                        />
                        <defs>
                          <linearGradient
                            id='linear1'
                            x1='254.553'
                            y1='107.554'
                            x2='961.66'
                            y2='814.66'
                            gradientUnits='userSpaceOnUse'
                          >
                            <stop stopColor='#fff' />
                            <stop offset={1} stopColor='#fff' stopOpacity={0} />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                    <div
                      className='hidden absolute top-0 right-0 bottom-0 w-1/2 pointer-events-none sm:block lg:hidden'
                      aria-hidden='true'
                    >
                      <svg
                        className='absolute inset-0 w-full h-full'
                        width={359}
                        height={339}
                        viewBox='0 0 359 339'
                        fill='none'
                        preserveAspectRatio='xMidYMid slice'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          d='M-161 382.107L546.107-325l707.103 707.107-707.103 707.103L-161 382.107z'
                          fill='url(#linear2)'
                          fillOpacity='.1'
                        />
                        <defs>
                          <linearGradient
                            id='linear2'
                            x1='192.553'
                            y1='28.553'
                            x2='899.66'
                            y2='735.66'
                            gradientUnits='userSpaceOnUse'
                          >
                            <stop stopColor='#fff' />
                            <stop offset={1} stopColor='#fff' stopOpacity={0} />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                    <div
                      className='hidden absolute top-0 right-0 bottom-0 w-1/2 pointer-events-none lg:block'
                      aria-hidden='true'
                    >
                      <svg
                        className='absolute inset-0 w-full h-full'
                        width={160}
                        height={678}
                        viewBox='0 0 160 678'
                        fill='none'
                        preserveAspectRatio='xMidYMid slice'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          d='M-161 679.107L546.107-28l707.103 707.107-707.103 707.103L-161 679.107z'
                          fill='url(#linear3)'
                          fillOpacity='.1'
                        />
                        <defs>
                          <linearGradient
                            id='linear3'
                            x1='192.553'
                            y1='325.553'
                            x2='899.66'
                            y2='1032.66'
                            gradientUnits='userSpaceOnUse'
                          >
                            <stop stopColor='#fff' />
                            <stop offset={1} stopColor='#fff' stopOpacity={0} />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                    <h3 className='text-lg font-medium text-white'>
                      Contact information
                    </h3>
                    <p className='mt-6 text-base text-teal-50 max-w-3xl'>
                      At SFF, we make fitness fun and easy. We have
                      best-in-class trainers & offer group workouts ranging from
                      yoga to Boxing. Our workouts can be done both at the
                      center and at home with the help from us.
                    </p>
                    <dl className='mt-8 space-y-6'>
                      <dt>
                        <span className='sr-only'>Phone number</span>
                      </dt>
                      <dd className='flex text-base text-teal-50'>
                        <a href="href='tel:+91 6303767594">
                          <PhoneIcon
                            className='flex-shrink-0 w-6 h-6 text-teal-200'
                            aria-hidden='true'
                          />
                        </a>
                        <a href='tel:+91 6303767594' className='ml-3'>
                          +91 6303767594
                        </a>
                      </dd>
                      <dt>
                        <span className='sr-only'>Email</span>
                      </dt>
                      <dd className='flex text-base text-teal-50'>
                        <a href='mailto:soldiersfitfactory@gmail.com'>
                          <MailIcon
                            className='flex-shrink-0 w-6 h-6 text-teal-200'
                            aria-hidden='true'
                          />
                        </a>
                        <a
                          href='mailto:soldiersfitfactory@gmail.com'
                          className='ml-3'
                        >
                          soldiersfitfactory@gmail.com
                        </a>
                      </dd>
                    </dl>
                    <ul role='list' className='mt-8 flex space-x-12'>
                      <li>
                        <a
                          className='text-teal-200 hover:text-teal-100'
                          href='#'
                        >
                          <span className='sr-only'>Facebook</span>
                          <BsInstagram size={20} />
                        </a>
                      </li>
                      {/* <li>
                      <a className='text-teal-200 hover:text-teal-100' href='#'>
                        <span className='sr-only'>GitHub</span>
                        <svg
                          className='w-7 h-7'
                          aria-hidden='true'
                          fill='currentColor'
                          viewBox='0 0 24 24'
                        >
                          <path
                            fillRule='evenodd'
                            d='M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z'
                            clipRule='evenodd'
                          />
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a className='text-teal-200 hover:text-teal-100' href='#'>
                        <span className='sr-only'>Twitter</span>
                        <svg
                          className='w-7 h-7'
                          aria-hidden='true'
                          fill='currentColor'
                          viewBox='0 0 24 24'
                        >
                          <path d='M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84' />
                        </svg>
                      </a>
                    </li> */}
                    </ul>
                  </div>

                  {/* Contact form */}
                  <div className='py-10 px-6 sm:px-10 lg:col-span-2 xl:p-12  overflow-auto'>
                    <h3 className='text-2xl font-medium text-warm-gray-900'>
                      Our Address
                    </h3>
                    <iframe
                      src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2091.2354729256167!2d78.55521457309266!3d17.37576107501175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99849cf7aa11%3A0x13dcb3331b4d7b8e!2sSoldiers%20Fit%20Factory!5e0!3m2!1sen!2sin!4v1640248879386!5m2!1sen!2sin'
                      width='720'
                      height='450'
                      className='border-0 mt-5'
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Contact grid */}
          {/* <section aria-labelledby='offices-heading'>
          <div className='max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8'>
            <h2
              id='offices-heading'
              className='text-3xl font-extrabold text-warm-gray-900'
            >
              Our offices
            </h2>
            <p className='mt-6 text-lg text-warm-gray-500 max-w-3xl'>
              Varius facilisi mauris sed sit. Non sed et duis dui leo, vulputate
              id malesuada non. Cras aliquet purus dui laoreet diam sed lacus,
              fames.
            </p>
            <div className='mt-10 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4'>
              {offices.map((office) => (
                <div key={office.id}>
                  <h3 className='text-lg font-medium text-warm-gray-900'>
                    {office.city}
                  </h3>
                  <p className='mt-2 text-base text-warm-gray-500'>
                    {office.address.map((line) => (
                      <span key={line} className='block'>
                        {line}
                      </span>
                    ))}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section> */}
        </main>
        <Footer />
      </div>
    </React.Fragment>
  );
}
