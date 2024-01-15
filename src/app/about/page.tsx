'use client';
import { cabinHeavy, cabinLight } from '@/utils/fonts';
import { motion } from 'framer-motion';
import { variants } from '@/utils/animations';

export default function About(): any {
  return (
    <>
      <motion.div
        initial='hidden'
        animate='visible'
        transition={ { ease: 'easeInOut', duration: 0.8 } }
        variants={ variants }
        className={ `text-sky-100 text-9xl ${ cabinHeavy.className }` }
      >
        about.
      </motion.div>

      <motion.div
        className={ `text-sky-200 text-3xl pb-12 -mt-2 ${ cabinLight.className }` }
        initial='hidden'
        animate='visible'
        transition={ { ease: 'easeInOut', duration: 1 } }
        variants={ variants }
      >
        This is who I am and where I&apos;m going.
      </motion.div>

      <motion.div
        className={ `text-sky-300 text-2xl` }
        initial='hidden'
        animate='visible'
        transition={ { ease: 'easeInOut', duration: 1.2 } }
        variants={ variants }
      >
        I&apos;ll talk about myself here, and about my previous career in education and whatnot. Then I&apos;ll talk about something else.
      </motion.div>
    </>
  )
}

