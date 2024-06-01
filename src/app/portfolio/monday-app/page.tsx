'use client';
import React, { ReactElement } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import IntroHeadline from "@/components/intro-headline";
import ButtonContainer from "@/components/button-container";
import SectionDivider from "@/components/section-divider";
import AppScreenshotsSection from "@/components/app-screenshots-section";
import pageContent from "@/data/portfolio/pages/hifiber/hifiber-data.json";
import { SectionComponentProps } from "@/interfaces/SectionComponentProps.interface";
import SectionComponent from "@/components/section";

export default function MondayApp(): ReactElement {

  return (
    <>
      <div className='relative h-[25vh] min-h-[265px] sm:h-[50vh] flex justify-center items-center overflow-hidden'>

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
              src={ `/images/hero-banners/hero-banner-monday.png` }
              alt={ 'HiFiber Banner' }
              fill
              priority
            />
          </div>
        </motion.div>

        {/* ANIMATED LOGO/TEXT CONTAINER */ }
        <div className='absolute mt-[3vh] inset-0 flex justify-center items-start'>
          <div className='flex flex-col items-center'>

            {/* ANIMATED LOGO GRAPHIC */ }
            <motion.div
              className='flex pb-6 justify-center items-start'
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
                className='w-[80vw] max-w-[600px]'
                src='/images/portfolio-pages/monday-app/monday-banner-logo.png'
                alt='LingoLink Logo'
                width={ 1677 }
                height={ 656 }
              />
            </motion.div>

            {/* ANIMATED LOGO TEXT */ }
            <motion.div
              className='flex -mt-3 justify-center'
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
                className=''
                src='/images/portfolio-pages/monday-app/monday-banner-text.png'
                alt='LingoLink Logo Text'
                width={ 891 }
                height={ 193 }
              />
            </motion.div>

          </div>
        </div>

      </div>

      {/* INTRODUCTION HEADLINE */ }
      <IntroHeadline
        text={ 'This will be your headline text.' } />

      {/* BUTTON CONTAINER */ }
      <div className={ '-mt-4 -mb-14' }>
        <ButtonContainer
          buttonOneText={ 'Client Code' }
          buttonOneLink={ 'https://github.com/mfiloramo/mondayProject' }
          buttonTwoText={ 'Server Code' }
          buttonTwoLink={ 'https://github.com/mfiloramo/mondayProjectAPI' }
          buttonThreeText={ 'Database Code'}
          buttonThreeLink={ 'https://github.com/mfiloramo/mondayProjectSQL' }
        />
      </div>

      {/* SECTION DIVIDER */ }
      <SectionDivider />

      {/* APP SCREENSHOTS SECTION */}
      <AppScreenshotsSection
        titleText={ 'In-App Screenshots' }
        screenshots={ pageContent['in-app-screenshots'] }
        screenshotWidth={ 921 }
        screenshotHeight={ 521 }
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
            />

          </div>
        )) }
      </div>
    </>
  );
}