'use client';
import { cabinHeavy, cabinLight } from '@/utilities/fonts';
import { MotionSlider } from '@/components/motion-slider';
import Divider from '@/components/divider';
import { ReactElement } from 'react';
import { AboutButtonPropsInterface } from '@/interfaces/AboutButtonProps.interface';
import AboutButton from '@/components/about-button';


export default function About(): ReactElement {
  const aboutButtons: AboutButtonPropsInterface[] = [
    {
      urlPath: 'https://orange-tree-0d3c88e0f.3.azurestaticapps.net/',
      imgSrc: '/images/general-logos-mono/lingolink-logo-mono.png',
      altText: 'LingoLink'
    },
    {
      urlPath: 'https://nbpa.com/',
      imgSrc: '/images/general-logos-mono/nbpa-logo-mono.png',
      altText: 'nbpa'
    },
    {
      urlPath: 'https://sbgi.net/',
      imgSrc: '/images/general-logos-mono/sinclair-logo-mono.png',
      altText: 'sinclair'
    },
    {
      urlPath: 'http://hifibertools.com/',
      imgSrc: '/images/general-logos-mono/hifiber-logo-mono.png',
      altText: 'hifiber'
    }
  ]

  return (
    <div className='flex flex-col lg:p-0 relative'>
      { /* TOP CONTAINER*/ }
      <div className={ 'pt-10 mx-8 md:mx-auto max-w-screen-md mb-10' }>
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
          <MotionSlider className='gradient-text-lightblue text-xl' delay={ 0.4 }>
            <p className={ 'break-words' }>
              From the classrooms of NYC to the world of web development, I&apos;ve spent nearly a decade shaping minds as a public school teacher before transitioning professionally into software development.
            </p>
          </MotionSlider>
          <br />

          <MotionSlider className='gradient-text-lightblue text-xl' delay={ 0.6 }>
            <p className={ 'break-words' }>
              As a dedicated full stack engineer with several years of web dev experience across various fields, I&apos;m passionate about merging my educational insights with my technical skills to ultimately give back to the EdTech community.
            </p>
          </MotionSlider>
        </>
      </div>

      {/* PROF. EXPERIENCE SECTION */ }
      <div className={ 'bg-gradient-to-r from-slate-900 to-slate-800 section-shadow' }>
        <MotionSlider
          className={ `text-sky-200 text-3xl pb-6 mt-8 mx-auto max-w-screen-md  ${ cabinLight.className }` }
          delay={ 0.8 }>
          <div className={ 'text-center' }>Professional Experience</div>

          <Divider />

          { /* BUTTON CONTAINER */ }
          <div className='grid grid-cols-2 sm:grid-cols-4 gap-0 justify-items-center mx-4 ml-12 sm:ml-0 items-center'>

            {
              aboutButtons.map((button: any, index: number): ReactElement => {
                return (
                  <AboutButton
                    key={ index }
                    urlPath={ button.urlPath }
                    imgSrc={ button.imgSrc }
                    altText={ button.altText }
                    index={ 1 + (0.3 * index) }
                  />
                )
              })
            }

          </div>
          <Divider />
        </MotionSlider>
      </div>
    </div>
  );
}