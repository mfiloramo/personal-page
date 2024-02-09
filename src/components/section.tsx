import { ReactElement } from 'react';
import { SectionComponentProps } from '@/interfaces/SectionComponentProps.interface';


export default function SectionComponent({ subtitle, paragraphs }: SectionComponentProps): ReactElement {
  return (
    // SECTION CONTAINER
    <div className={ 'max-w-screen-md mx-auto px-8 first:pt-3' }>
      {/* SECTION SUBTITLE */ }
      { subtitle && <h2 className={ 'text-3xl pb-3' }>{ subtitle }</h2> }
      {/* SECTION PARAGRAPHS */ }
      { paragraphs.map((paragraph, index) => (
        <p className={ `${ index > 0 ? 'pt-6' : '' } last:pb-12 first:-mb-4 first:pt-8` } key={ index }>
          { paragraph }
        </p>
      )) }
    </div>
  )
}