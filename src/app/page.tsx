'use client';
import { ReactElement } from 'react';
import { inter_tightHeavy, inter_tightLight } from '@/utils/fonts';
import { MotionSlider } from '@/components/motion-slider';

export default function Home(): ReactElement {
  return (
    // MAIN PAGE CONTAINER
    <div className={ `relative text-center text-black text-5xl sm:text-7xl ${ inter_tightHeavy.className }` }>

      {/* HERO BANNER */ }
      <div className={ `bg-hero-banner-main bg-cover bg-no-repeat bg-center section-shadow h-[60vh] absolute top-0 left-0 right-0 z-10` }></div>

      {/* HERO BANNER TEXT */ }
      <div className="relative z-10">
        <MotionSlider className={ 'pt-12' } delay={ 0.2 }>
          <div>Michael Filoramo</div>
        </MotionSlider>

        <MotionSlider className={ '' } delay={ 0.4 }>
          <div className={ `text-3xl ${ inter_tightLight.className }` }>Web Developer ‣ Designer ‣ Freelancer</div>
        </MotionSlider>
      </div>
    </div>
  );
}
