'use client';
import React, { ReactElement } from 'react';
import pageContent from '../../../data/portfolio/pages/lingolink/lingolink-data.json';
import stackContent from '../../../data/portfolio/pages/lingolink/lingolink-stack-data.json';
import SectionDivider from '@/components/section-divider';
import SectionComponent from '@/components/section';
import ConstructionImage from '@/components/construction';
import TechnologyStackComponent from '@/components/technology-stack';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function LingoLinkPage(): ReactElement {
  // Hook to detect when the div is in view
  const { ref, inView } = useInView({
    triggerOnce: false, // Trigger animation only once
    threshold: 0.5, // Trigger when 50% of the div is in view
  });

  return (
    <div>
      <ConstructionImage />

      {/* PAGE SECTIONS */ }
      <div className={ `mx-auto text-xl` }>
        { pageContent.sections.map((section: any, index: number) => (
          <div key={ index }>
            {/* SECTION COMPONENT */ }
            <SectionComponent subtitle={ section.subtitle } paragraphs={ section.paragraphs } />

            {/* PAGE DIVIDER */ }
            { index !== pageContent.sections.length - 1 && index !== 3 && <SectionDivider /> }

            {/* TECHNOLOGY STACK SECTION */ }
            { index === 3 && (
              <TechnologyStackComponent
                introduction={ pageContent.text.technologyStackIntro }
                stackContent={ stackContent }
              />
            ) }
          </div>
        )) }

        {/* ANIMATED BLOCK CONTAINER */ }
        <div className="flex justify-center items-center space-x-4">

          {/* ANIMATED BLOCK */ }
          <motion.div
            ref={ ref }
            animate={ { x: inView ? '0vw' : '-50vw' } }
            initial={ { x: '-100vw' } }
            transition={ {
              type: 'spring',
              stiffness: 260,
              damping: 20,
            } }
          >
            <img src={'/images/technology-icons/tech-sequelize.png'} alt={'p'} width={'100px'} />
          </motion.div>

          {/* ANIMATED BLOCK */ }
          <motion.div
            ref={ ref }
            animate={ { x: inView ? '0vw' : '42vw' } }
            initial={ { x: '100vw' } }
            transition={ {
              type: 'spring',
              stiffness: 260,
              damping: 20,
            } }
            className="bg-white p-12 mb-10 w-3"
          >
          </motion.div>
        </div>

      </div>
    </div>
  );
}
