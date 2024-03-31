'use client';
import React, { ReactElement } from 'react';
import SectionComponent from '@/components/section';
import pageContent from '@/data/portfolio/pages/personal-website/personal-website-data.json';
import IntroHeadline from '@/components/intro-headline';
import SectionDivider from '@/components/section-divider';
import { SectionComponentProps } from '@/interfaces/SectionComponentProps.interface';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function PersonalWebsite(): ReactElement {
  return (
    <>
      {/* HERO BANNER */}
      <div className='relative h-[25vh] min-h-[200px] sm:h-[50vh] flex justify-center items-center overflow-hidden'>

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
              src={ `/images/hero-banners/hero-banner-personal-website.png` }
              alt={ 'personal-website-banner' }
              fill
              priority
            />
          </div>
        </motion.div>

        {/* ANIMATED LOGO/TEXT CONTAINER */ }
        <div className='absolute mt-14 inset-0 flex justify-center items-start'>
          <motion.div
            className='flex flex-col items-center bg-white bg-opacity-50 w-screen p-2'
            initial={ { scale: 0 } }
            animate={ { rotate: 0, scale: 1 } }
            transition={ {
            delay: 0.1,
            type: 'spring',
            stiffness: 260,
            damping: 20,
          }}>

            {/* ANIMATED LOGO GRAPHIC */ }
            <motion.div
              className='flex justify-center items-start mt-2'
              initial={ { scale: 0 } }
              animate={ { rotate: 0, scale: 1 } }
              transition={ {
                delay: 0.2,
                type: 'spring',
                stiffness: 260,
                damping: 20,
              } }
            >
              <Image
                className='w-[85vw] max-w-[900px]'
                src='/images/portfolio-pages/personal-website/personal-website-banner-title.png'
                alt='personal-website-banner-title'
                width={ 1618 }
                height={ 139 }
              />
            </motion.div>

            {/* ANIMATED LOGO TEXT */ }
            <motion.div
              className='flex w-full -mt-5 justify-center'
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
                className='mt-8 w-[70vw] max-w-[500px]'
                src='/images/portfolio-pages/personal-website/personal-website-banner-subtitle.png'
                alt='sinclair-logging-logo-subtitle'
                width={ 695 }
                height={ 65 }
              />
            </motion.div>
          </motion.div>
        </div>


      </div>

      {/* INTRODUCTION HEADLINE */}
      <IntroHeadline text={'I built my personal website using a modern and robust technology stack, creating a dynamic, performant and visually engaging platform to showcase my work and connect with visitors.'} />

      {/* SECTION DIVIDER */ }
      <SectionDivider/>

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