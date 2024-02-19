import { ReactElement } from 'react';
import { motion } from 'framer-motion';

export default function SectionDivider(): ReactElement {
  return (
    <>
      <motion.div
        initial={ { opacity: 0, scale: 0.5 } }
        animate={ { opacity: 1, scale: 1 } }
        transition={ { delay: 0.7, duration: 0.5 } }
      >
        <div className='border-t border-gray-400 mt-2 pb-4 mx-auto w-[90vw] max-w-screen-lg'></div>
      </motion.div>
    </>
  )
};
