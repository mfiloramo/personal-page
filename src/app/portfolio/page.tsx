'use client';
import { ReactElement, ReactNode } from 'react';
import { cabinHeavy, cabinLight } from '@/utilities/fonts';
import { MotionSlider } from '@/components/motion-slider';
import { motion } from 'framer-motion';
import { generateHoverAnimation } from '@/utilities/animations';
import PortfolioCard from '@/components/portfolio-card';
import { PortfolioCardPropsInterface } from '@/interfaces/PortfolioCardProps.interface';
import pageContent from '../../data/portfolio/portfolio-data.json'

export default function Portfolio(): ReactElement {

  return (
    <div className='pt-10 relative flex flex-col sm:mx-auto'>

      {/* TITLE SECTION */ }
      <div className='mx-8 mb-2 md:mx-auto max-w-screen-md drop-shadow-in-top'>
        <MotionSlider className={ `text-sky-100 text-8xl pb-5 ${ cabinHeavy.className }` } delay={ 0 }>
          <div>portfolio</div>
        </MotionSlider>

        {/* SUBTITLE SECTION */ }
        <MotionSlider className={ `text-sky-200 text-3xl pb-12 -mt-2 ${ cabinLight.className }` } delay={ 0.2 }>
          <div className='break-words'>
            Check out my latest work in full stack web development.
          </div>
          <div className="border-t border-gray-400 mt-2 w-full"></div>
        </MotionSlider>

        {/* BODY TEXT SECTION */ }
        <MotionSlider className={ `gradient-text-lightblue text-xl ${ cabinLight.className }` } delay={ 0.4 }>
          <div className='break-words'>
            I&apos;ve showcased a spectrum of projects, from practical and responsive tools to dynamic websites and applications — and more. Each is uniquely tailored to meet the diverse needs of its users.
          </div>
        </MotionSlider>
      </div>

      {/* WORK SHOWCASE CONTAINER */ }
      <div className='mt-10 bg-gradient-to-r from-sky-950 via-blue-950 to-indigo-950 section-shadow'>

        {/* BUTTON CONTAINER */ }
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-fit h-fit z-20 mt-6 mb-12 mx-auto px-12 sm:px-0 max-w-screen-lg'>

          {/* PROJECT CARDS */ }
          { pageContent.map((card: PortfolioCardPropsInterface, index: number): ReactNode => {
              return (
                <motion.a
                  key={ index }
                  href={ card.urlPath }
                  whileHover={ generateHoverAnimation }
                  className={ 'p-3' }
                  whileTap={ { scale: 0.9, rotate: 0, borderRadius: '100%' } }
                >
                  <MotionSlider className={ '' } delay={ 0.2 * index }>
                    <PortfolioCard image={ card.image } title={ card.title } subtitle={ card.subtitle } />
                  </MotionSlider>
                </motion.a>
            )}) }
        </div>
      </div>
    </div>
  );
}
