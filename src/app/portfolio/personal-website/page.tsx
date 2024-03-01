'use client';
import { ReactElement } from 'react';
import SectionComponent from '@/components/section';
import pageContent from '../../../data/portfolio/pages/personal-website/personal-website-data.json';
import ConstructionImage from '@/components/construction';

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
              technologyStack={ section.technologyStack }
            />

          </div>
        )) }
      </div>
    </div>
  )
}