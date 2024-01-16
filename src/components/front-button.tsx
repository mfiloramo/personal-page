import { motion } from 'framer-motion';
import { ReactElement } from 'react';

interface FrontButtonProps {
  text: string
}

export default function FrontButton({ text }: FrontButtonProps): ReactElement {
  return (
    <motion.div
      className={ 'shadow-xl bg-amber-500 border-black border-8 h-44 w-56 flex flex-row justify-center p-2 cursor-pointer rounded-3xl text-black text-5xl pt-14' }
      whileHover={ { scale: 1.1 } }
      whileTap={ { scale: 1.05 } }
    >
      { text }
    </motion.div>
  )
}