'use client';
import { cabinHeavy, cabinLight } from '@/utils/fonts';
import { MotionText } from '@/components/motion-text';

export default function About() {
  return (
    <div className='flex flex-row'>
      <div className='pr-8'>
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
            <p>From the classrooms of New York City to the world of web development, I've spent nearly a decade shaping minds as a public school teacher before transitioning to software development.</p>
            <br />
          </MotionText>

          <MotionText className='text-sky-300 text-2xl' delay={ 0.6 }>
            <p>Now, as a dedicated full stack engineer with years of web development experience across various fields, I'm passionate about merging my educational insights with my technical skills to give back to the EdTech space.</p>
          </MotionText>
        </>
      </div>
    </div>
  );
}