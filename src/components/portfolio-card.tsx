import { ReactElement } from 'react';
import Image from 'next/image';
import { inter_tightHeavy, inter_tightLight } from '@/utilities/fonts';
import { PortfolioCardPropsInterface } from '@/interfaces/PortfolioCardProps.interface';

export default function PortfolioCard({ image, title, subtitle }: PortfolioCardPropsInterface): ReactElement {
  return (
    <>
      {/* CARD TEXT */}
      <div className={ 'text-black bg-gradient-to-b from-slate-100 to-slate-300 border-2 border-black bg-slate-300 flex flex-col rounded-xl hover:outline-dashed hover:outline-black hover:outline-8 transition ease-in-out' }>

        {/* CARD IMAGE */}
        <Image
          className={ 'rounded-t-lg w-full' }
          src={ `/${ image }` }
          alt={ 'card-image' }
          width={ 246 }
          height={ 132 }
        />

        {/* CARD TITLE */}
        <div className={ `leading-tight text-3xl sm:text-2xl px-2 mt-1 ${ inter_tightHeavy.className }` }>
          { title }
        </div>

        {/* CARD SUBTITLE */}
        <div className={ `leading-snug text-xl sm:text-sm px-2 min-h-16 ${ inter_tightLight.className }` }>
          { subtitle }
        </div>
      </div>
    </>
  );
}
