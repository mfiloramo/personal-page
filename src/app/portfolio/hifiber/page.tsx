'use client';
import React, { ReactElement } from 'react';
import SectionComponent from '@/components/section';
import pageContent from '../../../data/portfolio/pages/hifiber/hifiber-data.json';
import IntroHeadline from '@/components/intro-headline';
import SectionDivider from '@/components/section-divider';
import { SectionComponentProps } from '@/interfaces/SectionComponentProps.interface';
import { motion } from 'framer-motion';
import Image from 'next/image';
import ButtonContainer from '@/components/button-container';

export default function HiFiberPage(): ReactElement {
  return (
    <>
      <div className='relative h-[45vh] min-h-[370px] sm:h-[52vh] flex justify-center items-center overflow-hidden'
           style={ { backgroundColor: '#000' } }>

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
        <div className='absolute mt-[4vh] inset-0 flex justify-center items-start'>
          <div className='flex flex-col items-center'>
            {/* ANIMATED LOGO GRAPHIC */ }
            <motion.div
              className='flex justify-center items-start'
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
                className='w-[41vw] min-w-[180px]'
                src='/images/portfolio-pages/hifiber/hifiber-logo-full.png'
                alt='LingoLink Logo'
                width={ 1677 }
                height={ 656 }
              />
            </motion.div>

            {/* ANIMATED LOGO TEXT */ }
            {/*<motion.div*/}
            {/*  className='flex w-full -mt-3 justify-center'*/}
            {/*  initial={ { scale: 0 } }*/}
            {/*  animate={ { scale: 1 } }*/}
            {/*  transition={ {*/}
            {/*    delay: 0.3,*/}
            {/*    type: 'spring',*/}
            {/*    stiffness: 280,*/}
            {/*    damping: 20,*/}
            {/*  } }*/}
            {/*>*/}
            {/*  <Image*/}
            {/*    className='w-[60vw] min-w-[300px] max-w-[400px]'*/}
            {/*    src='/images/portfolio-pages/lingolink/lingolink-text.png'*/}
            {/*    alt='LingoLink Logo Text'*/}
            {/*    width={ 1138 }*/}
            {/*    height={ 299 }*/}
            {/*  />*/}
            {/*</motion.div>*/}

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
            />

          </div>
        )) }
      </div>
    </>
  );
}