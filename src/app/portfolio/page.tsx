
'use client';
import { ReactElement } from 'react';
import { motion } from 'framer-motion';
import { cabinHeavy, cabinLight } from '@/utils/fonts';
import { variants } from '@/utils/animations';
import { MotionText } from '@/components/motion-text';
import FrontButton from '@/components/front-button';

export default function Portfolio(): ReactElement {
  return (
    <>
      { /* TITLE */ }
      <MotionText className={ `text-sky-100 text-9xl pb-5 ${ cabinHeavy.className }` } delay={ 0 }>
        portfolio
      </MotionText>

      {/* SUBTITLE */ }
      <MotionText className={ `text-sky-200 text-3xl pb-12 -mt-2 ${ cabinLight.className }` } delay={ 0.2 }>
        <p>
          Check out some of my latest work.
        </p>
      </MotionText>

      {/* BODY TEXT */ }
      <MotionText className={ `text-sky-300 text-2xl -mt-2 ${ cabinLight.className }` } delay={ 0.4 }>
        <p>
          You can display some of your best projects here.
        </p>
      </MotionText>

      {/* WORK SHOWCASE */ }
      <motion.div
        className={ `flex flex-col justify-between mt-10 sm:flex-row ${ cabinHeavy.className }` }
        transition={ { ease: 'easeInOut', duration: 1.4 } }
        animate={ 'visible' }
        variants={ variants }
        initial={ 'hiddenLeft' }
      >
        <FrontButton text={ 'Sample' } />
        <FrontButton text={ 'Sample' } />
        <FrontButton text={ 'Sample' } />
      </motion.div>

    </>
  )
}
