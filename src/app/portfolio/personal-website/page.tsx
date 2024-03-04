'use client';
import { ReactElement } from 'react';
import SectionComponent from '@/components/section';
import pageContent from '../../../data/portfolio/pages/personal-website/personal-website-data.json';
import ConstructionImage from '@/components/construction';
import IntroHeadline from '@/components/intro-headline';
import SectionDivider from '@/components/section-divider';
import { SectionComponentProps } from '@/interfaces/SectionComponentProps.interface';

export default function PersonalWebsite(): ReactElement {
  return (
    <>
      <ConstructionImage />

      {/* INTRODUCTION HEADLINE */}
      <IntroHeadline text={'I built my personal website using a modern and robust technology stack, creating a dynamic, performant and visually engaging platform to showcase my work and connect with visitors.'} />

      {/* SECTION DIVIDER */ }
      <SectionDivider/>

      {/* PAGE CONTENT SECTIONS */ }
      <div className={ `mx-auto text-xl` }>
        { pageContent.sections.map((section: SectionComponentProps, index: number) => (
          <div key={ index }>

            {/* SECTION COMPONENT */ }
            <SectionComponent
              key={ index }
              subtitle={ section.subtitle }
              paragraphs={ section.paragraphs }
              technologyStack={ section.technologyStack }
            />

          </div>
        )) }
      </div>
    </>
  );
}