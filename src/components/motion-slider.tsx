import React from 'react';
import { motion } from 'framer-motion';
import { variants } from '@/utilities/animations';
import { TextProps } from '@/interfaces/TextProps.interface';

export const MotionSlider = ({ children, className, delay }: TextProps) => {
  return (
    <motion.div
      initial={{ x: -130, opacity: 0, filter: 'blur(12px)' }}
      animate={{ x: 0, opacity: 1, filter: 'blur(0px)' }}
      transition={ { ease: 'easeInOut', duration: 0.6 + delay } }
      variants={ variants }
      className={ className }
    >
      { children }
    </motion.div>
  );
};