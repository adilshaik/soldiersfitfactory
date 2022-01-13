import React from 'react';
import Head from 'next/head';
import { Nav } from '../components/layout/Nav';
import { Footer } from '../components/layout/Footer';
import { ImageGallery } from '../components/ImageGallery';
import { Slider } from '../components/Slider';

const gallery = () => {
  return (
    <div>
      <Head>
        <title>SFF | Gallery</title>
        <meta
          name='description'
          content='Our workouts can be done both at the center and at home with the help from us.'
        />
        <link rel='icon' href='/favicon.png' />
      </Head>

      <Nav />
      <main className='mt-10'>
        {/* <ImageGallery /> */}
        <Slider />
      </main>
      <Footer />
    </div>
  );
};

export default gallery;
