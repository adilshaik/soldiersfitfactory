/* This example requires Tailwind CSS v2.0+ */
const people = [
  {
    imageUrl: '/gallery/gallery1.jpeg',
  },
  {
    imageUrl: '/gallery/gallery2.jpeg',
  },
  {
    imageUrl: '/gallery/gallery3.jpeg',
  },
  {
    imageUrl: '/gallery/gallery4.jpeg',
  },
  {
    imageUrl: '/gallery/gallery5.jpeg',
  },
  {
    imageUrl: '/gallery/gallery6.jpeg',
  },
  {
    imageUrl: '/gallery/gallery7.jpeg',
  },
  {
    imageUrl: '/gallery/gallery8.jpeg',
  },
  {
    imageUrl: '/gallery/gallery9.jpeg',
  },
  // More people...
];

export const ImageGallery = () => {
  return (
    <div className='bg-white'>
      <div className='mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24'>
        <div className='space-y-12'>
          <div className='space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none'>
            <h2 className='text-3xl font-extrabold text-center text-gray-800 tracking-tight sm:text-4xl'>
              Gallery
            </h2>
          </div>
          <ul
            role='list'
            className='space-y-4 sm:grid sm:grid-cols-1 sm:gap-6 sm:space-y-0 lg:grid-cols-2 lg:gap-8'
          >
            {people.map((person, index) => (
              <li
                key={person.name}
                className='py-10 bg-gray-800 px-6 text-center rounded-lg xl:px-10 xl:text-left'
                style={{
                  background: 'url(/camo.webp) ,',
                }}
              >
                <div className='space-y-6 xl:space-y-10'>
                  <img
                    className='mx-auto h-72 w-full object-cover rounded-md'
                    src={person.imageUrl}
                    alt=''
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
