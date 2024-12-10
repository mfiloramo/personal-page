import { ReactElement } from 'react';
import { MotionSlider } from '@/components/motion-slider';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { inter_tightHeavy } from '@/utilities/fonts';
import { ButtonContainerProps } from '@/interfaces/ButtonContainerProps.interface';



export default function ButtonContainer({ buttonOneText, buttonTwoText, buttonOneLink, buttonTwoLink, buttonThreeText, buttonThreeLink }: ButtonContainerProps): ReactElement {
  return (
    // BUTTON CONTAINER
    <div
      className={ 'flex flex-col sm:flex-row justify-center px-6 sm:gap-10 mt-8 pb-20 mx-auto' }>

      {/* TODO: ADD MAP FUNCTION TO BUTTONS */}
      {/* BUTTON #1 */}
      <MotionSlider className={ '' } delay={ 1.2 }>
        <Link
          href={ buttonOneLink ? buttonOneLink.toLowerCase() : buttonOneText!.toLowerCase() }
          rel={ buttonOneText === 'Portfolio' ? '' : 'noopener noreferrer' }
          target={ buttonOneText === 'Portfolio' ? '' : '_blank' }
        >
          <motion.div
            className={ `bg-slate-200 rounded-lg text-slate-950 py-3 px-7 min-w-[230px] text-3xl cursor-pointer border-2 border-black shadow-xl hover:shadow-2xl w-full sm:w-auto my-2 text-center ${ inter_tightHeavy.className }` }
            whileHover={ { scale: 1.05 } }
            whileTap={ { scale: 0.95 } }
            transition={ { duration: 0.1 } }
          >
            { buttonOneText }
          </motion.div>
        </Link>
      </MotionSlider>

      {/* BUTTON #2 */}
      <MotionSlider className={ '' } delay={ 1.4 }>
        <Link href={ buttonTwoLink! ? buttonTwoLink!.toLowerCase() : buttonTwoText!.toLowerCase() } rel={ buttonTwoText === 'Services' ? '' : 'noopener noreferrer' } target={ buttonTwoText === 'Services' ? '' : '_blank' }>
          <motion.div
            className={ `bg-slate-200 rounded-lg text-slate-950 py-3 px-7 min-w-[230px] text-3xl cursor-pointer border-2 border-black shadow-xl hover:shadow-2xl w-full sm:w-auto my-2 text-center ${ inter_tightHeavy.className }` }
            whileHover={ { scale: 1.05 } }
            whileTap={ { scale: 0.95 } }
            transition={ { duration: 0.1 } }
          >
            { buttonTwoText }
          </motion.div>
        </Link>
      </MotionSlider>

      {/* BUTTON #3 (ONLY RENDERS IF GIVEN BUTTON INPUTS) */}
      { buttonThreeText && buttonThreeLink && (
        <MotionSlider className={ '' } delay={ 1.4 }>
          <Link href={ buttonThreeLink ? buttonThreeLink.toLowerCase() : buttonThreeText.toLowerCase() } rel={ buttonThreeText === 'Services' ? '' : 'noopener noreferrer' } target={ buttonThreeText === 'Services' ? '' : '_blank' }>
            <motion.div
              className={ `bg-slate-200 rounded-lg text-slate-950 py-3 px-7 min-w-[230px] text-3xl cursor-pointer border-2 border-black shadow-xl hover:shadow-2xl w-full sm:w-auto my-2 text-center ${ inter_tightHeavy.className }` }
              whileHover={ { scale: 1.05 } }
              whileTap={ { scale: 0.95 } }
              transition={ { duration: 0.1 } }
            >
              { buttonThreeText }
            </motion.div>
          </Link>
        </MotionSlider>
      )}
    </div>
  )
}
