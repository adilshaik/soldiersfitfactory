import React from 'react';
import { Nav } from '../components/layout/Nav';
import Head from 'next/head';
import { Sale } from '../components/Sale';
import { Branding } from '../components/Branding';
import { FAQ } from '../components/FAQ';
import { Workouts } from '../components/Workouts';
import Quote from '../components/Quote';
import { Footer } from '../components/layout/Footer';
import { FreeTrial } from '../components/FreeTrial';

const index = () => {
  return (
    <div>
      <Head>
        <title>Soldiers Fit Factory</title>
        <meta
          name='description'
          content='Our workouts can be done both at the center and at home with the help from us.'
        />
        <link rel='icon' href='/favicon.png' />
      </Head>

      <main className='mt-20'>
        <Nav />
        {/* <Sale /> */}
        <Branding />
        <Workouts />
        <FreeTrial />
        <Quote />
        <FAQ />
        <Footer />
      </main>
    </div>
  );
};

export default index;
