import { ReactElement, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSwipeable } from 'react-swipeable';

export default function ImageCarousel({ images }: { images: string[] }): ReactElement {
  const [currentIndex, setCurrentIndex] = useState(0);
  const handlers = useSwipeable({
    onSwipedLeft: () => setCurrentIndex((currentIndex + 1) % images.length),
    onSwipedRight: () => setCurrentIndex((currentIndex - 1 + images.length) % images.length),
  });

  const swipeToIndex = (index: number): void => {
    setCurrentIndex(index);
  };

  return (
    <div {...handlers} className="relative overflow-hidden w-[30vw] select-none">
      <AnimatePresence>
        <motion.img
          key={currentIndex}
          src={images[currentIndex]}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full object-cover"
        />
      </AnimatePresence>
      <div className="absolute inset-0 flex justify-between items-center px-4">
        <motion.button
          whileTap={{ scale: 0.9 }}
          className="bg-white/70 backdrop-blur-md rounded-full p-2 text-black"
          onClick={() => swipeToIndex((currentIndex - 1 + images.length) % images.length)}
        >
          &#8592;
        </motion.button>
        <motion.button
          whileTap={{ scale: 0.9 }}
          className="bg-white/70 backdrop-blur-md rounded-full p-2 text-black"
          onClick={() => swipeToIndex((currentIndex + 1) % images.length)}
        >
          &#8594;
        </motion.button>
      </div>
    </div>
  );
}
