'use client';
import { ReactElement, useEffect, useState } from 'react';
import { MotionSlider } from '@/components/motion-slider';
import { inter_tightHeavy, inter_tightItalicHeavy, inter_tightLight } from '@/utils/fonts';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';

export default function Home(): ReactElement {
  const quotes: any[] = [
    {
      quote: 'Good programmers use their brains, but good guidelines save us having to think out every case.',
      author: 'Francis Glassborow'
    },
    {
      quote: 'Good programmers know what to write. Great ones know what to rewrite and reuse.',
      author: 'Eric S. Raymond'
    },
    {
      quote: 'I’m not a great programmer; I’m just a good programmer with great habits.',
      author: 'Kent Beck'
    },
    {
      quote: 'Computer science education cannot make anybody an expert programmer any more than studying brushes and pigment can make somebody an expert painter.',
      author: 'Eric S. Raymond'
    },
    {
      quote: 'Software and cathedrals are much the same; first we build them, then we pray.',
      author: 'Anonymous'
    },
    {
      quote: 'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
      author: 'Martin Fowler'
    },
    {
      quote: 'The most disastrous thing that you can ever learn is your first programming language',
      author: 'Alan Kay'
    }
  ]
  const [ currentPhrase, setCurrentPhrase ] = useState(0);

  useEffect(() => {
    const intervalId = setInterval((): void => {
      setCurrentPhrase((prevPhrase) => (prevPhrase + 1) % quotes.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, [ quotes.length ]);

  return (
    // MAIN PAGE CONTAINER
    <div className={ `flex flex-col relative text-center text-black ${ inter_tightHeavy.className }` }>

      {/* HERO BANNER */ }
      <div
        className={ 'bg-hero-banner-main bg-cover bg-no-repeat bg-center section-shadow sm:h-64 h-80 w-screen absolute ' }>
        <div className={ '-ml-4 relative mt-8 cursor-default px-8' }>

          {/* TITLE TEXT */ }
          <MotionSlider className={ '' } delay={ 0.2 }>
            <div className={ 'text-[2.5rem] sm:text-6xl' }>Michael Filoramo</div>
          </MotionSlider>

          {/* SUBTITLE TEXT */ }
          <MotionSlider className={ '' } delay={ 0.4 }>
            <div className={ `text-2xl ${ inter_tightLight.className }` }>Web Developer ‣ Designer ‣ Freelancer</div>
          </MotionSlider>

          {/* QUOTES SECTION */ }
          <MotionSlider className='mt-7' delay={ 0.6 }>
            <div className='relative h-24'>
              <AnimatePresence>
                <motion.div
                  key={ currentPhrase }
                  initial={ { opacity: 0, filter: 'blur(6px)' } }
                  animate={ { opacity: 1, filter: 'blur(0px)' } }
                  exit={ { opacity: 0, filter: 'blur(2px)' } }
                  transition={ { duration: 1 } }
                  className='absolute w-full text-center text-lg px-8 sm:px-32 overflow-hidden leading-tight'
                >
                  <p className={ ` ${ inter_tightItalicHeavy.className }` }>“{ quotes[currentPhrase].quote }”</p>
                  <p className={ `${ inter_tightLight.className }` }>— { quotes[currentPhrase].author }</p>
                </motion.div>
              </AnimatePresence>
            </div>
          </MotionSlider>

          {/* BODY SECTION */ }
          <MotionSlider className={ '' } delay={ 0.8 }>
            <div className={ 'gradient-text-lightblue text-5xl relative -z-50 mt-28 sm:mt-10' }>Explore My
              Work
            </div>

            {/* PAGE DIVIDER */ }
            <div className="border-t border-gray-400 mt-2 w-96 mx-auto"></div>
          </MotionSlider>

          {/* BUTTON CONTAINER */ }
          <div
            className={ 'flex flex-col sm:flex-row justify-center sm:justify-between flex-wrap px-4 sm:px-24 mt-8 mb-12 mx-auto max-w-screen-sm pb-8' }>
            <MotionSlider className={ '' } delay={ 1.4 }>
              <Link href={ 'portfolio' }>
                <motion.div
                  className={ `bg-gradient-to-b from-slate-100 to-slate-400 rounded-xl text-slate-950 py-3 px-7 text-3xl cursor-pointer border-2 border-black shadow-xl hover:shadow-2xl w-full sm:w-auto my-2 mx-2 ${ inter_tightHeavy.className }` }
                  whileHover={ { scale: 1.05 } }
                  whileTap={ { scale: 0.95 } }
                  transition={ { duration: 0.1 } }
                >
                  Portfolio
                </motion.div>
              </Link>
            </MotionSlider>

            <MotionSlider className={ '' } delay={ 1.2 }>
              <Link href={ 'services' }>
                <motion.div
                  className={ `bg-gradient-to-b from-slate-100 to-slate-400 rounded-xl text-slate-950 py-3 px-7 text-3xl cursor-pointer border-2 border-black shadow-xl hover:shadow-2xl w-full sm:w-auto my-2 mx-2 ${ inter_tightHeavy.className }` }
                  whileHover={ { scale: 1.05 } }
                  whileTap={ { scale: 0.95 } }
                  transition={ { duration: 0.1 } }
                >
                  Services
                </motion.div>
              </Link>
            </MotionSlider>
          </div>
        </div>
      </div>
    </div>
  );
}