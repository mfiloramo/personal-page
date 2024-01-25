import { ReactElement } from 'react';
import { inter_tightHeavy, inter_tightLight } from '@/utilities/fonts';
import { PortfolioCardPropsInterface } from '@/interfaces/PortfolioCardProps.interface';
import Image from 'next/image';

export default function PortfolioCard({ image, title, subtitle }: PortfolioCardPropsInterface): ReactElement {
  return (
    <div className={ '' }>

      {/* CARD TEXT */ }
      <div className={ 'text-black h-52 w-52 bg-gradient-to-b from-slate-100 to-slate-300 border-2 border-black bg-slate-300 flex flex-col rounded-xl hover:outline-dashed hover:outline-black hover:outline-8 transition ease-in-out' }>

        {/* CARD IMAGE */ }
        <img
          className={ 'h-28 rounded-t-lg' }
          src={ image }
          alt={ 'card-image' }
          height={ 96 }
          width={ 205 }
        />

        {/* CARD TITLE */ }
        <div className={ `leading-tight text-2xl px-2 mt-1 ${ inter_tightHeavy.className }` }>
          { title }
        </div>

        {/* CARD SUBTITLE */ }
        <div className={ `leading-tight text-md px-2 ${ inter_tightLight.className }` }>
          { subtitle }
        </div>

      </div>
    </div>
  )
}
