'use client';
import { cabinHeavy, cabinLight } from '@/utils/fonts';
import { motion } from 'framer-motion';
import { variants } from '@/utils/animations';

export default function About(): any {
  return (
    <div className={ 'flex flex-row' }>
      <div className={'pr-8'}>

        {/* TITLE */}
        <motion.div
          initial='hidden'
          animate='visible'
          transition={ { ease: 'easeInOut', duration: 0.6 } }
          variants={ variants }
          className={ `text-sky-100 text-9xl ${ cabinHeavy.className }` }
        >
          about
        </motion.div>

        {/* SUBTITLE */}
        <motion.div
          className={ `text-sky-200 text-3xl pb-12 -mt-2 ${ cabinLight.className }` }
          initial='hidden'
          animate='visible'
          transition={ { ease: 'easeInOut', duration: 0.8 } }
          variants={ variants }
        >
          I&apos;m a full stack software engineer based in NYC
        </motion.div>

        {/* BODY TEXT */}
        <motion.div
          className={ `text-sky-300 text-2xl` }
          initial='hidden'
          animate='visible'
          transition={ { ease: 'easeInOut', duration: 1 } }
          variants={ variants }
        >
          <p>From the classrooms of New York City to the world of web development, I've spent nearly a decade shaping
            minds as a public school teacher before transitioning to software development.</p>
          <br />

          <p>Now, as a dedicated full stack engineer with years of web development experience across various fields, I'm passionate about merging my educational insights with my technical skills to give back to the EdTech space.</p>
        </motion.div>
      </div>
      {/*<img className={'mt-28 w-96 h-96'} src={'https://thispersondoesnotexist.com/'}/>*/}
    </div>

  )
}

