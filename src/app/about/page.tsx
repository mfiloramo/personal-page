'use client';
import { motion } from 'framer-motion';
import { cabinHeavy, cabinLight } from '@/utils/fonts';
import { randomScale, randomRotate } from '@/utils/animations';
import { MotionText } from '@/components/motion-text';
import Divider from '@/components/divider';

interface AnimationHoverProps {
  scale: number,
  rotate: number
}

export default function About() {
  const companyLogos: any[] = [];
  const companyLinks: any[] = [
    { image: '/company-logos/lingolink-company-logo.png', url: 'https://orange-tree-0d3c88e0f.3.azurestaticapps.net/' },
    { image: '/company-logos/nbpa-company-logo.png', url: 'https://nbpa.com/' },
    { image: '/company-logos/sinclair-company-logo.png', url: 'https://sbgi.net/' }
  ];

  const generateHoverAnimation: any = (): AnimationHoverProps => {
    return {
      scale: randomScale(),
      rotate: randomRotate(),
    };
  };

  return (
    <div className='flex flex-col max-w-screen-lg'>
      <div>
        {/* TITLE */ }
        <MotionText className={ `text-sky-100 text-9xl ${ cabinHeavy.className }` } delay={ 0 }>
          about
        </MotionText>

        {/* SUBTITLE */ }
        <MotionText className={ `text-sky-200 text-3xl pb-12 -mt-2 ${ cabinLight.className }` } delay={ 0.2 }>
          I&apos;m a full stack software engineer based in NYC.
        </MotionText>

        {/* BODY TEXT */ }
        <>
          <MotionText className='text-sky-300 text-2xl' delay={ 0.4 }>
            <p className='break-words'>
              From the classrooms of NYC to the world of web development, I've spent nearly a decade shaping minds as a public school teacher before transitioning professionally to software development.
            </p>
          </MotionText>
          <br/>

          <MotionText className='text-sky-300 text-2xl' delay={ 0.6 }>
            <p className={'break-words'}>
              As a dedicated full stack engineer with years of web dev experience across various fields, I'm passionate about merging my educational insights with my technical skills to ultimately give back to the EdTech community.
            </p>
          </MotionText>
        </>

        {/* SUBTITLE */ }
        <MotionText className={ `text-sky-200 text-3xl pb-6 mt-12 ${ cabinLight.className }` } delay={ 0.8 }>
          <div className={'text-center '}>Previous Work</div>
          <Divider />

        {/* COMPANY LOGOS */}
          <div className={ 'flex flex-col sm:flex-row justify-around justify-items-center ' }>

            {/* LINGOLINK */}
            <motion.a
              className={ 'mt-4 w-24 mb-4 sm:mb-0 mx-auto sm:mx-0' }
              href={ 'https://orange-tree-0d3c88e0f.3.azurestaticapps.net/' }
              whileHover={ generateHoverAnimation }
              whileTap={ { scale: 0.8, rotate: -8, borderRadius: "100%" } }
            >
              <img src={ '/company-logos/lingolink-company-logo.png' } alt='lingolink' />
            </motion.a>

            {/* NBPA */}
            <motion.a
              className={ 'mx-auto sm:mx-0 -mb-4 sm:mb-0' }
              href={ 'https://nbpa.com/' }
              whileHover={ generateHoverAnimation }
              whileTap={ { scale: 0.8, rotate: 8, borderRadius: "100%" } }
            >
              <img className={ 'w-24 h-auto my-4' } src={ '/company-logos/nbpa-company-logo.png' } alt='nbpa' />
            </motion.a>

            {/* SINCLAIR */}
            <motion.a
              className={ 'w-48 my-11 mx-auto sm:mx-0 mb-4 ' }
              href={ 'https://sbgi.net/' }
              whileHover={ generateHoverAnimation }
              whileTap={ { scale: 0.8, rotate: 8, borderRadius: "100%" } }
            >
              <img src={ '/company-logos/sinclair-company-logo.png' } alt='sinclair' />
            </motion.a>

            {/* HIFIBER */}
            <motion.a
              className={'mx-auto sm:mx-0'}
              href={ 'http://hifibertools.com/' }
              whileHover={ generateHoverAnimation }
              whileTap={ { scale: 0.8, rotate: 12, borderRadius: "100%" } }
            >
              <img className={ 'w-24 h-auto my-4' } src={ '/company-logos/hifiber-company-logo.png' } alt='nbpa' />
            </motion.a>

          </div>
          <Divider />

        </MotionText>
      </div>
    </div>
  );
}