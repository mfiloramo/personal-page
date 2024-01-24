'use client';
import { ReactElement } from 'react';
import Image from 'next/image';

export default function LingoLinkPage(): ReactElement {
  return (
    <>
      <Image className={ 'shadow-2xl mt-4' } src='/images/construction.png' alt='Construction Image' />
    </>
  );
}