import { motion } from 'framer-motion';
import Image from 'next/image';
import React, { ReactElement } from 'react';
import { Technology, TechnologyStackComponentProps } from '@/interfaces/TechnologyProps.interfaces';


const TechnologyStackComponent: React.FC<TechnologyStackComponentProps> = ({ introduction, stackContent }): ReactElement => {
  const motionProps: object = {
    initial: { x: 0, opacity: 0, filter: 'blur(4px)' },
    whileHover: { scale: 1.2 },
    animate: { x: 0, opacity: 1, filter: 'blur(0px)' },
    transition: { duration: 0.1 },
  };

  return (
    <div className={ 'bg-darkblue-grid-background section-shadow pt-1 pb-7 mb-6 w-full mx-auto' }>

      {/* TEXT CONTAINER */}
        <div className={ 'max-w-screen-lg mx-auto px-8' }>
          <h2 className={ 'text-3xl text-center pb-4 mt-8' }>Technology Stack</h2>
          <p className={ 'text-xl' }>
            { introduction }
          </p>
        </div>

        {/* ICON CONTAINER */}
        <div className={ `grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 items-center mt-5 max-w-screen-lg mx-auto px-8` }>
          { stackContent.map((technology: Technology, index: number) => (
            <motion.div key={ index } className="relative p-3 z-20" { ...motionProps }>
              <Image
                src={ technology.imgSrc }
                alt={ technology.altText }
                width={ 120 }
                height={ 120 }
              />
            </motion.div>
          )) }
        </div>

      </div>
  );
};

export default TechnologyStackComponent;
