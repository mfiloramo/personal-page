import { ReactElement } from 'react';
import { MotionSlider } from '@/components/motion-slider';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { inter_tightHeavy } from '@/utilities/fonts';


interface TwoButtonContainerProps {
  readonly buttonOne: string;
  readonly buttonTwo: string;
}
export default function TwoButtonContainer({ buttonOne, buttonTwo }: TwoButtonContainerProps): ReactElement {
  return (
    <div
      className={ 'flex flex-col sm:flex-row justify-center sm:justify-between flex-wrap px-4 sm:px-24 mt-8 mb-12 mx-auto max-w-screen-sm pb-8' }>
      <MotionSlider className={ '' } delay={ 1.2 }>
        <Link href={ buttonOne.toLowerCase() }>
          <motion.div
            className={ `bg-gradient-to-b from-slate-100 to-slate-400 rounded-xl text-slate-950 py-3 px-7 text-3xl cursor-pointer border-2 border-black shadow-xl hover:shadow-2xl w-full sm:w-auto my-2 mx-2 text-center ${ inter_tightHeavy.className }` }
            whileHover={ { scale: 1.05 } }
            whileTap={ { scale: 0.95 } }
            transition={ { duration: 0.1 } }
          >
            { buttonOne }
          </motion.div>
        </Link>
      </MotionSlider>

      <MotionSlider className={ '' } delay={ 1.4 }>
        <Link href={ buttonTwo.toLowerCase() }>
          <motion.div
            className={ `bg-gradient-to-b from-slate-100 to-slate-400 rounded-xl text-slate-950 py-3 px-7 text-3xl cursor-pointer border-2 border-black shadow-xl hover:shadow-2xl w-full sm:w-auto my-2 mx-2 text-center ${ inter_tightHeavy.className }` }
            whileHover={ { scale: 1.05 } }
            whileTap={ { scale: 0.95 } }
            transition={ { duration: 0.1 } }
          >
            { buttonTwo }
          </motion.div>
        </Link>
      </MotionSlider>
    </div>
  )
}