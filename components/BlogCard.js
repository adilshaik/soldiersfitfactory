import React from 'react';
import Link from 'next/link';

export const BlogCard = (props) => {
  return (
    <Link href={`/blogs/${props.post.id}`}>
      <div
        key={props.post.title}
        className='flex flex-col rounded-lg shadow-lg overflow-hidden'
      >
        <div className='flex-shrink-0'>
          <img
            className='h-48 w-full object-cover'
            src={props.post.image}
            alt='blog-image'
          />
        </div>
        <div className='flex-1 bg-white p-6 flex flex-col justify-between'>
          <div className='flex-1'>
            <p className='text-sm font-medium text-green-600'>
              <span>{props.post.category}</span>
            </p>
            <Link href={`/blogs/${props.post.id}`}>
              <div className='cursor-pointer'>
                <p className='text-xl font-semibold text-gray-900 block mt-2'>
                  {props.post.title}
                </p>
                <p className='mt-3 text-base text-gray-500'>
                  {props.post.shortDesc}
                </p>
              </div>
            </Link>
          </div>
          <div className='mt-2 flex items-center'>
            <div className='flex space-x-1 text-sm text-gray-500'>
              <span>{props.post.readingTime} read</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};
