'use client';
import { ReactElement } from 'react';
import pageContent from '../../../data/portfolio/pages/tech-talk/tech-talk-data.json';


export default function TechTalk(): ReactElement {
  return (
    <div>
      <img className={ 'shadow-2xl mt-4 max-w-screen-md mx-auto w-80 sm:w-[35vw]' } src='/images/construction.png' alt='Construction Image' />

      <div className={ `mx-auto max-w-screen-md text-xl p-8` }>
        { pageContent.sections.map((section) => (
          <div key={ section.id }>
            <h2 className={ 'text-3xl pt-4 pb-3' }>{ section.subtitle }</h2>
            { section.paragraphs.map((paragraph, index) => (
              <p className={ `${ index > 0 ? 'pt-4' : '' } pb-4` } key={ index }>
                { paragraph }
              </p>
            )) }
          </div>
        )) }
      </div>
    </div>
  );
}
