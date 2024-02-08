'use client';
import { ReactElement, ReactNode } from 'react';
import pageContent from '../../../data/portfolio/pages/lingolink/lingolink-data.json';
import stackContent from '../../../data/portfolio/pages/lingolink/lingolink-stack-data.json';
import { MotionSlider } from '@/components/motion-slider';
import { cabinLight } from '@/utilities/fonts';
import { motion } from 'framer-motion';
import Image from 'next/image';


export default function LingoLinkPage(): ReactElement {

  return (
    <div>
      <img className={ 'shadow-2xl mt-4 max-w-screen-md mx-auto w-80 sm:w-[35vw]' } src='/images/construction.png'
           alt='Construction Image' />

      {/* TEXT CONTAINER */ }
      <div className={ `mx-auto max-w-screen-md text-sky-100 text-xl p-8` }>
        { pageContent.sections.map(section => (
          <div key={ section.id }>
            { section.subtitle && <div className={ 'text-3xl pt-4 pb-3' }>{ section.subtitle }</div> }
            { section.paragraphs.map((paragraph, index) => (
              <p className={ `${ index > 0 ? 'pt-1' : '' } pb-4` } key={ index }>
                { paragraph }
              </p>
            )) }
          </div>
        )) }
      </div>

      {/* TECHNOLOGY STACK SECTION */ }
      <div className={ 'bg-lightblue-grid-background section-shadow pt-1' }>
        <MotionSlider
          className={ `text-sky-100 text-3xl pb-6 mt-8 mx-auto max-w-screen-md  ${ cabinLight.className }` }
          delay={ 0.8 }>
          {/* TEXT CONTAINER */ }
          <div className={ 'px-8' }>
            <div className={ 'pb-2' }>Technology Stack</div>
            <p className={ 'text-xl' }>
              I chose this stack for its ability to ensure robust development, seamless user experience, efficient backend management and automated workflows — facilitating quality, scalability and versatility.
            </p>

            {/* TECHNOLOGY STACK ICON CONTAINER */ }
            <div className={ 'grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2 items-center mt-3' }>

              { /* TECHNOLOGY STACK ICONS */ }
              {
                stackContent.map((technology: any, index: number): ReactNode =>
                  <motion.div
                    key={ index }
                    className="relative p-3 z-20"
                    initial={ { x: 0, opacity: 0, filter: 'blur(4px)' } }
                    whileHover={ { scale: 1.2 } }
                    animate={ { x: 0, opacity: 1, filter: 'blur(0px)' } }
                    transition={ { duration: 0.2 } }
                  >
                    <Image
                      src={ `${ technology.imgSrc }` }
                      alt={ technology.altText }
                      width={ 120 }
                      height={ 120 }
                    />
                  </motion.div>
                ) }
            </div>
          </div>
        </MotionSlider>
      </div>
    </div>
  );
}
