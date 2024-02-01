'use client';
import { ReactElement } from 'react';
import Image from 'next/image';

export default function HiFiberPage(): ReactElement {
  return (
    <>
      <img className={ 'shadow-2xl mt-4 max-w-screen-md mx-auto w-[65vw]' } src='/images/construction.png' alt='Construction Image' />
    </>
  );
}