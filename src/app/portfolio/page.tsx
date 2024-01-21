'use client';
import { ReactElement } from 'react';
import { cabinHeavy, cabinLight } from '@/utils/fonts';
import { MotionSlider } from '@/components/motion-slider';
import { motion } from 'framer-motion';
import { generateHoverAnimation } from '@/utils/animations';
import PortfolioCard from '@/components/portfolio-card';

export default function Portfolio(): ReactElement {
  return (
    <div className='pt-14 relative flex flex-col sm:mx-auto'>
      {/* TITLE SECTION */}
      <div className='mx-8 mb-2 md:mx-auto max-w-screen-md drop-shadow-in-top'>
        <MotionSlider className={`text-sky-100 text-8xl pb-5 ${cabinHeavy.className}`} delay={0}>
          <p>portfolio</p>
        </MotionSlider>

        {/* SUBTITLE SECTION */}
        <MotionSlider className={`text-sky-200 text-3xl pb-12 -mt-2 ${cabinLight.className}`} delay={0.2}>
          <p className='break-words'>
            Check out my latest work in full stack web development.
          </p>
          <div className="border-t border-gray-400 mt-2 w-full"></div>
        </MotionSlider>

        {/* BODY TEXT SECTION */}
        <MotionSlider className={`gradient-text-lightblue text-xl ${ cabinLight.className }`} delay={0.4}>
          <p className='break-words'>
            I&apos;ve showcased a spectrum of projects, from practical and responsive tools to dynamic websites and applications — and more. Each is uniquely tailored to meet the diverse needs of its users.
          </p>
        </MotionSlider>
      </div>

      {/* WORK SHOWCASE CONTAINER */}
      <div className='mt-10 bg-gradient-to-r from-sky-950 via-blue-950 to-indigo-950 section-shadow'>
        <MotionSlider delay={1} className=''>
          {/* BUTTON CONTAINER */}
          <div className='flex flex-wrap justify-around md:justify-between w-full h-fit z-20 mt-6 mb-12 mx-auto max-w-screen-md'>
            {/* PROJECT CARDS */}
            {/* LINGOLINK CARD */ }
            <motion.a
              href={ '/portfolio/lingolink' }
              whileHover={ generateHoverAnimation }
              className={ 'p-3' }
              whileTap={ { scale: 0.8, rotate: -8, borderRadius: "100%" } }
            >
              <PortfolioCard image={ 'images/profile-cards/profile-card-lingolink.png' } title={ 'LingoLink' } subtitle={ 'Multilingual Messaging Platform' } />
            </motion.a>

            {/* TOP100CAMP CARD */ }
            <motion.a
              href={ '/portfolio/top100camp' }
              className={ 'p-3' }
              whileHover={ generateHoverAnimation }
              whileTap={ { scale: 0.8, rotate: -8, borderRadius: "100%" } }
            >
              <PortfolioCard image={ 'images/profile-cards/profile-card-top100camp.png' } title={ 'Top100Camp' } subtitle={ 'Website Migration & Redesign' } />
            </motion.a>

            {/* HIFIBER CARD */ }
            <motion.a
              href={ '/portfolio/hifiber' }
              className={ 'p-3' }
              whileHover={ generateHoverAnimation }
              whileTap={ { scale: 0.8, rotate: -8, borderRadius: "100%" } }
            >
              <PortfolioCard image={ 'images/profile-cards/profile-card-hifiber.png' } title={ 'HiFiber' } subtitle={ 'Web Developer Tool' } />
            </motion.a>

            {/* WEBSOCKETS CARD */ }
            <motion.a
              href={ '/portfolio/websockets-talk' }
              className={ 'p-3' }
              whileHover={ generateHoverAnimation }
              whileTap={ { scale: 0.8, rotate: -8, borderRadius: "100%" } }
            >
              <PortfolioCard image={ 'images/profile-cards/profile-card-websockets.png' } title={ 'WebSockets' } subtitle={ 'Informative Tech Talk' } />
            </motion.a>

            {/* LOGGING SYSTEM CARD */ }
            <motion.a
              className={ 'p-3' }
              href={ '/portfolio/hifiber' }
              whileHover={ generateHoverAnimation }
              whileTap={ { scale: 0.8, rotate: -8, borderRadius: "100%" } }
            >
              <PortfolioCard image={ 'images/profile-cards/profile-card-logging.png' } title={ 'Logging System' } subtitle={ 'Building Sinclair\'s Logging Infrastructure' } />
            </motion.a>

            {/* NEW CARD */ }
            <motion.a
              href={ '/portfolio/hifiber' }
              className={ 'p-3' }
              whileHover={ generateHoverAnimation }
              whileTap={ { scale: 0.8, rotate: -8, borderRadius: "100%" } }
            >
              <PortfolioCard image={ 'images/profile-cards/profile-card-um.png' } title={ 'User Admin' } subtitle={ 'Building Sinclair\'s User Management Platform'  } />
            </motion.a>

          </div>
        </MotionSlider>
      </div>
    </div>
  );
}
