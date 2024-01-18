'use client';
import { ReactElement } from 'react';
import { MotionSlider } from '@/components/motion-slider';
import { cabinHeavy, cabinLight } from '@/utils/fonts';

export default function Services(): ReactElement {
  return (
    <div className='relative flex flex-col sm:mx-auto'>
      <div className={'mb-12'}>
        {/* TITLE SECTION */ }
        <div className='mx-8 md:mx-auto max-w-screen-md drop-shadow-in-top'>
          <MotionSlider className={ `text-sky-100 text-8xl pb-5 ${ cabinHeavy.className }` } delay={ 0 }>
            <p>services</p>
          </MotionSlider>

          {/* SUBTITLE SECTION */ }
          <MotionSlider className={ `text-sky-200 text-3xl pb-12 -mt-7 ${ cabinLight.className }` } delay={ 0.2 }>
            <p className='break-words'>
              I craft exceptional web experiences built for tomorrow.
            </p>
            <div className="border-t border-gray-400 mt-2 w-full"></div>
          </MotionSlider>

          {/* BODY TEXT SECTION */ }
          <MotionSlider className={ `text-sky-300 text-xl mb-4 ${ cabinLight.className }` } delay={ 0.4 }>
            <p className='break-words'>
              Delivering comprehensive and secure full stack solutions in web development, from sophisticated frontends to robust backends and scalable distributed systems.
            </p>
          </MotionSlider>

          <MotionSlider className={ `text-sky-300 text-xl ${ cabinLight.className }` } delay={ 0.6 }>
            <p className='break-words'>
              Ready to take your web presence to new heights? Send me a message on Upwork — or contact me directly — for a personalized consultation and expert web development services tailored to your vision.
            </p>
          </MotionSlider>
        </div>
      </div>

      {/* NEW SECTION */}
      <div className={'w-screen bg-gradient-to-b from-slate-200 to-slate-400 h-32 shadow-[inset_0_6px_20px_rgba(0,0,0,0.6)]'}></div>

    </div>
  );
}