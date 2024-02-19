'use client';
import React, { ReactElement } from 'react';
import pageContent from '../../../data/portfolio/pages/lingolink/lingolink-data.json';
import stackContent from '../../../data/portfolio/pages/lingolink/lingolink-stack-data.json';
import SectionDivider from '@/components/section-divider';
import SectionComponent from '@/components/section';
import TechnologyStackComponent from '@/components/technology-stack';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function LingoLinkPage(): ReactElement {
  return (
    <>
      <div className='relative h-[42vh] sm:h-[52vh] flex justify-center items-center overflow-hidden section-shadow'>

        {/* HERO BANNER IMAGE */ }
        <Image
          src={ `/images/hero-banners/hero-banner-lingolink.png` }
          alt={ 'LingoLink Banner' }
          layout='fill'
          objectFit='cover'
          priority
        />

        {/* ANIMATED LOGO CONTAINER */ }
        <div className={ 'absolute mt-[4vh] inset-0 flex justify-center' }>

          {/* ANIMATED LOGO GRAPHIC */ }
          <>
            <motion.div
              className='absolute inset-0 flex justify-center items-start'
              initial={ { scale: 0 } }
              animate={ { rotate: 360, scale: 1 } }
              transition={ {
                delay: 0.1,
                type: 'spring',
                stiffness: 260,
                damping: 20,
              } }
            >
              <Image
                className={ 'w-[50vw] max-w-[240px]' }
                src='/images/lingolink-portfolio-page/lingolink-logo.png'
                alt='LingoLink Logo'
                width={ 240 }
                height={ 240 }
              />
            </motion.div>
          </>

          {/* ANIMATED LOGO TEXT */ }
          <>
            <motion.div
              className='mt-64'
              initial={ { scale: 0 } }
              animate={ { scale: 1 } }
              transition={ {
                delay: 0.3,
                type: 'spring',
                stiffness: 260,
                damping: 20,
              } }
            >
              <Image
                className={ 'max-w-[375px] -mt-5 w-[70vw]' }
                src='/images/lingolink-portfolio-page/lingolink-text.png'
                alt='LingoLink Logo Text'
                width={ 375 }
                height={ 375 }
              />
            </motion.div>
          </>
        </div>

        {/* TEXT: MULTILINGUAL MESSAGING */ }
        <div className={ 'hidden xl:flex' }>
          <motion.div
            className='absolute bottom-0 right-0 justify-end items-end xl:flex'
            initial={ { x: '100vw', y: '100vh' } }
            animate={ { x: 150, y: 150 } }
            transition={ {
              delay: 1.0,
              type: 'spring',
              stiffness: 200,
              damping: 23,
            } }
          >
            <Image
              src='/images/lingolink-portfolio-page/text-multilingual-messaging.png'
              alt='Description'
              width={ 650 }
              height={ 650 }
            />
          </motion.div>
        </div>

        {/* TEXT: MADE SIMPLE */ }
        <div className={ 'hidden xl:flex' }>
          <motion.div
            className='absolute bottom-0 right-0 justify-end items-end '
            initial={ { x: '100vw', y: '100vh' } }
            animate={ { x: 110, y: 170 } }
            transition={ {
              delay: 1.4,
              type: 'spring',
              stiffness: 200,
              damping: 23,
            } }
          >
            <Image
              src='/images/lingolink-portfolio-page/text-made-simple.png'
              alt='Description'
              width={ 600 }
              height={ 600 }
            />
          </motion.div>
        </div>

        {/* ANIMATION: STATUS SIGN */ }
        <div className={ 'hidden xl:flex' }>
          <motion.div
            className='absolute bottom-7 left-52 justify-start items-startd'
            initial={ { y: '100vh' } }
            animate={ { y: 60 } }
            transition={ {
              delay: 1.9,
              type: 'spring',
              stiffness: 260,
              damping: 23,
            } }
          >
            <Image
              src='/images/lingolink-portfolio-page/text-status-sign.png'
              alt='Description'
              width={ 200 }
              height={ 200 }
            />
          </motion.div>
        </div>

      </div>

      {/* INTRODUCTION SECTION */ }
      <motion.div
          className={ 'py-4 -pb-8 text-xl text-center mx-auto box max-w-screen-lg' }
          initial={ { opacity: 0, scale: 0.5 } }
          animate={ { opacity: 1, scale: 1 } }
          transition={ {
            opacity: {
              delay: 0.5,
              duration: 0.5,
              ease: [ 0, 0.71, 0.2, 1.01 ]
            },
            scale: {
              delay: 0.5,
              type: 'spring',
              damping: 5,
              stiffness: 100,
              restDelta: 0.001
            }
          } }
        >
          { pageContent.sections[0].paragraphs[0] }
      </motion.div>

      {/* SECTION DIVIDER */}
      {/*<SectionDivider />*/}

      {/* PAGE CONTENT SECTIONS */ }
      <div className='mx-auto text-xl'>
        { pageContent.sections.map((section: any, index: number) => (
          index > 0 ? <div key={ index }>
              <SectionComponent
                subtitle={ section.subtitle }
                paragraphs={ section.paragraphs }
                photo={ section.photo }
                background={ section.background }
                textColor={ section.textColor }
                isEven={ index % 2 === 0 }
              />
              {/*{ index !== pageContent.sections.length - 1 && index !== 3 && <SectionDivider /> }*/}
              { index === 3 && (
                <TechnologyStackComponent
                  introduction={ pageContent.text.technologyStackIntro }
                  stackContent={ stackContent }
                />
              ) }
            </div>
            : ''
        )) }
      </div>
    </>
  );
}
