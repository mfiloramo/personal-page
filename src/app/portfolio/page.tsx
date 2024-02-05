'use client';
import { ReactElement, ReactNode } from 'react';
import { cabinHeavy, cabinLight } from '@/utilities/fonts';
import { MotionSlider } from '@/components/motion-slider';
import { motion } from 'framer-motion';
import { generateHoverAnimation } from '@/utilities/animations';
import PortfolioCard from '@/components/portfolio-card';
import { PortfolioCardPropsInterface } from '@/interfaces/PortfolioCardProps.interface';

export default function Portfolio(): ReactElement {
  const portfolioCards: PortfolioCardPropsInterface[] = [
    {
      urlPath: '/portfolio/lingolink',
      image: 'images/profile-cards/profile-card-lingolink.png',
      title: 'LingoLink',
      subtitle: 'Multilingual Messaging Platform'
    },
    {
      urlPath: '/portfolio/hifiber',
      image: 'images/profile-cards/profile-card-hifiber.png',
      title: 'HiFiber',
      subtitle: 'Frontend Developer Tool'
    },
    {
      urlPath: '/portfolio/top100camp',
      image: 'images/profile-cards/profile-card-top100camp.png',
      title: 'Top100Camp',
      subtitle: 'Website Migration & Redesign'
    },
    {
      urlPath: '/portfolio/tech-talk',
      image: 'images/profile-cards/profile-card-websockets.png',
      title: 'WebSockets',
      subtitle: 'Informative Tech Talk'
    },
    {
      urlPath: '/portfolio/sinclair-logging',
      image: 'images/profile-cards/profile-card-logging.png',
      title: 'Logging System',
      subtitle: 'Building Sinclair\'s Logging Infrastructure'
    },
    {
      urlPath: '/portfolio/sinclair-ua',
      image: 'images/profile-cards/profile-card-ua.png',
      title: 'User Admin',
      subtitle: 'Building Sinclair\'s User Management Platform'
    },
    {
      urlPath: 'https://medium.com/@adriankarnani/introducing-hifiber-a-visualization-tool-for-the-react-fiber-tree-fb8c80234ee0',
      image: 'images/profile-cards/profile-card-medium-article.png',
      title: 'HiFiber',
      subtitle: 'Published Medium Article By Adrian Karnani'
    }
  ];

  return (
    <div className='pt-10 relative flex flex-col sm:mx-auto'>

      {/* TITLE SECTION */ }
      <div className='mx-8 mb-2 md:mx-auto max-w-screen-md drop-shadow-in-top'>
        <MotionSlider className={ `text-sky-100 text-8xl pb-5 ${ cabinHeavy.className }` } delay={ 0 }>
          <p>portfolio</p>
        </MotionSlider>

        {/* SUBTITLE SECTION */ }
        <MotionSlider className={ `text-sky-200 text-3xl pb-12 -mt-2 ${ cabinLight.className }` } delay={ 0.2 }>
          <p className='break-words'>
            Check out my latest work in full stack web development.
          </p>
          <div className="border-t border-gray-400 mt-2 w-full"></div>
        </MotionSlider>

        {/* BODY TEXT SECTION */ }
        <MotionSlider className={ `gradient-text-lightblue text-xl ${ cabinLight.className }` } delay={ 0.4 }>
          <p className='break-words'>
            I&apos;ve showcased a spectrum of projects, from practical and responsive tools to dynamic websites and applications — and more. Each is uniquely tailored to meet the diverse needs of its users.
          </p>
        </MotionSlider>
      </div>

      {/* WORK SHOWCASE CONTAINER */ }
      <div className='mt-10 bg-gradient-to-r from-sky-950 via-blue-950 to-indigo-950 section-shadow'>

        {/* BUTTON CONTAINER */ }
        <div
          className='flex flex-wrap justify-around md:justify-between w-full h-fit z-20 mt-6 mb-12 mx-auto max-w-screen-md'>

          {/* PROJECT CARDS */ }
          {
            portfolioCards.map((card: PortfolioCardPropsInterface, index: number): ReactNode => {
              return (
                <motion.a
                  key={ index }
                  href={ card.urlPath }
                  whileHover={ generateHoverAnimation }
                  className={ 'p-3' }
                  whileTap={ { scale: 0.9, rotate: 0, borderRadius: '100%' } }
                >
                  <MotionSlider className={ '' } delay={0.2 * index}>
                    <PortfolioCard image={ card.image } title={ card.title } subtitle={ card.subtitle } />
                  </MotionSlider>
                </motion.a>
            )
            })
          }
        </div>
      </div>
    </div>
  );
}
