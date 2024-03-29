import Link from 'next/link';
import { NavButtonProps } from '@/interfaces/NavButton.interface';

export default function NavButton({ path, label }: NavButtonProps) {
  return (
    <Link href={path}>
      <button
        className='w-20 flex justify-center text-lg text-blue-100 hover:animate-fast-pulse hover:ease-in-out shadow hover:shadow-lg'>
        { label }
      </button>
    </Link>
  );
}
