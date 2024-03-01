import React, { useEffect, FC } from 'react';
import Image from 'next/image';
import { motion, useAnimation } from 'framer-motion';
import { TechStackIconProps } from '@/interfaces/TechnologyProps.interfaces';
import { useInView } from 'react-intersection-observer';

interface TechnologyStackComponentProps {
  technologyStack: TechStackIconProps[];
}

const TechnologyStackComponent: FC<TechnologyStackComponentProps> = ({ technologyStack }) => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const techStackIconMotionProps = {
    initial: { opacity: 0, filter: 'blur(4px)' },
    animate: controls,
    whileHover: { scale: 1.2 },
    transition: { duration: 0.2 },
  };

  useEffect((): void => {
    if (inView) {
      controls.start({ opacity: 1, filter: 'blur(0px)' });
    }
  }, [ controls, inView ]);

  return (
    <div
      className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 items-center mt-5 max-w-screen-lg mx-auto px-8 pt-3">
      { technologyStack.map((technology: TechStackIconProps, index: number) => (
        <motion.div
          ref={ ref }
          key={ index }
          className={ 'm-2' }
          { ...techStackIconMotionProps }
        >
          <Image
            src={ technology.imgSrc }
            alt={ technology.altText }
            width={ 120 }
            height={ 120 }
          />
        </motion.div>
      )) }
    </div>
  );
};

export default TechnologyStackComponent;
