'use client';
import React, { ReactElement } from 'react';
import pageContent from '@/data/portfolio/pages/tech-talk/tech-talk-data.json';
import SectionComponent from '@/components/section';
import SectionDivider from '@/components/section-divider';
import IntroHeadline from '@/components/intro-headline';
import { SectionComponentProps } from '@/interfaces/SectionComponentProps.interface';
import { motion } from 'framer-motion';
import Image from 'next/image';


export default function TechTalk(): ReactElement {
  return (
    <>
      {/* HERO BANNER */ }
      <div className='relative h-[45vh] min-h-[370px] sm:h-[52vh] flex justify-center items-center overflow-hidden'>

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
              src={ `/images/hero-banners/hero-banner-tech-talk.png` }
              alt={ 'tech-talk-hero-banner' }
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
              className='flex pb-6 justify-center items-start mt-8'
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
                className='w-[80vw] max-w-[800px]'
                src='/images/portfolio-pages/tech-talk/tech-talk-banner-title.png'
                alt='tech-talk-banner-graphic'
                width={ 697 }
                height={ 155 }
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
                className='mt-6 w-[20vw] min-w-[275px] max-w-[400px]'
                src='/images/portfolio-pages/tech-talk/tech-talk-banner-subtitle.png'
                alt='tech-talk-banner-text'
                width={ 580 }
                height={ 130 }
              />
            </motion.div>

          </div>
        </div>

      </div>

      {/* INTRODUCTION HEADLINE */ }
      <IntroHeadline
        text={ 'I delivered a comprehensive introductory Tech Talk on WebSockets, detailing their mechanisms and protocols to over 100 software engineering students at a collaborative event with the Codesmith immersive boot camp and SingleSprout, a tech recruitment company.' } />

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
              carouselSlides={ section.carouselSlides }
              videoLink={ section.videoLink }
            />

          </div>
        )) }
      </div>
    </>
  );
}
