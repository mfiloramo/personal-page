import { ReactElement } from 'react';
import Image from 'next/image';
import { inter_tightHeavy, inter_tightLight } from '@/utilities/fonts';
import { PortfolioCardPropsInterface } from '@/interfaces/PortfolioCardProps.interface';
import { generateHoverAnimation } from '@/utilities/animations';
import { motion } from 'framer-motion';
import { MotionSlider } from '@/components/motion-slider';


export default function PortfolioCard({ image, title, subtitle, urlPath, indexForDelay }: PortfolioCardPropsInterface): ReactElement {

  return (
    <>
      <MotionSlider className={ '' } delay={ 0.2 * indexForDelay! }>
        <motion.a
          href={ urlPath }
          whileHover={ generateHoverAnimation }
          className={ 'p-3' }
          whileTap={ { scale: 0.9, rotate: 0, borderRadius: '100%' } }
        >
          <div>
            {/* CARD CONTAINER */ }
            <div
              className={ 'text-black bg-gradient-to-b from-slate-100 to-slate-300 border-2 border-black bg-slate-300 flex flex-col max-h-[190px] sm:max-h-[203px] max-w-52 rounded-xl hover:outline-dashed hover:outline-black hover:outline-8 transition ease-in-out' }>

              {/* CARD IMAGE */ }
              <Image
                className={ 'rounded-t-lg w-full' }
                src={ `/${ image }` }
                alt={ 'card-image' }
                width={ 246 }
                height={ 132 }
              />

              {/* CARD TITLE */ }
              <div className={ `leading-tight text-xl sm:text-2xl px-2  mt-1 ${ inter_tightHeavy.className }` }>
                { title }
              </div>

              {/* CARD SUBTITLE */ }
              <div className={ `leading-snug text-sm px-2  min-h-16 ${ inter_tightLight.className }` }>
                { subtitle }
              </div>
            </div>
          </div>

        </motion.a>
      </MotionSlider>
    </>

  );
}
