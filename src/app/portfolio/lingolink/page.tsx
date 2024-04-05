'use client';
import React, { ReactElement, useEffect, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import SectionDivider from '@/components/section-divider';
import SectionComponent from '@/components/section';
import IntroHeadline from '@/components/intro-headline';
import { SectionComponentProps } from '@/interfaces/SectionComponentProps.interface';
import pageContent from '@/data/portfolio/pages/lingolink/lingolink-data.json';
import ButtonContainer from '@/components/button-container';

export default function LingoLinkPage(): ReactElement {
  const [ convoImageIndex, setConvoImageIndex ] = useState(0);
  const leftConvoImages: string[] = pageContent['in-app-screenshots-left'];
  const rightConvoImages: string[] = pageContent['in-app-screenshots-right'];
  const flagImages: string[] = pageContent['google-translate-diagrams'];

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

  // CONVERSATION IMAGE CYCLING
  useEffect(() => {
    const interval = setInterval((): void => {
      setConvoImageIndex((currentIndex: number) => (currentIndex + 1) % rightConvoImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [ rightConvoImages.length ]);

  return (
    <div>
      {/* HERO BANNER CONTAINER */ }
      <div className='relative h-[30vh] sm:min-h-[380px] min-h-[325px] sm:h-[50vh] flex justify-center items-center overflow-hidden'>

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
              src={ `/images/hero-banners/hero-banner-lingolink.png` }
              alt={ 'LingoLink Banner' }
              fill
              priority
            />
          </div>
        </motion.div>

        {/* ANIMATED LOGO/TEXT CONTAINER */ }
        <div className='absolute mt-[4vh] inset-0 flex justify-center items-start'>

          <div className='flex flex-col items-center'>
            {/* ANIMATED LOGO GRAPHIC */}
            <motion.div
              className='flex justify-center items-start'
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
                className='w-[35vw] max-w-[250px] min-w-[180px]'
                src='/images/portfolio-pages/lingolink/lingolink-logo.png'
                alt='LingoLink Logo'
                width={ 833 }
                height={ 829 }
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
                stiffness: 260,
                damping: 20,
              } }
            >
              <Image
                className='w-[57vw] min-w-[280px] max-w-[350px]'
                src='/images/portfolio-pages/lingolink/lingolink-text.png'
                alt='LingoLink Logo Text'
                width={ 1138 }
                height={ 299 }
              />
            </motion.div>
          </div>
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
              src='/images/portfolio-pages/lingolink/text-multilingual-messaging.png'
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
              src='/images/portfolio-pages/lingolink/text-made-simple.png'
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
              src='/images/portfolio-pages/lingolink/text-status-sign.png'
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

      {/* BUTTON CONTAINER */ }
      <div className={ '-mt-4 -mb-14' }>
        <ButtonContainer
          buttonOneText={ 'Source Code' }
          buttonOneLink={ 'https://github.com/mfiloramo/worldChatApp' }
          buttonTwoText={ 'Register Now' }
          buttonTwoLink={ 'https://orange-tree-0d3c88e0f.3.azurestaticapps.net/' }
        />
      </div>

      {/* SECTION DIVIDER */ }
      <SectionDivider />

      {/* TODO: MODULARIZE APP SCREENSHOTS SECTION TO COMPONENT */}
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
          className={ 'grid grid-cols-2 sm:grid-cols-4 justify-items-center gap-3 max-w-[968px] mx-auto px-5 mb-6 cursor-default' }
          variants={ container }
          initial={ 'hidden' }
          animate={ 'visible' }
        >

          {
            pageContent['intro-screenshots'].map((screenshot: string, index: number): any => {
              return (
                <motion.div
                  key={ index }
                  variants={ item }
                  whileHover={ { scale: 1.05 } }
                >
                  <Image
                    src={ screenshot }
                    alt={ `Screenshot ${ index }` }
                    width={ 381 }
                    height={ 766 }
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
      <div className={ 'mx-auto text-xl' }>
        { pageContent.sections.map((section: SectionComponentProps, index: number) => (
          <div key={ section.id }>
            <div className={ `${ index === 0 ? '' : 'section-shadow' }` } key={ index }>
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
                convoImageIndex={ convoImageIndex }
                leftConvoImages={ leftConvoImages }
                rightConvoImages={ rightConvoImages }
                flagImages={ flagImages }
              />
            </div>
          </div>
        )) }
      </div>
    </div>
  );
}
