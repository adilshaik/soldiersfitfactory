import React from 'react';

const workouts = [
  {
    name: 'Yoga',
    imageUrl: '/workouts/yoga.png',
  },
  {
    name: 'Boxing',
    imageUrl: '/workouts/boxing.png',
  },
  {
    name: 'Zumba',
    imageUrl: '/workouts/zumba.png',
  },
  {
    name: 'Strength Training',
    imageUrl: '/workouts/strengthandtraining.jpg',
  },
  {
    name: 'Calisthenics',
    imageUrl: '/workouts/calisthenics.jpg',
  },
];

export const Workouts = () => {
  return (
    <div className='bg-white'>
      <div className='mx-auto py-10 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24'>
        <div className='space-y-12'>
          <div className='space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none'>
            <h2 className='text-3xl font-extrabold tracking-tight sm:text-4xl'>
              Our Workouts
            </h2>
            <p className='text-xl text-gray-500'>
              Success usually comes to those who are too busy to be looking for
              it.
            </p>
          </div>
          <ul
            role='list'
            className='space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-3 lg:gap-x-8'
          >
            {workouts.map((workout) => (
              <li key={workout.name}>
                <div className='space-y-4'>
                  <div className='aspect-w-3 aspect-h-2'>
                    <img
                      className='object-cover shadow-lg rounded-lg'
                      src={workout.imageUrl}
                      alt=''
                    />
                  </div>

                  <div className='space-y-2'>
                    <div className='text-lg leading-6 font-medium space-y-1'>
                      <p className='text-indigo-600'>{workout.name}</p>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
