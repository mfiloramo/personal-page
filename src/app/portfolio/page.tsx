
'use client';
import { ReactElement } from 'react';
import { cabinHeavy, cabinLight } from '@/utils/fonts';
import { MotionSlider } from '@/components/motion-slider';
import { motion } from 'framer-motion';
import { generateHoverAnimation } from '@/utils/animations';
import Divider from '@/components/divider';

export default function Portfolio(): ReactElement {
  return (
    <div className='relative flex flex-col max-w-screen-md mx-auto lg:p-0 px-8 pt-4'>
      { /* TITLE */ }
      <MotionSlider className={ `text-sky-100 text-8xl pb-5 ${ cabinHeavy.className }` } delay={ 0 }>
        <p>
          portfolio
        </p>
      </MotionSlider>

      {/* SUBTITLE */ }
      <MotionSlider className={ `text-sky-200 text-3xl pb-12 -mt-2 ${ cabinLight.className }` } delay={ 0.2 }>
        <p>
          Check out some of my latest work in full stack web development.
        </p>

        {/* GENERIC DIVIDER */}
        <div className="border-t border-gray-400 mt-2 w-full"></div>

      </MotionSlider>

      {/* BODY TEXT */ }
      <MotionSlider className={ `text-sky-300 text-2xl ${ cabinLight.className }` } delay={ 0.4 }>
        <p>
          Here are some projects of which I'm particularly proud. Feel free to peruse through my work.
        </p>
      </MotionSlider>

      {/* WORK SHOWCASE CONTAINER */ }
      <div className={ 'relative' }>
        <MotionSlider delay={ 1 } className={ 'z-10' }>
          {/* LOGO CONTAINER */ }
          <div className='bg-gradient-to-r from-blue-950 via-indigo-950 to-purple-950 w-full h-fit mt-12 p-4 z-20 flex flex-col sm:flex-row justify-around rounded-3xl border-4 border-black shadow-[inset_1px_0px_12px_rgba(0,0,0,0.8)]'>

          {/* LINGOLINK LOGO */ }
          <motion.a
            className={ 'mt-6 w-40 mb-4 mx-auto sm:mx-0 sm:mb-0 z-20' }
            href={ '/portfolio/lingolink' }
            whileHover={ generateHoverAnimation }
            whileTap={ { scale: 0.8, rotate: -8, borderRadius: "100%" } }
          >
            <img src={ '/logos-color/linkedin-logo-color.png' } alt='lingolink' />
          </motion.a>

          {/* TOP100CAMP LOGO */ }
          <motion.a
            className={ 'my-7 mb-0 mx-auto sm:mx-0 sm:mt-7 w-48 z-20' }
            href={ '/portfolio/top100camp' }
            whileHover={ generateHoverAnimation }
            whileTap={ { scale: 0.8, rotate: -8, borderRadius: "100%" } }
          >
            <img src={ '/logos-color/top100-logo-color.png' } alt='top100camp' />
          </motion.a>

          {/* HIFIBER LOGO */ }
          <motion.a
            className={ 'my-7 mb-4 sm:mb-0 mx-auto sm:mx-0 sm:mt-10 w-52 z-20' }
            href={ '/portfolio/hifiber' }
            whileHover={ generateHoverAnimation }
            whileTap={ { scale: 0.8, rotate: -8, borderRadius: "100%" } }
          >
            <img src={ '/logos-color/hifiber-logo-color.png' } alt='top100camp' />
          </motion.a>
      </div>

    </MotionSlider>


</div>
</div>

)
}
