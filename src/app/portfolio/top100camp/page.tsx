'use client';
import { ReactElement, ReactNode } from 'react';
import pageContent from '../../../data/portfolio/pages/top100camp/top100camp-data.json';
import stackContent from '../../../data/portfolio/pages/top100camp/top100camp-stack-data.json';
import Divider from '@/components/divider';
import { MotionSlider } from '@/components/motion-slider';
import { cabinLight } from '@/utilities/fonts';
import { motion } from 'framer-motion';
import Image from 'next/image';
// Ensure you import your actual stackContent for Top100CampPage similarly to other pages

export default function Top100CampPage(): ReactElement {
  // INSERTION POINT FOR TECHNOLOGY STACK SECTION
  const insertionPoint: number = 4; // Adjust based on where you want the stack section

  // SPLIT pageContent.sections INTO TWO PARTS
  const firstPartSections = pageContent.sections.slice(0, insertionPoint);
  const secondPartSections = pageContent.sections.slice(insertionPoint);

  return (
    <>
      <img
        className={'shadow-2xl mt-4 max-w-screen-md mx-auto w-80 sm:w-[35vw]'}
        src='/images/construction.png'
        alt='Construction Image'
      />

      {/* RENDER FORMER SECTION */}
      <div className={`mx-auto max-w-screen-md text-xl p-8`}>
        {firstPartSections.map((section: any, index: number) => (
          <div key={section.id}>
            {section.subtitle && <div className={'text-3xl pt-4 pb-3'}>{section.subtitle}</div>}
            {section.paragraphs.map((paragraph: string, index: number) => (
              <p className={`${index > 0 ? 'pt-1' : ''} pb-4`} key={index}>
                {paragraph}
              </p>
            ))}
            {/* SECTION DIVIDER */}
            {index !== firstPartSections.length - 1 && <Divider />}
          </div>
        ))}
      </div>

      {/* TECHNOLOGY STACK SECTION */}
      <div className={'bg-darkblue-grid-background section-shadow pt-1'}>
        <MotionSlider
          className={`text-3xl pb-6 mt-8 mx-auto max-w-screen-md ${cabinLight.className}`}
          delay={0.8}>
          <div className={'px-8'}>
            <h2 className={'pb-2'}>Technology Stack</h2>
            <p className={'text-xl'}>
              This stack was chosen to combine strong typing, a robust frontend framework, efficient server-side processing, seamless deployment and social media integration for a scalable, maintainable and high-performance application.
            </p>
            <div className={'grid grid-cols-3 gap-2 items-center mt-5'}>
              {stackContent.map((technology: any, index: number): ReactNode => (
                <motion.div
                  key={index}
                  className="relative p-3 z-20 mx-auto"
                  initial={{x: 0, opacity: 0, filter: 'blur(4px)'}}
                  whileHover={{scale: 1.2}}
                  animate={{x: 0, opacity: 1, filter: 'blur(0px)'}}
                  transition={{duration: 0.2}}>
                  <Image src={`${technology.imgSrc}`} alt={technology.altText} width={120} height={120} />
                </motion.div>
              ))}
            </div>
          </div>
        </MotionSlider>
      </div>

      {/* RENDER LATTER SECTION */}
      <div className={`mx-auto max-w-screen-md text-xl p-8`}>
        {secondPartSections.map((section: any, index: number) => (
          <div key={section.id}>
            {section.subtitle && <div className={'text-3xl pt-4 pb-3'}>{section.subtitle}</div>}
            {section.paragraphs.map((paragraph: any, index: number) => (
              <p className={`${index > 0 ? 'pt-1' : ''} pb-4`} key={index}>
                {paragraph}
              </p>
            ))}
            {/* SECTION DIVIDER */}
            {index !== secondPartSections.length - 1 && <Divider />}
          </div>
        ))}
      </div>
    </>
  );
}
