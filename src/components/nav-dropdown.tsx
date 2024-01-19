'use client';
import { ReactElement, useState } from "react";
import { motion, Variants } from "framer-motion";
import Hamburger from 'hamburger-react';
import Link from 'next/link';

const itemVariants: Variants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 }
  },
  closed: { opacity: 0, y: 20, transition: { duration: 0.2 } }
};

export default function NavDropdown(): ReactElement {
  const [ isOpen, setIsOpen ] = useState(false);

  const handleClose = (): void => {
    setIsOpen(false);
    return;
  }

  return (
    <motion.nav
      initial={ false }
      animate={ isOpen ? "open" : "closed" }
      className="relative h-48 w-full"
    >
      <motion.button
        whileTap={ { scale: 0.97 } }
        onClick={ () => setIsOpen(!isOpen) }
        className='flex justify-between items-center ml-[68vw] text-md mt-2 text-blue-100'
      >
        <Hamburger toggled={ isOpen } toggle={ setIsOpen } />
        <motion.div
          variants={ {
            open: { rotate: 90 },
            closed: { rotate: 0 }
          } }
          transition={ { duration: 0.2 } }
          style={ { originY: 0.55 } }
        >
        </motion.div>
      </motion.button>

      <motion.ul
        variants={ {
          open: {
            clipPath: 'inset(0% 0% 0% 0%)',
            transition: {
              type: "spring",
              bounce: 0,
              duration: 0.7,
              delayChildren: 0.3,
              staggerChildren: 0.05
            }
          },
          closed: {
            clipPath: 'inset(10% 50% 90% 50%)',
            transition: {
              type: "spring",
              bounce: 0,
              duration: 0.3
            }
          }
        } }
        style={ { pointerEvents: isOpen ? "auto" : "none" } }
        className='bg-blue-100 flex flex-col mt-6 -ml-14 gap-5 list-none p-3.5 w-[99vw] rounded-bl-xl rounded-br-xl'
      >
        <motion.li className="text-xl block cursor-pointer text-sky-950" variants={ itemVariants }>
          <Link href={ '/about' } onClick={ handleClose }>about</Link>
        </motion.li>
        <motion.li className="text-xl block cursor-pointer text-sky-950" variants={ itemVariants }>
          <Link href={ '/portfolio' } onClick={ handleClose }>portfolio</Link>
        </motion.li>
        <motion.li className="text-xl block cursor-pointer text-sky-950" variants={ itemVariants }>
          <Link href={ '/services' } onClick={ handleClose }>services</Link>
        </motion.li>
        <motion.li className="text-xl block cursor-pointer text-sky-950" variants={ itemVariants }>
          <Link href={ '/contact' } onClick={ handleClose }>contact</Link>
        </motion.li>
      </motion.ul>

    </motion.nav>
  );
}
