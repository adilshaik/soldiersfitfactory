import React, { useState, useEffect } from 'react';
const data = [
  {
    id: 1,
    image: '/gallery/gallery1.jpeg',
  },
  {
    id: 2,
    image: '/gallery/gallery2.jpeg',
  },
  {
    id: 3,
    image: '/gallery/gallery3.jpeg',
  },
  {
    id: 4,
    image: '/gallery/gallery4.jpeg',
  },
  {
    id: 5,
    image: '/gallery/gallery5.jpeg',
  },
  {
    id: 6,
    image: '/gallery/gallery6.jpeg',
  },
  {
    id: 7,
    image: '/gallery/gallery7.jpeg',
  },
  {
    id: 8,
    image: '/gallery/gallery8.jpeg',
  },
  {
    id: 9,
    image: '/gallery/gallery9.jpeg',
  },
];
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';

export const Slider = () => {
  const [people, setPeople] = useState(data);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = people.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, people]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 3000);

    return () => {
      clearInterval(slider);
    };
  }, [index]);
  return (
    <React.Fragment>
      <main>
        <section className='relative w-3/4 mx-auto flex justify-center items-center h-screen text-center overflow-hidden'>
          {people.map((person, personIndex) => {
            const { id, image, name, title, quote } = person;

            let position = 'nextSlide';
            if (personIndex === index) {
              position = 'activeSlide';
            }

            if (
              personIndex === index - 1 ||
              (index === 0 && personIndex === people.length - 1)
            ) {
              position = 'lastSlide';
            }

            return (
              <article
                key={id}
                className={`absolute w-full p-12 activeSlide transition duration-1000 ease-in-out ${position}`}
              >
                <img
                  className='height mx-auto w-11/12 object-cover shadow-2xl'
                  src={image}
                  alt={name}
                />
              </article>
            );
          })}
          <button
            onClick={() => setIndex(index - 1)}
            className='absolute top-84 bg-gray-500 text-2xl rounded-sm text-white grid place-items-center w-18 left-0 transform -translate-y-2/4 hover:bg-yellow-600 transition duration-500 ease-in-out'
          >
            <FiChevronLeft />
          </button>
          <button
            onClick={() => setIndex(index + 1)}
            className='absolute top-84 bg-gray-500 text-2xl rounded-sm text-white grid place-items-center w-18 right-0 transform -translate-y-2/4 hover:bg-yellow-600 transition duration-500 ease-in-out'
          >
            <FiChevronRight />
          </button>
        </section>
      </main>
      <style jsx>{`
        .activeSlide {
          opacity: 1;
          transform: translateX(0);
        }
        .lastSlide {
          opacity: 0;
          transform: translateX(-100%);
        }
        .nextSlide {
          opacity: 0;
          transform: translateX(100%);
        }
        .height {
          height: 500px;
        }
      `}</style>
    </React.Fragment>
  );
};
