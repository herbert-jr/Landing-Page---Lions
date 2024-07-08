'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { FiPlus } from 'react-icons/fi';

interface BenefitsProps {
  title: string;
  description: string;
  index: number;
}

function Benefits({ title, description, index }: BenefitsProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    if (index === 0) {
      setIsExpanded(true);
    }
  }, [index]);

  const handleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div
      className='w-full border-t-2 border-copy-black flex flex-col
     items-start overflow-hidden'>
      <button
        className='w-full mt-2 mb-5 flex items-center justify-between pr-2
       text-2xl font-bold'
        onClick={handleExpand}>
        {title}
        <motion.span
          initial={{ rotate: 0 }}
          animate={{ rotate: isExpanded ? 135 : 0 }}
          transition={{
            duration: 0.5,
            type: 'tween',
            ease: [0.76, 0, 0.24, 1],
          }}>
          <FiPlus />
        </motion.span>
      </button>
      <AnimatePresence>
        {isExpanded && (
          <motion.p
            initial={{ height: 0, marginBottom: 0 }}
            animate={{ height: 'auto', marginBottom: '1rem' }}
            exit={{ height: 0, marginBottom: 0 }}
            transition={{
              duration: 0.5,
              type: 'tween',
              ease: [0.76, 0, 0.24, 1],
            }}
            className='w-full text-lg font-normal'>
            {description}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Benefits;
