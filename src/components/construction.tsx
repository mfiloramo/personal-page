import { ReactElement } from 'react';
import Image from 'next/image';

export default function Construction(): ReactElement {
  return (
    <Image
      className={ 'shadow-2xl mt-4 max-w-screen-md mx-auto w-80 min-w-[150px] sm:w-[35vw]' }
      src='/images/construction.png'
      alt='Construction Image'
      width={ 1000 }
      height={ 1000 }
    />
  )
}