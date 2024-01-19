'use client';
import { ReactElement } from 'react';
import { MotionSlider } from '@/components/motion-slider';
import { cabinHeavy, cabinLight } from '@/utils/fonts';
import { motion } from 'framer-motion';
import { StackButtonProps } from '@/interfaces/StackButtonProps';

export default function Contact(): ReactElement {
  const contactItems: any[] = [
    {
      imageSource: 'contact-icons/linkedin-icon.png',
      link: 'https://www.linkedin.com/in/michael-filoramo/'
    },
    {
      imageSource: 'contact-icons/gmail-icon.png',
      link: 'mailto:mlfiloramo@gmail.com'
    },
    {
      imageSource: 'contact-icons/googlevoice-icon.png',
      link: 'https://voice.google.com/u/0/'
    },
    {
      imageSource: 'contact-icons/whatsapp-icon.png',
      link: 'https://www.whatsapp.com/'
    },
    {
      imageSource: 'contact-icons/github-icon.png',
      link: 'https://github.com/mfiloramo'
    }
  ];

  return (
    <div className='flex flex-col'>
      { /* TOP CONTAINER */ }
      <div className={ 'mx-8 md:mx-auto max-w-screen-md mb-10' }>
        { /* TITLE */ }
        <MotionSlider className={ `text-sky-100 text-8xl ${ cabinHeavy.className }` } delay={ 0 }>
          <p>
            contact
          </p>
        </MotionSlider>

        { /* SUBTITLE */ }
        <MotionSlider className={ `text-sky-200 text-3xl pb-12 -mt-2 ${ cabinLight.className }` } delay={ 0.2 }>
          Let's connect and build something awesome.

          {/* PAGE DIVIDER */ }
          <div className="border-t border-gray-400 mt-2 w-full"></div>
        </MotionSlider>

        { /* BODY TEXT */ }
        <MotionSlider className='gradient-text text-xl' delay={ 0.4 }>
          <p className='break-words'>
            Got a project in mind or considering software solutions? Reach out and let's bring your vision to life. Whether it's a groundbreaking idea or a unique challenge, I'm here to help you navigate and realize your digital aspirations.

          </p>
        </MotionSlider>
      </div>

      {/* CONTACT BUTTON CONTAINER */}
      <div className={ 'grid grid-cols-3 -mt-3 sm:grid-cols-4 md:grid-cols-5 md:p-0 sm:mx-auto justify-between w-full max-w-screen-md px-4' }>
        {
          contactItems.map((button: StackButtonProps, index: number) => (
            <MotionSlider className={ 'relative' } delay={ (contactItems.length - index) * 0.2 } key={ index }>
              <motion.div
                initial={ { x: -100, opacity: 0 } }
                animate={{ x: 0, opacity: 1, filter: 'blur(0px)' }}
                transition={{ duration: 0.1 }}
                className={ 'p-3 z-20' }
                whileHover={ { scale: 1.2 } }
                whileTap={ { scale: 1, borderRadius: "100%" } }
              >
                <a href={ button.link } target="_blank" rel="noopener noreferrer">
                  <img className={ 'h-auto w-28 p-2 cursor-pointer' } src={ button.imageSource } alt={ 'img' } />
                </a>
              </motion.div>
            </MotionSlider>
          ))
        }
      </div>
    </div>
  )
}