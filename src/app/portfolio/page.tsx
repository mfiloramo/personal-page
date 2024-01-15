'use client';
import { ReactElement } from 'react';
import { cabinHeavy, cabinLight } from '@/utils/fonts';
import { motion } from 'framer-motion';
import { variants } from '@/utils/animations';

export default function Portfolio(): ReactElement {
  return (
    <>
      { /* TITLE */ }
      <motion.div
        initial='hidden'
        animate='visible'
        transition={ { ease: 'easeInOut', duration: 0.6 } }
        variants={ variants }
        className={ `text-sky-100 text-9xl pb-4 ${ cabinHeavy.className }` }
      >
        portfolio
      </motion.div>

      { /* SUBTITLE */ }
      <motion.div
        className={ `text-sky-200 text-3xl pb-16 ${ cabinLight.className }` }
        initial='hidden'
        animate='visible'
        transition={ { ease: 'easeInOut', duration: 0.8 } }
        variants={ variants }
      >
        <p>Check out some of my latest work</p>
      </motion.div>

      { /* BODY TEXT */ }
      <motion.div
        className={ `text-sky-300 text-2xl` }
        initial='hidden'
        animate='visible'
        transition={ { ease: 'easeInOut', duration: 1 } }
        variants={ variants }>
        <p>This is where I&apos;ll display some of the projects that I&apos;m currently working on, along with some
          screenshots.</p>
      </motion.div>
    </>
  )
}
