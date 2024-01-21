'use client';
import { ReactElement, ReactNode } from 'react';
import { MotionSlider } from '@/components/motion-slider';
import { cabinHeavy, cabinLight } from '@/utils/fonts';
import { motion } from 'framer-motion';
import { StackButtonProps } from '@/interfaces/StackButtonProps';
import Divider from '@/components/divider';

export default function Contact(): ReactElement {
  const contactItems: any[] = [
    {
      imageSource: 'images/contact-icons/upwork-icon.png',
      link: 'https://www.upwork.com/freelancers/~01371b6e31042beadc'
    },
    {
      imageSource: 'images/contact-icons/linkedin-icon.png',
      link: 'https://www.linkedin.com/in/michael-filoramo/'
    },
    {
      imageSource: 'images/contact-icons/gmail-icon.png',
      link: 'mailto:mlfiloramo@gmail.com'
    },
    {
      imageSource: 'images/contact-icons/github-icon.png',
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
          Let&apos;s connect and build something awesome.

          {/* PAGE DIVIDER */ }
          <div className="border-t border-gray-400 mt-2 w-full"></div>
        </MotionSlider>

        { /* BODY TEXT */ }
        <MotionSlider className='gradient-text text-xl' delay={ 0.4 }>
          <p className='break-words'>
            Got a project in mind or considering software solutions? Reach out and let&apos;s bring your vision to life.
            Whether it&apos;s a groundbreaking idea or a unique challenge, I&apos;m here to help you navigate and realize your
            digital aspirations.

          </p>
        </MotionSlider>
      </div>

      {/* CONTACT BUTTON CONTAINER */ }
      <div className={ 'grid grid-cols-2 gap-8 md:pr-14 sm:pl-0 pl-4 md:px-0 pr-20 sm:mx-auto -mt-3 sm:grid-cols-3 md:grid-cols-4 md:p-0 justify-between w-full max-w-screen-md mb-4' }>
        {
          contactItems.map((button: StackButtonProps, index: number): ReactNode => (
            <MotionSlider className={ '' } delay={ (contactItems.length - index) * 0.2 } key={ index }>
              <motion.div
                initial={ { x: -100, opacity: 0 } }
                animate={ { x: 0, opacity: 1, filter: 'blur(0px)' } }
                transition={ { duration: 0.1 } }
                className={ 'py-3 w-32 z-20 ml-2 sm:ml-5 sm:mb-2 mb-4' }
                whileHover={ { scale: 1.2 } }
                whileTap={ { scale: 1, borderRadius: "100%" } }
              >
                <a href={ button.link } target="_blank" rel="noopener noreferrer">
                  <img className={ 'first:ml-6 absolute mx-auto h-auto w-36 p-2 cursor-pointer z-10' } src={ button.imageSource }
                       alt={ 'img' } />
                  <div className={'m-5 blur-xl rounded-3xl overflow-hidden bg-black opacity-80 w-16 h-16' }>
                  </div>
                </a>
              </motion.div>
            </MotionSlider>
          ))
        }
      </div>

      <div className={ 'mt-7 h-44 w-full bg-lightblue-grid-background shadow-[inset_0_6px_20px_rgba(0,0,0,0.6)] p-4' }>
        <MotionSlider
          className={ `text-sky-200 text-3xl pb-6 mt-4 mx-auto max-w-screen-md  ${ cabinLight.className }` }
          delay={ 0.8 }>
          <div className={ `text-center  ${ cabinLight.className }` }>Send a Message</div>

        <Divider />
        </MotionSlider>

      </div>
    </div>
  )
}