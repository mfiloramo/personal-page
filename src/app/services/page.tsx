'use client';
import { ReactElement, ReactNode } from 'react';
import { motion } from 'framer-motion';
import ServiceCard from '@/components/service-card';
import { ServiceImagePropsInterface } from '@/interfaces/ServiceImageProps.interface';
import BasePageText from '@/components/base-page-text';
import { BasePageTextProps } from '@/interfaces/BasePageTextProps.interface';
import pageContent from '@/data/services/services-data.json'

export default function Services(): ReactElement {
  const { title, subtitle, bodyText }: BasePageTextProps = pageContent.basePageText
  const services: ServiceImagePropsInterface[] = pageContent.services;

  return (
    <div className='relative flex flex-col sm:mx-auto'>

      {/* BASE PAGE TEXT */}
      <BasePageText
        title={ title }
        subtitle={ subtitle }
        bodyText={ bodyText }
      />


      {/* SERVICES SECTION */ }
      <div className={ 'w-full bg-gradient-to-b from-slate-200 to-slate-400 h-fit section-shadow pb-8' }>

        {/* SERVICES CARD CONTAINER */ }
        <div className={ 'grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 justify-items-center max-w-screen-lg mx-auto mt-7 gap-y-1' }>

          {/* SERVICE CARDS */ }
          { services.map((service: ServiceImagePropsInterface, index: number): ReactNode => (
              <motion.div
                key={ index }
                className='relative p-3 z-20'
                initial={ { x: -130, opacity: 0, filter: 'blur(4px)' } }
                animate={ { x: 0, opacity: 1, filter: 'blur(0px)' } }
                transition={ { duration: 0.5, delay: (services.length - index) * 0.2 } }
              >
                <ServiceCard
                  imageSrc={ service.imageSrc }
                  title={ service.title }
                  subtitle={ service.subtitle }
                />
              </motion.div>
            )) }
        </div>
      </div>
    </div>
  )
}