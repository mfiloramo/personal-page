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
      ref={ ref } className='grid grid-cols-5 gap-3 my-5 mx-16 object-center px-8 max-w-[1500px] items-center justify-items-center'>
      {/* LEFT PERSON IMAGE */ }
      <motion.div
        initial={ { x: '0vw', opacity: 0 } }
        animate={ controls }
        transition={ { delay: 0.7, type: 'spring', stiffness: 250, damping: 10 } }
      >
        <Image
          src='/images/screenshots/lingolink/person-left.png'
          alt='person-left'
          width={ 230 }
          height={ 370 }
        />
      </motion.div>

      {/* LEFT CONVERSATION IMAGE */ }
      <div className="relative flex justify-center items-center w-full ml-8 h-[417px]">
        <AnimatePresence>
          <motion.div
            key={ convoImageIndex }
            initial={ { opacity: 0 } }
            animate={ { opacity: 1 } }
            exit={ { opacity: 0 } }
            transition={ { delay: 0.5 } }
            className='absolute flex justify-center items-center w-[257px] h-[521px]'
          >
            <motion.img
              src={ leftConvoImages[convoImageIndex] }
              alt={ `Conversation image ${ convoImageIndex }` }
              className="object-cover w-full h-full"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* GOOGLE TRANSLATE DIAGRAM */ }
      <div className="relative flex justify-center items-center w-full">
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
      <div className='relative flex justify-center items-center w-full h-[417px]'>
        <AnimatePresence>
          <motion.div
            key={ convoImageIndex }
            initial={ { opacity: 0 } }
            animate={ { opacity: 1 } }
            exit={ { opacity: 0 } }
            transition={ { delay: 0.5 } }
            className='absolute flex justify-center items-center mr-8 w-[257px] h-[521px]'
          >
            <motion.img
              src={ rightConvoImages[convoImageIndex] }
              alt={ `Conversation image ${ convoImageIndex }` }
              className="object-cover w-full h-full"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* RIGHT PERSON IMAGE */ }
      <motion.div
        initial={ { x: '0vw', opacity: 0 } }
        animate={ controls }
        transition={ { delay: 0.7, type: 'spring', stiffness: 250, damping: 10 } }
      >
        <Image
          src='/images/screenshots/lingolink/person-right.png'
          alt='person-right'
          width={ 659 }
          height={ 845 }
        />
      </motion.div>
    </div>
  );
};

export default AnimatedUsageSection;
