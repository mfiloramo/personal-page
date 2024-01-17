'use client';
import { ReactElement } from 'react';
import { cabinHeavy, cabinLight } from '@/utils/fonts';
import { MotionSlider } from '@/components/motion-slider';
import { motion } from 'framer-motion';
import { generateHoverAnimation } from '@/utils/animations';
import PortfolioCard from '@/components/portfolio-card';

export default function Portfolio(): ReactElement {
  return (
    <div className='relative flex flex-col w-full mx-8 sm:mx-auto  pt-4'>
      <div className={ 'mx-auto max-w-screen-md drop-shadow-in-top' }>

        { /* TITLE */ }
        <MotionSlider className={ `text-sky-100 text-8xl pb-5 ${ cabinHeavy.className }` } delay={ 0 }>
          <p>
            portfolio
          </p>
        </MotionSlider>

        {/* SUBTITLE */ }
        <MotionSlider className={ `text-sky-200 text-3xl pb-12 -mt-2 ${ cabinLight.className }` } delay={ 0.2 }>
          <p className='break-words'>
            Check out some of my latest work in full stack web development.
          </p>

          {/* GENERIC DIVIDER */ }
          <div className="border-t border-gray-400 mt-2 w-full"></div>

        </MotionSlider>

        {/* BODY TEXT */ }
        <MotionSlider className={ `text-sky-300 text-2xl ${ cabinLight.className }` } delay={ 0.4 }>
          <p className='break-words'>
            I've showcased a spectrum of projects, from practical and responsive tools to dynamic websites and
            applications. Each is uniquely tailored to meet the diverse needs of its users.
          </p>
        </MotionSlider>
      </div>

      {/* WORK SHOWCASE CONTAINER */ }
      <div className={ 'mt-10 bg-gradient-to-r from-sky-950 via-blue-950 to-indigo-950 shadow-[inset_0_6px_20px_rgba(0,0,0,0.6)]' }>
        <MotionSlider delay={ 1 } className={''}>

          {/* LOGO CONTAINER */ }
          <div className={ 'w-full h-fit p-4 z-20 mt-4 mb-12 flex flex-col sm:flex-row justify-between max-w-screen-md mx-auto' }>

            {/* LINGOLINK CARD */ }
            <motion.a
              href={ '/portfolio/lingolink' }
              whileHover={ generateHoverAnimation }
              whileTap={ { scale: 0.8, rotate: -8, borderRadius: "100%" } }
            >
              <PortfolioCard image={ 'images/profile-card-lingolink.png' } title={ 'LingoLink' } subtitle={ 'Multilingual Messaging Platform' } />
            </motion.a>

            {/* TOP100CAMP CARD */ }
            <motion.a
              href={ '/portfolio/top100camp' }
              whileHover={ generateHoverAnimation }
              whileTap={ { scale: 0.8, rotate: -8, borderRadius: "100%" } }
            >
              <PortfolioCard image={ 'images/profile-card-top100camp.png' } title={ 'Top100Camp' } subtitle={ 'Website Migration & Redesign' } />
            </motion.a>

            {/* HIFIBER CARD */ }
            <motion.a
              href={ '/portfolio/hifiber' }
              whileHover={ generateHoverAnimation }
              whileTap={ { scale: 0.8, rotate: -8, borderRadius: "100%" } }
            >
              <PortfolioCard image={ 'images/profile-card-hifiber.png' } title={ 'HiFiber' } subtitle={ 'Web Developer Tool' } />
            </motion.a>

          </div>
        </MotionSlider>
      </div>
    </div>
  )
}
