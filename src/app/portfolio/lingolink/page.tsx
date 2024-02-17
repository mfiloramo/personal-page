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
    <div>
      <div className='relative h-[50vh] flex justify-center items-center overflow-hidden section-shadow'>

        {/* HERO BANNER IMAGE */ }
        <Image
          src={ `/images/hero-banners/hero-banner-lingolink.png` }
          alt={ 'LingoLink Banner' }
          layout='fill'
          objectFit='cover'
        />

        {/* ANIMATED LOGO GRAPHIC */ }
        <motion.div
          className='absolute mt-[4vh] inset-0 flex justify-center items-start'
          initial={ { scale: 0 } }
          animate={ { rotate: 360, scale: 1 } }
          transition={ {
            type: 'spring',
            stiffness: 260,
            damping: 20,
          } }
        >
          <Image
            className={ 'w-[15vw]' }
            src='/images/lingolink-portfolio-page/lingolink-logo.png'
            alt='LingoLink Logo'
            width={ 240 }
            height={ 240 }
          />
        </motion.div>

        {/* ANIMATED LOGO TEXT */ }
        <motion.div
          className='absolute mt-64 inset-0 flex justify-center items-center'
          initial={ { scale: 0 } }
          animate={ { scale: 1 } }
          transition={ {
            delay: 0.2,
            type: 'spring',
            stiffness: 260,
            damping: 20,
          } }
        >
          <Image
            src='/images/lingolink-portfolio-page/lingolink-text.png'
            alt='LingoLink Logo Text'
            width={ 375 }
            height={ 375 }
          />
        </motion.div>

        {/* TEXT: MULTILINGUAL MESSAGING */ }
        <motion.div
          className='absolute bottom-0 right-0 flex justify-end items-end'
          initial={ { x: '100vw', y: '100vh' } }
          animate={ { x: 150, y: 150 } }
          transition={ {
            delay: 1,
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

        {/* TEXT: MADE SIMPLE */ }
        <motion.div
          className='absolute bottom-0 right-0 flex justify-end items-end'
          initial={ { x: '100vw', y: '100vh' } }
          animate={ { x: 110, y: 170 } }
          transition={ {
            delay: 1.5,
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

        {/* ANIMATION: STATUS SIGN */ }
        <motion.div
          className='absolute left-52 flex justify-start items-end'
          initial={ { y: '100vh' } }
          animate={ { y: 60 } }
          transition={ {
            delay: 2,
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


      {/* PAGE CONTENT SECTIONS */ }
      <div className='mx-auto text-xl'>
        { pageContent.sections.map((section: any, index: number) => (
          <div key={ index }>
            <SectionComponent subtitle={ section.subtitle } paragraphs={ section.paragraphs } />
            { index !== pageContent.sections.length - 1 && index !== 3 && <SectionDivider /> }
            { index === 3 && (
              <TechnologyStackComponent
                introduction={ pageContent.text.technologyStackIntro }
                stackContent={ stackContent }
              />
            ) }
          </div>
        )) }
      </div>
    </div>
  );
}
