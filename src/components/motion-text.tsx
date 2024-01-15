import React from 'react';
import { motion } from 'framer-motion';

interface TextProps {
  children: any,
  className: string,
  delay: number
}

export const MotionText = ({ children, className, delay }: TextProps) => {
  const variants = {
    hidden: { opacity: 0, x: -150 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <motion.div
      initial='hidden'
      animate='visible'
      transition={ { ease: 'easeInOut', duration: 0.6 + delay } }
      variants={ variants }
      className={ className }
    >
      { children }
    </motion.div>
  );
};