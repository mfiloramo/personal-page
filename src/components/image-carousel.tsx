import { Key, ReactElement, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface CarouselProps {
  images: string[];
}

export default function ImageCarousel({ images }: CarouselProps): ReactElement {
  const [ currentIndex, setCurrentIndex ] = useState(0);
  const [ direction, setDirection ] = useState<string | null>(null);

  const slideVariants = {
    hiddenRight: {
      x: '100%',
      opacity: 0,
    },
    hiddenLeft: {
      x: '-100%',
      opacity: 0,
    },
    visible: {
      x: '0',
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.3,
      },
    },
  };

  const dotsVariants = {
    initial: {
      y: 0,
    },
    animate: {
      y: -5,
      scale: 1.2,
      transition: { type: 'spring', stiffness: 1000, damping: '10' },
    },
    hover: {
      scale: 1.1,
      transition: { duration: 0.2 },
    },
  };

  const handleDotClick = (index: number): void => {
    setDirection(index > currentIndex ? 'right' : 'left');
    setCurrentIndex(index);
  };

  useEffect(() => {
    const timer = setInterval((): void => {
      setDirection('right');
      setCurrentIndex(prevIndex =>
        prevIndex + 1 === images.length ? 0 : prevIndex + 1
      );
    }, 7000);

    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className='relative pt-8 pb-4'>
      <div className='relative rounded-md max-w-screen-lg h-96 mx-auto overflow-hidden'>

        {/* IMAGE DISPLAY SLIDER */ }
        <AnimatePresence>
          <motion.img
            key={ currentIndex }
            src={ images[currentIndex] }
            initial={ direction === 'right' ? 'hiddenRight' : 'hiddenLeft' }
            animate='visible'
            exit='exit'
            variants={ slideVariants }
            className='w-full h-full rounded-md object-contain'
          />
        </AnimatePresence>
      </div>

      {/* RENDERED IMAGES */}
      <div className='mt-5 flex justify-center gap-4'>
        { images.map((_, index: number) => (
          <motion.div
            key={ index }
            className={ `cursor-pointer rounded-full w-4 h-4 ${ currentIndex === index ? 'bg-sky-300' : 'bg-sky-800' }` }
            onClick={ () => handleDotClick(index) }
            initial='initial'
            animate={ currentIndex === index ? 'animate' : '' }
            whileHover='hover'
            variants={ dotsVariants }
          ></motion.div>
        )) }
      </div>
    </div>
  );
};
