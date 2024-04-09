'use client';
import { ReactElement, ReactNode } from 'react';
import PortfolioCard from '@/components/portfolio-card';
import BasePageText from '@/components/base-page-text';
import { PortfolioCardPropsInterface } from '@/interfaces/PortfolioCardProps.interface';
import { BasePageTextProps } from '@/interfaces/BasePageTextProps.interface';
import pageContent from '@/data/portfolio/portfolio-data.json'

export default function Portfolio(): ReactElement {
  const { title, subtitle, bodyText }: BasePageTextProps = pageContent.basePageText
  const portfolioCards: PortfolioCardPropsInterface[] = pageContent.portfolioCards;

  return (
    <div className='relative flex flex-col sm:mx-auto'>

      {/* BASE PAGE TEXT */ }
      <BasePageText
        title={ title }
        subtitle={ subtitle }
        bodyText={ bodyText }
      />

      {/* WORK SHOWCASE CONTAINER */ }
      <div className='mt-10 bg-gradient-to-r from-sky-950 via-blue-950 to-indigo-950 section-shadow'>

        {/* BUTTON CONTAINER */ }
        <div
          className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-fit h-fit z-20 mt-6 mb-12 mx-auto px-6 sm:px-0 max-w-screen-lg'>

          {/* PROJECT CARDS */ }
          { portfolioCards.map((card: PortfolioCardPropsInterface, index: number): ReactNode => {
            return (
              <PortfolioCard
                key={ index }
                image={ card.image }
                title={ card.title }
                subtitle={ card.subtitle }
                urlPath={ card.urlPath }
                indexForDelay={ index }
              />
            )
          }) }
        </div>
      </div>
    </div>
  );
}
