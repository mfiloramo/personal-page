'use client';
import { ReactElement } from 'react';
import SectionComponent from '@/components/section';
import pageContent from '../../../data/portfolio/pages/hifiber/hifiber-data.json';
import ConstructionImage from '@/components/construction';
import IntroHeadline from '@/components/intro-headline';
import SectionDivider from '@/components/section-divider';
import { SectionComponentProps } from '@/interfaces/SectionComponentProps.interface';

export default function HiFiberPage(): ReactElement {
  return (
    <>
      <ConstructionImage />

      {/* INTRODUCTION HEADLINE */}
      <IntroHeadline text={'I contributed to creating HiFiber, a React DevTool designed for visualizing the React Fiber tree, facilitating easier debugging and performance optimization for frontend developers.'} />

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