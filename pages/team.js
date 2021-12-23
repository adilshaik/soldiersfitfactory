import React from 'react';
import Head from 'next/head';
import { Nav } from '../components/layout/Nav';
import { Team } from '../components/Team';
import { Footer } from '../components/layout/Footer';
import { Positions } from '../components/Positions';

const team = () => {
  return (
    <div>
      <Head>
        <title>SFF | Team</title>
        <meta
          name='description'
          content='Our workouts can be done both at the center and at home with the help from us.'
        />
        <link rel='icon' href='/favicon.png' />
      </Head>
      <Nav />
      <main className='mt-32'>
        <Team />
        <Positions />
      </main>
      <Footer />
    </div>
  );
};

export default team;
