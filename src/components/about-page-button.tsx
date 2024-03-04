import { ReactElement } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { generateHoverAnimation } from '@/utilities/animations';
import { AboutButtonPropsInterface } from '@/interfaces/AboutButtonProps.interface';
import { MotionSlider } from '@/components/motion-slider';

export default function AboutPageButton({ imgSrc, urlPath, altText, index }: AboutButtonPropsInterface): ReactElement {
  return (
    <motion.a
      className={ 'mt-4 mb-4 sm:mb-0 mx-auto sm:mx-0' }
      href={ urlPath }
      whileHover={ generateHoverAnimation }
      whileTap={ { scale: 0.9, rotate: -5, borderRadius: '100%' } }
    >
      <MotionSlider className={ '' } delay={ index! }>
        <Image
          src={ imgSrc }
          alt={ altText }
          height={ 96 }
          width={ 96 }
        />
      </MotionSlider>
    </motion.a>
  )
}