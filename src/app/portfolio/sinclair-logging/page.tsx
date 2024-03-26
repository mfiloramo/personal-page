'use client';
import React, { ReactElement } from 'react';
import SectionComponent from '@/components/section';
import pageContent from '../../../data/portfolio/pages/sinclair-logging/sinclair-logging-data.json';
import ConstructionImage from '@/components/construction';
import IntroHeadline from '@/components/intro-headline';
import SectionDivider from '@/components/section-divider';
import { SectionComponentProps } from '@/interfaces/SectionComponentProps.interface';

export default function SinclairLogging(): ReactElement {
  return (
    <>
      <ConstructionImage />

      {/* INTRODUCTION HEADLINE */}
      <IntroHeadline text={'I spearheaded the development of an advanced logging system for Sinclair Broadcast Group, enhancing user activity tracking and system diagnostics across both frontend and backend environments.'} />

      {/* SECTION DIVIDER */ }
      <SectionDivider />

      {/* PAGE CONTENT SECTIONS */ }
      <div className={ `mx-auto text-xl` }>
        { pageContent.sections.map((section: SectionComponentProps, index: number) => (
          <div key={ index }>

            {/* SECTION COMPONENT */ }
            <SectionComponent
              key={ index }
              subtitle={ section.subtitle }
              paragraphs={ section.paragraphs }
              photo={ section.photo }
              background={ section.background }
              textColor={ section.textColor }
              isEven={ index % 2 === 0 }
              isFirst={ index === 0 }
              technologyStack={ section.technologyStack }
              // flowchart={ section.flowchart }
            />

          </div>
        )) }
      </div>
    </>
  );
}