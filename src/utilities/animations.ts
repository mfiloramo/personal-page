import { AnimationHoverProps } from '@/interfaces/AnimationHoverProps.interface';
import { useInView } from 'react-intersection-observer';


// UTILITY VARIABLES
export const variants = {
  hiddenLeft: { opacity: 0, x: -150 },
  hiddenRight: { opacity: 0, x: 150 },
  visible: { opacity: 1, x: 0 },
};

// UTILITY FUNCTIONS
export const randomScale: any = (): number => {
  return Math.random() * (1.05 - 1.03) + 1.02;
};

export const randomRotate: any = (): number => {
  return Math.random() * 8 - 5;
};

export const generateHoverAnimation: any = (): AnimationHoverProps => {
  return {
    scale: randomScale(),
    rotate: randomRotate(),
  };
};

// IMAGE CONTAINER ANIMATIONS
export const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 1.3,
      staggerChildren: 0.1,
    },
  },
};

export const item = {
  hidden: { opacity: 0, filter: 'blur(4px)' },
  visible: { opacity: 1, filter: 'blur(0px)', transition: { duration: 0.2 } }
};

// IMAGE CAROUSEL ANIMATIONS
export const slideVariants = {
  hiddenRight: {
    x: '100%',
    opacity: 0,
  },
  hiddenLeft: {
    x: '-100%',
    opacity: 0,
  },
  visible: {
    x: '0',
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.8,
    transition: {
      duration: 0.3,
    },
  },
};

export const dotsVariants = {
  initial: {
    y: 0,
  },
  animate: {
    y: -5,
    scale: 1.2,
    transition: { type: 'spring', stiffness: 1000, damping: '10' },
  },
  hover: {
    scale: 1.1,
    transition: { duration: 0.2 },
  },
};

// BASE TEXT ANIMATIONS
export const paragraphAnimationVariants = {
  visible: (direction: number) => ({
    opacity: 1,
    x: 0,
    filter: 'blur(0px)',
    transition: { type: 'spring', stiffness: 200, damping: 20, duration: 0.4 },
  }),
  hidden: (direction: number) => ({
    opacity: 0,
    x: direction * 100,
    filter: 'blur(10px)',
  }),
};

export const subtitleAnimationVariants = {
  visible: {
    opacity: 1,
    scale: 1,
    filter: 'blur(0px)',
    transition: { duration: 0.5, ease: 'easeOut' },
  },
  hidden: {
    opacity: 0,
    scale: 1.2,
    filter: 'blur(4px)',
  },
};
