import { motion } from 'framer-motion';
import Image from 'next/image';
import React, { ReactElement } from 'react';

export interface Technology {
  imgSrc: string;
  altText: string;
}

export interface TechnologyStackComponentProps {
  introduction: string;
  stackContent: Technology[];
}

const TechnologyStackComponent: React.FC<TechnologyStackComponentProps> = ({ introduction, stackContent }): ReactElement => {
  const motionProps = {
    initial: { x: 0, opacity: 0, filter: 'blur(4px)' },
    whileHover: { scale: 1.2 },
    animate: { x: 0, opacity: 1, filter: 'blur(0px)' },
    transition: { duration: 0.1 },
  };

  return (
    <div className={ 'bg-darkblue-grid-background section-shadow pt-1 pb-7 mb-6 w-full' }>
      <div className={ `max-w-screen-md mx-auto px-8` }>
        <h2 className={ 'text-3xl pb-4 mt-8' }>Technology Stack</h2>
        <p className={ 'text-xl' }>
          { introduction }
        </p>
        <div className={ 'grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-2 items-center mt-5' }>
          { stackContent.map((technology, index) => (
            <motion.div key={ index } className="relative p-3 z-20" { ...motionProps }>
              <Image src={ technology.imgSrc } alt={ technology.altText } width={ 120 } height={ 120 } />
            </motion.div>
          )) }
        </div>
      </div>
    </div>
  );
};

export default TechnologyStackComponent;
