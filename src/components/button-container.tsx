import { ReactElement } from 'react';
import { MotionSlider } from '@/components/motion-slider';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { inter_tightHeavy } from '@/utilities/fonts';
import { ButtonContainerProps } from '@/interfaces/ButtonContainerProps';



export default function ButtonContainer({ buttonOneText, buttonOneLink, buttonTwoText, buttonTwoLink }: ButtonContainerProps): ReactElement {
  return (
    <div
      className={ 'flex flex-col sm:flex-row justify-center sm:justify-between flex-wrap px-4 sm:px-12 mt-8 mb-12 mx-auto max-w-[650px] pb-8' }>
      <MotionSlider className={ '' } delay={ 1.2 }>
        <Link href={ buttonOneLink ? buttonOneLink.toLowerCase() : buttonOneText.toLowerCase() }>
          <motion.div
            className={ `bg-gradient-to-b from-slate-100 to-slate-400 rounded-xl text-slate-950 py-3 px-7 text-3xl cursor-pointer border-2 border-black shadow-xl hover:shadow-2xl w-full sm:w-auto my-2 text-center ${ inter_tightHeavy.className }` }
            whileHover={ { scale: 1.05 } }
            whileTap={ { scale: 0.95 } }
            transition={ { duration: 0.1 } }
          >
            { buttonOneText }
          </motion.div>
        </Link>
      </MotionSlider>

      <MotionSlider className={ '' } delay={ 1.4 }>
        <Link href={ buttonTwoLink ? buttonTwoLink.toLowerCase() : buttonTwoText.toLowerCase() }>
          <motion.div
            className={ `bg-gradient-to-b from-slate-100 to-slate-400 rounded-xl text-slate-950 py-3 px-7 text-3xl cursor-pointer border-2 border-black shadow-xl hover:shadow-2xl w-full sm:w-auto my-2 text-center ${ inter_tightHeavy.className }` }
            whileHover={ { scale: 1.05 } }
            whileTap={ { scale: 0.95 } }
            transition={ { duration: 0.1 } }
          >
            { buttonTwoText }
          </motion.div>
        </Link>
      </MotionSlider>
    </div>
  )
}

// DROPDOWN ITERATION A
// import { ReactElement, useState } from 'react';
// import { MotionSlider } from '@/components/motion-slider';
// import Link from 'next/link';
// import { motion } from 'framer-motion';
// import { inter_tightHeavy } from '@/utilities/fonts';
// import { ButtonContainerProps } from '@/interfaces/ButtonContainerProps';
//
// export default function ButtonContainer({
//                                           buttonOneText,
//                                           buttonOneLink,
//                                           buttonTwoText,
//                                           buttonTwoLink,
//                                         }: ButtonContainerProps): ReactElement {
//   // State to manage dropdown visibility
//   const [isDropdownVisible, setIsDropdownVisible] = useState(false);
//
//   // Dropdown variants for animation
//   const dropdownVariants = {
//     hidden: { opacity: 0, scaleY: 0 },
//     visible: { opacity: 1, scaleY: 1, originY: 0 },
//   };
//
//   return (
//     <div className={'flex flex-col sm:flex-row justify-center sm:justify-between flex-wrap px-4 sm:px-12 mt-8 mb-12 mx-auto max-w-[650px] pb-8'}>
//       <MotionSlider className={''} delay={1.2}>
//         <div onClick={() => setIsDropdownVisible(!isDropdownVisible)}>
//           <Link href={buttonOneLink ? buttonOneLink.toLowerCase() : buttonOneText.toLowerCase()}>
//             <motion.div
//               className={`bg-gradient-to-b from-slate-100 to-slate-400 rounded-xl text-slate-950 py-3 px-7 text-3xl cursor-pointer border-2 border-black shadow-xl hover:shadow-2xl w-full sm:w-auto my-2 text-center ${inter_tightHeavy.className}`}
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               transition={{ duration: 0.1 }}
//             >
//               {buttonOneText}
//             </motion.div>
//           </Link>
//           <motion.div
//             initial="hidden"
//             animate={isDropdownVisible ? "visible" : "hidden"}
//             variants={dropdownVariants}
//             transition={{ duration: 0.5 }}
//             className="bg-white shadow-xl mt-2 rounded-lg"
//           >
//             {/* Content of your dropdown menu */}
//             <ul className="py-2">
//               <li className="px-4 py-2 hover:bg-gray-100">Menu Item 1</li>
//               <li className="px-4 py-2 hover:bg-gray-100">Menu Item 2</li>
//               {/* Add more items as needed */}
//             </ul>
//           </motion.div>
//         </div>
//       </MotionSlider>
//
//       <MotionSlider className={''} delay={1.4}>
//         <Link href={buttonTwoLink ? buttonTwoLink.toLowerCase() : buttonTwoText.toLowerCase()}>
//           <motion.div
//             className={`bg-gradient-to-b from-slate-100 to-slate-400 rounded-xl text-slate-950 py-3 px-7 text-3xl cursor-pointer border-2 border-black shadow-xl hover:shadow-2xl w-full sm:w-auto my-2 text-center ${inter_tightHeavy.className}`}
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             transition={{ duration: 0.1 }}
//           >
//             {buttonTwoText}
//           </motion.div>
//         </Link>
//       </MotionSlider>
//     </div>
//   );
// }

// DROPDOWN ITERATION B
// import { useState, ReactElement } from 'react';
// import { MotionSlider } from '@/components/motion-slider';
// import Link from 'next/link';
// import { motion } from 'framer-motion';
// import { inter_tightHeavy } from '@/utilities/fonts';
// import { ButtonContainerProps } from '@/interfaces/ButtonContainerProps';
//
// export default function ButtonContainer({
//                                           buttonOneText,
//                                           buttonOneLink,
//                                           buttonTwoText,
//                                           buttonTwoLink,
//                                         }: ButtonContainerProps): ReactElement {
//   const [isDropdownVisible, setIsDropdownVisible] = useState(false);
//
//   const toggleDropdown = () => setIsDropdownVisible(!isDropdownVisible);
//
//   const dropdownVariants = {
//     hidden: { opacity: 0, y: -20 },
//     visible: { opacity: 1, y: 0 },
//   };
//
//   return (
//     <div className='flex flex-col sm:flex-row justify-center sm:justify-between flex-wrap px-4 sm:px-12 mt-8 mb-12 mx-auto max-w-[650px] pb-8'>
//       <MotionSlider className='' delay={1.2}>
//         <div onClick={toggleDropdown}>
//           <Link href={buttonOneLink ? buttonOneLink.toLowerCase() : buttonOneText.toLowerCase()}>
//             <motion.div
//               className={`bg-gradient-to-b from-slate-100 to-slate-400 rounded-xl text-slate-950 py-3 px-7 text-3xl cursor-pointer border-2 border-black shadow-xl hover:shadow-2xl w-full sm:w-auto my-2 text-center ${inter_tightHeavy.className}`}
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               transition={{ duration: 0.1 }}>
//               {buttonOneText}
//             </motion.div>
//           </Link>
//           {isDropdownVisible && (
//             <motion.div
//               initial="hidden"
//               animate="visible"
//               exit="hidden"
//               variants={dropdownVariants}
//               transition={{ duration: 0.2 }}
//               className="origin-top-left absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none z-10">
//               {/* Dropdown items */}
//               <div className="py-1">
//                 {/* Replace these with your actual dropdown items */}
//                 <a href="#" className="text-gray-700 block px-4 py-2 text-sm">Item 1</a>
//                 <a href="#" className="text-gray-700 block px-4 py-2 text-sm">Item 2</a>
//                 <a href="#" className="text-gray-700 block px-4 py-2 text-sm">Item 3</a>
//               </div>
//             </motion.div>
//           )}
//         </div>
//       </MotionSlider>
//
//       <MotionSlider className='' delay={1.4}>
//         <Link href={buttonTwoLink ? buttonTwoLink.toLowerCase() : buttonTwoText.toLowerCase()}>
//           <motion.div
//             className={`bg-gradient-to-b from-slate-100 to-slate-400 rounded-xl text-slate-950 py-3 px-7 text-3xl cursor-pointer border-2 border-black shadow-xl hover:shadow-2xl w-full sm:w-auto my-2 text-center ${inter_tightHeavy.className}`}
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             transition={{ duration: 0.1 }}>
//             {buttonTwoText}
//           </motion.div>
//         </Link>
//       </MotionSlider>
//     </div>
//   );
// }
