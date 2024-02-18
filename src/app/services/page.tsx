'use client';
import { ReactElement, ReactNode } from 'react';
import { cabinHeavy, cabinLight } from '@/utilities/fonts';
import ServiceCard from '@/components/service-card';
import { MotionSlider } from '@/components/motion-slider';
import { motion } from 'framer-motion';
import { ServiceImagePropsInterface } from '@/interfaces/ServiceImageProps.interface';
import pageContent from '../../data/services/services-data.json'

export default function Services(): ReactElement {

  return (
    <div className='pt-10 mb-12 relative flex flex-col sm:mx-auto overflow-x-hidden'>
      <div className={ 'mb-12' }>

        {/* TITLE SECTION */ }
        <div className='mx-8 md:mx-auto max-w-screen-md drop-shadow-in-top'>
          <MotionSlider className={ `text-sky-100 text-8xl pb-5 ${ cabinHeavy.className }` } delay={ 0 }>
            <p>
              services
            </p>
          </MotionSlider>

          {/* SUBTITLE SECTION */ }
          <MotionSlider className={ `text-sky-200 text-3xl pb-12 -mt-7 ${ cabinLight.className }` } delay={ 0.2 }>
            <p className='break-words'>
              I craft exceptional web experiences built for tomorrow.
            </p>

            {/* PAGE DIVIDER */ }
            <div className="border-t border-gray-400 mt-2 w-full"></div>
          </MotionSlider>

          {/* BODY TEXT SECTION */ }
          <MotionSlider
            className={ `text-xl mb-4 bg-gradient-to-r from-sky-200 to-sky-300 bg-clip-text text-transparent ${ cabinLight.className }` }
            delay={ 0.4 }>
            <p className='break-words gradient-text-lightblue'>
              Delivering comprehensive, performant and secure full stack solutions in web development, from sophisticated frontends to robust backends and scalable distributed systems.


            </p>
          </MotionSlider>

          <MotionSlider className={ `text-xl mb-4 bg-gradient-to-r from-sky-200 to-sky-300 bg-clip-text text-transparent ${ cabinLight.className }` } delay={ 0.6 }>
            <p className='break-words gradient-text-lightblue'>
              Ready to take your web presence to new heights? Contact me for a personalized consultation and expert web development services tailored to your vision.
            </p>
          </MotionSlider>
        </div>
      </div>

      {/* SERVICES SECTION */ }
      <div className={ 'w-full bg-gradient-to-b from-slate-200 to-slate-400 h-fit section-shadow pb-8' }>

        {/* SERVICES CARD CONTAINER */ }
        <div className={ 'grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 justify-items-center max-w-screen-lg mx-auto mt-7 gap-y-10' }>

          {/* SERVICE CARDS */ }
          {
            pageContent.map((service: ServiceImagePropsInterface, index: number): ReactNode => (
              <motion.div
                key={ index }
                className="relative p-3 z-20"
                initial={ { x: -130, opacity: 0, filter: 'blur(4px)' } }
                animate={ { x: 0, opacity: 1, filter: 'blur(0px)' } }
                transition={ { duration: 0.5, delay: (pageContent.length - index) * 0.2 } }
              >
                <ServiceCard imageSrc={ service.imageSrc } title={ service.title } subtitle={ service.subtitle } />
              </motion.div>
            ))
          }
        </div>
      </div>
    </div>
  )
}