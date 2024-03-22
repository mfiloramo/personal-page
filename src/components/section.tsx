import React, { ReactElement, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import { motion, useAnimation } from 'framer-motion';
import { SectionComponentProps } from '@/interfaces/SectionComponentProps.interface';
import { paragraphAnimationVariants, subtitleAnimationVariants } from '@/utilities/animations';
import TechnologyStackComponent from '@/components/technology-stack';
import AnimatedUsageSection from '@/components/animated-usage-section';
import { inter_tightItalicHeavy } from '@/utilities/fonts';

export default function SectionComponent({ subtitle, paragraphs, photo, background, textColor, isEven, isFirst, technologyStack, graphic, convoImageIndex, leftConvoImages, rightConvoImages, flagImages }: SectionComponentProps): ReactElement {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  useEffect((): void => {
    if (inView) {
      controls.start('visible');
    }
  }, [ controls, inView ]);

  return (
    <div ref={ ref }
         className={ `p-8 m-auto w-full text-${ textColor } ${ background ? background : '' } ${ isFirst ? '' : 'section-shadow ' }` }>

      {/* ANIMATED SECTION SUBTITLE */ }
      { subtitle && (
        <motion.h2
          className={ 'max-w-screen-lg text-3xl pb-1 text-center mx-auto' }
          variants={ subtitleAnimationVariants }
          initial={ 'hidden' }
          animate={ controls }
        >
          { subtitle }
        </motion.h2>
      ) }

      {/* PHOTO & TEXT CONTAINER */ }
      <div className={ `flex flex-wrap items-center max-w-screen-lg
      mx-auto ${ photo ? 'justify-center' : 'justify-start' } ${ isEven ? 'flex-row-reverse' : '' }` }>

        {/* ANIMATED SECTION PHOTO */ }
        { photo && (
          <motion.div
            className='py-6 w-full md:w-1/2 max-w-[375px]'
            variants={ paragraphAnimationVariants }
            custom={ isEven ? 1 : -1 }
            initial={ 'hidden' }
            animate={ controls }
          >
            <Image
              className={ 'rounded-lg' }
              src={ photo.src }
              alt={ photo.alt }
              height={ 1024 }
              width={ 1024 }
            />
          </motion.div>
        ) }

        {/* FLOWCHART DIAGRAM */ }
        { graphic && (
          <motion.div
            className={ 'mx-auto' }
            variants={ paragraphAnimationVariants }
            initial={ 'hidden' }
            animate={ controls }
          >
            <Image
              className={ 'my-4' }
              src={ graphic }
              alt={ 'application-flowchart' }
              height={ 468 }
              width={ 800 }
            />
            <div className={ `${ inter_tightItalicHeavy.className } text-center text-md font-bold mt-5` }>
              App Architecture
            </div>
          </motion.div>
        ) }

        {/* ANIMATED SECTION PARAGRAPHS */ }
        <div className={ `${ photo ? 'w-full md:w-1/2 lg:w-[55%] md:px-8' : 'w-full' }` }>
          { paragraphs.map((paragraph: string, index: number) => {
            if (paragraph === 'usage-chart') {
              return (
                <AnimatedUsageSection
                  key={ index }
                  convoImageIndex={ convoImageIndex! }
                  leftConvoImages={ leftConvoImages! }
                  rightConvoImages={ rightConvoImages! }
                  flagImages={ flagImages! }
                />
              );
            } else {
              return (
                <motion.p
                  className={ `${ index > 0 ? 'pt-6' : '' } last:pb-8 first:-mb-4 first:pt-6` }
                  variants={ paragraphAnimationVariants }
                  custom={ isEven ? -1 : 1 }
                  initial={ 'hidden' }
                  animate={ controls }
                  key={ index }
                >
                  { paragraph }
                </motion.p>
              );
            }
          }) }
        </div>

        {/* TECHNOLOGY STACK ICONS */ }
        { technologyStack && technologyStack.length > 0 && (
          <TechnologyStackComponent technologyStack={ technologyStack } />
        ) }

      </div>
    </div>
  );
}
