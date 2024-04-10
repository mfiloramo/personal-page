'use client';
import { ReactElement, ReactNode } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { cabinHeavy, cabinLight } from '@/utilities/fonts';
import { motion } from 'framer-motion';
import FancyDivider from '@/components/fancy-divider';
import SendMessage from '@/components/send-message';
import { MotionSlider } from '@/components/motion-slider';
import BasePageText from '@/components/base-page-text';
import { StackButtonProps } from '@/interfaces/StackButtonProps.interface';
import { BasePageTextProps } from '@/interfaces/BasePageTextProps.interface';
import pageContent from '@/data/contact/contact-data.json';

export default function Contact(): ReactElement {
  const { title, subtitle, bodyText }: BasePageTextProps = pageContent.basePageText
  const contactLinks: any = pageContent.contactLinks;

  return (
    <div className='relative flex flex-col sm:mx-auto'>

      {/* BASE PAGE TEXT */}
      <BasePageText
        title={ title }
        subtitle={ subtitle }
        bodyText={ bodyText }
      />

      {/* CONTACT BUTTON CONTAINER */ }
      <div className={ 'flex justify-center mx-auto items-center w-full max-w-screen-md' }>
        <div className={ 'grid grid-cols-2 sm:grid-cols-3 sm:gap-y-0 gap-y-2 gap-16 md:grid-cols-4 justify-center' }>

          {/* CONTACT BUTTONS */ }
          {
            contactLinks.map((button: StackButtonProps, index: number): ReactNode => (
              <MotionSlider className={ '' } delay={ (contactLinks.length - index) * 0.2 } key={ index }>
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