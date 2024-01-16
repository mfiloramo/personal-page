'use client';
import { motion } from 'framer-motion';
import { cabinHeavy, cabinLight } from '@/utils/fonts';
import { MotionText } from '@/components/motion-text';
import Divider from '@/components/divider';

export default function About() {
  const companyLogos: any[] = [];
  const companyLinks: any[] = [
    { image: '/company-logos/lingolink-company-logo.png', url: 'https://orange-tree-0d3c88e0f.3.azurestaticapps.net/' },
    { image: '/company-logos/nbpa-company-logo.png', url: 'https://nbpa.com/' },
    { image: '/company-logos/sinclair-company-logo.png', url: 'https://sbgi.net/' }
  ];

  return (
    <div className='flex flex-col max-w-screen-lg mx-auto'>
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
              As a dedicated full stack engineer with years of web dev experience across various fields, I'm passionate about merging my educational insights with my technical skills, ultimately giving back to the EdTech community.
            </p>
          </MotionText>
        </>

        {/* SUBTITLE */ }
        <MotionText className={ `text-sky-200 text-3xl pb-6 mt-12 ${ cabinLight.className }` } delay={ 0.8 }>
          <div className={'text-center '}>Previous Work</div>
          <Divider />

        {/* COMPANY LOGOS */}
          <div className={ 'flex flex-row justify-between' }>

            <motion.a
              className={ 'mt-4 w-24' }
              whileHover={ { scale: 1.2, rotate: 8 } }
              whileTap={ {
                scale: 0.8,
                rotate: -8,
                borderRadius: "100%"
              } }
              href={ 'https://orange-tree-0d3c88e0f.3.azurestaticapps.net/' }
              target="_blank" rel="noopener noreferrer"
            >
              <img src={ '/company-logos/lingolink-company-logo.png' } alt='lingolink' />
            </motion.a>

            <motion.a
              href={ 'https://nbpa.com/' }
              target="_blank"
              rel="noopener noreferrer"
              whileHover={ { scale: 1.2, rotate: 10 } }
              whileTap={ {
                scale: 0.8,
                rotate: 8,
                borderRadius: "100%"
              } }>
              <img className={ 'w-24 h-auto my-4' } src={ '/company-logos/nbpa-company-logo.png' } alt='nbpa' />
            </motion.a>

            <motion.a
              className={ 'w-48 my-11' }
              href={ 'https://sbgi.net/' }
              target="_blank"
              rel="noopener noreferrer"
              whileHover={ { scale: 1.2, rotate: -8 } }
              whileTap={ {
                scale: 0.8,
                rotate: 8,
                borderRadius: "100%"
              } }>
              <img src={ '/company-logos/sinclair-company-logo.png' } alt='sinclair' />
            </motion.a>

            <motion.a
              href={ 'http://hifibertools.com/' }
              target="_blank"
              rel="noopener noreferrer"
              whileHover={ { scale: 1.2, rotate: -10 } }
              whileTap={ {
                scale: 0.8,
                rotate: 12,
                borderRadius: "100%"
              } }>
              <img className={ 'w-24 h-auto my-4' } src={ '/company-logos/hifiber-company-logo.png' } alt='nbpa' />
            </motion.a>
          </div>
        </MotionText>
      </div>
    </div>
  );
}