import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface AnimationWrapperProps {
  children: ReactNode;
  variants?: {
    hidden: any;
    visible: any;
  };
  className?: string;
  delay?: number;
  once?: boolean;
}

export default function AnimationWrapper({
  children,
  variants,
  className = '',
  delay = 0,
  once = true,
}: AnimationWrapperProps) {
  const defaultVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay, ease: 'easeOut' },
    },
  };

  return (
    <motion.div
      variants={variants || defaultVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

