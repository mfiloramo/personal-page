'use client';
import React, { ReactElement } from 'react';
import SectionComponent from '@/components/section';
import pageContent from '@/data/portfolio/pages/hifiber/hifiber-data.json';
import screenshots from '@/data/portfolio/pages/hifiber/hifiber-screenshots.json';
import IntroHeadline from '@/components/intro-headline';
import SectionDivider from '@/components/section-divider';
import { SectionComponentProps } from '@/interfaces/SectionComponentProps.interface';
import { motion } from 'framer-motion';
import Image from 'next/image';
import ButtonContainer from '@/components/button-container';

export default function HiFiberPage(): ReactElement {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 1.3,
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, filter: 'blur(4px)' },
    visible: { opacity: 1, filter: 'blur(0px)', transition: { duration: 0.2 } }
  };

  return (
    <>
      <div className='relative h-[25vh] min-h-[230px] sm:h-[50vh] flex justify-center items-center overflow-hidden'>

        {/* HERO BANNER IMAGE */ }
        <motion.div
          initial={ { opacity: 0 } }
          animate={ { opacity: 1 } }
          transition={ { duration: 0.1 } }
          className='relative w-full h-full'
        >
          <div className='absolute inset-0'>
            <Image
              className={ 'object-cover' }
              src={ `/images/hero-banners/hero-banner-hifiber.png` }
              alt={ 'HiFiber Banner' }
              fill
              priority
            />
          </div>
        </motion.div>

        {/* ANIMATED LOGO/TEXT CONTAINER */ }
        <div className='absolute mt-[2vh] inset-0 flex justify-center items-start'>
          <div className='flex flex-col items-center'>

            {/* ANIMATED LOGO GRAPHIC */ }
            <motion.div
              className='flex pb-6 justify-center items-start'
              initial={ { scale: 0 } }
              animate={ { rotate: 0, scale: 1 } }
              transition={ {
                delay: 0.1,
                type: 'spring',
                stiffness: 260,
                damping: 20,
              } }
            >
              <Image
                className='w-[40vw] max-w-[750px] min-w-[350px] sm:min-w-[550px] md:min-w-[650px]'
                src='/images/portfolio-pages/hifiber/hifiber-logo-full.png'
                alt='LingoLink Logo'
                width={ 1677 }
                height={ 656 }
              />
            </motion.div>

            {/* ANIMATED LOGO TEXT */ }
            <motion.div
              className='flex w-full -mt-3 justify-center'
              initial={ { scale: 0 } }
              animate={ { scale: 1 } }
              transition={ {
                delay: 0.3,
                type: 'spring',
                stiffness: 280,
                damping: 20,
              } }
            >
              <Image
                className='min-w-[1000px] w-screen'
                src='/images/portfolio-pages/hifiber/hifiber-sub-logo-strgr-desktop.png'
                alt='LingoLink Logo Text'
                width={ 1920 }
                height={ 1080 }
              />
            </motion.div>

          </div>
        </div>

      </div>

      {/* INTRODUCTION HEADLINE */ }
      <IntroHeadline
        text={ 'I contributed to creating HiFiber, a React DevTool designed for visualizing the React Fiber tree, facilitating easier debugging and performance optimization for frontend developers.' } />

      {/* BUTTON CONTAINER */ }
      <div className={ '-mt-4 -mb-14' }>
        <ButtonContainer
          buttonOneText={ 'Source Code' }
          buttonOneLink={ 'https://github.com/oslabs-beta/HiFiber' }
          buttonTwoText={ 'Landing Page' }
          buttonTwoLink={ 'http://hifibertools.com/' }
        />
      </div>

      {/* SECTION DIVIDER */ }
      <SectionDivider />

      {/* APP SCREENSHOTS SECTION */}
      <>
        <motion.div
          className={'text-xl text-center mb-3'}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
        >
          In-App Screenshots
        </motion.div>

        <motion.div
          className={ 'grid grid-cols-1 sm:grid-cols-2 justify-items-center gap-3 max-w-[968px] mx-auto px-5 mb-6 cursor-default' }
          variants={ container }
          initial={ 'hidden' }
          animate={ 'visible' }
        >

          {
            screenshots['in-app-screenshots'].map((screenshot: string, index: number): any => {
              return (
                <motion.div
                  key={ index }
                  variants={ item }
                  whileHover={ { scale: 1.05 } }
                >
                  <Image
                    src={ screenshot }
                    alt={ `Screenshot ${ index }` }
                    width={ 921 }
                    height={ 591 }
                  />
                </motion.div>
              )
            })
          }
        </motion.div>
      </>

      {/* SECTION DIVIDER */ }
      <SectionDivider />

      {/* PAGE CONTENT SECTIONS */ }
      <div className={ `mx-auto text-xl` }>
        { pageContent.sections.map((section: SectionComponentProps, index: number) => (
          <div key={ index }>

            {/* SECTION COMPONENT */ }
            <SectionComponent
              key={ index }
              subtitle={ section.subtitle }
              paragraphs={ section.paragraphs }
              photo={ section.photo }
              background={ section.background }
              textColor={ section.textColor }
              isEven={ index % 2 === 0 }
              isFirst={ index === 0 }
              technologyStack={ section.technologyStack }
              flowchart={ section.flowchart }
            />

          </div>
        )) }
      </div>
    </>
  );
}