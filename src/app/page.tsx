'use client';
import { ReactElement, useEffect, useState } from 'react';
import { MotionSlider } from '@/components/motion-slider';
import { inter_tightHeavy, inter_tightItalicHeavy, inter_tightLight } from '@/utilities/fonts';
import { AnimatePresence, motion } from 'framer-motion';
import pageContent from '../data/app.json';
import ButtonContainer from '@/components/button-container';
import Image from "next/image";

export default function Home(): ReactElement {
  // STATE HOOKS
  const [ currentQuote, setCurrentQuote ] = useState(0);

  // EFFECT HOOKS
  useEffect(() => {
    const intervalId: NodeJS.Timeout = setInterval((): void => {
      setCurrentQuote((prevPhrase) => (prevPhrase + 1) % pageContent.length);
    }, 5000);

    return () => clearInterval(intervalId);
  });

  // RENDER COMPONENT
  return (
    // MAIN PAGE CONTAINER
    <div className={ `flex flex-col relative text-center text-black ${ inter_tightHeavy.className }` }>

      {/* HERO BANNER */ }
      <div
        className={ 'bg-hero-banner-main bg-cover bg-no-repeat bg-center section-shadow sm:h-80 h-80 w-screen absolute shadow-2xl' }>
        <div className={ '-ml-4 relative mt-10 cursor-default px-8' }>

          {/* TITLE TEXT */ }
          <MotionSlider className={ '' } delay={ 0.2 }>
            <div className={ 'text-[2.5rem] sm:text-6xl' }>
              Michael Filoramo
            </div>
          </MotionSlider>

          {/* SUBTITLE TEXT */ }
          <MotionSlider className={ '' } delay={ 0.4 }>
            <div className={ `text-2xl ${ inter_tightLight.className }` }>
              Web Developer ‣ Designer ‣ Engineer
            </div>
          </MotionSlider>

          {/* QUOTES SECTION */ }
          <MotionSlider className='mt-7' delay={ 0.6 }>
            <div className='relative h-24 mx-auto max-w-screen-md'>
              <AnimatePresence>
                <motion.div
                  key={ currentQuote }
                  initial={ { opacity: 0, filter: 'blur(6px)' } }
                  animate={ { opacity: 1, filter: 'blur(0px)' } }
                  exit={ { opacity: 0, filter: 'blur(2px)' } }
                  transition={ { duration: 1 } }
                  className='absolute w-full text-center text-lg px-8 sm:px-32 overflow-hidden leading-tight'
                >
                  <div className={ ` ${ inter_tightItalicHeavy.className }` }>“{ pageContent[currentQuote].quote }”
                  </div>
                  <div className={ `${ inter_tightLight.className }` }>— { pageContent[currentQuote].author }</div>
                </motion.div>
              </AnimatePresence>
            </div>
          </MotionSlider>

          {/* BODY SECTION */ }
          <MotionSlider className={ '' } delay={ 0.8 }>
            <div className={ 'gradient-text-lightblue text-5xl relative -z-50 mt-24 ' }>Explore My Work</div>

            {/* PAGE DIVIDER */ }
            <div className="border-t border-gray-400 mt-2 w-96 mx-auto"></div>
          </MotionSlider>

          {/* BUTTON CONTAINER */ }
          <ButtonContainer buttonOneText={ 'Portfolio' } buttonTwoText={ 'Services' }/>
        </div>
      </div>
    </div>
  );
}

// {/* GEAR ANIMATIONS (LEFT) */ }
// <>
//   <motion.div
//     className={ 'absolute -mt-5' }
//     initial={ { x: -300, opacity: 0, filter: 'blur(6px)' } }
//     animate={ { x: 40, opacity: 1, filter: 'blur(0px)' } }
//     transition={ { duration: 2 } }
//   >
//     <Image src={ '/animations/gear-gifs/gear-1.gif' } alt={ 'gear-1' } width={ 200 } height={ 200 }/>
//   </motion.div>
//
//   <motion.div
//     className={ 'absolute -mt-36' }
//     initial={ { x: -300, opacity: 0, filter: 'blur(6px)' } }
//     animate={ { x: 145, opacity: 1, filter: 'blur(0px)' } }
//     transition={ { duration: 2 } }
//   >
//     <Image className={ 'shadow-3xl' } src={ '/animations/gear-gifs/gear-3.gif' } alt={ 'gear-1' } width={ 200 } height={ 200 }/>
//   </motion.div>
// </>
//
// {/* GEAR ANIMATIONS (RIGHT) */ }
// <>
//   <motion.div
//     className={ 'absolute mr-0 -mt-5' }
//     initial={ { x: 1600, opacity: 0, filter: 'blur(6px)' } }
//     animate={ { x: 1300, opacity: 1, filter: 'blur(0px)' } }
//     transition={ { duration: 2 } }
//   >
//     <Image src={ '/animations/gear-gifs/gear-2.gif' } alt={ 'gear-2' } width={ 200 } height={ 200 }/>
//   </motion.div>
// </>