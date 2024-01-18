'use client';
import { ReactElement } from 'react';
import { MotionSlider } from '@/components/motion-slider';
import { motion } from 'framer-motion';
import { generateHoverAnimation } from '@/utils/animations';

export default function Home(): ReactElement {
  return (
    <div className={'mx-8 max-w-screen-md'}>
      {/* TECH ICONS */ }
      <MotionSlider className={ 'relative' } delay={ 0.8 }>
        <div className={ 'flex flex-row justify-around mx-auto mt-6 mb-12' }>
          <motion.a
            href={ 'https://angular.dev/' }
            className={ 'p-3' }
            whileHover={ generateHoverAnimation }
            whileTap={ { scale: 0.8, rotate: -8, borderRadius: "100%" } }
          >
            <img className={ 'h-auto w-20 p-2' } src={ '/tech-logos/angular-logo.png' } alt={ 'img' } />
          </motion.a>
          <motion.a
            href={ 'https://react.dev/' }
            className={ 'p-3' }
            whileHover={ generateHoverAnimation }
            whileTap={ { scale: 0.8, rotate: -8, borderRadius: "100%" } }
          >
            <img className={ 'h-auto w-24 p-2' } src={ '/tech-logos/react-logo.png' } alt={ 'img' } />
          </motion.a>
          <motion.a
            href={ 'https://nextjs.org/' }
            className={ 'p-3' }
            whileHover={ generateHoverAnimation }
            whileTap={ { scale: 0.8, rotate: -8, borderRadius: "100%" } }
          >
            <img className={ 'h-auto w-36 p-2 my-4 sm:my-6' } src={ '/tech-logos/next-logo.png' } alt={ 'img' } />
          </motion.a>
          <motion.a
            href={ 'https://turbo.build/pack' }
            className={ 'p-3' }
            whileHover={ generateHoverAnimation }
            whileTap={ { scale: 0.8, rotate: -8, borderRadius: "100%" } }
          >
            <img className={ 'h-auto w-24 p-2' } src={ '/tech-logos/turbopack-logo.png' } alt={ 'img' } />
          </motion.a>
          <motion.a
            href={ 'https://tailwindcss.com/' }
            className={ 'p-3' }
            whileHover={ generateHoverAnimation }
            whileTap={ { scale: 0.8, rotate: -8, borderRadius: "100%" } }
          >
            <img className={ 'h-auto w-24 p-2 mt-5' } src={ '/tech-logos/tailwind-logo.png' } alt={ 'img' } />
          </motion.a>
          <motion.a
            href={ 'https://vercel.com/' }
            className={ 'p-3' }
            whileHover={ generateHoverAnimation }
            whileTap={ { scale: 0.8, rotate: -8, borderRadius: "100%" } }
          >
            <img className={ 'h-auto w-20 p-2 mt-3.5' } src={ '/tech-logos/vercel-logo.png' } alt={ 'img' } />
          </motion.a>
        </div>
      </MotionSlider>
    </div>
  );
}