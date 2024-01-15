import { ReactElement, ReactNode } from 'react';
import Link from 'next/link';

interface ButtonProps {
  href: string;
  children: ReactNode;
}

export default function Button({ href }: ButtonProps): ReactElement {
  return (
    <Link href={ href }>
      <button className='h-24 w-28 flex justify-center items-center text-blue-100 hover:animate-pulse ease-in-out shadow hover:shadow-lg text-xl'>
        { href }
      </button>
    </Link>
  );
}
