import React, { useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence, AnimationControls } from 'framer-motion';
import { useAnimation } from 'framer-motion';
import { AnimatedUsageSectionProps } from '@/interfaces/AnimatedUsageSectionProps';
import { useInView } from 'react-intersection-observer';

const AnimatedUsageSection = ({ convoImageIndex, leftConvoImages, rightConvoImages, flagImages }: AnimatedUsageSectionProps) => {
  const [ ref, inView ] = useInView({ triggerOnce: true, threshold: 0.1 });
  const controls: AnimationControls = useAnimation();

  useEffect((): void => {
    if (inView) {
      controls.start({ opacity: 1, scale: 1 });
    }
  }, [ controls, inView ]);

  return (
    <div
      ref={ ref }
      className='flex gap-4 py-44 sm:py-6 sm:py-20 md:py-28 object-center items-center justify-items-center'>

      {/* LEFT PERSON IMAGE */ }
      <motion.div
        className={ 'hidden sm:block' }
        initial={ { opacity: 0 } }
        animate={ controls }
        transition={ { delay: 0.7 } }
      >
        <Image
          src='/images/screenshots/lingolink/person-left.png'
          alt='person-left'
          width={ 766 }
          height={ 1232 }
        />
      </motion.div>

      {/* LEFT CONVERSATION IMAGE */ }
      <div className='relative flex justify-center items-center w-full'>
        <AnimatePresence>
          <motion.div
            key={ convoImageIndex }
            initial={ { opacity: 0 } }
            animate={ { opacity: 1 } }
            exit={ { opacity: 0 } }
            transition={ { delay: 0.5 } }
            className='absolute flex justify-center items-center'
          >
            <Image
              src={ leftConvoImages[convoImageIndex] }
              alt={ `Conversation image ${ convoImageIndex }` }
              height={ 766 }
              width={ 381 }
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* TODO: FIX MOBILE RENDERING COLOR BUG */}
      {/* LINGOLINK GOOGLE TRANSLATE DIAGRAM */ }
      <div className='relative flex justify-center items-center w-full'>
        <AnimatePresence>
          <motion.div
            key={ convoImageIndex }
            initial={ { opacity: 0 } }
            animate={ { opacity: 1 } }
            exit={ { opacity: 0 } }
            transition={ { delay: 0.5 } }
            className='absolute flex justify-center items-center'
          >
            <Image
              src={ flagImages[convoImageIndex] }
              alt={ `Flag image ${ convoImageIndex }` }
              className="object-cover w-full h-full"
              width={ 330 }
              height={ 550 }
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* RIGHT CONVERSATION IMAGE */ }
      <div className='relative flex justify-center items-center w-full'>
        <AnimatePresence>
          <motion.div
            key={ convoImageIndex }
            initial={ { opacity: 0 } }
            animate={ { opacity: 1 } }
            exit={ { opacity: 0 } }
            transition={ { delay: 0.5 } }
            className='absolute flex justify-center items-center'
          >
            <Image
              src={ rightConvoImages[convoImageIndex] }
              alt={ `Conversation image ${ convoImageIndex }` }
              height={ 766 }
              width={ 381 }
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* RIGHT PERSON IMAGE */ }
      <motion.div
        className={ 'hidden sm:block' }
        initial={ { opacity: 0 } }
        animate={ controls }
        transition={ { delay: 0.7, type: 'spring', stiffness: 250, damping: 10 } }
      >
        <Image
          src='/images/screenshots/lingolink/person-right.png'
          alt='person-right'
          width={ 921 }
          height={ 1190 }
        />
      </motion.div>
    </div>
  );
};

export default AnimatedUsageSection;
