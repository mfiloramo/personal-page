'use client';
import { ReactElement } from 'react';
import { cabinHeavy, cabinLight } from '@/utils/fonts';
import { motion } from 'framer-motion';
import { variants } from '@/utils/animations';
import { MotionText } from '@/components/motion-text';

export default function Portfolio(): ReactElement {
  return (
    <>
      { /* TITLE */ }
      <MotionText className={ `text-sky-100 text-9xl pb-4 ${ cabinHeavy.className }` } delay={ 0 }>
        portfolio
      </MotionText>

      {/* SUBTITLE */ }
      <MotionText className={ `text-sky-200 text-3xl pb-12 -mt-2 ${ cabinLight.className }` } delay={ 0.2 }>
        Check out some of my latest work.
      </MotionText>


      {/* BODY TEXT */ }
      <MotionText className={ `text-sky-300 text-2xl -mt-2 ${ cabinLight.className }` } delay={ 0.4 }>
        <p>This is where I&apos;ll display some of the projects that I&apos;m currently working on, along with some screenshots.</p>
      </MotionText>
    </>
  )
}
