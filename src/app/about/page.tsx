'use client';
import { motion } from 'framer-motion';
import { cabinHeavy, cabinLight } from '@/utils/fonts';
import { generateHoverAnimation } from '@/utils/animations';
import { MotionSlider } from '@/components/motion-slider';
import Divider from '@/components/divider';


export default function About() {
  const companyLogos: any[] = [];
  const companyLinks: any[] = [
    { image: '/logos-mono/lingolink-logo-mono.png', url: 'https://orange-tree-0d3c88e0f.3.azurestaticapps.net/' },
    { image: '/logos-mono/nbpa-logo-mono.png', url: 'https://nbpa.com/' },
    { image: '/logos-mono/sinclair-logo-mono.png', url: 'https://sbgi.net/' }
  ];

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
          I'm a full stack software engineer based in NYC.

          {/* PAGE DIVIDER */ }
          <div className="border-t border-gray-400 mt-2 w-full"></div>
        </MotionSlider>

        { /* BODY TEXT */ }
        <>
          <MotionSlider className='text-sky-300 text-2xl' delay={ 0.4 }>
            <p className='break-words'>
              From the classrooms of NYC to the world of web development, I've spent nearly a decade shaping minds as a
              public school teacher before transitioning professionally into software development.
            </p>
          </MotionSlider>
          <br />

          <MotionSlider className='text-sky-300 text-2xl' delay={ 0.6 }>
            <p className={ 'break-words' }>
              As a dedicated full stack engineer with several years of web dev experience across various fields, I'm
              passionate about merging my educational insights with my technical skills to ultimately give back to the
              EdTech community.
            </p>
          </MotionSlider>
        </>
      </div>

      {/* PROF. EXPERIENCE SECTION */ }
      <div className={'bg-gradient-to-r from-slate-900 to-slate-800 shadow-[inset_0_6px_20px_rgba(0,0,0,0.6)]'}>
        <MotionSlider className={ `text-sky-200 text-3xl pb-6 mt-8 mx-auto max-w-screen-md  ${ cabinLight.className }` } delay={ 0.8 }>
          <div className={ 'text-center' }>Professional Experience</div>
          <Divider />

          { /* COMPANY LOGOS */ }
          <div className={ 'flex flex-col sm:flex-row justify-around' }>

            {/* LINGOLINK LOGO */ }
            <motion.a
              className={ 'mt-4 w-24 mb-4 sm:mb-0 mx-auto sm:mx-0' }
              href={ 'https://orange-tree-0d3c88e0f.3.azurestaticapps.net/' }
              whileHover={ generateHoverAnimation }
              whileTap={ { scale: 0.8, rotate: -8, borderRadius: "100%" } }
            >
              <img src={ '/logos-mono/lingolink-logo-mono.png' } alt='lingolink' />
            </motion.a>

            { /* NBPA LOGO */ }
            <motion.a
              className={ 'mx-auto sm:mx-0 -mb-4 sm:mb-0' }
              href={ 'https://nbpa.com/' }
              whileHover={ generateHoverAnimation }
              whileTap={ { scale: 0.8, rotate: 8, borderRadius: "100%" } }
            >
              <img className={ 'w-24 h-auto my-4' } src={ '/logos-mono/nbpa-logo-mono.png' } alt='nbpa' />
            </motion.a>

            { /* SINCLAIR LOGO */ }
            <motion.a
              className={ 'w-48 my-11 mx-auto sm:mx-0 mb-4 ' }
              href={ 'https://sbgi.net/' }
              whileHover={ generateHoverAnimation }
              whileTap={ { scale: 0.8, rotate: 8, borderRadius: "100%" } }
            >
              <img src={ '/logos-mono/sinclair-logo-mono.png' } alt='sinclair' />
            </motion.a>

            { /* HIFIBER LOGO */ }
            <motion.a
              className={ 'mx-auto sm:mx-0' }
              href={ 'http://hifibertools.com/' }
              whileHover={ generateHoverAnimation }
              whileTap={ { scale: 0.8, rotate: 12, borderRadius: "100%" } }
            >
              <img className={ 'w-24 h-auto my-4' } src={ '/logos-mono/hifiber-logo-mono.png' } alt='nbpa' />
            </motion.a>

          </div>
          <Divider />

        </MotionSlider>
      </div>
    </div>
  );
}