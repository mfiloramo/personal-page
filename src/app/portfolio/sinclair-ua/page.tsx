'use client';
import React, { ReactElement } from 'react';
import SectionComponent from '@/components/section';
import pageContent from '@/data/portfolio/pages/sinclair-ua/sinclair-ua-data.json';
import screenshots from '@/data/portfolio/pages/sinclair-ua/sinclair-ua-data-screenshots.json';

import IntroHeadline from '@/components/intro-headline';
import SectionDivider from '@/components/section-divider';
import { SectionComponentProps } from '@/interfaces/SectionComponentProps.interface';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function SinclairUserAdmin(): ReactElement {
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
      {/* INTRODUCTION HEADLINE */ }
        <IntroHeadline
          text={ 'I played a key role in developing a User/Contract Management Platform, utilizing powerful frontend/backend tools to streamline contract and employee assignment processes.' }
        />

      {/* SECTION DIVIDER */ }
        <SectionDivider />

      {/* APP SCREENSHOTS SECTION */ }
        <>
          <motion.div
            className={ 'text-xl text-center mb-3' }
            initial={ { opacity: 0 } }
            animate={ { opacity: 1 } }
            transition={ { delay: 1.5, duration: 0.5 } }
          >
            User Interface
          </motion.div>

          <motion.div
            className={ 'grid grid-cols-1 justify-items-center w-[90vw] sm:w-[80vw] lg:w-[70vw] xl:w-[56vw] mx-auto mb-6 cursor-default' }
            variants={ container }
            initial={ 'hidden' }
            animate={ 'visible' }
          >

            {
              screenshots['demo-screenshots'].map((screenshot: string, index: number): any => {
                return (
                  <motion.div
                    key={ index }
                    variants={ item }
                    whileHover={ { scale: 1.05 } }
                  >
                    <Image
                      src={ screenshot }
                      alt={ `Screenshot ${ index }` }
                      width={ 1128 }
                      height={ 595 }
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
                carouselSlides={ section.carouselSlides }
                videoLink={ section.videoLink }
              />

            </div>
          )) }
        </div>
    </>
  );
}