'use client';
import { ReactElement, ReactNode } from 'react';
import pageContent from '../../../data/portfolio/pages/top100camp/top100camp-data.json';
import stackContent from '../../../data/portfolio/pages/top100camp/top100camp-stack-data.json';
import SectionDivider from '@/components/section-divider';
import SectionComponent from '@/components/section';
import ConstructionImage from '@/components/construction';
import TechnologyStackComponent from '@/components/technology-stack';

export default function Top100CampPage(): ReactElement {
  return (
    <div>
      <ConstructionImage />

      {/* PAGE SECTIONS */ }
      <div className={ `mx-auto text-xl` }>
        { pageContent.sections.map((section: any, index: number) => (
          <div key={ index }>

            {/* SECTION COMPONENT */ }
            <SectionComponent subtitle={ section.subtitle } paragraphs={ section.paragraphs } />

            {/* PAGE DIVIDER */ }
            { ((index !== pageContent.sections.length - 1) && index !== 2) && <SectionDivider /> }

            {/* TECHNOLOGY STACK SECTION */ }
            { index === 2 && <TechnologyStackComponent introduction={ pageContent.text.technologyStackIntro } stackContent={ stackContent } /> }
          </div>
        )) }
      </div>
    </div>
  );
}
