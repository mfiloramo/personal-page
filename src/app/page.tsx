'use client';
import { ReactElement } from 'react';
import { MotionSlider } from '@/components/motion-slider';
import { motion } from 'framer-motion';
import Link from 'next/link';

interface StackButton {
  readonly imageSource: string,
  readonly link: string,
}

export default function Home(): ReactElement {
  const frontStackButtons: StackButton[] = [
    {
      imageSource: '/tech-logos/react-logo.png',
      link: 'https://react.dev/'
    },
    {
      imageSource: 'tech-logos/angular-logo.png',
      link: 'https://angular.dev/'
    },
    {
      imageSource: '/tech-logos/next-logo.png',
      link: 'https://nextjs.org/'
    },
    {
      imageSource: '/tech-logos/turbopack-logo-2.png',
      link: 'https://turbo.build/pack'
    },
    {
      imageSource: '/tech-logos/vercel-logo.png',
      link: 'https://vercel.com/'
    }
  ];

  const backStackButtons: StackButton[] = [
    {
      imageSource: '',
      link: ''
    },
    {
      imageSource: '',
      link: ''
    },
    {
      imageSource: '',
      link: ''
    },
    {
      imageSource: '',
      link: ''
    },
    {
      imageSource: '',
      link: ''
    }
  ];

  return (
    <div className={ 'flex flex-row justify-around mt-6 mb-12 mx-auto max-w-screen-md' }>
      {
        frontStackButtons.map((button: StackButton, index: number) => (
          <MotionSlider className={ 'relative' } delay={ (frontStackButtons.length - index) * 0.2 } key={ index }>
            <motion.div
              initial={ { x: -100, opacity: 0 } }
              animate={ { x: 0, opacity: 1 } }
              transition={ { delay: (backStackButtons.length - index) * 0.2 } }
              className={ 'p-3 z-20' }
              whileHover={ { scale: 1.05, rotate: -8 } }
              whileTap={ { scale: 1.1, rotate: -4, borderRadius: "100%" } }
            >
              <a href={ button.link } target="_blank" rel="noopener noreferrer">
                <img className={ 'h-auto w-20 p-2 cursor-pointer' } src={ button.imageSource } alt={ 'img' } />
              </a>
            </motion.div>
          </MotionSlider>
        ))
      }
    </div>
  );

}
