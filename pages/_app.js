import 'tailwindcss/tailwind.css';
import '../styles/globals.css';
import Aos from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from 'react';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    Aos.init({
      offset: 120, // offset (in px) from the original trigger point
      delay: 0, // values from 0 to 3000, with step 50ms
      duration: 2000, // values from 0 to 3000, with step 50ms
      easing: 'ease', // default easing for AOS animations
      once: true, // whether animation should happen only once - while scrolling down
      anchorPlacement: 'top-bottom',
    });
  }, []);
  return <Component {...pageProps} />;
}

export default MyApp;
