'use client';
import { ReactElement, ReactNode } from 'react';
import pageContent from '../../../data/portfolio/pages/personal-website/personal-website-data.json';
import stackContent from '../../../data/portfolio/pages/personal-website/personal-website-stack-data.json';
import SectionDivider from '@/components/section-divider';
import ConstructionImage from '@/components/construction';
import SectionComponent from '@/components/section';
import TechnologyStackComponent from '@/components/technology-stack';

export default function PersonalWebsite(): ReactElement {
  return (
    <div>
      <ConstructionImage />
      {/* PAGE SECTIONS */ }
      <div className={ `mx-auto text-xl` }>
        { pageContent.sections.map((section: any, index: number) => (
          <div key={ index }>

            {/* SECTION COMPONENT */ }
            <SectionComponent
              key={ index }
              subtitle={ section.subtitle }
              paragraphs={ section.paragraphs }
            />

            {/* TECHNOLOGY STACK SECTION */ }
            { index === 1 && <TechnologyStackComponent introduction={ pageContent.text.technologyStackIntro } stackContent={ stackContent } /> }
          </div>
        )) }
      </div>
    </div>
  )
}