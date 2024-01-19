'use client';
import { ReactElement } from 'react';
import { MotionSlider } from '@/components/motion-slider';
import { cabinHeavy, cabinLight } from '@/utils/fonts';

export default function Contact(): ReactElement {
  return (
    <div className='flex flex-col lg:p-0'>
    { /* TOP CONTAINER*/ }
    <div className={ 'mx-8 md:mx-auto max-w-screen-md mb-10' }>
      { /* TITLE */ }
      <MotionSlider className={ `text-sky-100 text-8xl ${ cabinHeavy.className }` } delay={ 0 }>
        <p>
          contact
        </p>
      </MotionSlider>

      { /* SUBTITLE */ }
      <MotionSlider className={ `text-sky-200 text-3xl pb-12 -mt-2 ${ cabinLight.className }` } delay={ 0.2 }>
        Let's connect and build something awesome.

        {/* PAGE DIVIDER */ }
        <div className="border-t border-gray-400 mt-2 w-full"></div>
      </MotionSlider>

      { /* BODY TEXT */ }
        <MotionSlider className='gradient-text text-xl' delay={ 0.4 }>
          <p className='break-words'>
            Got a project in mind or considering software solutions? Reach out and let's bring your vision to life.
          </p>
        </MotionSlider>
      </div>
    </div>
  )
}