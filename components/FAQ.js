import { Disclosure } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/outline';

const faqs = [
  {
    question: "What's Soldiers Fit Factory?",
    answer:
      'At SFF, we make fitness fun and easy. We have best-in-class trainers & offer group workouts ranging from yoga to Boxing. Our workouts can be done both at the center and at home with the help from us.',
  },
  {
    question: 'What kind of workout formats are available at SFF?',
    answer: `At SFF, you’ll find a wide variety of workout formats, such as - Workout, Strenth Training, Boxing, Dance Fitness and, Yoga. These workouts focus on strength, muscle endurance, flexibility, stamina & balance. So mix it up, pick formats that help you achieve your personal fitness goals. We can assure you that your sessions will be more fun, interesting, and less monotonous.  You can find more info about all our workout formats here. If you prefer to workout at home, we've got you covered! You can follow DIY and LIVE videos that are meant for both beginner & advanced levels and focus on building strength, stamina & mobility.`,
  },
  {
    question: 'How personal training will be given?',
    answer: `We track your progress in our tabs and give the best facility you can ever get.`,
  },
  {
    question: 'What safety precautions will be taken at the center?',
    answer: `To ensure safety of members as well as our employees, we have made the following changes in the center facilities: Temperature & Blood oxygen level checks: Our center manager will check your body temperature, blood oxygen levels & status on Aarogya Setu app before entering the center. Please stand in the queue of boxes marked in front of your center & wait for your turn  Limited access to center facilities: Lockers and shower facilities will not be available. You can use washrooms but please wait in the queue for your turn. We request you to not bring any valuables to the center  Designated workout spots: To ensure social distancing, every member will be assigned a workout station number. Please stand in your designated station number only.  Frequent sanitisation: All the workouts will be of 40 mins duration. Equipment & workout floor will be sanitised after every session.  Weights & resistance bands will be placed in your station number. You can also self sanitise the equipment before using`,
  },
  {
    question: 'Can I take a free trial session before I decide to buy a pass?',
    answer: `Absolutely! You get just one.`,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export const FAQ = () => {
  return (
    <div className='bg-gray-50'>
      <div className='max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8'>
        <div className='max-w-3xl mx-auto divide-y-2 divide-gray-200'>
          <h2 className='text-center text-3xl font-extrabold text-gray-900 sm:text-4xl'>
            Frequently asked questions
          </h2>
          <dl className='mt-6 space-y-6 divide-y divide-gray-200'>
            {faqs.map((faq) => (
              <Disclosure as='div' key={faq.question} className='pt-6'>
                {({ open }) => (
                  <>
                    <dt className='text-lg'>
                      <Disclosure.Button className='text-left w-full flex justify-between items-start text-gray-400'>
                        <span className='font-medium text-gray-900'>
                          {faq.question}
                        </span>
                        <span className='ml-6 h-7 flex items-center'>
                          <ChevronDownIcon
                            className={classNames(
                              open ? '-rotate-180' : 'rotate-0',
                              'h-6 w-6 transform'
                            )}
                            aria-hidden='true'
                          />
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as='dd' className='mt-2 pr-12'>
                      <p className='text-base text-gray-500'>{faq.answer}</p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};
