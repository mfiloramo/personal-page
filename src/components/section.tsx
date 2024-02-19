import React, { ReactElement, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import { motion, useAnimation } from 'framer-motion';
import { SectionComponentProps } from '@/interfaces/SectionComponentProps.interface';

export default function SectionComponent({ subtitle, paragraphs, photo, background, textColor, isEven, isFirst }: SectionComponentProps): ReactElement {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  useEffect((): void => {
    if (inView) {
      controls.start('visible');
    }
  }, [ controls, inView ]);

  // MAINTAIN THE DIRECTIONAL VARIANTS FOR PHOTO AND PARAGRAPH ANIMATIONS
  const variants = {
    visible: (direction: number) => ({
      opacity: 1,
      x: 0,
      filter: 'blur(0px)',
      transition: { type: 'spring', stiffness: 200, damping: 20, duration: 0.5 },
    }),
    hidden: (direction: number) => ({
      opacity: 0,
      x: direction * 100,
      filter: 'blur(10px)',
    }),
  };

  // SUBTITLE ANIMATION VARIANTS
  const subtitleVariants = {
    visible: {
      opacity: 1,
      scale: 1,
      filter: 'blur(0px)',
      transition: { duration: 0.5, ease: 'easeOut' },
    },
    hidden: {
      opacity: 0,
      scale: 1.2,
      filter: 'blur(4px)',
    },
  };

  return (
    <div ref={ ref } className={ `p-8 m-auto text-${ textColor } ${ background ? background : '' } ${ isFirst ? '' : 'section-shadow ' }`  }>

      {/* ANIMATED SECTION SUBTITLE */ }
      { subtitle && (
        <motion.h2
          className={ 'max-w-screen-lg text-3xl pb-1 text-center mx-auto' }
          variants={ subtitleVariants }
          initial='hidden'
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
            variants={ variants }
            custom={ isEven ? 1 : -1 }
            initial='hidden'
            animate={ controls }
          >
            <Image
              src={ photo.src }
              alt={ photo.alt }
              height={ 1024 }
              width={ 1024 }
            />
          </motion.div>
        ) }

        {/* ANIMATED SECTION PARAGRAPHS */ }
        <div className={ `${ photo ? 'w-full md:w-1/2 lg:w-[55%] md:px-8' : 'w-full' }  ` }>
          { paragraphs.map((paragraph: string, index: number) => (
            <motion.p
              className={ `${ index > 0 ? 'pt-6' : '' } last:pb-8 first:-mb-4 first:pt-6` }
              variants={ variants }
              custom={ isEven ? -1 : 1 }
              initial='hidden'
              animate={ controls }
              key={ index }
            >
              { paragraph }
            </motion.p>
          )) }
        </div>
      </div>
    </div>
  );
}
