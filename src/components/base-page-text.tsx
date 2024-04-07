import { ReactElement } from 'react';
import { MotionSlider } from '@/components/motion-slider';
import { cabinHeavy, cabinLight } from '@/utilities/fonts';
import { BasePageTextProps } from '@/interfaces/BasePageTextProps.interface';


export default function BasePageText({ title, subtitle, bodyText }: BasePageTextProps): ReactElement {
  return (
  // TEXT CONTAINER
  <div className='px-0 sm:px-8 py-12 mx-8 mb-2 md:mx-auto max-w-screen-md drop-shadow-in-top'>

    {/* TITLE SECTION */}
    <MotionSlider className={ `text-sky-100 text-7xl sm:text-8xl pb-5 ${ cabinHeavy.className }` } delay={ 0 }>
      <div>{ title }</div>
    </MotionSlider>

    {/* SUBTITLE SECTION */ }
    <MotionSlider className={ `text-sky-200 text-3xl pb-12 -mt-2 ${ cabinLight.className }` } delay={ 0.2 }>
      <div className='break-words'>{ subtitle }</div>
      <div className="border-t border-gray-400 mt-2 w-full"></div>
    </MotionSlider>

    {/* BODY TEXT SECTION */ }
    <MotionSlider className={ `gradient-text-lightblue text-xl ${ cabinLight.className }` } delay={ 0.4 }>
      <div className='break-words'>{ bodyText }</div>
    </MotionSlider>
  </div>
  )
}