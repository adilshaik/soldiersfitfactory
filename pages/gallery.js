import React from 'react';
import Head from 'next/head';
import { Nav } from '../components/layout/Nav';
import { Footer } from '../components/layout/Footer';
import { ImageGallery } from '../components/ImageGallery';

const gallery = () => {
  return (
    <div>
      <Head>
        <title>SFF | Gallery</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Nav />
      <main className='mt-10'>
        <ImageGallery />
      </main>
      <Footer />
    </div>
  );
};

export default gallery;
