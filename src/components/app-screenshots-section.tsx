import React, { ReactElement } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { container, item } from '@/utilities/animations';
import { AppScreenShotsSectionProps } from '@/interfaces/AppScreenshotsSectionProps.interface';


export default function AppScreenshotsSection({ titleText, screenshots, screenshotWidth, screenshotHeight }: AppScreenShotsSectionProps): ReactElement {
  let imageStyle: string = 'w-auto max-h-[450px]';
  if (screenshots.length === 2) {
    imageStyle = 'w-auto max-h-[300px] px-3 py-2';
  } else if (screenshots.length === 4) {
    imageStyle = 'h-auto max-w-[180px] sm:max-w-[230px]'
  }

  return (
    <>
      <motion.div
        className="text-xl text-center mb-3"
        initial={ { opacity: 0 } }
        animate={ { opacity: 1 } }
        transition={ { delay: 1.5, duration: 0.5 } }
      >
        { titleText }
      </motion.div>

      <motion.div
        className="flex flex-wrap gap-3 justify-center mx-auto px-3 mb-6 max-w-[1000px] cursor-default"
        variants={ container }
        initial="hidden"
        animate="visible"
      >
        { screenshots.map((screenshot: string, index: number) => {
          return index <= 3 && (
            <motion.div
              key={ index }
              variants={ item }
              whileHover={ { scale: 1.05 } }
            >
              <Image
                className={ imageStyle }
                src={ screenshot }
                alt={ `Screenshot ${ index }` }
                width={ screenshotWidth }
                height={ screenshotHeight }
              />
            </motion.div>
          )
        }) }
      </motion.div>
    </>
  );
}

//