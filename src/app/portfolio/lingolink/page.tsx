'use client';
import React, { ReactElement } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import SectionDivider from '@/components/section-divider';
import SectionComponent from '@/components/section';
import IntroHeadline from '@/components/intro-headline';
import { SectionComponentProps } from '@/interfaces/SectionComponentProps.interface';
import pageContent from '../../../data/portfolio/pages/lingolink/lingolink-data.json';
import screenshots from '../../../data/portfolio/pages/lingolink/lingolink-screenshots.json'

export default function LingoLinkPage(): ReactElement {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, filter: 'blur(4px)' },
    visible: { opacity: 1, filter: 'blur(0px)', transition: { duration: 0.2 } }
  };

  return (
    <div>
      {/* HERO BANNER CONTAINER */ }
      <div className="relative h-[42vh] sm:h-[52vh] flex justify-center items-center overflow-hidden"
           style={ { backgroundColor: '#000' } }>
        {/* TODO: FIX LINGOLINK LOGO SIZING (CLIPS ON SMALLER-Y VIEWPORTS) */ }

        {/* TODO: MODULARIZE HERO BANNER TO COMPONENT */ }
        {/* HERO BANNER IMAGE */ }
        <motion.div
          initial={ { opacity: 0 } }
          animate={ { opacity: 1 } }
          transition={ { duration: 0.1 } }
          className='relative w-full h-full'
        >
          <div className='absolute inset-0'>
            <Image
              src={ `/images/hero-banners/hero-banner-lingolink.png` }
              alt={ 'LingoLink Banner' }
              fill
              priority
              className={ 'object-cover' }
            />
          </div>
        </motion.div>

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
      <IntroHeadline
        text={ 'I architected, developed and launched LingoLink, a dynamic multilingual messaging platform that allows users to communicate with others regardless of the language they speak.' } />

      {/* SECTION DIVIDER */ }
      <SectionDivider />

      {/* APP SCREENSHOTS SECTION */ }
      <motion.div className={ 'grid grid-cols-3 justify-items-center mx-64 mb-6 cursor-default' } variants={ container }>
        {
          screenshots['intro-screenshots'].map((screenshot: string, index: number): any => {
            return (
              <motion.div
                key={ index }
                variants={ item }
                whileHover={ { scale: 1.05 } }
              >
                <Image
                  key={ index }
                  src={ screenshot }
                  alt={ screenshot }
                  width={ 265 }
                  height={ 516 }
                />
            </motion.div>
            ) })
        }
      </motion.div>

      {/* SECTION DIVIDER */ }
      <SectionDivider />

      {/* PAGE CONTENT SECTIONS */ }
      <div className={ 'mx-auto text-xl' }>
        { pageContent.sections.map((section: SectionComponentProps, index: number) => (
          <div key={ index }>
            <div className={ `${ index === 0 ? '' : 'section-shadow' }` } key={ index }>
              <SectionComponent
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
          </div>
        )) }
      </div>
    </div>
  );
}
