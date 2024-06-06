import { ReactElement, useEffect, useState } from 'react';
import { motion, useAnimation, AnimatePresence, AnimationControls } from 'framer-motion';
import ThemeToggle from "@/components/theme-toggle";
import { ScrollingCarouselProps } from "@/interfaces/ScrollingCarouselProps.interface";

function useWindowSize() {
  const [ windowSize, setWindowSize ] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    function handleResize(): void {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowSize;
}

export default function ScrollingCarousel({ lightImages, darkImages }: ScrollingCarouselProps): ReactElement {
  // STATE HOOKS
  const { width } = useWindowSize();
  const controls: AnimationControls = useAnimation();
  const [ currentStartIndex, setCurrentStartIndex ] = useState(0);
  const [ isScrollingBackward, setIsScrollingBackward ] = useState(false);
  const [ darkMode, setDarkMode ] = useState(true);

  // COMPONENT CONSTANTS
  const images: string[] = darkMode && darkImages ? darkImages : lightImages;
  const visibleCount: number = width <= 550 ? 2 : 4;
  const imageWidth: any = width <= 550 ? 'w-[50%]' : 'w-[25%] min-w-[25%]';
  let imageStyle: string = 'w-auto max-h-[450px]';
  switch (images.length) {
    case 2:
      imageStyle = 'w-auto max-h-[300px] px-3 py-2';
      break;
    case 3:
      imageStyle = 'px-1 py-1';
      break;
    case 4:
      imageStyle = 'h-auto max-w-[200px] sm:max-w-[530px]';
      break;
  }

  // HANDLER FUNCTIONS
  const handleScrollForward = async (): Promise<void> => {
    setIsScrollingBackward(false);
    await controls.start({
      x: `-${ width <= 550 ? '50%' : '25%' }`,
      transition: { type: "tween", ease: "anticipate", duration: 0.8 }
    });
    controls.set({ x: '0%' });
    setCurrentStartIndex(prevIndex => (prevIndex + 1) % images.length);
  };

  const handleScrollBackward = async (): Promise<void> => {
    setIsScrollingBackward(true);
    await controls.start({
      x: `${ width <= 550 ? '50%' : '25%' }`,
      transition: { type: "tween", ease: "anticipate", duration: 0.8 }
    });
    controls.set({ x: '0%' });
    setCurrentStartIndex(prevIndex => (prevIndex - 1 + images.length) % images.length);
  };

  const getVisibleImages = () => {
    let indices = [];
    for (let i = 0; i < visibleCount; i++) {
      indices.push((currentStartIndex + i) % images.length);
    }
    return indices;
  };

  const toggleTheme = (): void => {
    setDarkMode(!darkMode);
  };

  // RENDER COMPONENT
  return (
    // MAIN COMPONENT CONTAINER
    <div className="mx-auto relative flex flex-col items-center min-h-[450px]">

      {/* SUBTITLE TEXT */ }
      <div className="text-center text-md text-3xl pt-3 pb-5">In-App Screenshots</div>

      {/* IMAGE CONTAINER */ }
      <div
        className="h-auto flex w-full overflow-hidden justify-center px-12 sm:px-12 min-h-[450px]">
        <AnimatePresence>

          {/* IMAGES */ }
          <motion.div className="flex" initial={ { x: '0%' } } animate={ controls }>
            { getVisibleImages().map((index: number, i: number) => (
              <motion.img
                key={ index }
                src={ images[index] }
                initial={ { opacity: (isScrollingBackward && i === 0) || (!isScrollingBackward && i === visibleCount - 1) ? 0 : 1 } }
                animate={ { opacity: 1 } }
                exit={ { opacity: 0 } }
                transition={ { duration: 0.4 } }
                className={ `${ imageWidth } ${ imageStyle } px-1 h-auto` }
              />
            )) }
          </motion.div>
        </AnimatePresence>
      </div>
      {/* END IMAGE CONTAINER */ }

      {/* SCROLL BUTTONS CONTAINER */ }
      <div className="flex my-4 justify-arund items-center mx-auto max-w-[95vw] px-3 sm:px-12">

        {/* SCROLL BACKWARD BUTTON */}
        <motion.button
          onClick={handleScrollBackward}
          className="px-5 bg-sky-200 p-1 border-black border-2 z-20 bg-gradient-to-b dark:from-slate-100 dark:to-slate-500 shadow-xl rounded-xl text-black"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.1 }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path fill="currentColor" d="M10 7l-5 5 5 5V7zm9 5H10v2h9v-2z"/>
          </svg>
        </motion.button>

        {/* SCREENSHOT THEME TOGGLE SWITCH */ }
        { darkImages && <ThemeToggle toggleTheme={ toggleTheme } darkMode={ darkMode } /> }

        {/* SCROLL FORWARD BUTTON */}
        <motion.button
          onClick={handleScrollForward}
          className="px-5 bg-sky-200 p-1 border-black border-2 z-20 bg-gradient-to-b dark:from-slate-100 dark:to-slate-500 shadow-xl rounded-xl text-black"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.1 }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path fill="currentColor" d="M14 7l5 5-5 5V7zm-9 5h9v2H5v-2z"/>
          </svg>
        </motion.button>

      </div>
      {/* END SCROLL BUTTONS CONTAINER */ }
    </div>
    // END MAIN COMPONENT CONTAINER
  );
}
