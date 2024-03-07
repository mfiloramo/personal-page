import React, { useEffect, FC } from 'react';
import Image from 'next/image';
import { motion, useAnimation } from 'framer-motion';
import { TechStackIconProps } from '@/interfaces/TechnologyProps.interfaces';
import { useInView } from 'react-intersection-observer';

interface TechnologyStackComponentProps {
  technologyStack: TechStackIconProps[];
}

const TechnologyStackComponent: FC<TechnologyStackComponentProps> = ({ technologyStack }) => {
  // TODO: SWITCH TO FRAMER'S NATIVE whileInView API
  const controls = useAnimation();

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, filter: 'blur(4px)' },
    visible: { opacity: 1, filter: 'blur(0px)', transition: { duration: 0.2 } }
  };

  useEffect((): void => {
    if (inView) {
      controls.start('visible');
    }
  }, [ controls, inView ]);

  return (
    <motion.div
      ref={ ref }
      variants={ container }
      initial="hidden"
      animate={ controls }
      className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 items-center mt-5 max-w-screen-lg mx-auto px-8 pt-3"
    >
      { technologyStack.map((technology: TechStackIconProps, index: number) => (
        <motion.div
          key={ index }
          className={ 'm-2' }
          variants={ item }
          whileHover={ { scale: 1.2 } }
        >
          <Image
            src={ technology.imgSrc }
            alt={ technology.altText }
            width={ 120 }
            height={ 120 }
          />
        </motion.div>
      )) }
    </motion.div>
  );
};

export default TechnologyStackComponent;
