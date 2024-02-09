'use client';
import { ReactElement } from 'react';
import Image from 'next/image';
import SectionDivider from '@/components/section-divider';
import SectionComponent from '@/components/section';
import TechnologyStackComponent from '@/components/technology-stack';
import pageContent from '../../../data/portfolio/pages/hifiber/hifiber-data.json';
import stackContent from '../../../data/portfolio/pages/hifiber/hifiber-stack-data.json';
import ConstructionImage from '@/components/construction';

export default function HiFiberPage(): ReactElement {
  return (
    <div>
      <ConstructionImage />

      {/* PAGE SECTIONS */ }
      <div className={ `mx-auto text-xl` }>
        { pageContent.sections.map((section: any, index: number) => (
          <div key={ index }>
            {/* SECTION COMPONENT */ }
            <SectionComponent key={ index } subtitle={ section.subtitle } paragraphs={ section.paragraphs } />

            {/* PAGE DIVIDER */ }
            { ((index !== pageContent.sections.length - 1) && index !== 4) && <SectionDivider key={ index } /> }

            {/* TECHNOLOGY STACK SECTION */ }
            { index === 4 && <TechnologyStackComponent introduction={ pageContent.text.technologyStackIntro } stackContent={ stackContent } /> }
          </div>
        )) }
      </div>
    </div>
  )
}