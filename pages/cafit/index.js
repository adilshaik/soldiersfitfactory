import Head from 'next/head';
import { Hero } from '../../components/cafit/Hero';
import { ProductList } from '../../components/cafit/ProductList';

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
        <ProductList />
      </main>
    </div>
  );
}
