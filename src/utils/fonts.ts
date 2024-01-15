import { Cabin, DM_Sans } from 'next/font/google'
import { NextFont } from 'next/dist/compiled/@next/font';

export const cabinHeavy: NextFont = Cabin({
  style: 'normal',
  weight: '700',
  display: 'swap',
  subsets: ['latin']
});

export const cabinLight: NextFont = Cabin({
  style: 'normal',
  weight: '400',
  display: 'swap',
  subsets: ['latin']
});

export const dm_sans: NextFont = DM_Sans({
  subsets: ['latin']
});