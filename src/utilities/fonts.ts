import { Cabin, DM_Sans, Inter_Tight } from 'next/font/google'
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
  style: 'normal',
  subsets: ['latin']
});

export const inter_tightHeavy: NextFont = Inter_Tight ({
  style: 'normal',
  weight: '700',
  subsets: ['cyrillic'],
});

export const inter_tightLight: NextFont = Inter_Tight ({
  style: 'normal',
  weight: '400',
  subsets: ['cyrillic']
});

export const inter_tightItalicHeavy: NextFont = Inter_Tight({
  style: 'italic',
  weight: '500',
  display: 'swap',
  subsets: ['latin']
});