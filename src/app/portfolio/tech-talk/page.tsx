'use client';
import { ReactElement } from 'react';
import pageContent from '../../../data/portfolio/pages/tech-talk/tech-talk-data.json';
import ConstructionImage from '@/components/construction';
import SectionComponent from '@/components/section';
import SectionDivider from '@/components/section-divider';


export default function TechTalk(): ReactElement {
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
            { (index !== pageContent.sections.length - 1) && <SectionDivider key={ index } /> }
          </div>
        )) }
      </div>
    </div>
  );
}
