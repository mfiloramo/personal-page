import { ReactElement } from 'react';

interface SectionComponentProps {
  subtitle?: string;
  paragraphs: string[];
}

export default function SectionComponent({ subtitle, paragraphs }: SectionComponentProps): ReactElement {
  return (
    <div>
      { subtitle && <h2 className={ 'text-3xl pt-4 pb-3' }>{ subtitle }</h2> }
      { paragraphs.map((paragraph, index) => (
        <p className={ `${ index > 0 ? 'pt-4' : '' } pb-4` } key={ index }>
          { paragraph }
        </p>
      )) }
    </div>
  )
}