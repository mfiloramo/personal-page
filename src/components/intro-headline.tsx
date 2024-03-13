import React, { ReactElement } from 'react';
import { motion } from 'framer-motion';

interface IntroHeadlineProps {
  text: string;
}

export default function IntroHeadline({ text }: IntroHeadlineProps): ReactElement {
  return (
    <motion.div
      className={ 'p-4 -pb-8 text-xl text-center mx-auto mb-3 box max-w-screen-lg' }
      initial={ { opacity: 0, scale: 0.5 } }
      animate={ { opacity: 1, scale: 1 } }
      transition={ {
        opacity: {
          delay: 0.5,
          duration: 0.5,
          ease: [ 0, 0.71, 0.2, 1.01 ]
        },
        scale: {
          delay: 0.5,
          type: 'spring',
          damping: 5,
          stiffness: 100,
          restDelta: 0.001
        }
      } }
    >
      <div>
        { text }
      </div>
    </motion.div>
  )
}