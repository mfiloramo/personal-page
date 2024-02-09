// IMPORT STATEMENTS
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import React, { useEffect, ReactElement } from 'react';
import Image from 'next/image';
import { TechnologyStackComponentProps } from '@/interfaces/TechnologyProps.interfaces';

// TECHNOLOGY STACK COMPONENT
const TechnologyStackComponent: React.FC<TechnologyStackComponentProps> = ({ introduction, stackContent }): ReactElement => {
  // ANIMATION CONTROLS
  const controls = useAnimation();
  const [ref, inView] = useInView();

  // EFFECT TO TRIGGER ANIMATIONS ON SCROLL
  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);

  // ANIMATION VARIANTS
  const variants = {
    visible: { opacity: 1, translateY: 0, transition: { duration: 0.5 } },
    hidden: { opacity: 0, translateY: 50, transition: { duration: 0.5 } },
  };

  // COMPONENT RENDER
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      className={'bg-darkblue-grid-background section-shadow pt-1 pb-7 mb-6 w-full'}
    >
      <div className={`max-w-screen-md mx-auto px-8`}>
        {/* TECHNOLOGY STACK TITLE */}
        <h2 className={'text-3xl pb-4 mt-8'}>Technology Stack</h2>
        {/* TECHNOLOGY STACK INTRODUCTION */}
        <p className={'text-xl'}>
          {introduction}
        </p>
        {/* TECHNOLOGY ICONS GRID */}
        <div className={'grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-2 items-center mt-5'}>
          {stackContent.map((technology, index) => (
            <motion.div key={index} className="relative p-3 z-20" whileHover={{ scale: 1.1 }}>
              <Image src={technology.imgSrc} alt={technology.altText} width={120} height={120} />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default TechnologyStackComponent;
