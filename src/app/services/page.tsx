'use client';
import { ReactElement, useEffect } from 'react';
import { MotionSlider } from '@/components/motion-slider';
import { cabinHeavy, cabinLight } from '@/utils/fonts';
import ServiceCard, { ServiceImageProps } from '@/components/service-card';

export default function Services(): ReactElement {
  const services: ServiceImageProps[] = [
    {
      imageSrc: 'service-icons/service-frontend.png',
      title: 'Frontend Development',
      subtitle: 'Crafting responsive designs and interactive features to enhance user experience.'
    },
    {
      imageSrc: 'service-icons/service-backend.png',
      title: 'Backend Development',
      subtitle: 'Building systems focused on efficient data processing, API integration, and dynamic server-side logic.'
    },
    {
      imageSrc: 'service-icons/service-database.png',
      title: 'Database Management',
      subtitle: 'Designing databases with integrity, performance and scalability to support application needs.'
    },
    {
      imageSrc: 'service-icons/service-devops.png',
      title: 'DevOps Services',
      subtitle: 'Implementing automated CI/CD pipelines for efficient software lifecycle management.'
    },
    {
      imageSrc: 'service-icons/service-telemetry.png',
      title: 'System Telemetry',
      subtitle: 'Integrating telemetry solutions to track user interactions and system performance over time.'
    },
  ];

  return (
    <div className='relative flex flex-col sm:mx-auto'>
      <div className={ 'mb-12' }>
        {/* TITLE SECTION */ }
        <div className='mx-8 md:mx-auto max-w-screen-md drop-shadow-in-top'>
          <MotionSlider className={ `text-sky-100 text-8xl pb-5 ${ cabinHeavy.className }` } delay={ 0 }>
            <p>services</p>
          </MotionSlider>

          {/* SUBTITLE SECTION */ }
          <MotionSlider className={ `text-sky-200 text-3xl pb-12 -mt-7 ${ cabinLight.className }` } delay={ 0.2 }>
            <p className='break-words'>
              I craft exceptional web experiences built for tomorrow.
            </p>
            <div className="border-t border-gray-400 mt-2 w-full"></div>
          </MotionSlider>

          {/* BODY TEXT SECTION */ }
          <MotionSlider className={ `text-xl mb-4 bg-gradient-to-r from-sky-200 to-sky-300 bg-clip-text text-transparent ${ cabinLight.className }` } delay={ 0.4 }>
            <p className='break-words gradient-text'>
              Delivering comprehensive and secure full stack solutions in web development, from sophisticated frontends
              to robust backends and scalable distributed systems.
            </p>
          </MotionSlider>

          <MotionSlider className={ `text-sky-300 text-xl ${ cabinLight.className }` } delay={ 0.6 }>
            <p className='break-words gradient-text'>
              Ready to take your web presence to new heights? Send me a message on Upwork — or contact me directly — for
              a personalized consultation and expert web development services tailored to your vision.
            </p>
          </MotionSlider>
        </div>
      </div>

      {/* SERVICES SECTION */ }
      <div className={ 'w-full bg-gradient-to-b from-slate-200 to-slate-400 h-fit shadow-[inset_0_6px_20px_rgba(0,0,0,0.6)] pb-8' }>

        {/* SERVICES CONTAINER */ }
        <div className={ 'grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 justify-items-center max-w-screen-lg mx-auto mt-7 gap-y-10' }>

          {/* SERVICE CARDS */ }
          { services.map((service: ServiceImageProps, index: number): any => {
              return (
                <MotionSlider key={ index } className={''} delay={ 0.6 + (index * 0.3) }>
                  <ServiceCard imageSrc={ service.imageSrc } title={ service.title } subtitle={ service.subtitle } />
                </MotionSlider>
              )
            })
          }

        </div>
      </div>
    </div>
  )
}