import { ReactElement } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { inter_tightHeavy, inter_tightLight } from '@/utilities/fonts';
import { ServiceImagePropsInterface } from '@/interfaces/ServiceImageProps.interface';

export default function ServiceCard({ imageSrc, title, subtitle }: ServiceImagePropsInterface): ReactElement {
  return (
    // CARD CONTAINER
    <motion.div
      className='px-6 flex flex-col justify-start text-black text-wrap text-center leading-tight min-w-36 cursor-default'
      whileHover={ { scale: 1.1 } }
    >
      {/* CARD IMAGE CONTAINER */ }
      <div className="mx-auto h-14 relative w-full">
        <Image
          src={ `/${ imageSrc }` }
          alt={ title }
          layout="fill"
          objectFit="contain"
          className="!absolute"
        />
      </div>

      {/* CARD TITLE */ }
      <p className={ `mt-2 text-xl mb-1 leading-tight ${ inter_tightHeavy.className }` }>{ title }</p>

      {/* PAGE DIVIDER */ }
      <div className='border-t border-gray-500 mt-2 w-full mx-auto'></div>

      {/* SUBTITLE */ }
      <p className={ `text-sm ${ inter_tightLight.className}` }>{ subtitle }</p>
    </motion.div>
  )
};
