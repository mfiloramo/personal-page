import { ReactElement } from 'react';
import Image from 'next/image';

export default function Construction(): ReactElement {
  return (
    <Image
      className={ 'shadow-2xl mt-4 max-w-screen-sm mx-auto  w-[70vw] sm:w-[50vw]' }
      src='/images/construction.png'
      alt='Construction Image'
      width={ 640 }
      height={ 216 }
    />
  )
}