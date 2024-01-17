import React from 'react';
import { motion } from 'framer-motion';
import { variants } from '@/utils/animations';

interface TextProps {
  children: any,
  className: string,
  delay: number
}

export const MotionSlider = ({ children, className, delay }: TextProps) => {
  return (
    <motion.div
      initial='hiddenLeft'
      animate='visible'
      transition={ { ease: 'easeInOut', duration: 0.6 + delay } }
      variants={ variants }
      className={ className }
    >
      { children }
    </motion.div>
  );
};