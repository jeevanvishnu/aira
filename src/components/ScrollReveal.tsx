import React, { ReactNode } from 'react';
import { motion } from 'motion/react';

interface ScrollRevealProps {
  children: ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right';
  delay?: number;
  duration?: number;
  className?: string;
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({ 
  children, 
  direction = 'up',
  delay = 0,
  duration = 0.8,
  className = ''
}) => {
  const getVariants = () => {
    switch (direction) {
      case 'left':
        return { hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0 } };
      case 'right':
        return { hidden: { opacity: 0, x: 50 }, visible: { opacity: 1, x: 0 } };
      case 'down':
        return { hidden: { opacity: 0, y: -50 }, visible: { opacity: 1, y: 0 } };
      case 'up':
      default:
        return { hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } };
    }
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-10%" }}
      transition={{ 
        duration: duration, 
        delay: delay, 
        ease: [0.25, 0.46, 0.45, 0.94] // smooth ease out
      }}
      variants={getVariants()}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;
