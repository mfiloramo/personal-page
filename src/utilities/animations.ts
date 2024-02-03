import { AnimationHoverProps } from '@/interfaces/AnimationHoverProps.interface';

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