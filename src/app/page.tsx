'use client';
import { ReactElement, useEffect, useState } from 'react';
import { inter_tightHeavy, inter_tightItalicHeavy, inter_tightLight } from '@/utils/fonts';
import { AnimatePresence } from 'framer-motion';
import { motion } from 'framer-motion';
import { MotionSlider } from '@/components/motion-slider';

export default function Home(): ReactElement {
  const quotes: any[] = [
    {
      quote: 'I’m not a great programmer; I’m just a good programmer with great habits.',
      author: 'Kent Beck'
    },
    {
      quote: 'Good programmers know what to write. Great ones know what to rewrite and reuse.',
      author: 'Eric S. Raymond'
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
    },
    {
      quote: 'Good programmers use their brains, but good guidelines save us having to think out every case.',
      author: 'Francis Glassborow'
    },
  ]
  const [ currentPhrase, setCurrentPhrase ] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentPhrase((prevPhrase) => (prevPhrase + 1) % quotes.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className={ `relative text-center text-black text-5xl sm:text-7xl ${ inter_tightHeavy.className }` }>
      {/* HERO BANNER */ }
      <div
        className={ `bg-hero-banner-main bg-cover bg-no-repeat bg-center section-shadow h-[60vh] absolute top-0 left-0 right-0 z-10` }></div>

      {/* HERO BANNER TEXT */ }
      <div className="relative z-20">
        <MotionSlider className={ 'pt-12' } delay={ 0.2 }>
          <div className={'-z-50'} >Michael Filoramo</div>
        </MotionSlider>

        <MotionSlider className={ '' } delay={ 0.4 }>
          <div className={ `text-3xl ${ inter_tightLight.className }` }>Web Developer ‣ Designer ‣ Freelancer</div>
        </MotionSlider>

        {/* QUOTES SECTION */ }
        <MotionSlider className='mt-8' delay={ 0.6 }>
          <div className='relative flex justify-center items-center h-32'>
            <AnimatePresence>
              <motion.div
                key={ currentPhrase }
                initial={ { opacity: 0, filter: 'blur(6px)' } }
                animate={ { opacity: 1, filter: 'blur(0px)' } }
                exit={ { opacity: 0, filter: 'blur(2px)' } }
                transition={ { duration: 1 } }
                className='absolute w-full text-center text-xl px-8 overflow-hidden'
              >
                <p className={ `${ inter_tightItalicHeavy.className }` }>“{ quotes[currentPhrase].quote }”</p>
                <p className={ `${ inter_tightLight.className }` }>— { quotes[currentPhrase].author }</p>
              </motion.div>
            </AnimatePresence>
          </div>

        </MotionSlider>
      </div>
    </div>
  );
}
