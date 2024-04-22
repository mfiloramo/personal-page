import { ReactElement, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { slideVariants, dotsVariants } from "@/utilities/animations";
import { ImageCarouselPropsInterface } from "@/interfaces/ImageCarouselProps.interface";

// TODO: FIX Y-PADDING ON MOBILE VIEWPORTS
export default function ImageCarousel({ images }: ImageCarouselPropsInterface): ReactElement {
  const [ currentIndex, setCurrentIndex ] = useState(0);
  const [ direction, setDirection ] = useState<string | null>(null);

  const handleDotClick = (index: number): void => {
    setDirection(index > currentIndex ? 'right' : 'left');
    setCurrentIndex(index);
  };

  useEffect(() => {
    const timer: NodeJS.Timeout = setInterval((): void => {
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
        { images.map((image, index: number) => (
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
