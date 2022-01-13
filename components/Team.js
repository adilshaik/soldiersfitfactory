import { MailIcon, PhoneIcon } from '@heroicons/react/solid';
import React from 'react';
import { BsInstagram } from 'react-icons/bs';

const people = [
  {
    name: 'Ansari',
    instaUrl: '',
    role: 'Owner',
    email: 'janecooper@example.com',
    telephone: '7891886627',
    imageUrl: '/team/ansari.png',
  },
  {
    name: 'Akheel',
    instaUrl: 'https://www.instagram.com/the.protein.sheik/',
    role: 'Owner',
    email: 'janecooper@example.com',
    telephone: '9177978660',
    imageUrl: '/team/akheel.jpg',
  },

  {
    name: 'Salman',
    instaUrl: 'https://www.instagram.com/__salmanfarsi/',
    role: 'Trainer',
    email: 'janecooper@example.com',
    telephone: '8639731670',
    imageUrl: '/team/salman.png',
  },
  {
    name: 'Jawad',
    instaUrl: 'https://www.instagram.com/jawad_fitness_07/',
    role: 'Trainer',
    email: 'janecooper@example.com',
    telephone: '7995227816',
    imageUrl: '/team/jawad.jpg',
  },
  {
    name: 'Fatima',
    instaUrl: 'https://www.instagram.com/zahara_ali_khan/',
    role: 'Trainer',
    email: 'janecooper@example.com',
    telephone: '8328265227',
    imageUrl: '/team/fatima.jpg',
  },
];

export const Team = () => {
  return (
    <React.Fragment>
      <div className='max-w-7xl mx-auto my-10'>
        <div className='text-center space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none'>
          <h2 className='text-3xl font-extrabold tracking-tight sm:text-4xl'>
            Our Team
          </h2>
          <p className='text-xl text-gray-500'>
            Passionate team who are working to fullfil their dreams.
          </p>
        </div>

        <ul
          role='list'
          className='mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'
        >
          {people.map((person) => (
            <li
              key={person.email}
              className='col-span-1 flex flex-col text-center bg-white rounded-lg shadow-xl divide-y divide-gray-200'
            >
              <div className='flex-1 flex flex-col p-5'>
                <img
                  className='w-72 h-44 object-cover flex-shrink-0 mx-auto rounded-md'
                  src={person.imageUrl}
                  alt=''
                />
                <h3 className='mt-6 text-gray-900 uppercase tracking-wider font-bold text-lg font-medium'>
                  {person.name}
                </h3>
              </div>
              <div>
                <div className='-mt-px flex divide-x divide-gray-200'>
                  <div className='w-0 flex-1 flex hover:cursor-pointer '>
                    <a
                      href={person.instaUrl}
                      className='relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-bl-lg hover:text-gray-500'
                    >
                      <BsInstagram
                        className='w-5 h-5 text-gray-400'
                        aria-hidden='true'
                      />
                      <span className='ml-3'>Instagram</span>
                    </a>
                  </div>
                  <div className='-ml-px w-0 flex-1 flex'>
                    <a
                      href={`tel:${person.telephone}`}
                      className='relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-br-lg hover:text-gray-500'
                    >
                      <PhoneIcon
                        className='w-5 h-5 text-gray-400'
                        aria-hidden='true'
                      />
                      <span className='ml-3'>Call</span>
                    </a>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </React.Fragment>
  );
};
