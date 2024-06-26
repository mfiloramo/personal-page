'use client';
import React, { ReactElement } from 'react';
import SectionComponent from '@/components/section';
import pageContent from '@/data/portfolio/pages/sinclair-ua/sinclair-ua-data.json';

import IntroHeadline from '@/components/intro-headline';
import SectionDivider from '@/components/section-divider';
import { SectionComponentProps } from '@/interfaces/SectionComponentProps.interface';
import { motion } from 'framer-motion';
import Image from 'next/image';
import AppScreenshotsSection from '@/components/app-screenshots-section';


export default function SinclairUserAdmin(): ReactElement {

  return (
    <>
      {/* HERO BANNER */}
      <div className='relative h-[18vh] min-h-[230px] sm:h-[50vh] flex justify-center items-center overflow-hidden'>

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
              src={ '/images/hero-banners/hero-banner-sinclair-ua.png' }
              alt={ 'sinclair-ua-banner' }
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
                src='/images/portfolio-pages/sinclair-ua/hero-banner-title.png'
                alt='sinclair-ua-logo-hero-banner'
                width={ 1105 }
                height={ 206 }
              />
            </motion.div>

            {/* ANIMATED LOGO TEXT */ }
            <motion.div
              className='flex w-full -mt-8 justify-center'
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
                className='mt-8 w-[85vw] max-w-[800px]'
                src='/images/portfolio-pages/sinclair-ua/hero-banner-subtitle.png'
                alt='sinclair-logging-logo-subtitle'
                width={ 959 }
                height={ 56 }
              />
            </motion.div>

          </div>
        </div>

      </div>

      {/* INTRODUCTION HEADLINE */ }
        <IntroHeadline
          text={ 'I played a key role in developing a User/Contract Management Platform, utilizing powerful frontend/backend tools to streamline contract and employee assignment processes.' }
        />

      {/* SECTION DIVIDER */ }
        <SectionDivider />

      {/* APP SCREENSHOTS SECTION */ }
      <AppScreenshotsSection
        titleText={ 'User Interface' }
        screenshots={ pageContent['demo-screenshots'] }
        screenshotWidth={ 1128 }
        screenshotHeight={ 595 }
      />

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
                carouselSlides={ section.carouselSlides }
                videoLink={ section.videoLink }
              />

            </div>
          )) }
        </div>
    </>
  );
}