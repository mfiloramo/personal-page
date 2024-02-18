import React, { ReactElement, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import { motion, useAnimation } from 'framer-motion';
import { SectionComponentProps } from '@/interfaces/SectionComponentProps.interface';

export default function SectionComponent({ subtitle, paragraphs, photo }: SectionComponentProps): ReactElement {
  const controls = useAnimation();
  const { ref, inView } = useInView();

  useEffect((): void => {
    if (inView) {
      controls.start('visible');
    }
  }, [ controls, inView ]);

  const variants = {
    visible: { opacity: 1, x: 0, transition: { type: 'spring', stiffness: 260, damping: 22 } },
    hidden: { opacity: 0, x: '-100vw' },
  };

  return (
    <div ref={ ref } className='max-w-screen-lg mx-auto px-8 first:pt-3'>
      { subtitle && <h2 className='text-3xl pb-1'>{ subtitle }</h2> }

      <div className={ `flex flex-wrap ${ photo ? 'justify-center' : 'justify-start' } items-start` }>

        {/* RENDER PHOTO */}
        { photo && (
          <motion.div
            className='py-8 w-full md:w-1/2'
            initial='hidden'
            animate={ controls }
            variants={ variants }
          >
            <Image
              src={ photo.src }
              alt={ photo.alt }
              layout='responsive'
              height={ 1024 }
              width={ 1024 }
            />
          </motion.div>
        ) }

        {/* RENDER PARAGRAPH */}
        <div className={ `${ photo ? 'w-full md:w-1/2 md:pl-8' : 'w-full' }` }>
          { paragraphs.map((paragraph: string, index: number) => (
            <motion.p
              className={ `${ index > 0 ? 'pt-6' : '' } last:pb-8 first:-mb-4 first:pt-8` }
              key={ index }
              initial='hidden'
              animate={ controls }
              variants={ variants }
            >
              { paragraph }
            </motion.p>
          )) }
        </div>
      </div>
    </div>
  );
}
