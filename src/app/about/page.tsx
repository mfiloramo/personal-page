'use client';
import { ReactElement } from 'react';
import { cabinLight } from '@/utilities/fonts';
import SectionComponent from "@/components/section";
import AboutPageButton from '@/components/about-page-button';
import FancyDivider from '@/components/fancy-divider';
import BasePageText from '@/components/base-page-text';
import { MotionSlider } from '@/components/motion-slider';
import { BasePageTextProps } from '@/interfaces/BasePageTextProps.interface';
import { SectionComponentProps } from "@/interfaces/SectionComponentProps.interface";
import pageContent from '@/data/about/about-data.json';


export default function About(): ReactElement {
  const { title, subtitle, bodyText }: BasePageTextProps = pageContent.basePageText
  const workExperienceCards: any = pageContent.workExperienceCards
  const sections: any[] = pageContent.sections;

  return (
    <div className='relative flex flex-col sm:mx-auto'>
      {/* BASE PAGE TEXT */ }
      <BasePageText
        title={ title }
        subtitle={ subtitle }
        bodyText={ bodyText }
      />

      {/* PROF. EXPERIENCE SECTION */ }
      <div className={ 'bg-gradient-to-r from-slate-900 to-slate-800 section-shadow mt-3' }>
        <MotionSlider
          className={ `text-sky-200 pb-6 mt-8 mx-auto max-w-screen-md ${ cabinLight.className }` }
          delay={ 0.8 }>
          <div className={ 'text-3xl text-center' }>Professional Experience</div>

          {/* FANCY DIVIDER */}
          <FancyDivider />

          { /* BUTTON CONTAINER */ }
          <div className='grid grid-cols-2 sm:grid-cols-4 gap-0 justify-items-center mb-0 sm:mb-4 items-center px-6 sm:px-0'>
            { workExperienceCards.map((button: any, index: number): ReactElement => {
              return (
                <AboutPageButton
                  key={ index }
                  urlPath={ button.urlPath }
                  imgSrc={ button.imgSrc }
                  altText={ button.altText }
                  index={ 1 + (0.3 * index) }
                />
              )
            }) }
          </div>

          {/* FANCY DIVIDER */}
          <FancyDivider />

        </MotionSlider>
      </div>

      {/* WHAT I DO SECTION (DISABLED UNTIL PROD-READY) */ }
      { sections.map((section: SectionComponentProps, index: number) => {
        return (
          <SectionComponent
            key={ index }
            subtitle={ section.subtitle }
            paragraphs={ section.paragraphs }
            photo={ section.photo }
            isEven={ index % 2 === 0 }
          />
        )
      }) }

    </div>
  );
}