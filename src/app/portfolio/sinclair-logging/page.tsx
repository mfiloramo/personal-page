'use client';
import React, { ReactElement } from 'react';
import SectionComponent from '@/components/section';
import pageContent from '../../../data/portfolio/pages/sinclair-logging/sinclair-logging-data.json';
import IntroHeadline from '@/components/intro-headline';
import SectionDivider from '@/components/section-divider';
import { SectionComponentProps } from '@/interfaces/SectionComponentProps.interface';
import { motion } from 'framer-motion';
import screenshots from '@/data/portfolio/pages/sinclair-logging/sinclair-logging-screenshots.json';
import Image from 'next/image';

export default function SinclairLogging(): ReactElement {
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
      {/* INTRODUCTION HEADLINE */}
      <IntroHeadline text={'I spearheaded the development of an advanced logging system for Sinclair Broadcast Group, enhancing user activity tracking and system diagnostics across both frontend and backend environments.'} />

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
          { screenshots['demo-screenshots'].length > 1 ? 'In-App Screenshots' : 'In-App Demonstration' }
        </motion.div>

        <motion.div
          className={ 'grid grid-cols-1 justify-items-center w-[85vw] sm:w-[75vw] md:w-[65vw] lg:w-[40vw] mx-auto mb-6 cursor-default' }
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