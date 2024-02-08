import { motion } from 'framer-motion';
import Image from 'next/image';
import React, { ReactElement } from 'react';

interface Technology {
  imgSrc: string;
  altText: string;
}

interface TechnologyStackComponentProps {
  stackContent: Technology[];
}

const TechnologyStackComponent: React.FC<TechnologyStackComponentProps> = ({ stackContent }): ReactElement => {
  const motionProps = {
    initial: { x: 0, opacity: 0, filter: 'blur(4px)' },
    whileHover: { scale: 1.2 },
    animate: { x: 0, opacity: 1, filter: 'blur(0px)' },
    transition: { duration: 0.2 },
  };

  return (
    <div className={ 'bg-darkblue-grid-background section-shadow pt-1 ' }>
      {/* MotionSlider and content */ }
      <div className={ `text-3xl pb-6 mt-8 mx-auto max-w-screen-md` }>
        <div className={ 'px-8' }>
          <h2 className={ 'pb-2' }>Technology Stack</h2>
          <p className={ 'text-xl' }>
            I chose this stack to leverage a modern, scalable, and friendly ecosystem that ensures fast development, easy maintenance and seamless deployment.
          </p>
          <div className={ 'grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-2 items-center mt-5' }>
            { stackContent.map((technology, index) => (
              <motion.div key={ index } className="relative p-3 z-20 mx-auto" { ...motionProps }>
                <Image src={ technology.imgSrc } alt={ technology.altText } width={ 120 } height={ 120 } />
              </motion.div>
            )) }
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnologyStackComponent;
