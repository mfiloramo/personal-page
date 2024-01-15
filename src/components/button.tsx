import { ReactElement, ReactNode } from 'react';
import Link from 'next/link';

interface ButtonProps {
  href: string;
  children: ReactNode;
}

export default function Button({ href }: ButtonProps): ReactElement {
  return (
    <Link href={ href }>
      <button className='w-20 flex justify-center text-lg text-blue-100 hover:animate-pulse ease-in-out shadow hover:shadow-lg'>
        { href }
      </button>
    </Link>
  );
}
