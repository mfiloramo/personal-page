'use client';
import { ReactElement, ReactNode } from 'react';
import pageContent from '../../../data/portfolio/pages/sinclair-logging/sinclair-logging-data.json'
import stackContent from '../../../data/portfolio/pages/sinclair-logging/sinclair-logging-stack-data.json';
import SectionDivider from '@/components/section-divider';
import ConstructionImage from '@/components/construction';
import SectionComponent from '@/components/section';
import TechnologyStackComponent from '@/components/technology-stack';

export default function SinclairLogging(): ReactElement {
  return (
    <div>
      <ConstructionImage />

      {/* PAGE SECTIONS */ }
      <div className={ `mx-auto text-xl` }>
        { pageContent.sections.map((section: any, index: number) => (
          <div key={ index }>
            {/* SECTION COMPONENT */ }
            <SectionComponent key={ index } subtitle={ section.subtitle } paragraphs={ section.paragraphs } isEven={ index % 2 === 0 } />

            {/* PAGE DIVIDER */ }
            { ((index !== pageContent.sections.length - 1) && index !== 3) && <SectionDivider key={ index } /> }

            {/* TECHNOLOGY STACK SECTION */ }
            { index === 3 && <TechnologyStackComponent introduction={ pageContent.text.technologyStackIntro } stackContent={ stackContent } /> }
          </div>
        )) }
      </div>
    </div>
  );
}
