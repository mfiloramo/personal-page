'use client';
import { ReactElement } from 'react';
import SectionComponent from '@/components/section';
import pageContent from '../../../data/portfolio/pages/top100camp/top100camp-data.json';
import ConstructionImage from '@/components/construction';
import IntroHeadline from '@/components/intro-headline';
import SectionDivider from '@/components/section-divider';
import { SectionComponentProps } from '@/interfaces/SectionComponentProps.interface';

export default function Top100CampPage(): ReactElement {
  return (
    <>
      <ConstructionImage />

      {/* INTRODUCTION HEADLINE */ }
      <IntroHeadline
        text={ 'I migrated and redesigned the NBPA\'s top100camp.com website from WordPress to Angular/Express, introducing a serverless backend and hosted on Vercel for improved performance and user experience.' } />

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
              technologyStack={ section.technologyStack }
            />

          </div>
        )) }
      </div>
    </>
  );
}