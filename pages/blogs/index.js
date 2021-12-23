import Head from 'next/head';
import React, { useState, useEffect } from 'react';
import { BlogCard } from '../../components/BlogCard';
import { Footer } from '../../components/layout/Footer';
import { Nav } from '../../components/layout/Nav';

const blogs = () => {
  const [posts, setPosts] = useState(undefined);
  const grabData = async () => {
    const res = await import(`../../content/blogs/${'content'}.md`);
    const data = res.default;
    setPosts(data.attributes.blogs);
  };
  useEffect(() => {
    grabData();
  }, []);
  if (posts) console.log(posts);
  return (
    <React.Fragment>
      <Head>
        <title>SFF | Blogs</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Nav />
      <main className='mt-10'>
        <div className='relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8'>
          <div className='absolute inset-0'>
            <div className='bg-white h-1/3 sm:h-2/3' />
          </div>
          <div className='relative max-w-7xl mx-auto'>
            <div className='text-center mb-20'>
              <h2 className='text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl'>
                Our blogs
              </h2>
            </div>
            <div className='mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none'>
              {posts && posts.map((post) => <BlogCard post={post} />)}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </React.Fragment>
  );
};

export default blogs;
