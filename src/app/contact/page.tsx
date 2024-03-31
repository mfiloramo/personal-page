'use client';
import { ReactElement, ReactNode } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { cabinHeavy, cabinLight } from '@/utilities/fonts';
import { motion } from 'framer-motion';
import FancyDivider from '@/components/fancy-divider';
import SendMessage from '@/components/send-message';
import { MotionSlider } from '@/components/motion-slider';
import { StackButtonProps } from '@/interfaces/StackButtonProps.interface';
import pageContent from '@/data/contact/contact-data.json';
import SectionDivider from '@/components/section-divider';

export default function Contact(): ReactElement {

  return (
    <div className='flex flex-col'>
      { /* TOP CONTAINER */ }
      <div className={ 'pt-10 mx-8 md:mx-auto max-w-screen-md mb-10' }>
        { /* TITLE */ }
        <MotionSlider className={ `text-sky-100 text-8xl ${ cabinHeavy.className }` } delay={ 0 }>
          <div>contact</div>
        </MotionSlider>

        { /* SUBTITLE */ }
        <MotionSlider className={ `text-sky-200 text-3xl pb-12 -mt-2 ${ cabinLight.className }` } delay={ 0.2 }>
          Let&apos;s connect and build something awesome.

          {/* PAGE DIVIDER */ }
          <div className="border-t border-gray-400 mt-2 w-full"></div>
        </MotionSlider>

        { /* BODY TEXT */ }
        <MotionSlider className='gradient-text-lightblue text-xl' delay={ 0.4 }>
          <div className='break-words'>
            Got a project in mind or considering software solutions? Reach out and let&apos;s bring your vision to life. Whether it&apos;s a groundbreaking idea or a unique challenge, I&apos;m here to help you bring your digital aspirations to life.
          </div>
        </MotionSlider>
      </div>

      {/* CONTACT BUTTON CONTAINER */ }
      <div className={ 'flex justify-center mx-auto items-center w-full max-w-screen-md mb-4' }>
        <div className={ 'grid grid-cols-2 sm:grid-cols-3 sm:gap-y-0 gap-y-2 gap-16 md:grid-cols-4 justify-center' }>

          {/* CONTACT BUTTONS */ }
          {
            pageContent.map((button: StackButtonProps, index: number): ReactNode => (
              <MotionSlider className={ '' } delay={ (pageContent.length - index) * 0.2 } key={ index }>
                <motion.div
                  initial={ { x: -100, opacity: 0 } }
                  animate={ { x: 0, opacity: 1, filter: 'blur(0px)' } }
                  transition={ { duration: 0.1 } }
                  className={ 'py-3 w-32 z-20' }
                  whileHover={ { scale: 1.2 } }
                  whileTap={ { scale: 1, borderRadius: "100%" } }
                >
                  <Link href={ button.link }>
                    <Image
                      className={ 'mx-auto h-auto w-36 p-2 cursor-pointer z-10 drop-shadow-[0_6px_6px_rgba(0,0,0,0.7)]' }
                      src={ `/${ button.imageSource }` }
                      alt={ 'contact-image' }
                      height={ 225 }
                      width={ 225 }
                    />
                  </Link>
                </motion.div>
              </MotionSlider>
            ))
          }
        </div>
      </div>

      {/* SEND MESSAGE SECTION */ }
      <div className={ 'mt-7 h-fit w-full bg-lightblue-grid-background section-shadow p-4' }>

        {/* TITLE */}
        <MotionSlider
          className={ `text-sky-200 text-3xl pb-6 mt-4 mx-auto max-w-screen-md  ${ cabinLight.className }` }
          delay={ 1 }>
          <div className={ `text-center  ${ cabinLight.className }` }>Send a Message</div>
          <FancyDivider />
        </MotionSlider>

        {/* SEND-MESSAGE COMPONENT */}
        <MotionSlider className={ '' } delay={ 1.4 }>
          <SendMessage />
        </MotionSlider>
      </div>
    </div>
  )
}