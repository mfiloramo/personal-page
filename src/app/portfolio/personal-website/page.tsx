'use client';
import { ReactElement, ReactNode } from 'react';
import pageContent from '../../../data/portfolio/pages/personal-website/personal-website-data.json';
import stackContent from '../../../data/portfolio/pages/personal-website/personal-website-stack-data.json';
import Divider from '@/components/divider';
import { MotionSlider } from '@/components/motion-slider';
import { cabinLight } from '@/utilities/fonts';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function PersonalWebsite(): ReactElement {
  const insertionPoint = 2;
  const firstPartSections = pageContent.sections.slice(0, insertionPoint);
  const secondPartSections = pageContent.sections.slice(insertionPoint);

  return (
    <>
      <Image
        className={ 'shadow-2xl mt-4 max-w-screen-md mx-auto w-80 sm:w-[35vw]' }
        src='/images/construction.png'
        alt='Personal Website Image'
        width={ 1000 }
        height={ 1000 }
      />

      {/* FORMER PAGE SECTION */ }
      <div className={ `mx-auto max-w-screen-md text-xl p-8` }>
        { firstPartSections.map((section: any, index: number) => (
          <div key={ section.id }>
            <h2 className={ 'text-3xl pt-4 pb-3' }>{ section.subtitle }</h2>
            { section.paragraphs.map((paragraph: string, index: number) => (
              <p className={ `${ index > 0 ? 'pt-4' : '' } pb-4` } key={ index }>
                { paragraph }
              </p>
            )) }
            { index !== firstPartSections.length - 1 && <Divider /> }
          </div>
        )) }
      </div>

      {/* TECHNOLOGY STACK SECTION */ }
      <div className={ 'bg-darkblue-grid-background section-shadow pt-1' }>
        <MotionSlider
          className={ `text-3xl pb-6 mt-8 mx-auto max-w-screen-md ${ cabinLight.className }` }
          delay={ 0.8 }>
          <div className={ 'px-8' }>
            <h2 className={ 'pb-2' }>Technology Stack</h2>
            <p className={ 'text-xl' }>I chose this stack to leverage a modern, scalable and developer-friendly
              ecosystem that ensures fast development, easy maintenance and seamless deployment.</p>
            <div className={ 'grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-2 items-center mt-5' }>

              {/* TECHNOLOGY STACK ICONS */ }
              { stackContent.map((technology: any, index: number): ReactNode => (
                <motion.div
                  key={ index }
                  className="relative p-3 z-20 mx-auto"
                  initial={ { x: 0, opacity: 0, filter: 'blur(4px)' } }
                  whileHover={ { scale: 1.2 } }
                  animate={ { x: 0, opacity: 1, filter: 'blur(0px)' } }
                  transition={ { duration: 0.1 } }>
                  <Image src={ `${ technology.imgSrc }` } alt={ technology.altText } width={ 120 } height={ 120 } />
                </motion.div>
              )) }
            </div>
          </div>
        </MotionSlider>
      </div>

      <div className={ `mx-auto max-w-screen-md text-xl p-8` }>
        { secondPartSections.map((section: any, index: number) => (
          <div key={ section.id }>
            <h2 className={ 'text-3xl pt-4 pb-3' }>{ section.subtitle }</h2>
            { section.paragraphs.map((paragraph: any, index: number) => (
              <p className={ `${ index > 0 ? 'pt-4' : '' } pb-4` } key={ index }>
                { paragraph }
              </p>
            )) }
            { index !== secondPartSections.length - 1 && <Divider /> }
          </div>
        )) }
      </div>
    </>
  );
}
