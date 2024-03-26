'use client';
import React, { ReactElement } from 'react';
import pageContent from '../../../data/portfolio/pages/tech-talk/tech-talk-data.json';
import SectionComponent from '@/components/section';
import SectionDivider from '@/components/section-divider';
import IntroHeadline from '@/components/intro-headline';
import { SectionComponentProps } from '@/interfaces/SectionComponentProps.interface';


export default function TechTalk(): ReactElement {
  return (
    <>
      {/* INTRODUCTION HEADLINE */ }
      <IntroHeadline
        text={ 'I delivered a comprehensive introductory Tech Talk on WebSockets, detailing their mechanisms and protocols to over 100 software engineering students at a collaborative event with the Codesmith immersive boot camp and SingleSprout, a tech recruitment company.' } />

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
