import { ReactElement } from 'react';
import { inter_tightHeavy, inter_tightLight } from '@/utilities/fonts';
import { motion } from 'framer-motion';
import { ServiceImageProps } from '@/interfaces/ServiceImageProps';



export default function ServiceCard({ imageSrc, title, subtitle }: ServiceImageProps): ReactElement {
  return (
    // CARD CONTAINER
    <motion.div
      className={ 'px-6 flex flex-col justify-start text-black text-wrap text-center leading-tight min-w-36 cursor-default' }
      whileHover={ { scale: 1.1 } }
    >
      {/* CARD IMAGE */ }
      <img className={ 'mx-auto h-14' } src={ imageSrc } alt={ 'frontend' } />

      {/* CARD TITLE */ }
      <p className={ `mt-2 text-xl mb-1 leading-tight ${ inter_tightHeavy.className }` }>{ title }</p>

      {/* PAGE DIVIDER */ }
      <div className="mt-1 border-t border-black border-dashed w-full"></div>

      {/* SUBTITLE */ }
      <p className={ `text-xs ${ inter_tightLight.className }` }>{ subtitle }</p>
    </motion.div>
  )
}