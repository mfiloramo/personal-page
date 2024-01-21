'use client';
import { motion } from 'framer-motion';
import { cabinHeavy, cabinLight } from '@/utils/fonts';
import { generateHoverAnimation } from '@/utils/animations';
import { MotionSlider } from '@/components/motion-slider';
import Divider from '@/components/divider';


export default function About() {

  return (
    <div className='flex flex-col lg:p-0'>
      { /* TOP CONTAINER*/ }
      <div className={ 'mx-8 md:mx-auto max-w-screen-md mb-10' }>
        { /* TITLE */ }
        <MotionSlider className={ `text-sky-100 text-8xl ${ cabinHeavy.className }` } delay={ 0 }>
          <p>
            about
          </p>
        </MotionSlider>

          { /* SUBTITLE */ }
          <MotionSlider className={ `text-sky-200 text-3xl pb-12 -mt-2 ${ cabinLight.className }` } delay={ 0.2 }>
            I&apos;m a full stack software engineer based in NYC.

            {/* PAGE DIVIDER */ }
            <div className="border-t border-gray-400 mt-2 w-full"></div>
          </MotionSlider>

          { /* BODY TEXT */ }
          <>
            <MotionSlider className='gradient-text text-xl' delay={ 0.4 }>
              <p className='break-words'>
                From the classrooms of NYC to the world of web development, I&apos;ve spent nearly a decade shaping minds as a public school teacher before transitioning professionally into software development.
              </p>
            </MotionSlider>
            <br />

          <MotionSlider className='gradient-text text-xl' delay={ 0.6 }>
            <p className={ 'break-words' }>
              As a dedicated full stack engineer with several years of web dev experience across various fields, I&apos;m passionate about merging my educational insights with my technical skills to ultimately give back to the
              EdTech community.
            </p>
          </MotionSlider>
        </>
      </div>

      {/* PROF. EXPERIENCE SECTION */ }
      <div className={ 'bg-gradient-to-r from-slate-900 to-slate-800 shadow-[inset_0_6px_20px_rgba(0,0,0,0.6)]' }>
        <MotionSlider
          className={ `text-sky-200 text-3xl pb-6 mt-8 mx-auto max-w-screen-md  ${ cabinLight.className }` }
          delay={ 0.8 }>
          <div className={ 'text-center' }>Professional Experience</div>

          <Divider />

          { /* BUTTON CONTAINER */ }
          <div className='grid grid-cols-2 sm:grid-cols-4 gap-0 justify-items-center mx-4 ml-12 sm:ml-0'>

            {/* LINGOLINK LOGO */ }
            <motion.a
              className={ 'mt-4 w-24 mb-4 sm:mb-0 mx-auto sm:mx-0' }
              href={ 'https://orange-tree-0d3c88e0f.3.azurestaticapps.net/' }
              whileHover={ generateHoverAnimation }
              whileTap={ { scale: 0.8, rotate: -8, borderRadius: "100%" } }
            >
              <img src={ '/images/general-logos-mono/lingolink-logo-mono.png' } alt='lingolink' />
            </motion.a>

            { /* NBPA LOGO */ }
            <motion.a
              className={ 'ml-0 sm:-ml-8 -mb-4 sm:mb-0' }
              href={ 'https://nbpa.com/' }
              whileHover={ generateHoverAnimation }
              whileTap={ { scale: 0.8, rotate: 8, borderRadius: "100%" } }
            >
              <img className={ 'w-24 h-auto my-4' } src={ '/images/general-logos-mono/nbpa-logo-mono.png' } alt='nbpa' />
            </motion.a>

            { /* SINCLAIR LOGO */ }
            <motion.a
              className={ 'w-40 my-11 mx-auto sm:mx-0 mb-4 ' }
              href={ 'https://sbgi.net/' }
              whileHover={ generateHoverAnimation }
              whileTap={ { scale: 0.8, rotate: 8, borderRadius: "100%" } }
            >
              <img src={ '/images/general-logos-mono/sinclair-logo-mono.png' } alt='sinclair' />
            </motion.a>

            { /* HIFIBER LOGO */ }
            <motion.a
              className={ 'mx-auto sm:mx-0' }
              href={ 'http://hifibertools.com/' }
              whileHover={ generateHoverAnimation }
              whileTap={ { scale: 0.8, rotate: 12, borderRadius: "100%" } }
            >
              <img className={ 'w-24 h-auto my-4' } src={ '/images/general-logos-mono/hifiber-logo-mono.png' } alt='nbpa' />
            </motion.a>
          </div>
          <Divider />
        </MotionSlider>
      </div>
    </div>
  );
}