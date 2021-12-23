import Head from 'next/head';
import { Hero } from '../components/Hero';

export default function Home() {
  return (
    <div>
      <Head>
        <title>SFF | Cafit</title>
        <meta
          name='description'
          content='Our workouts can be done both at the center and at home with the help from us.'
        />
        <link rel='icon' href='/favicon.png' />
      </Head>

      <main>
        <Hero />
        <h1
          data-aos='fade-down'
          data-aos-duration='2000'
          className='text-center font-black text-gray-800 text-7xl my-20'
        >
          Coming Soon...
        </h1>
      </main>
    </div>
  );
}
