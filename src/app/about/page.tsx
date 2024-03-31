'use client';
import { ReactElement } from 'react';
import { cabinHeavy, cabinLight } from '@/utilities/fonts';
import AboutPageButton from '@/components/about-page-button';
import FancyDivider from '@/components/fancy-divider';
import { MotionSlider } from '@/components/motion-slider';
import pageContent from '@/data/about/about-data.json';


export default function About(): ReactElement {

  return (
    <div className='flex flex-col lg:p-0 relative'>
      { /* TOP CONTAINER*/ }
      <div className={ 'pt-10 mx-8 md:mx-auto max-w-screen-md mb-10' }>
        { /* TITLE */ }
        <MotionSlider className={ `text-sky-100 text-8xl ${ cabinHeavy.className }` } delay={ 0 }>
          <div>
            about
          </div>
        </MotionSlider>

        { /* SUBTITLE */ }
        <MotionSlider className={ `text-sky-200 text-3xl pb-12 -mt-2 ${ cabinLight.className }` } delay={ 0.2 }>
          I&apos;m a full stack software engineer based in NYC.

          {/* PAGE DIVIDER */ }
          <div className="border-t border-gray-400 mt-2 w-full"></div>
        </MotionSlider>

        { /* BODY TEXT */ }
        <div>
          <MotionSlider className='gradient-text-lightblue text-xl' delay={ 0.4 }>
            <div className={ 'break-words' }>
              From the classrooms of NYC to the world of web development, I&apos;ve spent nearly a decade shaping minds as a public school teacher before transitioning professionally into software development.
            </div>
          </MotionSlider>
          <br />

          <MotionSlider className='gradient-text-lightblue text-xl' delay={ 0.6 }>
            <div className={ 'break-words' }>
              As a dedicated full stack engineer with several years of web development experience across various fields, I&apos;m passionate about merging my educational insights with my technical skills to ultimately give back to the EdTech community.
            </div>
          </MotionSlider>
        </div>
      </div>

      {/* PROF. EXPERIENCE SECTION */ }
      <div className={ 'bg-gradient-to-r from-slate-900 to-slate-800 section-shadow' }>
        <MotionSlider
          className={ `text-sky-200 text-3xl pb-6 mt-8 mx-auto max-w-screen-md  ${ cabinLight.className }` }
          delay={ 0.8 }>
          <div className={ 'text-center' }>Professional Experience</div>

          <FancyDivider />

          { /* BUTTON CONTAINER */ }
          <div className='grid grid-cols-2 sm:grid-cols-4 gap-0 justify-items-center mb-0 sm:mb-4 items-center'>
            {
              pageContent.map((button: any, index: number): ReactElement => {
                return (
                  <AboutPageButton
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
          <FancyDivider />
        </MotionSlider>
      </div>

      {/* WHAT I DO TODAY SECTION */}
      {/*<SectionComponent paragraphs={['d']} />*/}

    </div>
  );
}