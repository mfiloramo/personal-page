'use client';
import { ReactElement } from 'react';
import { cabinHeavy, cabinLight } from '@/utils/fonts';
import { motion } from 'framer-motion';
import { variants } from '@/utils/animations';

export default function Portfolio(): ReactElement {return (
    <>
      <motion.div
        initial='hidden'
        animate='visible'
        transition={ { ease: 'easeInOut', duration: 0.8 } }
        variants={ variants }
        className={ `text-sky-100 text-9xl pb-4 ${ cabinHeavy.className }` }
      >
        portfolio.
      </motion.div>

      <motion.div
        className={ `text-sky-200 text-3xl pb-16 ${ cabinLight.className }` }
        initial='hidden'
        animate='visible'
        transition={ { ease: 'easeInOut', duration: 1 } }
        variants={ variants }
      >
        Check out some of my latest work.
      </motion.div>

      <motion.div
        className={ `text-sky-300 text-2xl` }
        initial='hidden'
        animate='visible'
        transition={ { ease: 'easeInOut', duration: 1.2 } }
        variants={ variants }      >
        This is where I&apos;ll display some of the projects that I&apos;m currently working on, along with some
        screenshots.
      </motion.div>
    </>
  )
}
